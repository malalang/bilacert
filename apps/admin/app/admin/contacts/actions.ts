"use server";

import type { Contact } from "@bilacert/shared/types";
import { createSupabaseAdminClient } from "@bilacert/supabase/admin";
import {
  deleteContact as deleteContactMutation,
  upsertContact as upsertContactMutation,
} from "@bilacert/supabase/Mutations/contacts";
import { revalidatePath } from "next/cache";
import { triggerRevalidation } from "@/lib/revalidation";
import { contactSchema } from "@bilacert/contracts/contact";
import { type ActionResult } from "@bilacert/contracts/actionResult";

export async function getContacts() {
  const supabase = createSupabaseAdminClient();
  const { data, error } = await supabase
    .from("contacts")
    .select("*")
    .order("name", { ascending: true });

  if (error) {
    throw new Error(error.message);
  }

  return data as Contact[];
}

export async function upsertContact(values: unknown, contactId?: string) {
  const parsedValues = contactSchema.safeParse(values);

  if (!parsedValues.success) {
    return { error: parsedValues.error.message };
  }

  let data: Contact;
  try {
    const result = await upsertContactMutation(
      contactId ? { ...parsedValues.data, id: contactId } : parsedValues.data,
    );
    data = result.data as Contact;
    await triggerRevalidation(result.revalidate);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return { error: `Database error: ${message}` };
  }

  revalidatePath("/admin/contacts");
  revalidatePath(`/admin/contacts/${data.id}`);

  return {
    data,
    message: `Contact ${contactId ? "updated" : "created"} successfully!`,
  };
}

export async function deleteContact(contactId: string) {
  try {
    const result = await deleteContactMutation(contactId);
    await triggerRevalidation(result.revalidate);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return { error: `Database error: ${message}` };
  }

  revalidatePath("/admin/contacts");

  return {
    message: "Contact deleted successfully!",
  };
}
