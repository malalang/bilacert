"use client";

import { useDataFetching } from "./useDataFetching";
import type { Testimonial } from "../types";

export function useTestimonials() {
  return useDataFetching<Testimonial>("testimonials");
}
