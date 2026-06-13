import type { BlogPost } from "@bilacert/shared/types";
import { createSupabaseServerClient } from "@bilacert/supabase/server";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import BlogForm from "../../BlogForm";

export const metadata = {
  title: "Edit Blog Post | Bilacert Admin Pro",
  description: "Edit an existing blog post.",
};

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

export default async function EditBlogPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const blog = await getBlog(id);

  if (!blog) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <Button variant="outline" asChild>
        <Link href="/admin/blogs">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blogs
        </Link>
      </Button>

      <Card>
        <CardHeader>
          <CardTitle>Edit Blog Post</CardTitle>
          <CardDescription>
            Update the details for "{blog.title}".
          </CardDescription>
        </CardHeader>
        <CardContent>
          <BlogForm blog={blog} />
        </CardContent>
      </Card>
    </div>
  );
}
