import { z } from "zod";

export const serverEnvSchema = z.object({
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

export type ServerEnv = z.infer<typeof serverEnvSchema>;

export function validateServerEnv(raw: Record<string, string | undefined>) {
  return serverEnvSchema.safeParse(raw);
}
