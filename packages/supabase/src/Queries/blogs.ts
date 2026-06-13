import type { BlogPost } from "@bilacert/shared/types";
import { createSupabaseBrowserClient } from "../client";
import type { Database } from "../supabaseType";

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
    readTime: row.readTime ?? undefined,
    seoTitle: row.seoTitle ?? undefined,
    seoDescription: row.seoDescription ?? undefined,
    seoKeywords: row.seoKeywords ?? undefined,
    featuredImage: row.featuredImage ?? undefined,
    thumbnail: row.thumbnail ?? undefined,
    published: row.published ?? false,
    publishedAt: row.publishedAt ?? undefined,
    featured: row.featured ?? false,
    authorId: row.authorId ?? undefined,
    authorName: row.authorName ?? undefined,
    viewsCount: row.viewsCount ?? 0,
    createdAt: row.createdAt ?? row.publishedAt ?? new Date(0).toISOString(),
    updatedAt: row.updatedAt ?? undefined,
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

  return data.map(normalizeBlogPost);
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

  return normalizeBlogPost(data);
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

  return data.map(normalizeBlogPost);
}
