import { CACHE_PATHS, CACHE_TAGS, mutationResult } from "../cache";
import {
  createSupabaseAdminClient,
  createSupabaseServerClient,
} from "../server";
import type { Database } from "../supabaseType";

type BlogRow = Database["public"]["Tables"]["blog_posts"]["Row"];
type BlogInsert = Database["public"]["Tables"]["blog_posts"]["Insert"];
type BlogUpdate = Database["public"]["Tables"]["blog_posts"]["Update"];

const ADMIN_ROLES = new Set([
  "admin",
  "administrator",
  "owner",
  "super-admin",
  "super_admin",
  "superadmin",
]);

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

async function createAuthorizedBlogAdminClient() {
  const sessionClient = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await sessionClient.auth.getUser();

  if (authError || !user) {
    throw new Error(
      "Your admin session is not available to the server. Please sign out and log in again.",
    );
  }

  const adminClient = createSupabaseAdminClient();
  const { data: profile, error: profileError } = await adminClient
    .from("users")
    .select("role,isActive")
    .eq("id", user.id)
    .maybeSingle();

  if (profileError) {
    throw new Error(`Unable to verify admin permissions: ${profileError.message}`);
  }

  const metadataRole =
    typeof user.app_metadata?.role === "string"
      ? user.app_metadata.role
      : undefined;
  const role = (profile?.role ?? metadataRole ?? "").trim().toLowerCase();

  if (profile?.isActive === false || !ADMIN_ROLES.has(role)) {
    throw new Error("Only active administrator accounts can manage blog posts.");
  }

  return adminClient;
}

export async function incrementBlogPostViews(slug: string): Promise<void> {
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.rpc("increment_views", { post_slug: slug });

  if (error) {
    console.error("Failed to increment views:", error.message);
  }
}

export async function createBlog(data: BlogInsert) {
  const supabase = await createAuthorizedBlogAdminClient();
  const { error } = await supabase.from("blog_posts").insert(data);

  if (error) throw new Error(error.message);

  return blogMutationResult(blogResultFromInput(data));
}

export async function updateBlog(id: string, data: BlogInsert) {
  const supabase = await createAuthorizedBlogAdminClient();
  const { id: _ignoredId, ...updateData }: BlogUpdate = data;
  const blog = blogResultFromInput(data);

  const { data: updatedBlog, error } = await supabase
    .from("blog_posts")
    .update(updateData)
    .eq("id", id)
    .select("id")
    .maybeSingle();

  if (error) throw new Error(error.message);

  if (!updatedBlog) {
    throw new Error(`No blog post matches id "${id}".`);
  }

  return blogMutationResult(blog);
}

export async function deleteBlog(id: string) {
  const supabase = await createAuthorizedBlogAdminClient();
  const { data: existing, error: readError } = await supabase
    .from("blog_posts")
    .select("slug")
    .eq("id", id)
    .maybeSingle();

  if (readError) throw new Error(readError.message);

  const { data: deletedBlog, error } = await supabase
    .from("blog_posts")
    .delete()
    .eq("id", id)
    .select("id")
    .maybeSingle();

  if (error) throw new Error(error.message);

  if (!deletedBlog) {
    throw new Error(`No blog post matches id "${id}".`);
  }

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
