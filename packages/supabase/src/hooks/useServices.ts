"use client";

import type { Service } from "@bilacert/shared/types";
import { useDataFetching } from "./useDataFetching";

export function useServices() {
  return useDataFetching<Service>("services");
}
