import type { Submission } from "@bilacert/supabase";
import { supabase } from "@bilacert/supabase";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SubmissionForm from "../../SubmissionForm";

export const metadata = {
  title: "Edit Submission | Bilacert Admin Pro",
  description: "Edit a form submission.",
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

export default async function EditSubmissionPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const submission = await getSubmission(id);

  if (!submission) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <Button variant="outline" asChild>
        <Link href={`/admin/form_submissions/${submission.id}`}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Submission
        </Link>
      </Button>
      <Card>
        <CardHeader>
          <CardTitle>Edit Submission</CardTitle>
          <CardDescription>
            Update details for submission from "{submission.full_name}".
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SubmissionForm submission={submission} />
        </CardContent>
      </Card>
    </div>
  );
}
