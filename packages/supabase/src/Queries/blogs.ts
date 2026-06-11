import { createSupabaseBrowserClient } from "../client";
import type { Database } from "../supabaseType";
import type { BlogPost } from "../types";

type BlogPostRow = Database["public"]["Tables"]["blog_posts"]["Row"];

function normalizeBlogPost(row: BlogPostRow): BlogPost {
  return {
    id: row.id,
    title: row.title,
    slug: row.slug,
    excerpt: row.excerpt ?? undefined,
    content: row.content,
    category: row.category ?? undefined,
    tags: row.tags ?? undefined,
    read_time: row.read_time ?? undefined,
    seo_title: row.seo_title ?? undefined,
    seo_description: row.seo_description ?? undefined,
    seo_keywords: row.seo_keywords ?? undefined,
    featured_image: row.featured_image ?? undefined,
    thumbnail: row.thumbnail ?? undefined,
    published: row.published ?? false,
    published_at: row.published_at ?? undefined,
    featured: row.featured ?? false,
    author_id: row.author_id ?? undefined,
    author_name: row.author_name ?? undefined,
    views_count: row.views_count ?? 0,
    created_at:
      row.created_at ?? row.published_at ?? new Date(0).toISOString(),
    updated_at: row.updated_at ?? undefined,
  };
}

export async function getAllPublishedBlogSlugs() {
  const supabase = createSupabaseBrowserClient();
  const { data, error } = await supabase
    .from("blog_posts")
    .select("slug")
    .eq("published", true);

  if (error) {
    throw new Error(error.message);
  }

  return data.map(normalizeBlogPost);
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

  return normalizeBlogPost(data);
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

  return data.map(normalizeBlogPost);
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

