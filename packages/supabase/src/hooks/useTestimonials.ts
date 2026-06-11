"use client";

import { useDataFetching } from "./useDataFetching";
import type { Testimonial } from "@bilacert/shared/types";

export function useTestimonials() {
  return useDataFetching<Testimonial>("testimonials");
}
