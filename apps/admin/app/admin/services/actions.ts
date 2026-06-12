"use server";

import {
  deleteService as deleteServiceMutation,
  upsertService as upsertServiceMutation,
} from "@bilacert/supabase/Mutations/services";
import { revalidatePath } from "next/cache";
import { triggerRevalidation } from "@/lib/revalidation";
import { serviceSchema } from "./schema";

export async function upsertService(values: unknown) {
  const parsedValues = serviceSchema.safeParse(values);

  if (!parsedValues.success) {
    return { error: parsedValues.error.message };
  }

  const { id, ...rest } = parsedValues.data;

  const dataToUpsert = id ? { ...rest, id } : rest;

  try {
    const result = await upsertServiceMutation(
      dataToUpsert as Parameters<typeof upsertServiceMutation>[0],
    );
    await triggerRevalidation(result.revalidate);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return { error: `Database error: ${message}` };
  }

  revalidatePath("/admin/services");

  return { error: null };
}

export async function deleteService(serviceId: string) {
  try {
    const result = await deleteServiceMutation(serviceId);
    await triggerRevalidation(result.revalidate);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return { error: `Database error: ${message}` };
  }

  revalidatePath("/admin/services");

  return { error: null };
}
