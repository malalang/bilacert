"use server";

import { blogSchema } from "@bilacert/contracts/blog";
import {
  createBlog as createBlogMutation,
  deleteBlog as deleteBlogMutation,
  updateBlog as updateBlogMutation,
} from "@bilacert/supabase/Mutations/blogs";
import { revalidatePath } from "next/cache";
import { v4 as uuidv4 } from "uuid";
import { triggerRevalidation } from "@/lib/revalidation";

export async function upsertBlog(values: unknown) {
  const parsedValues = blogSchema.safeParse(values);

  if (!parsedValues.success) {
    console.warn(
      "[bilacert-admin/blogs] upsert validation failed",
      parsedValues.error.issues.map((issue) => ({
        path: issue.path.join("."),
        message: issue.message,
      })),
    );
    return { error: parsedValues.error.message, blog: null };
  }

  const { id, ...rest } = parsedValues.data;
  const isUpdate = Boolean(id);
  const now = new Date().toISOString();

  const blogData = {
    id: id || uuidv4(),
    title: rest.title,
    slug: rest.slug,
    authorName: rest.authorName,
    readTime: rest.readTime,
    category: rest.category,
    tags: rest.tags,
    excerpt: rest.excerpt,
    content: rest.content,
    published: rest.published,
    publishedAt: rest.published ? now : null,
    featuredImage: rest.featuredImage,
    thumbnail: rest.thumbnail,
    featured: rest.featured,
    seoTitle: rest.seoTitle,
    seoDescription: rest.seoDescription,
    seoKeywords: rest.seoKeywords,
    updatedAt: now,
  };

  console.log("[bilacert-admin/blogs] save start", {
    id: blogData.id,
    mode: isUpdate ? "update" : "create",
    slug: blogData.slug,
    published: blogData.published,
    featured: blogData.featured,
    titleLength: blogData.title.length,
    contentLength: blogData.content.length,
    hasFeaturedImage: Boolean(blogData.featuredImage),
    hasThumbnail: Boolean(blogData.thumbnail),
  });

  try {
    const result = isUpdate
      ? await updateBlogMutation(blogData.id, blogData)
      : await createBlogMutation(blogData);

    console.log("[bilacert-admin/blogs] save mutation success", {
      id: result.data.id,
      slug: result.data.slug,
      revalidate: result.revalidate,
    });

    await triggerRevalidation(result.revalidate);
    console.log("[bilacert-admin/blogs] external revalidation complete", {
      id: result.data.id,
      slug: result.data.slug,
    });

    revalidatePath("/admin/blogs");
    revalidatePath(`/admin/blogs/${result.data.id}`);
    revalidatePath(`/admin/blogs/${result.data.slug}`);
    revalidatePath(`/admin/blogs/${result.data.id}/edit`);
    revalidatePath(`/admin/blogs/${result.data.slug}/edit`);
    console.log("[bilacert-admin/blogs] admin paths revalidated", {
      id: result.data.id,
      slug: result.data.slug,
    });

    return { error: null, blog: result.data };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("[bilacert-admin/blogs] save failed", {
      id: blogData.id,
      slug: blogData.slug,
      mode: isUpdate ? "update" : "create",
      message,
    });
    return { error: `Database error: ${message}`, blog: null };
  }
}

export async function deleteBlog(blogId: string) {
  try {
    const result = await deleteBlogMutation(blogId);
    await triggerRevalidation(result.revalidate);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return { error: `Database error: ${message}` };
  }

  revalidatePath("/admin/blogs");

  return { error: null };
}
