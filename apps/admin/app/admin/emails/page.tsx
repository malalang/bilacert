import {
  Archive,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  FileText,
  Inbox,
  Mail,
  MailOpen,
  Paperclip,
  PenLine,
  Send,
  Trash2,
} from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getAdminAccess } from "@/lib/adminAccess";
import {
  getZohoMailAccount,
  getZohoMailConfigurationStatus,
  listZohoMailFolders,
  listZohoMailMessages,
  type ZohoMailFolder,
} from "@/lib/zohoMail";
import {
  EmailAccessState,
  EmailConnectionState,
  EmailSetupState,
} from "./_components/EmailState";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Email | Bilacert Admin",
  description: "Manage the Bilacert Zoho Mail inbox.",
};

const PAGE_SIZE = 25;

type EmailsPageProps = {
  searchParams: Promise<{
    folderId?: string;
    page?: string;
    status?: string;
    sent?: string;
    draftSaved?: string;
    actionError?: string;
  }>;
};

function parsePage(value?: string) {
  const page = Number(value);
  return Number.isInteger(page) && page > 0 ? Math.min(page, 10_000) : 1;
}

function mailboxHref(folderId: string, status: "all" | "unread", page = 1) {
  const query = new URLSearchParams({ folderId });
  if (status === "unread") query.set("status", status);
  if (page > 1) query.set("page", String(page));
  return `/admin/emails?${query.toString()}`;
}

function formatMessageDate(value: string | null) {
  if (!value) return "Unknown date";

  return new Intl.DateTimeFormat("en-ZA", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Africa/Johannesburg",
  }).format(new Date(value));
}

function FolderIcon({ folder }: { folder: ZohoMailFolder }) {
  const type = folder.folderType.toLowerCase();

  if (type.includes("inbox")) return <Inbox className="h-4 w-4" />;
  if (type.includes("sent")) return <Send className="h-4 w-4" />;
  if (type.includes("draft")) return <FileText className="h-4 w-4" />;
  if (type.includes("trash")) return <Trash2 className="h-4 w-4" />;
  if (type.includes("archive")) return <Archive className="h-4 w-4" />;
  return <Mail className="h-4 w-4" />;
}

