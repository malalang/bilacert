import type { Testimonial } from "@bilacert/shared/types";
import { createSupabaseServerClient } from "../server";
import type { Database } from "../supabaseType";

type TestimonialRow = Database["public"]["Tables"]["testimonials"]["Row"];

function normalizeTestimonial(row: TestimonialRow): Testimonial {
  return {
    id: row.id,
    postUrl: row.postUrl,
    createdAt: row.createdAt ?? new Date(0).toISOString(),
  };
}

export async function getPublishedTestimonials(): Promise<Testimonial[]> {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("testimonials")
    .select("id, postUrl, createdAt")
    .order("createdAt", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return (data ?? []).map(normalizeTestimonial);
}
