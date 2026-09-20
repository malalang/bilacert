"use server";

import type { ActionResult } from "@bilacert/contracts/actionResult";
import { serviceSchema } from "@bilacert/contracts/service";
import {
  deleteService as deleteServiceMutation,
  upsertService as upsertServiceMutation,
} from "@bilacert/supabase/Mutations/services";
import { getServiceSlugById } from "@bilacert/supabase/Queries/services";
import { revalidatePath } from "next/cache";
import { triggerRevalidation } from "@/lib/revalidation";

export async function upsertService(values: unknown): Promise<ActionResult> {
  const parsedValues = serviceSchema.safeParse(values);

  if (!parsedValues.success) {
    return { ok: false, error: parsedValues.error.message };
  }

  const {
    id,
    shortDescription,
    orderIndex,
    processingTime,
    seoTitle,
    seoDescription,
    seoKeywords,
    pricingPlans,
    processSteps,
    successStory,
    ...rest
  } = parsedValues.data;

  const dataToUpsert = {
    ...rest,
    id,
    shortDescription,
    orderIndex,
    processingTime,
    seoTitle,
    seoDescription,
    seoKeywords,
    pricingPlans,
    processSteps,
    successStory,
  };

  try {
    const existingSlug = id ? await getServiceSlugById(id) : null;
    const result = await upsertServiceMutation(dataToUpsert, existingSlug);
    await triggerRevalidation(result.revalidate);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return { ok: false, error: `Database error: ${message}` };
  }

  revalidatePath("/admin/services");

  return { ok: true };
}

export async function deleteService(serviceId: string): Promise<ActionResult> {
  try {
    const existingSlug = await getServiceSlugById(serviceId);
    const result = await deleteServiceMutation(serviceId, existingSlug);
    await triggerRevalidation(result.revalidate);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return { ok: false, error: `Database error: ${message}` };
  }

  revalidatePath("/admin/services");

  return { ok: true };
}
