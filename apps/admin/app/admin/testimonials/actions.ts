"use server";

import { createSupabaseAdminClient } from "@bilacert/supabase/admin";
import { revalidatePath } from "next/cache";
import { testimonialSchema } from "./schema";

export async function upsertTestimonial(values: unknown) {
  const supabase = createSupabaseAdminClient();
  const parsedValues = testimonialSchema.safeParse(values);

  if (!parsedValues.success) {
    return { error: parsedValues.error.message };
  }

  const { id, ...rest } = parsedValues.data;

  const dataToUpsert = id ? { ...rest, id } : rest;

  const { error } = await supabase
    .from("testimonials")
    .upsert(dataToUpsert)
    .select("*")
    .single();

  if (error) {
    return { error: `Database error: ${error.message}` };
  }

  revalidatePath("/admin/testimonials");

  return { error: null };
}

export async function deleteTestimonial(testimonialId: string) {
  const supabase = createSupabaseAdminClient();

  const { error } = await supabase
    .from("testimonials")
    .delete()
    .eq("id", testimonialId);

  if (error) {
    return { error: `Database error: ${error.message}` };
  }

  revalidatePath("/admin/testimonials");

  return { error: null };
}
