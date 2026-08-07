import {
  ArrowLeft,
  CalendarClock,
  Mail,
  MailOpen,
  Paperclip,
  Reply,
  UserRound,
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
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getAdminAccess } from "@/lib/adminAccess";
import {
  getZohoMailAccount,
  getZohoMailConfigurationStatus,
  getZohoMailMessage,
} from "@/lib/zohoMail";
import EmailContent from "../_components/EmailContent";
import {
  EmailAccessState,
  EmailConnectionState,
  EmailSetupState,
} from "../_components/EmailState";
import { updateEmailReadStateAction } from "../actions";

export const dynamic = "force-dynamic";

type EmailMessagePageProps = {
  params: Promise<{ messageId: string }>;
  searchParams: Promise<{
    folderId?: string;
    actionError?: string;
    updated?: string;
  }>;
};

function formatMessageDate(value: string | null) {
  if (!value) return "Unknown date";

  return new Intl.DateTimeFormat("en-ZA", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "Africa/Johannesburg",
  }).format(new Date(value));
}

export default async function EmailMessagePage({
  params,
  searchParams,
}: EmailMessagePageProps) {
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

  const [{ messageId }, query] = await Promise.all([params, searchParams]);
  const folderId = query.folderId;

  if (!/^\d+$/.test(messageId) || !folderId || !/^\d+$/.test(folderId)) {
    return (
      <EmailConnectionState message="The message link is incomplete or invalid. Return to the mailbox and open the message again." />
    );
  }

  let detail: Awaited<ReturnType<typeof getZohoMailMessage>>;

  try {
    const account = await getZohoMailAccount();
    detail = await getZohoMailMessage(account.accountId, folderId, messageId);
  } catch (error) {
    return (
      <EmailConnectionState
        message={
          error instanceof Error
            ? error.message
            : "Zoho Mail could not load this message."
        }
      />
    );
  }

  const { message, content } = detail;
  const replySubject = message.subject.toLowerCase().startsWith("re:")
    ? message.subject
    : `Re: ${message.subject}`;
  const replyHref = `/admin/emails/compose?to=${encodeURIComponent(message.fromAddress)}&subject=${encodeURIComponent(replySubject)}`;
  const updatedState =
    query.updated === "read" || query.updated === "unread"
      ? query.updated
      : undefined;

  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button asChild variant="ghost" className="w-fit -ml-3">
          <Link href={`/admin/emails?folderId=${encodeURIComponent(folderId)}`}>
            <ArrowLeft className="h-4 w-4" />
            Back to mailbox
          </Link>
        </Button>
        <div className="flex flex-wrap gap-2">
          <form action={updateEmailReadStateAction}>
            <input type="hidden" name="messageId" value={message.messageId} />
            <input type="hidden" name="folderId" value={message.folderId} />
            <input
              type="hidden"
              name="readState"
              value={message.isRead ? "unread" : "read"}
            />
            <Button type="submit" variant="outline">
              {message.isRead ? (
                <Mail className="h-4 w-4" />
              ) : (
                <MailOpen className="h-4 w-4" />
              )}
              Mark {message.isRead ? "unread" : "read"}
            </Button>
          </form>
          <Button asChild>
            <Link href={replyHref}>
              <Reply className="h-4 w-4" />
              Reply
            </Link>
          </Button>
        </div>
      </div>

      {query.actionError && (
        <Alert variant="destructive">
          <AlertTitle>Message update failed</AlertTitle>
          <AlertDescription>
            Zoho could not update this message. Please try again.
          </AlertDescription>
        </Alert>
      )}

      {updatedState && (
        <Alert className="border-emerald-200 bg-emerald-50 text-emerald-900">
          <AlertTitle>Message updated</AlertTitle>
          <AlertDescription>
            The message is now marked as {updatedState}.
          </AlertDescription>
        </Alert>
      )}

      <Card className="border border-border/70 shadow-xl shadow-black/5">
        <CardHeader className="space-y-5">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant={message.isRead ? "outline" : "default"}>
              {message.isRead ? "Read" : "Unread"}
            </Badge>
            {message.hasAttachment && (
              <Badge variant="secondary">
                <Paperclip className="mr-1 h-3 w-3" />
                Attachment
              </Badge>
            )}
          </div>
          <div>
            <CardTitle className="text-2xl leading-tight md:text-3xl">
              {message.subject}
            </CardTitle>
            <CardDescription className="mt-4 space-y-2">
              <span className="flex items-center gap-2">
                <UserRound className="h-4 w-4" />
                From: {message.sender || message.fromAddress} &lt;
                {message.fromAddress}&gt;
              </span>
              <span className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                To: {message.toAddress || "Not provided"}
              </span>
              {message.ccAddress && (
                <span className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Cc: {message.ccAddress}
                </span>
              )}
              <span className="flex items-center gap-2">
                <CalendarClock className="h-4 w-4" />
                {formatMessageDate(message.receivedAt)}
              </span>
            </CardDescription>
          </div>
        </CardHeader>
        <Separator />
        <CardContent className="pt-6">
          <EmailContent content={content} />
        </CardContent>
      </Card>
    </div>
  );
}
