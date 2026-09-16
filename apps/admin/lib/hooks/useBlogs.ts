"use client";

import type { BlogRowType as BlogType } from "@bilacert/contracts/blog";
import { useDataFetching } from "./useDataFetching";

export function useBlogs() {
  return useDataFetching<BlogType>("blog_posts");
}
