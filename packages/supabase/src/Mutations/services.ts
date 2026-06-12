import { createSupabaseAdminClient } from "../admin";
import { CACHE_PATHS, CACHE_TAGS, mutationResult } from "../cache";
import type { Database } from "../supabaseType";

type ServiceInsert = Database["public"]["Tables"]["services"]["Insert"];

export async function upsertService(data: ServiceInsert) {
  const supabase = createSupabaseAdminClient();
  const { data: service, error } = await supabase
    .from("services")
    .upsert(data)
    .select("*")
    .single();

  if (error) throw new Error(error.message);

  return mutationResult(service, {
    tags: [CACHE_TAGS.services, CACHE_TAGS.service(service.slug)],
    paths: [
      CACHE_PATHS.home,
      CACHE_PATHS.services,
      CACHE_PATHS.service(service.slug),
    ],
    mode: "immediate",
  });
}

export async function deleteService(id: string) {
  const supabase = createSupabaseAdminClient();
  const { data: existing, error: readError } = await supabase
    .from("services")
    .select("slug")
    .eq("id", id)
    .maybeSingle();

  if (readError) throw new Error(readError.message);

  const { error } = await supabase.from("services").delete().eq("id", id);
  if (error) throw new Error(error.message);

  return mutationResult(undefined, {
    tags: [
      CACHE_TAGS.services,
      ...(existing?.slug ? [CACHE_TAGS.service(existing.slug)] : []),
    ],
    paths: [
      CACHE_PATHS.home,
      CACHE_PATHS.services,
      ...(existing?.slug ? [CACHE_PATHS.service(existing.slug)] : []),
    ],
    mode: "immediate",
  });
}
