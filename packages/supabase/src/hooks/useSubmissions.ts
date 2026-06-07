"use client";

import { useDataFetching } from "./useDataFetching";
import type { Submission } from "../types";

export function useSubmissions() {
  return useDataFetching<Submission>("form_submissions");
}
