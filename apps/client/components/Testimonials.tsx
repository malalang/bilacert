import { getCachedTestimonials } from "@/app/_lib/cached-public-data";
import TestimonialsEmbed from "./TestimonialsEmbed";

export default async function Testimonials() {
  const testimonials = await getCachedTestimonials();

  return <TestimonialsEmbed testimonials={testimonials} />;
}
