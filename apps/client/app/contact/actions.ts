"use server";

import { contactSchema, type ContactMessageInput } from "@bilacert/contracts/contact";
import { type ActionResult } from "@bilacert/contracts/actionResult";
import { createContact } from "@bilacert/supabase/Mutations/contacts";

export async function submitContactForm(values: ContactMessageInput): Promise<ActionResult<{ id: string }>> {
  const parsed = contactSchema.safeParse(values);

  if (!parsed.success) {
    return {
      ok: false,
      error: "Invalid form data",
      fieldErrors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  try {
    const { data } = await createContact({
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone || null,
      service: parsed.data.service || null,
      message: parsed.data.message || null,
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
