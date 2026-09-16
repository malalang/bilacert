import {
  createSupabaseAdminClient,
  createSupabaseServerClient,
} from "./server";

const ADMIN_ROLES = new Set([
  "admin",
  "administrator",
  "owner",
  "super-admin",
  "super_admin",
  "superadmin",
]);

export async function requireAdminUser() {
  const sessionClient = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await sessionClient.auth.getUser();

  if (authError || !user) {
    throw new Error(
      "Your admin session is not available to the server. Please sign out and log in again.",
    );
  }

  const adminClient = createSupabaseAdminClient();
  const { data: profile, error: profileError } = await adminClient
    .from("users")
    .select("role,isActive")
    .eq("id", user.id)
    .maybeSingle();

  if (profileError) {
    throw new Error(
      `Unable to verify admin permissions: ${profileError.message}`,
    );
  }

  const metadataRole =
    typeof user.app_metadata?.role === "string"
      ? user.app_metadata.role
      : undefined;
  const role = (profile?.role ?? metadataRole ?? "").trim().toLowerCase();

  if (profile?.isActive === false || !ADMIN_ROLES.has(role)) {
    throw new Error(
      "Only active administrator accounts can perform this action.",
    );
  }

  return adminClient;
}
