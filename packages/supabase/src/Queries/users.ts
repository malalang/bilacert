import { createSupabaseAdminClient } from "../admin";

export async function getUserRole(userId: string) {
  const supabase = createSupabaseAdminClient();
  const { data, error } = await supabase
    .from("users")
    .select("role")
    .eq("id", userId)
    .single();

  if (error) return null;
  return data?.role || null;
}
