"use client";

import type { Submission } from "@bilacert/shared/types";
import { useDataFetching } from "./useDataFetching";

export function useSubmissions() {
  return useDataFetching<Submission>("form_submissions");
}
