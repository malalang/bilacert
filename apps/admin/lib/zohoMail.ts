import "server-only";

import { z } from "zod";

const REQUIRED_ZOHO_VARIABLES = [
  "ZOHO_CLIENT_ID",
  "ZOHO_CLIENT_SECRET",
  "ZOHO_REFRESH_TOKEN",
] as const;

const DEFAULT_ACCOUNTS_URL = "https://accounts.zoho.com";
const DEFAULT_MAIL_API_BASE_URL = "https://mail.zoho.com";
const ACCESS_TOKEN_EXPIRY_BUFFER_MS = 60_000;

const identifierSchema = z
  .union([z.string(), z.number()])
  .transform((value) => String(value));

const stringValueSchema = z
  .union([z.string(), z.number(), z.boolean()])
  .transform((value) => String(value));

const zohoStatusSchema = z.object({
  code: z.coerce.number(),
  description: z.string().optional(),
});

const zohoEnvelopeSchema = z.object({
  status: zohoStatusSchema,
  data: z.unknown().optional(),
});

const zohoTokenSchema = z.object({
  access_token: z.string().min(1),
  expires_in: z.coerce.number().positive().optional(),
});

const zohoAccountSchema = z
  .object({
    accountId: identifierSchema,
    primaryEmailAddress: z.string().optional(),
    mailboxAddress: z.string().optional(),
    accountDisplayName: z.string().optional(),
    displayName: z.string().optional(),
    mailboxStatus: z.string().optional(),
    enabled: z.union([z.boolean(), stringValueSchema]).optional(),
    emailAddress: z
      .array(
        z
          .object({
            mailId: z.string(),
            isPrimary: z.boolean().optional(),
            isConfirmed: z.boolean().optional(),
          })
          .passthrough(),
      )
      .optional(),
  })
  .passthrough();

const zohoFolderSchema = z
  .object({
    folderId: identifierSchema,
    folderName: z.string(),
    folderType: z.string().optional(),
    path: z.string().optional(),
  })
  .passthrough();

const zohoMessageSchema = z
  .object({
    messageId: identifierSchema,
    folderId: identifierSchema,
    threadId: identifierSchema.optional(),
    subject: z.string().optional(),
    summary: z.string().optional(),
    sender: z.string().optional(),
    fromAddress: z.string().optional(),
    toAddress: z.string().optional(),
    ccAddress: z.string().optional(),
    receivedTime: stringValueSchema.optional(),
    sentDateInGMT: stringValueSchema.optional(),
    status: stringValueSchema.optional(),
    priority: stringValueSchema.optional(),
    flagid: stringValueSchema.optional(),
    hasAttachment: stringValueSchema.optional(),
    hasInline: stringValueSchema.optional(),
    size: stringValueSchema.optional(),
  })
  .passthrough();

const zohoMessageContentSchema = z.object({
  content: z.string().optional(),
});

type ZohoConfiguration = {
  clientId: string;
  clientSecret: string;
  refreshToken: string;
  accountsUrl: string;
  mailApiBaseUrl: string;
  configuredAccountId?: string;
  configuredFromAddress?: string;
};

type CachedAccessToken = {
  value: string;
  expiresAt: number;
};

type ZohoRawAccount = z.infer<typeof zohoAccountSchema>;
type ZohoRawMessage = z.infer<typeof zohoMessageSchema>;

export type ZohoMailConfigurationStatus = {
  configured: boolean;
  missingVariables: string[];
};

export type ZohoMailAccount = {
  accountId: string;
  displayName: string;
  fromAddress: string;
};

export type ZohoMailFolder = {
  folderId: string;
  folderName: string;
  folderType: string;
  path: string;
};

export type ZohoMailMessage = {
  messageId: string;
  folderId: string;
  threadId?: string;
  subject: string;
  summary: string;
  sender: string;
  fromAddress: string;
  toAddress: string;
  ccAddress: string;
  receivedAt: string | null;
  isRead: boolean;
  hasAttachment: boolean;
  priority: string;
  flag: string;
  size: number | null;
};

export type ZohoMessageListOptions = {
  folderId: string;
  page: number;
  pageSize: number;
  status: "all" | "unread";
};

export type ZohoComposeMessage = {
  toAddress: string;
  ccAddress: string;
  bccAddress: string;
  subject: string;
  content: string;
};

