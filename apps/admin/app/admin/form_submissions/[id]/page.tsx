import type { Submission } from "@bilacert/shared/types";
import { createSupabaseBrowserClient } from "@bilacert/supabase/client";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { getSubmissionEmailComposeHref } from "@/lib/emailNavigation";
import SubmissionDetails from "../SubmissionDetails";

const supabase = createSupabaseBrowserClient();

type SubmissionDetailsPageProps = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ emailStatus?: string }>;
};

async function getSubmission(id: string): Promise<Submission | null> {
  const { data, error } = await supabase
    .from("form_submissions")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !data) {
    return null;
  }

  return {
    id: data.id,
    formType: data.formType,
    status: data.status,
    serviceId: data.serviceId,
    serviceName: data.serviceName,
    fullName: data.fullName,
    email: data.email,
    phone: data.phone,
    company: data.company,
    industry: data.industry,
    details: data.details,
    internalNotes: data.internalNotes,
    assignedTo: data.assignedTo,
    createdAt: data.createdAt,
    updatedAt: data.updatedAt,
    completedAt: data.completedAt,
  } as Submission;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const submission = await getSubmission(id);
  if (!submission) {
    return {
      title: "Submission Not Found",
    };
  }
  return {
    title: `Submission from ${submission.fullName} | Bilacert Admin Pro`,
  };
}

export default async function SubmissionDetailsPage({
  params,
  searchParams,
}: SubmissionDetailsPageProps) {
  const [{ id }, query] = await Promise.all([params, searchParams]);
  const submission = await getSubmission(id);

  if (!submission) {
    notFound();
  }

  const emailStatus =
    query.emailStatus === "sent" || query.emailStatus === "draft"
      ? query.emailStatus
      : null;

  return (
    <div className="space-y-6">
      {emailStatus && (
        <Alert className="border-emerald-200 bg-emerald-50 text-emerald-900">
          <AlertTitle>
            {emailStatus === "sent" ? "Email sent" : "Draft saved"}
          </AlertTitle>
          <AlertDescription>
            {emailStatus === "sent"
              ? `Your email to ${submission.fullName} was sent through Zoho Mail.`
              : `Your email to ${submission.fullName} was saved in Zoho Drafts.`}
          </AlertDescription>
        </Alert>
      )}
      <SubmissionDetails
        submission={submission}
        emailComposeHref={getSubmissionEmailComposeHref(submission)}
      />
    </div>
  );
}
