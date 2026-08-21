import { z } from "zod";

const EMAIL_LIST_MAX_LENGTH = 4_000;

function isEmailList(value: string) {
  const addresses = value
    .split(/[;,]/)
    .map((address) => address.trim())
    .filter(Boolean);

  return (
    addresses.length > 0 &&
    addresses.every((address) => z.string().email().safeParse(address).success)
  );
}

const requiredEmailListSchema = z
  .string()
  .trim()
  .min(1, "At least one recipient is required.")
  .max(EMAIL_LIST_MAX_LENGTH, "The recipient list is too long.")
  .refine(isEmailList, "Enter valid email addresses separated by commas.");

const optionalEmailListSchema = z
  .string()
  .trim()
  .max(EMAIL_LIST_MAX_LENGTH, "The recipient list is too long.")
  .refine(
    (value) => value.length === 0 || isEmailList(value),
    "Enter valid email addresses separated by commas.",
  );

export const emailComposeSchema = z.object({
  toAddress: requiredEmailListSchema,
  ccAddress: optionalEmailListSchema,
  bccAddress: optionalEmailListSchema,
  subject: z
    .string()
    .trim()
    .min(1, "Subject is required.")
    .max(998, "Subject must be 998 characters or fewer."),
  content: z
    .string()
    .trim()
    .min(1, "Message content is required.")
    .max(200_000, "Message content is too long."),
  intent: z.enum(["send", "draft"]).default("send"),
});

export const emailMessageReadStateSchema = z.object({
  messageId: z.string().regex(/^\d+$/, "The message ID is invalid."),
  folderId: z.string().regex(/^\d+$/, "The folder ID is invalid."),
  readState: z.enum(["read", "unread"]),
});

export type EmailComposeInput = z.infer<typeof emailComposeSchema>;
export type EmailMessageReadStateInput = z.infer<
  typeof emailMessageReadStateSchema
>;

export type EmailComposeActionState = {
  error?: string;
  fieldErrors?: Record<string, string[]>;
};
