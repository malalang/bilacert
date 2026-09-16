"use client";

import type { SubmissionType } from "@bilacert/shared/types";
import { useDataFetching } from "./useDataFetching";

export function useSubmissions() {
  return useDataFetching<SubmissionType>("form_submissions");
}
