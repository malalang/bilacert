import "server-only";

import { createSupabaseServerClient } from "@bilacert/supabase/server";

const ADMIN_ROLES = new Set([
  "admin",
  "administrator",
  "owner",
  "super-admin",
  "super_admin",
  "superadmin",
]);

export type AdminAccessResult =
  | {
      allowed: true;
      userId: string;
    }
  | {
      allowed: false;
      reason: "unauthenticated" | "forbidden" | "unavailable";
      message: string;
    };

export async function getAdminAccess(): Promise<AdminAccessResult> {
  let supabase: Awaited<ReturnType<typeof createSupabaseServerClient>>;

  try {
    supabase = await createSupabaseServerClient();
  } catch (error) {
    console.error("[bilacert-admin/auth] Supabase client unavailable", {
      message: error instanceof Error ? error.message : "Unknown error",
    });
    return {
      allowed: false,
      reason: "unavailable",
      message: "Admin authentication is not configured on the server.",
    };
  }

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return {
      allowed: false,
      reason: "unauthenticated",
      message: "Your admin session has expired. Please sign in again.",
    };
  }

  const { data: profile, error: profileError } = await supabase
    .from("users")
    .select("role,isActive")
    .eq("id", user.id)
    .maybeSingle();

  if (profileError) {
    console.error("[bilacert-admin/auth] Profile verification failed", {
      userId: user.id,
      code: profileError.code,
      message: profileError.message,
    });
    return {
      allowed: false,
      reason: "unavailable",
      message: "The server could not verify your administrator permissions.",
    };
  }

  const metadataRole =
    typeof user.app_metadata?.role === "string"
      ? user.app_metadata.role
      : undefined;
  const role = (profile?.role ?? metadataRole ?? "").trim().toLowerCase();

  if (profile?.isActive === false || !ADMIN_ROLES.has(role)) {
    return {
      allowed: false,
      reason: "forbidden",
      message: "Only active administrator accounts can manage email.",
    };
  }

  return { allowed: true, userId: user.id };
}
