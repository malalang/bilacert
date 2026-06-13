import type { Submission } from "@bilacert/shared/types";
import { createSupabaseBrowserClient } from "@bilacert/supabase/client";
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

const supabase = createSupabaseBrowserClient();

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
            Update details for submission from "{submission.fullName}".
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SubmissionForm submission={submission} />
        </CardContent>
      </Card>
    </div>
  );
}
