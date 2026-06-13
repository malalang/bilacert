import { createSupabaseAdminClient } from "../admin";
import { CACHE_TAGS, mutationResult } from "../cache";
import type { Database } from "../supabaseType";

type SubmissionUpdate =
  Database["public"]["Tables"]["form_submissions"]["Update"];

export async function updateFormSubmission(id: string, data: SubmissionUpdate) {
  const supabase = createSupabaseAdminClient();
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
