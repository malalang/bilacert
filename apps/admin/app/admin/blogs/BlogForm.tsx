"use client";

import type { BlogPost } from "@bilacert/supabase/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useTransition } from "react";
import { useForm } from "react-hook-form";
import PexelsImagePicker from "@/components/PexelsImagePicker";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import ImageUpload from "@/components/ui/ImageUpload";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { upsertBlog } from "./actions";
import BlogEditor from "./BlogEditor";
import { type BlogFormValues, blogSchema } from "./schema";

interface BlogFormProps {
  blog?: BlogPost | null;
}

const slugify = (str: string) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

export default function BlogForm({ blog }: BlogFormProps) {
  const { toast } = useToast();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const form = useForm<BlogFormValues>({
    resolver: zodResolver(blogSchema),
    defaultValues: {
      title: "",
      slug: "",
      author_name: "Bilacert Team",
      read_time: "5 min read",
      category: "",
      tags: "",
      excerpt: "",
      content: "",
      published: false,
      featured_image: "",
      thumbnail: "",
      featured: false,
      seo_title: "",
      seo_description: "",
      seo_keywords: "",
    },
  });

  const { handleSubmit, reset, watch, setValue } = form;

  const title = watch("title");
  const isEditing = !!blog;

  useEffect(() => {
    if (!isEditing && title) {
      setValue("slug", slugify(title), { shouldValidate: true });
    }
  }, [title, setValue, isEditing]);

  useEffect(() => {
    if (blog) {
      reset({
        ...blog,
        author_name: blog.author_name || "Bilacert Team",
        read_time: blog.read_time || "5 min read",
        tags: blog.tags || "",
        excerpt: blog.excerpt || "",
        content: blog.content || "",
        featured_image: blog.featured_image || "",
        thumbnail: blog.thumbnail || "",
        seo_title: blog.seo_title || "",
        seo_description: blog.seo_description || "",
        seo_keywords: blog.seo_keywords || "",
      });
    }
  }, [blog, reset]);

  const onSubmit = (values: BlogFormValues) => {
    startTransition(async () => {
      const result = await upsertBlog(values);
      if (result.error) {
        toast({
          variant: "destructive",
          title: "Error saving blog post",
          description: result.error,
        });
      } else {
        toast({
          title: "Blog post saved",
        });
        router.push("/admin/blogs");
      }
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Core Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="e.g., My Awesome Blog Post"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="slug"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Slug</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="e.g., my-awesome-blog-post"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="excerpt"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Excerpt</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="A short summary of the post."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Media</CardTitle>
                <CardDescription>
                  Upload local images or pick from Pexels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="featured_image"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Featured Image</FormLabel>
                        <FormControl>
                          <ImageUpload
                            bucket="blogs"
                            initialUrl={field.value}
                            onUpload={(url) => field.onChange(url)}
                            onRemove={() => field.onChange("")}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="thumbnail"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Thumbnail Image</FormLabel>
                        <FormControl>
                          <ImageUpload
                            bucket="blogs"
                            initialUrl={field.value}
                            onUpload={(url) => field.onChange(url)}
                            onRemove={() => field.onChange("")}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-sm font-medium mb-4">
                    Pexels Image Picker
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <p className="text-xs text-muted-foreground">
                        Quick pick for Featured Image
                      </p>
                      <PexelsImagePicker
                        onSelect={(url) => setValue("featured_image", url)}
                        currentImageUrl={watch("featured_image")}
                        suggestions={[
                          title,
                          watch("category"),
                          ...(watch("tags") || "")
                            .split(",")
                            .map((t) => t.trim()),
                        ].filter((t): t is string => !!t)}
                      />
                    </div>
                    <div className="space-y-2">
                      <p className="text-xs text-muted-foreground">
                        Quick pick for Thumbnail
                      </p>
                      <PexelsImagePicker
                        onSelect={(url) => setValue("thumbnail", url)}
                        currentImageUrl={watch("thumbnail")}
                        suggestions={[
                          title,
                          watch("category"),
                          ...(watch("tags") || "")
                            .split(",")
                            .map((t) => t.trim()),
                        ].filter((t): t is string => !!t)}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Content</FormLabel>
                  <FormControl>
                    <BlogEditor
                      featured_image={watch("featured_image")}
                      onImageSelect={(url) => setValue("featured_image", url)}
                      value={field.value ?? ""}
                      onChange={field.onChange}
                      title={title}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Card>
              <CardHeader>
                <CardTitle>SEO</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="seo_title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>SEO Title</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="seo_description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>SEO Description</FormLabel>
                      <FormControl>
                        <Textarea {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="seo_keywords"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>SEO Keywords (comma separated)</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
          </div>
          <div className="space-y-6 lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Publishing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="published"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel>Published</FormLabel>
                        <FormDescription>
                          Make this post visible.
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="featured"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel>Featured Post</FormLabel>
                        <FormDescription>
                          Display this post prominently.
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="author_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Author</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="read_time"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Read Time</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., 5 min read" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Tech" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="tags"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tags (comma separated)</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., icasa, nrcs" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="flex justify-end gap-4">
          <Button type="button" variant="outline" asChild>
            <Link href="/admin/blogs">Cancel</Link>
          </Button>
          <Button type="submit" disabled={isPending}>
            {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isEditing ? "Save Changes" : "Create Post"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
