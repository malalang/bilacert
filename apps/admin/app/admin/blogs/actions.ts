"use server";

import { blogSchema } from "@bilacert/contracts/blog";
import {
  deleteBlog as deleteBlogMutation,
  upsertBlog as upsertBlogMutation,
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
  const now = new Date().toISOString();

  const dataToUpsert = {
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

  console.log("[bilacert-admin/blogs] upsert start", {
    id: dataToUpsert.id,
    mode: id ? "update" : "create",
    slug: dataToUpsert.slug,
    published: dataToUpsert.published,
    featured: dataToUpsert.featured,
    titleLength: dataToUpsert.title.length,
    contentLength: dataToUpsert.content.length,
    hasFeaturedImage: Boolean(dataToUpsert.featuredImage),
    hasThumbnail: Boolean(dataToUpsert.thumbnail),
  });

  try {
    const result = await upsertBlogMutation(dataToUpsert);
    console.log("[bilacert-admin/blogs] upsert mutation success", {
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
    revalidatePath(`/admin/blogs/${result.data.id}/edit`);
    console.log("[bilacert-admin/blogs] admin paths revalidated", {
      id: result.data.id,
    });

    return { error: null, blog: result.data };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("[bilacert-admin/blogs] upsert failed", {
      id: dataToUpsert.id,
      slug: dataToUpsert.slug,
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
