import { createBrowserClient } from "@supabase/ssr";
import type { Database } from "./supabaseType";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export const createSupabaseBrowserClient = () => {
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Supabase URL and/or anonymous key not provided.");
  }

  return createBrowserClient<Database>(supabaseUrl, supabaseAnonKey);
};
