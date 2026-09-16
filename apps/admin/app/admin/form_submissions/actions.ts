"use server";

import { submissionSchema } from "@bilacert/contracts/formSubmission";
import type { SubmissionType } from "@bilacert/shared/types";
import { updateFormSubmission } from "@bilacert/supabase/Mutations/formSubmissions";
import type { Json } from "@bilacert/supabase/supabaseType";
import { revalidatePath } from "next/cache";

export async function upsertSubmission(values: unknown, submissionId: string) {
  const parsedValues = submissionSchema.safeParse(values);

  if (!parsedValues.success) {
    return { error: parsedValues.error.message };
  }

  const submissionData = {
    fullName: parsedValues.data.fullName,
    email: parsedValues.data.email,
    phone: parsedValues.data.phone,
    company: parsedValues.data.company,
    industry: parsedValues.data.industry,
    serviceName: parsedValues.data.serviceName,
    status: parsedValues.data.status,
    details: parsedValues.data.details
      ? (JSON.parse(parsedValues.data.details) as Json)
      : null,
    internalNotes: parsedValues.data.notes,
    assignedTo: parsedValues.data.contactOwner || null,
    updatedAt: new Date().toISOString(),
  };

  let data: SubmissionType;
  try {
    const result = await updateFormSubmission(submissionId, submissionData);
    data = result.data as SubmissionType;
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return { error: `Database error: ${message}` };
  }

  revalidatePath("/admin/form_submissions");
  revalidatePath(`/admin/form_submissions/${data.id}`);

  return {
    data,
    message: `Submission updated successfully!`,
  };
}

export async function updateSubmissionStatus(
  submissionId: string,
  status: SubmissionType["status"],
) {
  let data: SubmissionType;
  try {
    const result = await updateFormSubmission(submissionId, {
      status,
      updatedAt: new Date().toISOString(),
    });
    data = result.data as SubmissionType;
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return { error: `Database error: ${message}` };
  }

  revalidatePath("/admin/form_submissions");
  revalidatePath(`/admin/form_submissions/${data.id}`);

  return {
    data,
    message: "Status updated successfully",
  };
}
