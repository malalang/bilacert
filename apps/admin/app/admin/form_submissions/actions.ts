"use server";

import type { Submission } from "@bilacert/shared/types";
import { updateFormSubmission } from "@bilacert/supabase/Mutations/formSubmissions";
import { revalidatePath } from "next/cache";
import { triggerRevalidation } from "@/lib/revalidation";
import { submissionSchema } from "./schema";

export async function upsertSubmission(values: unknown, submissionId: string) {
  const parsedValues = submissionSchema.safeParse(values);

  if (!parsedValues.success) {
    return { error: parsedValues.error.message };
  }

  const submissionData = {
    full_name: parsedValues.data.full_name,
    email: parsedValues.data.email,
    phone: parsedValues.data.phone,
    company: parsedValues.data.company,
    industry: parsedValues.data.industry,
    service_name: parsedValues.data.service_name,
    status: parsedValues.data.status,
    details: parsedValues.data.details
      ? JSON.parse(parsedValues.data.details)
      : null,
    internal_notes: parsedValues.data.notes,
    assigned_to: parsedValues.data.contact_owner || null,
    updated_at: new Date().toISOString(),
  };

  let data: Submission;
  try {
    const result = await updateFormSubmission(submissionId, submissionData);
    data = result.data as Submission;
    await triggerRevalidation(result.revalidate);
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
  status: Submission["status"],
) {
  let data: Submission;
  try {
    const result = await updateFormSubmission(submissionId, {
      status,
      updated_at: new Date().toISOString(),
    });
    data = result.data as Submission;
    await triggerRevalidation(result.revalidate);
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