export class ZohoMailError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ZohoMailError";
  }
}

let cachedAccessToken: CachedAccessToken | undefined;
let pendingAccessToken: Promise<CachedAccessToken> | undefined;

function getTrimmedEnvironmentValue(name: string) {
  const value = process.env[name]?.trim();
  return value || undefined;
}

function normalizeBaseUrl(value: string, variableName: string) {
  let url: URL;

  try {
    url = new URL(value);
  } catch {
    throw new ZohoMailError(`${variableName} must be a valid HTTPS URL.`);
  }

  if (url.protocol !== "https:") {
    throw new ZohoMailError(`${variableName} must use HTTPS.`);
  }

  return url.toString().replace(/\/$/, "");
}

function requireZohoConfiguration(): ZohoConfiguration {
  const status = getZohoMailConfigurationStatus();

  if (!status.configured) {
    throw new ZohoMailError(
      `Zoho Mail is not configured. Missing: ${status.missingVariables.join(", ")}.`,
    );
  }

  return {
    clientId: getTrimmedEnvironmentValue("ZOHO_CLIENT_ID")!,
    clientSecret: getTrimmedEnvironmentValue("ZOHO_CLIENT_SECRET")!,
    refreshToken: getTrimmedEnvironmentValue("ZOHO_REFRESH_TOKEN")!,
    accountsUrl: normalizeBaseUrl(
      getTrimmedEnvironmentValue("ZOHO_ACCOUNTS_URL") ?? DEFAULT_ACCOUNTS_URL,
      "ZOHO_ACCOUNTS_URL",
    ),
    mailApiBaseUrl: normalizeBaseUrl(
      getTrimmedEnvironmentValue("ZOHO_MAIL_API_BASE_URL") ??
        DEFAULT_MAIL_API_BASE_URL,
      "ZOHO_MAIL_API_BASE_URL",
    ),
    configuredAccountId: getTrimmedEnvironmentValue("ZOHO_ACCOUNT_ID"),
    configuredFromAddress: getTrimmedEnvironmentValue("ZOHO_FROM_ADDRESS"),
  };
}

function readErrorDetail(payload: unknown) {
  if (!payload || typeof payload !== "object") {
    return undefined;
  }

  const record = payload as Record<string, unknown>;
  const data =
    record.data && typeof record.data === "object"
      ? (record.data as Record<string, unknown>)
      : undefined;
  const detail =
    record.error_description ??
    record.error ??
    data?.moreInfo ??
    (record.status && typeof record.status === "object"
      ? (record.status as Record<string, unknown>).description
      : undefined);

  return typeof detail === "string" ? detail : undefined;
}

async function refreshAccessToken() {
  const configuration = requireZohoConfiguration();
  const tokenUrl = new URL("/oauth/v2/token", configuration.accountsUrl);
  tokenUrl.searchParams.set("grant_type", "refresh_token");
  tokenUrl.searchParams.set("client_id", configuration.clientId);
  tokenUrl.searchParams.set("client_secret", configuration.clientSecret);
  tokenUrl.searchParams.set("refresh_token", configuration.refreshToken);

  let response: Response;

  try {
    response = await fetch(tokenUrl, {
      method: "POST",
      cache: "no-store",
      headers: { Accept: "application/json" },
    });
  } catch {
    throw new ZohoMailError(
      "The server could not reach the Zoho OAuth service. Check the configured Zoho data-center URL.",
    );
  }

  const payload: unknown = await response.json().catch(() => undefined);
  const parsedToken = zohoTokenSchema.safeParse(payload);

  if (!response.ok || !parsedToken.success) {
    const detail = readErrorDetail(payload);
    throw new ZohoMailError(
      detail
        ? `Zoho OAuth rejected the connection: ${detail}.`
        : "Zoho OAuth rejected the connection. Check the client ID, client secret, refresh token, and data-center URL.",
    );
  }

  const lifetimeSeconds = parsedToken.data.expires_in ?? 3_600;
  return {
    value: parsedToken.data.access_token,
    expiresAt: Date.now() + lifetimeSeconds * 1_000,
  } satisfies CachedAccessToken;
}

