"use client";

import type { Contact } from "@bilacert/shared/types";
import { useDataFetching } from "./useDataFetching";

export function useContacts() {
  return useDataFetching<Contact>("contacts", "*", "submitted_at");
}
