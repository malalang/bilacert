"use client";

import type { ContactType } from "@bilacert/shared/types";
import { useDataFetching } from "./useDataFetching";

export function useContacts() {
  return useDataFetching<ContactType>("contacts", "*", "submittedAt");
}
