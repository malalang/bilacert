import { CACHE_PATHS, CACHE_TAGS, mutationResult } from "../cache";
import { createSupabaseServerClient } from "../server";
import type { Database } from "../supabaseType";

type TestimonialInsert = Database["public"]["Tables"]["testimonials"]["Insert"];

export async function upsertTestimonial(data: TestimonialInsert) {
  const supabase = await createSupabaseServerClient();
  const { data: testimonial, error } = await supabase
    .from("testimonials")
    .upsert(data)
    .select("*")
    .single();

  if (error) throw new Error(error.message);

  return mutationResult(testimonial, {
    tags: [CACHE_TAGS.testimonials],
    paths: [CACHE_PATHS.home],
    mode: "immediate",
  });
}

export async function deleteTestimonial(id: string) {
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.from("testimonials").delete().eq("id", id);
  if (error) throw new Error(error.message);

  return mutationResult(undefined, {
    tags: [CACHE_TAGS.testimonials],
    paths: [CACHE_PATHS.home],
    mode: "immediate",
  });
}
