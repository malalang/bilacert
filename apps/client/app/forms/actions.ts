"use server";

import { formSubmissionPayloadSchema, type FormSubmissionPayload } from "@bilacert/contracts/formSubmission";
import { type ActionResult } from "@bilacert/contracts/actionResult";
import { createFormSubmission } from "@bilacert/supabase/Mutations/formSubmissions";

export async function submitFormAction(values: FormSubmissionPayload): Promise<ActionResult<{ id: string }>> {
  const parsed = formSubmissionPayloadSchema.safeParse(values);

  if (!parsed.success) {
    return {
      ok: false,
      error: "Invalid form data",
      fieldErrors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  try {
    const {
      formType,
      serviceId,
      serviceName,
      fullName,
      email,
      phone,
      companyName,
      industry,
      details,
    } = parsed.data;

    const { data } = await createFormSubmission({
      formType,
      serviceId: serviceId || null,
      serviceName: serviceName || null,
      fullName,
      email,
      phone: phone || null,
      company: companyName || null,
      industry: industry || null,
      details: details || null,
      status: "pending",
    });

    return {
      ok: true,
      data: { id: data?.id || "" },
      message: "Form submitted successfully. We will review and contact you soon.",
    };
  } catch (error) {
    console.error("Form submission error:", error);
    return {
      ok: false,
      error: "An unexpected error occurred. Please try again.",
    };
  }
}
