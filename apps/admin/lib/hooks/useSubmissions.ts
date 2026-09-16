"use client";

import type { SubmissionType } from "@bilacert/contracts/formSubmission";
import { useDataFetching } from "./useDataFetching";

export function useSubmissions() {
  return useDataFetching<SubmissionType>("form_submissions");
}
