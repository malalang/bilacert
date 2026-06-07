import { createClient as createBrowserClient } from "../client";
import type { BlogPost } from "../types";

export async function getAllPublishedBlogSlugs() {
  const supabase = createBrowserClient();
  const { data, error } = await supabase
    .from("blog_posts")
    .select("slug")
    .eq("published", true);

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function getAllPublishedBlogPosts(): Promise<BlogPost[]> {
  const supabase = createBrowserClient();
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("published", true)
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function getBlogPostBySlug(
  slug: string,
): Promise<BlogPost | null> {
  const supabase = createBrowserClient();
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) {
    return null;
  }

  return data;
}

export async function getBlogPostsByCategory(
  category: string,
  limit: number = 3,
): Promise<BlogPost[]> {
  const supabase = createBrowserClient();
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("category", category)
    .limit(limit);

  if (error) {
    return [];
  }

  return data;
}

export async function incrementBlogPostViews(slug: string): Promise<void> {
  const supabase = createBrowserClient();
  const { error } = await supabase
    .rpc("increment_views", { post_slug: slug });

  if (error) {
    console.error("Failed to increment views:", error.message);
  }
}
