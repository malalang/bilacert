import type { BlogPost } from "@bilacert/shared/types";
import { createSupabaseServerClient } from "@bilacert/supabase/server";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogDetails from "../BlogDetails";

async function getBlog(id: string): Promise<BlogPost | null> {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !data) {
    return null;
  }

  return {
    id: data.id,
    title: data.title,
    slug: data.slug,
    excerpt: data.excerpt,
    content: data.content,
    category: data.category,
    tags: data.tags,
    readTime: data.readTime,
    seoTitle: data.seoTitle,
    seoDescription: data.seoDescription,
    seoKeywords: data.seoKeywords,
    featuredImage: data.featuredImage,
    thumbnail: data.thumbnail,
    published: data.published,
    publishedAt: data.publishedAt,
    featured: data.featured,
    authorId: data.authorId,
    authorName: data.authorName,
    viewsCount: data.viewsCount,
    createdAt: data.createdAt,
    updatedAt: data.updatedAt,
  } as BlogPost;
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const blog = await getBlog(params.id);
  if (!blog) {
    return {
      title: "Blog Post Not Found",
    };
  }
  return {
    title: `${blog.title} | Bilacert Admin Pro`,
  };
}

export default async function BlogDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const blog = await getBlog(id);

  if (!blog) {
    notFound();
  }

  return <BlogDetails blog={blog} />;
}
