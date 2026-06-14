"use server";

import {
  deleteTestimonial as deleteTestimonialMutation,
  upsertTestimonial as upsertTestimonialMutation,
} from "@bilacert/supabase/Mutations/testimonials";
import { revalidatePath } from "next/cache";
import { triggerRevalidation } from "@/lib/revalidation";
import { testimonialSchema } from "@bilacert/contracts/testimonial";
import { type ActionResult } from "@bilacert/contracts/actionResult";

export async function upsertTestimonial(values: unknown) {
  const parsedValues = testimonialSchema.safeParse(values);

  if (!parsedValues.success) {
    return { error: parsedValues.error.message };
  }

  const { id, ...rest } = parsedValues.data;

  const dataToUpsert = id ? { ...rest, id } : rest;

  try {
    const result = await upsertTestimonialMutation(dataToUpsert);
    await triggerRevalidation(result.revalidate);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return { error: `Database error: ${message}` };
  }

  revalidatePath("/admin/testimonials");

  return { error: null };
}

export async function deleteTestimonial(testimonialId: string) {
  try {
    const result = await deleteTestimonialMutation(testimonialId);
    await triggerRevalidation(result.revalidate);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return { error: `Database error: ${message}` };
  }

  revalidatePath("/admin/testimonials");

  return { error: null };
}
