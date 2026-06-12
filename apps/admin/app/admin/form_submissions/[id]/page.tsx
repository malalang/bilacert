import type { Submission } from "@bilacert/shared/types";
import { createSupabaseBrowserClient } from "@bilacert/supabase/client";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SubmissionDetails from "../SubmissionDetails";

const supabase = createSupabaseBrowserClient();

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
    form_type: data.form_type,
    status: data.status,
    service_id: data.service_id,
    service_name: data.service_name,
    full_name: data.full_name,
    email: data.email,
    phone: data.phone,
    company: data.company,
    industry: data.industry,
    details: data.details,
    internal_notes: data.internal_notes,
    assigned_to: data.assigned_to,
    created_at: data.created_at,
    updated_at: data.updated_at,
    completed_at: data.completed_at,
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
    title: `Submission from ${submission.full_name} | Bilacert Admin Pro`,
  };
}

export default async function SubmissionDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const submission = await getSubmission(id);

  if (!submission) {
    notFound();
  }

  return <SubmissionDetails submission={submission} />;
}
