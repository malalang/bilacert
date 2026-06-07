"use client";

import { useDataFetching } from "./useDataFetching";
import type { Service } from "../types";

export function useServices() {
  return useDataFetching<Service>("services");
}
