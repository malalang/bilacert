"use client";

import type { ServiceType } from "@bilacert/contracts/service";
import { useDataFetching } from "./useDataFetching";

export function useServices() {
  return useDataFetching<ServiceType>("services");
}
