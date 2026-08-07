"use client";

import type { BlogPost } from "@bilacert/shared/types";
import { useDataFetching } from "./useDataFetching";

export function useBlogs() {
  return useDataFetching<BlogPost>("blog_posts");
}
