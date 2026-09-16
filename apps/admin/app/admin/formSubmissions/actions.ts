"use server";

import type { ActionResult } from "@bilacert/contracts/actionResult";
import type { SubmissionType } from "@bilacert/contracts/formSubmission";
import { submissionSchema } from "@bilacert/contracts/formSubmission";
import { updateFormSubmission } from "@bilacert/supabase/Mutations/formSubmissions";
import type { Json } from "@bilacert/supabase/supabaseType";
import { revalidatePath } from "next/cache";

export async function upsertSubmission(
  values: unknown,
  submissionId: string,
): Promise<ActionResult<SubmissionType>> {
  const parsedValues = submissionSchema.safeParse(values);

  if (!parsedValues.success) {
    return { ok: false, error: parsedValues.error.message };
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
    return { ok: false, error: `Database error: ${message}` };
  }

  revalidatePath("/admin/formSubmissions");
  revalidatePath(`/admin/formSubmissions/${data.id}`);

  return {
    ok: true,
    data,
    message: `Submission updated successfully!`,
  };
}

export async function updateSubmissionStatus(
  submissionId: string,
  status: SubmissionType["status"],
): Promise<ActionResult<SubmissionType>> {
  let data: SubmissionType;
  try {
    const result = await updateFormSubmission(submissionId, {
      status,
      updatedAt: new Date().toISOString(),
    });
    data = result.data as SubmissionType;
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return { ok: false, error: `Database error: ${message}` };
  }

  revalidatePath("/admin/formSubmissions");
  revalidatePath(`/admin/formSubmissions/${data.id}`);

  return {
    ok: true,
    data,
    message: "Status updated successfully",
  };
}
