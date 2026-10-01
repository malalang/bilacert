import type { BlogRowType as BlogType } from "@bilacert/contracts/blog";
import { createSupabaseServerClient } from "@bilacert/supabase/server";
import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import BlogDetails from "../BlogDetails";

async function getBlog(identifier: string): Promise<BlogType | null> {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .or(`id.eq.${identifier},slug.eq.${identifier}`)
    .limit(1)
    .maybeSingle();

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
  } as BlogType;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const blog = await getBlog(id);
  if (!blog) {
    return {
      title: "Blog Post Not Found",
    };
  }
  return {
    title: `${blog.title} | Bilacert Admin Pro`,
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1f2937" },
  ],
};
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
