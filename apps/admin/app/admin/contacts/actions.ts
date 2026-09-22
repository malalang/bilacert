"use server";

import type { ActionResult } from "@bilacert/contracts/actionResult";
import type { ContactType } from "@bilacert/contracts/contact";
import { contactInputSchema } from "@bilacert/contracts/contact";
import {
  deleteContact as deleteContactMutation,
  upsertContact as upsertContactMutation,
} from "@bilacert/supabase/Mutations/contacts";
import { revalidatePath } from "next/cache";

export async function upsertContact(
  values: unknown,
  contactId?: string,
): Promise<ActionResult<ContactType>> {
  const parsedValues = contactInputSchema.safeParse(values);

  if (!parsedValues.success) {
    return { ok: false, error: parsedValues.error.message };
  }

  let data: ContactType;
  try {
    const result = await upsertContactMutation(
      contactId ? { ...parsedValues.data, id: contactId } : parsedValues.data,
    );
    data = result.data as ContactType;
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return { ok: false, error: `Database error: ${message}` };
  }

  revalidatePath("/admin/contacts");
  revalidatePath(`/admin/contacts/${data.id}`);

  return {
    ok: true,
    data,
    message: `Contact ${contactId ? "updated" : "created"} successfully!`,
  };
}

export async function deleteContact(contactId: string): Promise<ActionResult> {
  try {
    await deleteContactMutation(contactId);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return { ok: false, error: `Database error: ${message}` };
  }

  revalidatePath("/admin/contacts");

  return {
    ok: true,
    message: "Contact deleted successfully!",
  };
}
