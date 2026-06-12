"use server";

import {
  deleteBlog as deleteBlogMutation,
  upsertBlog as upsertBlogMutation,
} from "@bilacert/supabase/Mutations/blogs";
import { revalidatePath } from "next/cache";
import { v4 as uuidv4 } from "uuid";
import { triggerRevalidation } from "@/lib/revalidation";
import { blogSchema } from "./schema";

export async function upsertBlog(values: unknown) {
  const parsedValues = blogSchema.safeParse(values);

  if (!parsedValues.success) {
    return { error: parsedValues.error.message };
  }

  const { id, ...rest } = parsedValues.data;

  const dataToUpsert = id ? { ...rest, id } : { ...rest, id: uuidv4() };

  try {
    const result = await upsertBlogMutation(dataToUpsert);
    await triggerRevalidation(result.revalidate);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return { error: `Database error: ${message}` };
  }

  revalidatePath("/admin/blogs");

  return { error: null };
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
