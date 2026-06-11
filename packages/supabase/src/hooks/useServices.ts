"use client";

import { useDataFetching } from "./useDataFetching";
import type { Service } from "@bilacert/shared/types";

export function useServices() {
  return useDataFetching<Service>("services");
}
