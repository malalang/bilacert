import { createSupabaseServerClient } from "../server";

export async function getFormSubmissionById(id: string) {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("form_submissions")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw new Error(error.message);
  return data;
}
