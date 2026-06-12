import { createSupabaseAdminClient } from "../admin";
import { CACHE_TAGS, mutationResult } from "../cache";
import type { Database } from "../supabaseType";

type ContactInsert = Database["public"]["Tables"]["contacts"]["Insert"];

export async function upsertContact(data: ContactInsert) {
  const supabase = createSupabaseAdminClient();
  const { data: contact, error } = await supabase
    .from("contacts")
    .upsert(data)
    .select("*")
    .single();

  if (error) throw new Error(error.message);

  return mutationResult(contact, {
    tags: [CACHE_TAGS.contacts],
    mode: "immediate",
  });
}

export async function deleteContact(id: string) {
  const supabase = createSupabaseAdminClient();
  const { error } = await supabase.from("contacts").delete().eq("id", id);
  if (error) throw new Error(error.message);

  return mutationResult(undefined, {
    tags: [CACHE_TAGS.contacts],
    mode: "immediate",
  });
}
