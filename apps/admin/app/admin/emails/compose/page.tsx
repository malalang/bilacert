import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { getAdminAccess } from "@/lib/adminAccess";
import { getSafeEmailReturnPath } from "@/lib/emailNavigation";
import {
  getZohoMailAccount,
  getZohoMailConfigurationStatus,
} from "@/lib/zohoMail";
import EmailComposer from "../_components/EmailComposer";
import {
  EmailAccessState,
  EmailConnectionState,
  EmailSetupState,
} from "../_components/EmailState";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Compose Email | Bilacert Admin",
  description: "Compose a Bilacert email through Zoho Mail.",
};

type ComposeEmailPageProps = {
  searchParams: Promise<{
    to?: string;
    subject?: string;
    content?: string;
    returnTo?: string;
  }>;
};

function safeInitialValue(value: string | undefined, maxLength: number) {
  return value?.slice(0, maxLength) ?? "";
}

export default async function ComposeEmailPage({
  searchParams,
}: ComposeEmailPageProps) {
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

  let fromAddress: string;
  try {
    const account = await getZohoMailAccount();
    fromAddress = account.fromAddress;
  } catch (error) {
    return (
      <EmailConnectionState
        message={
          error instanceof Error
            ? error.message
            : "Zoho Mail could not load the sender account."
        }
      />
    );
  }

  const query = await searchParams;
  const returnTo = getSafeEmailReturnPath(query.returnTo);
  const returnLabel = returnTo?.startsWith("/admin/contacts/")
    ? "Back to contact"
    : returnTo
      ? "Back to submission"
      : "Back to email";

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div>
        <Button asChild variant="ghost" className="mb-3 -ml-3">
          <Link href={returnTo ?? "/admin/emails"}>
            <ArrowLeft className="h-4 w-4" />
            {returnLabel}
          </Link>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">Compose email</h1>
        <p className="mt-1 text-muted-foreground">
          Messages are sent securely through the connected Zoho mailbox.
        </p>
      </div>

      <EmailComposer
        fromAddress={fromAddress}
        initialToAddress={safeInitialValue(query.to, 4_000)}
        initialSubject={safeInitialValue(query.subject, 998)}
        initialContent={safeInitialValue(query.content, 200_000)}
        returnTo={returnTo ?? undefined}
      />
    </div>
  );
}
