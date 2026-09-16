"use client";

import type { TestimonialType } from "@bilacert/shared/types";
import { useDataFetching } from "./useDataFetching";

export function useTestimonials() {
  return useDataFetching<TestimonialType>("testimonials");
}
