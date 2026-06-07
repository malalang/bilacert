"use server";

import { createSupabaseAdminClient } from "@bilacert/supabase";
import { blogSchema } from "./schema";
import { revalidatePath } from "next/cache";
import { v4 as uuidv4 } from "uuid";

export async function upsertBlog(values: unknown) {
  const supabase = createSupabaseAdminClient();
  const parsedValues = blogSchema.safeParse(values);

  if (!parsedValues.success) {
    return { error: parsedValues.error.message };
  }

  const { id, ...rest } = parsedValues.data;

  const dataToUpsert = id ? { ...rest, id } : { ...rest, id: uuidv4() };

  const { error } = await supabase
    .from("blog_posts")
    .upsert(dataToUpsert)
    .select("*")
    .single();

  if (error) {
    return { error: `Database error: ${error.message}` };
  }

  revalidatePath("/admin/blogs");
  revalidatePath("/blog");

  return { error: null };
}

export async function deleteBlog(blogId: string) {
  const supabase = createSupabaseAdminClient();

  const { error } = await supabase.from("blog_posts").delete().eq("id", blogId);

  if (error) {
    return { error: `Database error: ${error.message}` };
  }

  revalidatePath("/admin/blogs");
  revalidatePath("/blog");

  return { error: null };
}
