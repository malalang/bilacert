import { createServerClient } from "@supabase/ssr";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const createClient = async () => {
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      "Missing Supabase Environment Variables: NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY",
    );
  }

  let cookieStore;
  try {
    const { cookies } = await import("next/headers");
    cookieStore = await cookies();
  } catch (e) {
    // cookies() can only be called inside a request (e.g. Server Component, API Route)
    // During static generation (build time), it will throw an error.
  }

  return createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        return cookieStore ? cookieStore.getAll() : [];
      },
      setAll(
        cookiesToSet: Array<{
          name: string;
          value: string;
          options?: Record<string, any>;
        }>,
      ) {
        if (!cookieStore) return;
        try {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options),
          );
        } catch {
          // This is expected when called from Server Components
        }
      },
    },
  });
};
