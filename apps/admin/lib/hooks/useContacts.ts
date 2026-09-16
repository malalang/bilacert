"use client";

import type { ContactType } from "@bilacert/contracts/contact";
import { useDataFetching } from "./useDataFetching";

export function useContacts() {
  return useDataFetching<ContactType>("contacts", "*", "submittedAt");
}
