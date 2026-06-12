import { createSupabaseAdminClient } from "../admin";
import { CACHE_PATHS, CACHE_TAGS, mutationResult } from "../cache";
import { createSupabaseBrowserClient } from "../client";
import type { Database } from "../supabaseType";

type BlogInsert = Database["public"]["Tables"]["blog_posts"]["Insert"];

export async function incrementBlogPostViews(slug: string): Promise<void> {
  const supabase = createSupabaseBrowserClient();
  const { error } = await supabase
    .rpc("increment_views", { post_slug: slug });

  if (error) {
    console.error("Failed to increment views:", error.message);
  }
}

export async function upsertBlog(data: BlogInsert) {
  const supabase = createSupabaseAdminClient();
  const { data: blog, error } = await supabase
    .from("blog_posts")
    .upsert(data)
    .select("*")
    .single();

  if (error) throw new Error(error.message);

  return mutationResult(blog, {
    tags: [CACHE_TAGS.blogs, CACHE_TAGS.blog(blog.slug)],
    paths: [
      CACHE_PATHS.home,
      CACHE_PATHS.blog,
      CACHE_PATHS.blogPost(blog.slug),
    ],
    mode: "immediate",
  });
}

export async function deleteBlog(id: string) {
  const supabase = createSupabaseAdminClient();
  const { data: existing, error: readError } = await supabase
    .from("blog_posts")
    .select("slug")
    .eq("id", id)
    .maybeSingle();

  if (readError) throw new Error(readError.message);

  const { error } = await supabase.from("blog_posts").delete().eq("id", id);
  if (error) throw new Error(error.message);

  return mutationResult(undefined, {
    tags: [
      CACHE_TAGS.blogs,
      ...(existing?.slug ? [CACHE_TAGS.blog(existing.slug)] : []),
    ],
    paths: [
      CACHE_PATHS.home,
      CACHE_PATHS.blog,
      ...(existing?.slug ? [CACHE_PATHS.blogPost(existing.slug)] : []),
    ],
    mode: "immediate",
  });
}
