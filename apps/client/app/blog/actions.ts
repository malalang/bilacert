"use server";

import { incrementBlogPostViews } from "@bilacert/supabase/Mutations/blogs";

export async function trackBlogPostView(slug: string) {
  await incrementBlogPostViews(slug);
}
