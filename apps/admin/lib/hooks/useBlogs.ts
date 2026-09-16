"use client";

import type { BlogType } from "@bilacert/shared/types";
import { useDataFetching } from "./useDataFetching";

export function useBlogs() {
  return useDataFetching<BlogType>("blog_posts");
}
