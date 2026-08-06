import { CACHE_PATHS, CACHE_TAGS, mutationResult } from "../cache";
import { createSupabaseServerClient } from "../server";
import type { Database } from "../supabaseType";

type BlogRow = Database["public"]["Tables"]["blog_posts"]["Row"];
type BlogInsert = Database["public"]["Tables"]["blog_posts"]["Insert"];
type BlogUpdate = Database["public"]["Tables"]["blog_posts"]["Update"];

function blogResultFromInput(data: BlogInsert): BlogRow {
  return {
    authorId: data.authorId ?? null,
    authorName: data.authorName ?? null,
    category: data.category ?? null,
    content: data.content,
    createdAt: data.createdAt ?? null,
    excerpt: data.excerpt ?? null,
    featured: data.featured ?? null,
    featuredImage: data.featuredImage ?? null,
    id: data.id,
    published: data.published ?? null,
    publishedAt: data.publishedAt ?? null,
    readTime: data.readTime ?? null,
    seoDescription: data.seoDescription ?? null,
    seoKeywords: data.seoKeywords ?? null,
    seoTitle: data.seoTitle ?? null,
    slug: data.slug,
    tags: data.tags ?? null,
    thumbnail: data.thumbnail ?? null,
    title: data.title,
    updatedAt: data.updatedAt ?? null,
    viewsCount: data.viewsCount ?? null,
  };
}

function blogMutationResult(blog: BlogRow) {
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

export async function incrementBlogPostViews(slug: string): Promise<void> {
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.rpc("increment_views", { post_slug: slug });

  if (error) {
    console.error("Failed to increment views:", error.message);
  }
}

export async function createBlog(data: BlogInsert) {
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.from("blog_posts").insert(data);

  if (error) throw new Error(error.message);

  return blogMutationResult(blogResultFromInput(data));
}

export async function updateBlog(id: string, data: BlogInsert) {
  const supabase = await createSupabaseServerClient();
  const { id: _ignoredId, ...updateData }: BlogUpdate = data;
  const blog = blogResultFromInput(data);

  const { count, error } = await supabase
    .from("blog_posts")
    .update(updateData, { count: "exact" })
    .eq("id", id);

  if (error) throw new Error(error.message);

  if ((count ?? 0) === 0) {
    throw new Error(`No blog post matched id "${id}".`);
  }

  return blogMutationResult(blog);
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
