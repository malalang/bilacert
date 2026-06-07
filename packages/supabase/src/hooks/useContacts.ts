"use client";

import { useDataFetching } from "./useDataFetching";
import type { Contact } from "../types";

export function useContacts() {
  return useDataFetching<Contact>("contacts", "*", "submitted_at");
}
