"use client";

import type { TestimonialRowType } from "@bilacert/contracts/testimonial";
import { useDataFetching } from "./useDataFetching";

export function useTestimonials() {
  return useDataFetching<TestimonialRowType>("testimonials");
}
