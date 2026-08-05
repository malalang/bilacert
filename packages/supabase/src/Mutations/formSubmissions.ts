import { CACHE_TAGS, mutationResult } from "../cache";
import { createSupabaseServerClient } from "../server";
import type { Database } from "../supabaseType";

type SubmissionInsert =
  Database["public"]["Tables"]["form_submissions"]["Insert"];
type SubmissionUpdate =
  Database["public"]["Tables"]["form_submissions"]["Update"];

export async function createFormSubmission(data: SubmissionInsert) {
  const supabase = await createSupabaseServerClient();
  const { data: submission, error } = await supabase
    .from("form_submissions")
    .insert([data])
    .select("*")
    .single();

  if (error) throw new Error(error.message);

  return mutationResult(submission, {
    tags: [CACHE_TAGS.formSubmissions],
    mode: "immediate",
  });
}

export async function updateFormSubmission(id: string, data: SubmissionUpdate) {
  const supabase = await createSupabaseServerClient();
  const { data: submission, error } = await supabase
    .from("form_submissions")
    .update(data)
    .eq("id", id)
    .select("*")
    .single();

  if (error) throw new Error(error.message);

  return mutationResult(submission, {
    tags: [CACHE_TAGS.formSubmissions],
    mode: "immediate",
  });
}
