import { CACHE_PATHS, CACHE_TAGS, mutationResult } from "../cache";
import { createSupabaseServerClient } from "../server";
import type { Database } from "../supabaseType";


type BlogInsert = Database["public"]["Tables"]["blog_posts"]["Insert"];
type BlogUpdate = Database["public"]["Tables"]["blog_posts"]["Update"];

export async function incrementBlogPostViews(slug: string): Promise<void> {
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.rpc("increment_views", { post_slug: slug });

  if (error) {
    console.error("Failed to increment views:", error.message);
  }
}

export async function createBlog(data: BlogInsert) {
  const supabase = await createSupabaseServerClient();
  const { data: blog, error } = await supabase
    .from("blog_posts")
    .insert(data)
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

export async function updateBlog(id: string, data: BlogUpdate) {
  const supabase = await createSupabaseServerClient();
  const { data: blog, error } = await supabase
    .from("blog_posts")
    .update(data)
    .eq("id", id)
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
  const supabase = await createSupabaseServerClient();
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
