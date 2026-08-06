import { AlertCircle, KeyRound, RefreshCw, ShieldAlert } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function EmailStateLayout({
  icon,
  title,
  description,
  children,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Email</h1>
        <p className="text-muted-foreground">
          Manage the Bilacert mailbox from the admin dashboard.
        </p>
      </div>
      <Card className="border border-border/70 shadow-xl shadow-black/5">
        <CardHeader>
          <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
            {icon}
          </div>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-5">{children}</CardContent>
      </Card>
    </div>
  );
}

export function EmailSetupState({
  missingVariables,
}: {
  missingVariables: string[];
}) {
  return (
    <EmailStateLayout
      icon={<KeyRound className="h-5 w-5" />}
      title="Connect Zoho Mail"
      description="The email pages are ready, but the server-only Zoho OAuth connection still needs to be configured."
    >
      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Missing environment variables</AlertTitle>
        <AlertDescription>
          <div className="mt-3 flex flex-wrap gap-2">
            {missingVariables.map((variable) => (
              <code
                key={variable}
                className="rounded-md bg-muted px-2 py-1 text-xs font-semibold text-foreground"
              >
                {variable}
              </code>
            ))}
          </div>
        </AlertDescription>
      </Alert>

      <div className="space-y-3 text-sm text-muted-foreground">
        <p>
          Add these variables to the <strong>bilacert-admin</strong> Vercel
          project and redeploy. Keep every value server-only; do not prefix it
          with <code>NEXT_PUBLIC_</code>.
        </p>
        <p>
          The Zoho refresh token should include these scopes:
          <code>ZohoMail.accounts.READ</code>,<code>ZohoMail.folders.READ</code>
          , and
          <code>ZohoMail.messages.ALL</code>.
        </p>
        <p>
          Regional accounts can also set <code>ZOHO_ACCOUNTS_URL</code> and
          <code>ZOHO_MAIL_API_BASE_URL</code>. You may pin the mailbox with
          <code>ZOHO_ACCOUNT_ID</code> and sender with
          <code>ZOHO_FROM_ADDRESS</code>.
        </p>
      </div>
    </EmailStateLayout>
  );
}

export function EmailConnectionState({ message }: { message: string }) {
  return (
    <EmailStateLayout
      icon={<AlertCircle className="h-5 w-5" />}
      title="Zoho Mail connection failed"
      description="The admin pages are available, but Zoho did not accept or complete the server request."
    >
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Connection error</AlertTitle>
        <AlertDescription>{message}</AlertDescription>
      </Alert>
      <Button asChild variant="outline">
        <Link href="/admin/emails">
          <RefreshCw className="h-4 w-4" />
          Try again
        </Link>
      </Button>
    </EmailStateLayout>
  );
}

export function EmailAccessState({ message }: { message: string }) {
  return (
    <EmailStateLayout
      icon={<ShieldAlert className="h-5 w-5" />}
      title="Email access unavailable"
      description="The server could not authorize this account for mailbox access."
    >
      <Alert variant="destructive">
        <ShieldAlert className="h-4 w-4" />
        <AlertTitle>Administrator access required</AlertTitle>
        <AlertDescription>{message}</AlertDescription>
      </Alert>
    </EmailStateLayout>
  );
}
