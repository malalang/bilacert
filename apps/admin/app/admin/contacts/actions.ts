"use server";

import { createSupabaseAdminClient } from "@bilacert/supabase/admin";
import type { Contact } from "@bilacert/supabase/types";
import { revalidatePath } from "next/cache";
import { contactSchema } from "./schema";

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
  const supabase = createSupabaseAdminClient();
  const parsedValues = contactSchema.safeParse(values);

  if (!parsedValues.success) {
    return { error: parsedValues.error.message };
  }

  const { data, error } = await supabase
    .from("contacts")
    .upsert(
      (contactId
        ? { ...parsedValues.data, id: contactId }
        : parsedValues.data) as any,
    )
    .select("*")
    .single();

  if (error) {
    return { error: `Database error: ${error.message}` };
  }

  revalidatePath("/admin/contacts");
  revalidatePath(`/admin/contacts/${(data as Contact).id}`);

  return {
    data: data,
    message: `Contact ${contactId ? "updated" : "created"} successfully!`,
  };
}

export async function deleteContact(contactId: string) {
  const supabase = createSupabaseAdminClient();
  const { error } = await supabase
    .from("contacts")
    .delete()
    .eq("id", contactId);

  if (error) {
    return { error: `Database error: ${error.message}` };
  }

  revalidatePath("/admin/contacts");

  return {
    message: "Contact deleted successfully!",
  };
}
