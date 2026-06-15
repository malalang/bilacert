"use client";

import type { Service } from "@bilacert/contracts/service";
import { useDataFetching } from "./useDataFetching";

export function useServices() {
  return useDataFetching<Service>("services");
}
