import { ArrowLeft } from "lucide-react";
import type { Viewport } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import BlogForm from "../BlogForm";

export const metadata = {
  title: "New Blog Post | Bilacert Admin Pro",
  description: "Create a new blog post.",
};

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
export default function NewBlogPage() {
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
          <CardTitle>Add New Post</CardTitle>
          <CardDescription>
            Fill out the form below to create a new post.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <BlogForm />
        </CardContent>
      </Card>
    </div>
  );
}
