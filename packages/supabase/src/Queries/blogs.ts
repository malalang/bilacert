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
    readTime: row.read_time ?? undefined,
    seoTitle: row.seo_title ?? undefined,
    seoDescription: row.seo_description ?? undefined,
    seoKeywords: row.seo_keywords ?? undefined,
    featuredImage: row.featured_image ?? undefined,
    thumbnail: row.thumbnail ?? undefined,
    published: row.published ?? false,
    publishedAt: row.published_at ?? undefined,
    featured: row.featured ?? false,
    authorId: row.author_id ?? undefined,
    authorName: row.author_name ?? undefined,
    viewsCount: row.views_count ?? 0,
    createdAt: row.created_at ?? row.published_at ?? new Date(0).toISOString(),
    updatedAt: row.updated_at ?? undefined,
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
