"use client";

import type { Testimonial } from "@bilacert/shared/types";
import { useDataFetching } from "./useDataFetching";

export function useTestimonials() {
  return useDataFetching<Testimonial>("testimonials");
}
