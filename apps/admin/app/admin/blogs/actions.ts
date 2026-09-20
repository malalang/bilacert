"use server";

import type { ActionResult } from "@bilacert/contracts/actionResult";
import { blogSchema } from "@bilacert/contracts/blog";
import {
  createBlog as createBlogMutation,
  deleteBlog as deleteBlogMutation,
  updateBlog as updateBlogMutation,
} from "@bilacert/supabase/Mutations/blogs";
import { getBlogSlugById } from "@bilacert/supabase/Queries/blogs";
import { revalidatePath } from "next/cache";
import { v4 as uuidv4 } from "uuid";
import { triggerRevalidation } from "@/lib/revalidation";

export async function upsertBlog(
  values: unknown,
): Promise<ActionResult<{ id: string }>> {
  const parsedValues = blogSchema.safeParse(values);

  if (!parsedValues.success) {
    return { ok: false, error: parsedValues.error.message };
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

  try {
    const result = isUpdate
      ? await updateBlogMutation(blogData.id, blogData)
      : await createBlogMutation(blogData);

    await triggerRevalidation(result.revalidate);

    revalidatePath("/admin/blogs");
    revalidatePath(`/admin/blogs/${result.data.id}`);
    revalidatePath(`/admin/blogs/${result.data.slug}`);
    revalidatePath(`/admin/blogs/${result.data.id}/edit`);
    revalidatePath(`/admin/blogs/${result.data.slug}/edit`);

    return { ok: true, data: { id: result.data.id } };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return { ok: false, error: `Database error: ${message}` };
  }
}

export async function deleteBlog(blogId: string): Promise<ActionResult> {
  try {
    const existingSlug = await getBlogSlugById(blogId);
    const result = await deleteBlogMutation(blogId, existingSlug);
    await triggerRevalidation(result.revalidate);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return { ok: false, error: `Database error: ${message}` };
  }

  revalidatePath("/admin/blogs");

  return { ok: true };
}
