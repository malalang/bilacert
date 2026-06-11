"use server";

import { createSupabaseAdminClient } from "@bilacert/supabase/admin";
import { revalidatePath } from "next/cache";
import { serviceSchema } from "./schema";

export async function upsertService(values: unknown) {
  const supabase = createSupabaseAdminClient();
  const parsedValues = serviceSchema.safeParse(values);

  if (!parsedValues.success) {
    return { error: parsedValues.error.message };
  }

  const { id, ...rest } = parsedValues.data;

  const dataToUpsert = id ? { ...rest, id } : rest;

  const { error } = await supabase
    .from("services")
    .upsert(dataToUpsert)
    .select("*")
    .single();

  if (error) {
    return { error: `Database error: ${error.message}` };
  }

  revalidatePath("/admin/services");
  revalidatePath("/services");

  return { error: null };
}

export async function deleteService(serviceId: string) {
  const supabase = createSupabaseAdminClient();

  const { error } = await supabase
    .from("services")
    .delete()
    .eq("id", serviceId);

  if (error) {
    return { error: `Database error: ${error.message}` };
  }

  revalidatePath("/admin/services");
  revalidatePath("/services");

  return { error: null };
}
