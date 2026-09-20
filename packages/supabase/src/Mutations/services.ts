"use server";

import { requireAdminUser } from "../auth";
import { CACHE_PATHS, CACHE_TAGS, mutationResult } from "../cache";
import type { Database } from "../supabaseType";

type ServiceInsert = Database["public"]["Tables"]["services"]["Insert"];

function uniqueValues(values: string[]) {
  return [...new Set(values.filter((value) => value.length > 0))];
}

export async function upsertService(
  data: ServiceInsert,
  existingSlug?: string | null,
) {
  const supabase = await requireAdminUser();

  const { data: service, error } = await supabase
    .from("services")
    .upsert(data)
    .select("*")
    .single();

  if (error) throw new Error(error.message);

  const serviceSlugs = uniqueValues([
    service.slug,
    ...(existingSlug ? [existingSlug] : []),
  ]);

  return mutationResult(service, {
    tags: uniqueValues([
      CACHE_TAGS.services,
      ...serviceSlugs.map((slug) => CACHE_TAGS.service(slug)),
    ]),
    paths: uniqueValues([
      CACHE_PATHS.home,
      CACHE_PATHS.services,
      ...serviceSlugs.map((slug) => CACHE_PATHS.service(slug)),
    ]),
    mode: "immediate",
  });
}

export async function deleteService(id: string, existingSlug?: string | null) {
  const supabase = await requireAdminUser();
  const { error } = await supabase.from("services").delete().eq("id", id);
  if (error) throw new Error(error.message);

  return mutationResult(undefined, {
    tags: [
      CACHE_TAGS.services,
      ...(existingSlug ? [CACHE_TAGS.service(existingSlug)] : []),
    ],
    paths: [
      CACHE_PATHS.home,
      CACHE_PATHS.services,
      ...(existingSlug ? [CACHE_PATHS.service(existingSlug)] : []),
    ],
    mode: "immediate",
  });
}