export default async function EmailsPage({ searchParams }: EmailsPageProps) {
  const access = await getAdminAccess();

  if (!access.allowed) {
    if (access.reason === "unauthenticated") redirect("/admin/login");
    return <EmailAccessState message={access.message} />;
  }

  const configuration = getZohoMailConfigurationStatus();
  if (!configuration.configured) {
    return (
      <EmailSetupState missingVariables={configuration.missingVariables} />
    );
  }

  const query = await searchParams;
  const page = parsePage(query.page);
  const status = query.status === "unread" ? "unread" : "all";

  let mailbox:
    | {
        accountAddress: string;
        folders: ZohoMailFolder[];
        selectedFolder: ZohoMailFolder;
        messages: Awaited<ReturnType<typeof listZohoMailMessages>>;
      }
    | undefined;

  try {
    const account = await getZohoMailAccount();
    const folders = await listZohoMailFolders(account.accountId);
    const selectedFolder =
      folders.find((folder) => folder.folderId === query.folderId) ??
      folders.find((folder) => folder.folderType.toLowerCase() === "inbox") ??
      folders[0];

    if (!selectedFolder) {
      throw new Error("Zoho returned no folders for this mailbox.");
    }

    const messages = await listZohoMailMessages(account.accountId, {
      folderId: selectedFolder.folderId,
      page,
      pageSize: PAGE_SIZE,
      status,
    });

    mailbox = {
      accountAddress: account.fromAddress,
      folders,
      selectedFolder,
      messages,
    };
  } catch (error) {
    return (
      <EmailConnectionState
        message={
          error instanceof Error
            ? error.message
            : "Zoho Mail could not load the mailbox."
        }
      />
    );
  }

  const unreadCount = mailbox.messages.filter(
    (message) => !message.isRead,
  ).length;
  const hasNextPage = mailbox.messages.length === PAGE_SIZE;

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-3xl font-bold tracking-tight">Email</h1>
            <Badge variant="secondary">{mailbox.accountAddress}</Badge>
          </div>
          <p className="mt-1 text-muted-foreground">
            Read, compose, and manage mail through Zoho.
          </p>
        </div>
        <Button asChild>
          <Link href="/admin/emails/compose">
            <PenLine className="h-4 w-4" />
            Compose
          </Link>
        </Button>
      </div>

      {query.sent === "1" && (
        <Alert className="border-emerald-200 bg-emerald-50 text-emerald-900">
          <CheckCircle2 className="h-4 w-4" />
          <AlertTitle>Email sent</AlertTitle>
          <AlertDescription>
            Zoho accepted the message for delivery.
          </AlertDescription>
        </Alert>
      )}

      {query.draftSaved === "1" && (
        <Alert className="border-emerald-200 bg-emerald-50 text-emerald-900">
          <CheckCircle2 className="h-4 w-4" />
          <AlertTitle>Draft saved</AlertTitle>
          <AlertDescription>
            The message is available in the Zoho Drafts folder.
          </AlertDescription>
        </Alert>
      )}

      {query.actionError && (
        <Alert variant="destructive">
          <AlertTitle>Email action failed</AlertTitle>
          <AlertDescription>
            The requested message update could not be completed. Please try
            again.
          </AlertDescription>
        </Alert>
      )}

      <div className="grid min-w-0 gap-6 xl:grid-cols-[240px_minmax(0,1fr)]">
        <Card className="h-fit border border-border/70">
          <CardHeader>
            <CardTitle className="text-base">Folders</CardTitle>
            <CardDescription>
              {mailbox.folders.length} available
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-1">
            {mailbox.folders.map((folder) => {
              const isSelected =
                folder.folderId === mailbox.selectedFolder.folderId;
              return (
                <Link
                  key={folder.folderId}
                  href={mailboxHref(folder.folderId, status)}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                    isSelected
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <FolderIcon folder={folder} />
                  <span className="truncate">{folder.folderName}</span>
                </Link>
              );
            })}
          </CardContent>
        </Card>

        <Card className="min-w-0 border border-border/70 shadow-xl shadow-black/5">
          <CardHeader className="gap-4 border-b sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
            <div>
              <CardTitle>{mailbox.selectedFolder.folderName}</CardTitle>
              <CardDescription>
                {mailbox.messages.length} messages on this page · {unreadCount}{" "}
                unread
              </CardDescription>
            </div>
            <div className="flex gap-2">
              <Button
                asChild
                size="sm"
                variant={status === "all" ? "default" : "outline"}
              >
                <Link
                  href={mailboxHref(mailbox.selectedFolder.folderId, "all")}
                >
                  <MailOpen className="h-4 w-4" />
                  All
                </Link>
              </Button>
              <Button
                asChild
                size="sm"
                variant={status === "unread" ? "default" : "outline"}
              >
                <Link
                  href={mailboxHref(mailbox.selectedFolder.folderId, "unread")}
                >
                  <Mail className="h-4 w-4" />
                  Unread
                </Link>
              </Button>
            </div>
          </CardHeader>

          <CardContent className="p-0">
            {mailbox.messages.length === 0 ? (
              <div className="flex min-h-72 flex-col items-center justify-center px-6 text-center">
                <MailOpen className="mb-4 h-10 w-10 text-muted-foreground/50" />
                <h2 className="font-semibold">No messages found</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  This folder has no messages matching the current filter.
                </p>
              </div>
            ) : (
              <div className="divide-y">
                {mailbox.messages.map((message) => (
                  <Link
                    key={message.messageId}
                    href={`/admin/emails/${encodeURIComponent(message.messageId)}?folderId=${encodeURIComponent(message.folderId)}`}
                    className="grid gap-3 px-5 py-4 transition-colors hover:bg-muted/50 md:grid-cols-[minmax(150px,0.8fr)_minmax(0,2fr)_auto] md:items-center"
                  >
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        {!message.isRead && (
                          <>
                            <span className="h-2 w-2 shrink-0 rounded-full bg-accent" />
                            <span className="sr-only">Unread</span>
                          </>
                        )}
                        <span
                          className={`truncate text-sm ${
                            message.isRead ? "font-medium" : "font-bold"
                          }`}
                        >
                          {message.sender ||
                            message.fromAddress ||
                            "Unknown sender"}
                        </span>
                      </div>
                      <p className="mt-1 truncate text-xs text-muted-foreground">
                        {message.fromAddress}
                      </p>
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <p
                          className={`truncate text-sm ${
                            message.isRead ? "font-medium" : "font-bold"
                          }`}
                        >
                          {message.subject}
                        </p>
                        {message.hasAttachment && (
                          <Paperclip className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                        )}
                      </div>
                      <p className="mt-1 truncate text-sm text-muted-foreground">
                        {message.summary || "No preview available"}
                      </p>
                    </div>

                    <time className="whitespace-nowrap text-xs text-muted-foreground">
                      {formatMessageDate(message.receivedAt)}
                    </time>
                  </Link>
                ))}
              </div>
            )}
          </CardContent>

          <CardFooter className="justify-between border-t pt-6">
            <span className="text-sm text-muted-foreground">Page {page}</span>
            <div className="flex gap-2">
              {page > 1 ? (
                <Button asChild size="sm" variant="outline">
                  <Link
                    href={mailboxHref(
                      mailbox.selectedFolder.folderId,
                      status,
                      page - 1,
                    )}
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Previous
                  </Link>
                </Button>
              ) : (
                <Button size="sm" variant="outline" disabled>
                  <ChevronLeft className="h-4 w-4" />
                  Previous
                </Button>
              )}
              {hasNextPage ? (
                <Button asChild size="sm" variant="outline">
                  <Link
                    href={mailboxHref(
                      mailbox.selectedFolder.folderId,
                      status,
                      page + 1,
                    )}
                  >
                    Next
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
              ) : (
                <Button size="sm" variant="outline" disabled>
                  Next
                  <ChevronRight className="h-4 w-4" />
                </Button>
              )}
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
