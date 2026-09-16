"use client";

import type { TestimonialType } from "@bilacert/contracts/testimonial";
import { useDataFetching } from "./useDataFetching";

export function useTestimonials() {
  return useDataFetching<TestimonialType>("testimonials");
}
