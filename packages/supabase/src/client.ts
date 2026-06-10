import { createBrowserClient } from "@supabase/ssr";
import type { Database } from "./supabaseType";

export const createSupabaseBrowserClient = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Supabase URL and/or anonymous key not provided.");
  }

  return createBrowserClient<Database>(supabaseUrl, supabaseAnonKey);
};
