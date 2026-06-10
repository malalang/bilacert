import { createSupabaseBrowserClient } from "../client";
import type { BlogPost } from "../types";

export async function getAllPublishedBlogSlugs() {
  const supabase = createSupabaseBrowserClient();
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
  const supabase = createSupabaseBrowserClient();
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
  const supabase = createSupabaseBrowserClient();
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
  const supabase = createSupabaseBrowserClient();
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

