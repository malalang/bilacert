import type { Testimonial } from "@bilacert/shared/types";
import { createSupabaseBrowserClient } from "@bilacert/supabase/client";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import TestimonialDetails from "../TestimonialDetails";

const supabase = createSupabaseBrowserClient();

async function getTestimonial(id: string): Promise<Testimonial | null> {
  const { data, error } = await supabase
    .from("testimonials")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !data) {
    return null;
  }

  return {
    id: data.id,
    post_url: data.post_url,
    created_at: data.created_at,
  } as Testimonial;
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const testimonial = await getTestimonial(params.id);
  if (!testimonial) {
    return {
      title: "Testimonial Not Found",
    };
  }
  return {
    title: `Testimonial from ${new Date(testimonial.created_at).toLocaleDateString()} | Bilacert Admin Pro`,
  };
}

export default async function TestimonialDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const testimonial = await getTestimonial(id);

  if (!testimonial) {
    notFound();
  }

  return <TestimonialDetails testimonial={testimonial} />;
}
