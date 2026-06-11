"use client";

import { useDataFetching } from "./useDataFetching";
import type { Submission } from "@bilacert/shared/types";

export function useSubmissions() {
  return useDataFetching<Submission>("form_submissions");
}
