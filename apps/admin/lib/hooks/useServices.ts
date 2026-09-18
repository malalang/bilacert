"use client";

import type { ServiceRowType } from "@bilacert/contracts/service";
import { useDataFetching } from "./useDataFetching";

export function useServices() {
  return useDataFetching<ServiceRowType>("services");
}
