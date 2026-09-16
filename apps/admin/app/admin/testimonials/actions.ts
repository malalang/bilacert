"use server";

import type { ActionResult } from "@bilacert/contracts/actionResult";
import { testimonialSchema } from "@bilacert/contracts/testimonial";
import {
  deleteTestimonial as deleteTestimonialMutation,
  upsertTestimonial as upsertTestimonialMutation,
} from "@bilacert/supabase/Mutations/testimonials";
import { revalidatePath } from "next/cache";
import { triggerRevalidation } from "@/lib/revalidation";

export async function upsertTestimonial(
  values: unknown,
): Promise<ActionResult> {
  const parsedValues = testimonialSchema.safeParse(values);

  if (!parsedValues.success) {
    return { ok: false, error: parsedValues.error.message };
  }

  const { id, ...rest } = parsedValues.data;

  const dataToUpsert = id ? { ...rest, id } : rest;

  try {
    const result = await upsertTestimonialMutation(dataToUpsert);
    await triggerRevalidation(result.revalidate);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return { ok: false, error: `Database error: ${message}` };
  }

  revalidatePath("/admin/testimonials");

  return { ok: true };
}

export async function deleteTestimonial(
  testimonialId: string,
): Promise<ActionResult> {
  try {
    const result = await deleteTestimonialMutation(testimonialId);
    await triggerRevalidation(result.revalidate);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return { ok: false, error: `Database error: ${message}` };
  }

  revalidatePath("/admin/testimonials");

  return { ok: true };
}