async function getAccessToken() {
  if (
    cachedAccessToken &&
    cachedAccessToken.expiresAt - ACCESS_TOKEN_EXPIRY_BUFFER_MS > Date.now()
  ) {
    return cachedAccessToken.value;
  }

  if (!pendingAccessToken) {
    pendingAccessToken = refreshAccessToken().finally(() => {
      pendingAccessToken = undefined;
    });
  }

  cachedAccessToken = await pendingAccessToken;
  return cachedAccessToken.value;
}

async function zohoMailRequest(
  path: string,
  init: Omit<RequestInit, "headers"> & { body?: string } = {},
) {
  const configuration = requireZohoConfiguration();
  const accessToken = await getAccessToken();
  const response = await fetch(`${configuration.mailApiBaseUrl}${path}`, {
    ...init,
    cache: "no-store",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Zoho-oauthtoken ${accessToken}`,
    },
  });

  const payload: unknown = await response.json().catch(() => undefined);
  const envelope = zohoEnvelopeSchema.safeParse(payload);

  if (
    !response.ok ||
    !envelope.success ||
    envelope.data.status.code < 200 ||
    envelope.data.status.code >= 300
  ) {
    const detail = readErrorDetail(payload);
    throw new ZohoMailError(
      detail
        ? `Zoho Mail request failed: ${detail}.`
        : `Zoho Mail request failed with status ${response.status}.`,
    );
  }

  return envelope.data.data;
}

function parseTimestamp(value?: string) {
  if (!value) return null;

  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return null;

  const milliseconds = parsed < 1_000_000_000_000 ? parsed * 1_000 : parsed;
  const date = new Date(milliseconds);
  return Number.isNaN(date.getTime()) ? null : date.toISOString();
}

function parseBooleanish(value?: string) {
  return value === "true" || value === "1";
}

function decodeZohoText(value?: string) {
  if (!value || value === "Not Provided") return "";

  return value
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&amp;", "&");
}

function normalizeMessage(message: ZohoRawMessage): ZohoMailMessage {
  return {
    messageId: message.messageId,
    folderId: message.folderId,
    threadId: message.threadId,
    subject: decodeZohoText(message.subject) || "(No subject)",
    summary: decodeZohoText(message.summary),
    sender: decodeZohoText(message.sender),
    fromAddress: decodeZohoText(message.fromAddress),
    toAddress: decodeZohoText(message.toAddress),
    ccAddress: decodeZohoText(message.ccAddress),
    receivedAt: parseTimestamp(message.receivedTime ?? message.sentDateInGMT),
    isRead: message.status === "1",
    hasAttachment: parseBooleanish(message.hasAttachment),
    priority: message.priority ?? "",
    flag: message.flagid ?? "",
    size: message.size ? Number(message.size) : null,
  };
}

function getAccountFromAddress(account: ZohoRawAccount) {
  const primaryAlias = account.emailAddress?.find(
    (address) => address.isPrimary,
  );
  return (
    primaryAlias?.mailId ??
    account.primaryEmailAddress ??
    account.mailboxAddress ??
    account.emailAddress?.[0]?.mailId ??
    ""
  );
}

function accountIsEnabled(account: ZohoRawAccount) {
  const enabled = account.enabled;
  const enabledValue =
    typeof enabled === "string" ? enabled.toLowerCase() !== "false" : enabled;
  return enabledValue !== false && account.mailboxStatus !== "disabled";
}

function normalizeRecipientList(value: string) {
  return value
    .split(/[;,]/)
    .map((address) => address.trim())
    .filter(Boolean)
    .join(",");
}

export function getZohoMailConfigurationStatus(): ZohoMailConfigurationStatus {
  const missingVariables = REQUIRED_ZOHO_VARIABLES.filter(
    (name) => !getTrimmedEnvironmentValue(name),
  );

  return {
    configured: missingVariables.length === 0,
    missingVariables: [...missingVariables],
  };
}

export async function getZohoMailAccount(): Promise<ZohoMailAccount> {
  const configuration = requireZohoConfiguration();
  const data = await zohoMailRequest("/api/accounts");
  const parsedAccounts = z.array(zohoAccountSchema).safeParse(data);

  if (!parsedAccounts.success || parsedAccounts.data.length === 0) {
    throw new ZohoMailError(
      "Zoho returned no usable mail accounts for this OAuth connection.",
    );
  }

  const requestedAddress = configuration.configuredFromAddress?.toLowerCase();
  const account = configuration.configuredAccountId
    ? parsedAccounts.data.find(
        (candidate) =>
          candidate.accountId === configuration.configuredAccountId,
      )
    : requestedAddress
      ? parsedAccounts.data.find((candidate) =>
          candidate.emailAddress?.some(
            (address) => address.mailId.toLowerCase() === requestedAddress,
          ),
        )
      : (parsedAccounts.data.find(accountIsEnabled) ?? parsedAccounts.data[0]);

  if (!account) {
    throw new ZohoMailError(
      "ZOHO_ACCOUNT_ID does not match an account available to this OAuth connection.",
    );
  }

  const fromAddress =
    configuration.configuredFromAddress ?? getAccountFromAddress(account);

  if (!fromAddress) {
    throw new ZohoMailError(
      "Zoho returned an account without a usable sender address. Set ZOHO_FROM_ADDRESS.",
    );
  }

  return {
    accountId: account.accountId,
    displayName:
      account.accountDisplayName ?? account.displayName ?? fromAddress,
    fromAddress,
  };
}

export async function listZohoMailFolders(accountId: string) {
  const data = await zohoMailRequest(
    `/api/accounts/${encodeURIComponent(accountId)}/folders`,
  );
  const folders = z.array(zohoFolderSchema).safeParse(data);

  if (!folders.success) {
    throw new ZohoMailError("Zoho returned an unexpected folder response.");
  }

  return folders.data.map(
    (folder): ZohoMailFolder => ({
      folderId: folder.folderId,
      folderName: folder.folderName,
      folderType: folder.folderType ?? "Custom",
      path: folder.path ?? folder.folderName,
    }),
  );
}

export async function listZohoMailMessages(
  accountId: string,
  options: ZohoMessageListOptions,
) {
  const query = new URLSearchParams({
    folderId: options.folderId,
    start: String((options.page - 1) * options.pageSize + 1),
    limit: String(options.pageSize),
    status: options.status,
    includeto: "true",
    sortBy: "date",
    sortorder: "false",
  });
  const data = await zohoMailRequest(
    `/api/accounts/${encodeURIComponent(accountId)}/messages/view?${query.toString()}`,
  );
  const messages = z.array(zohoMessageSchema).safeParse(data);

  if (!messages.success) {
    throw new ZohoMailError(
      "Zoho returned an unexpected message-list response.",
    );
  }

  return messages.data.map(normalizeMessage);
}

export async function getZohoMailMessage(
  accountId: string,
  folderId: string,
  messageId: string,
) {
  const basePath = `/api/accounts/${encodeURIComponent(accountId)}/folders/${encodeURIComponent(folderId)}/messages/${encodeURIComponent(messageId)}`;
  const [detailsData, contentData] = await Promise.all([
    zohoMailRequest(`${basePath}/details`),
    zohoMailRequest(`${basePath}/content?includeBlockContent=true`),
  ]);
  const details = zohoMessageSchema.safeParse(detailsData);
  const content = zohoMessageContentSchema.safeParse(contentData);

  if (!details.success || !content.success) {
    throw new ZohoMailError("Zoho returned an unexpected message response.");
  }

  return {
    message: normalizeMessage(details.data),
    content: content.data.content ?? "",
  };
}

export async function submitZohoMailMessage(
  account: ZohoMailAccount,
  message: ZohoComposeMessage,
  intent: "send" | "draft",
) {
  const requestBody = {
    fromAddress: account.fromAddress,
    toAddress: normalizeRecipientList(message.toAddress),
    ccAddress: normalizeRecipientList(message.ccAddress),
    bccAddress: normalizeRecipientList(message.bccAddress),
    subject: message.subject,
    content: message.content,
    mailFormat: "plaintext",
    encoding: "UTF-8",
    ...(intent === "draft" ? { mode: "draft" } : {}),
  };

  return zohoMailRequest(
    `/api/accounts/${encodeURIComponent(account.accountId)}/messages`,
    {
      method: "POST",
      body: JSON.stringify(requestBody),
    },
  );
}

export async function updateZohoMailReadState(
  accountId: string,
  messageId: string,
  readState: "read" | "unread",
) {
  await zohoMailRequest(
    `/api/accounts/${encodeURIComponent(accountId)}/updatemessage`,
    {
      method: "PUT",
      body: JSON.stringify({
        mode: readState === "read" ? "markAsRead" : "markAsUnread",
        messageId: [messageId],
      }),
    },
  );
}
