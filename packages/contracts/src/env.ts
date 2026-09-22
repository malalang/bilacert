import { z } from "zod";

export const envSchema = z.object({
  NEXT_PUBLIC_SUPABASE_URL: z.string().url("Supabase URL is required"),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z
    .string()
    .min(1, "Supabase anon key is required"),
  SUPABASE_URL: z.string().url().optional(),
  SUPABASE_SECRET_KEY: z.string().min(1).optional(),
  SUPABASE_SERVICE_ROLE_KEY: z.string().min(1).optional(),
  REVALIDATION_SECRET: z.string().min(1).optional(),
  CLIENT_REVALIDATION_URL: z.string().optional(),
  NEXT_PUBLIC_CLIENT_URL: z.string().optional(),
  BILACERT_CLIENT_URL: z.string().optional(),
  PEXELS_API_KEY: z.string().optional(),
});

export type Env = z.infer<typeof envSchema>;

export function getEnv(): Env {
  const raw: Record<string, string | undefined> = {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_SECRET_KEY: process.env.SUPABASE_SECRET_KEY,
    SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
    REVALIDATION_SECRET: process.env.REVALIDATION_SECRET,
    CLIENT_REVALIDATION_URL: process.env.CLIENT_REVALIDATION_URL,
    NEXT_PUBLIC_CLIENT_URL: process.env.NEXT_PUBLIC_CLIENT_URL,
    BILACERT_CLIENT_URL: process.env.BILACERT_CLIENT_URL,
    PEXELS_API_KEY: process.env.PEXELS_API_KEY,
  };
  const result = envSchema.safeParse(raw);
  return result.success ? result.data : (raw as unknown as Env);
}
