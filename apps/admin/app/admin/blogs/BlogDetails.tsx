'use client';

import { Badge } from "@/components/ui/badge";
import type { BlogPost } from "@bilacert/supabase";
import { format } from "date-fns";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Edit, Trash2 } from "lucide-react";
import { useState } from "react";
import DeleteBlogDialog from "./DeleteBlogDialog";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface BlogDetailsProps {
  blog: BlogPost;
}

export default function BlogDetails({ blog }: BlogDetailsProps) {
  const router = useRouter();
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  if (!blog) return null;

  const handleDelete = () => {
    setIsDeleteDialogOpen(true);
  };

  const onDeleted = () => {
    setIsDeleteDialogOpen(false);
    router.push("/admin/blogs");
    router.refresh();
  };

  const handleCloseDialog = () => {
    setIsDeleteDialogOpen(false);
  };

  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <Button variant="outline" asChild>
            <Link href="/admin/blogs">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blogs
            </Link>
          </Button>
          <div className="flex gap-2">
            <Button asChild>
              <Link href={`/admin/blogs/${blog.id}/edit`}>
                <Edit className="mr-2 h-4 w-4" /> Edit
              </Link>
            </Button>
            <Button variant="destructive" onClick={handleDelete}>
              <Trash2 className="mr-2 h-4 w-4" /> Delete
            </Button>
          </div>
        </div>

        {(blog.featured_image || blog.thumbnail) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blog.featured_image && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Featured Image</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative aspect-video w-full max-w-lg overflow-hidden rounded-lg">
                    <Image
                      src={blog.featured_image}
                      alt="Featured Image"
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            )}
            {blog.thumbnail && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Thumbnail</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative aspect-square w-48 overflow-hidden rounded-lg">
                    <Image
                      src={blog.thumbnail}
                      alt="Thumbnail"
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        )}

        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>{blog.title}</CardTitle>
                {blog.category && (
                  <CardDescription>{blog.category}</CardDescription>
                )}
              </div>
              <div className="flex gap-2">
                {blog.featured && <Badge>Featured</Badge>}
                <Badge variant={blog.published ? "default" : "secondary"}>
                  {blog.published ? "Published" : "Draft"}
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <h4 className="text-sm font-medium text-muted-foreground">
                  Details
                </h4>
                <div className="text-sm">
                  <strong>Slug:</strong>{' '}
                  <span className="font-mono">{blog.slug}</span>
                </div>
                {blog.author_name && (
                  <div className="text-sm">
                    <strong>Author:</strong> {blog.author_name}
                  </div>
                )}
                {blog.read_time && (
                  <div className="text-sm">
                    <strong>Read Time:</strong> {blog.read_time}
                  </div>
                )}
                {blog.tags && (
                  <div className="text-sm">
                    <strong>Tags:</strong> {blog.tags}
                  </div>
                )}
                <div className="text-sm">
                  <strong>Created:</strong>{' '}
                  {format(new Date(blog.created_at), "PPpp")}
                </div>
                {blog.updated_at && (
                  <div className="text-sm">
                    <strong>Updated:</strong>{' '}
                    {format(new Date(blog.updated_at), "PPpp")}
                  </div>
                )}
              </div>
              <div className="space-y-4 md:col-span-2">
                <h4 className="text-sm font-medium text-muted-foreground">
                  SEO
                </h4>
                {blog.seo_title && (
                  <div className="text-sm">
                    <strong>Title:</strong> {blog.seo_title}
                  </div>
                )}
                {blog.seo_description && (
                  <div className="text-sm">
                    <strong>Description:</strong> {blog.seo_description}
                  </div>
                )}
                {blog.seo_keywords && (
                  <div className="text-sm">
                    <strong>Keywords:</strong> {blog.seo_keywords}
                  </div>
                )}
              </div>
            </div>
            {blog.excerpt && (
              <div className="mt-6 border-t pt-6">
                <h3 className="text-lg font-medium mb-2">Excerpt</h3>
                <p className="text-sm text-card-foreground italic">
                  "{blog.excerpt}"
                </p>
              </div>
            )}
            {blog.content && (
              <div className="mt-6 border-t pt-6 max-w-[256] sm:max-w-lg  md:max-w-xl lg:max-w-3xl mx-auto">
                <div className="flex justify-between items-center mb-4 gap-4">
                  <h3 className="text-lg font-medium mb-2">Content</h3>
                  <Button asChild>
                    <Link href={`/admin/blogs/${blog.id}/edit`}>
                      <Edit className="mr-2 h-4 w-4" /> Edit
                    </Link>
                  </Button>
                </div>
                <article
                  className="prose prose-slate prose-indigo text-sm
                                       break-words overflow-wrap-anywhere
                                       prose-headings:font-bold prose-headings:tracking-tight
                                       prose-a:text-indigo-600 prose-img:rounded-2xl prose-img:shadow-lg
                                       [&_iframe]:w-full [&_iframe]:aspect-video [&_iframe]:rounded-xl 
          [&>h1]:text-3xl [&>h1]:font-bold [&>h1]:mb-4 
          [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mb-3 
          [&>h3]:text-xl [&>h3]:font-bold [&>h3]:mb-2 
          [&>p]:mb-4 [&>p]:leading-relaxed [&>p]:text-slate-700
          [&>ul]:list-disc [&>ul]:ml-6 [&>ul]:my-4
          [&>img]:rounded-lg"
                  dangerouslySetInnerHTML={{
                    __html:
                      blog.content ||
                      '<p class="text-slate-400 italic">No content to display yet...</p>',
                  }}
                />
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {isDeleteDialogOpen && (
        <DeleteBlogDialog
          isOpen={isDeleteDialogOpen}
          onClose={handleCloseDialog}
          blog={blog}
          onDeleted={onDeleted}
        />
      )}
    </>
  );
}
