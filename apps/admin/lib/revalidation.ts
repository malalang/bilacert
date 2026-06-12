import type { RevalidationRequest } from "@bilacert/supabase/cache";

export async function triggerRevalidation(request: RevalidationRequest) {
  const clientUrl = process.env.NEXT_PUBLIC_CLIENT_URL;
  const secret = process.env.REVALIDATION_SECRET;

  if (!clientUrl || !secret) {
    console.warn(
      "NEXT_PUBLIC_CLIENT_URL or REVALIDATION_SECRET is not configured. Skipping client revalidation.",
    );
    return { ok: false, skipped: true };
  }

  try {
    const response = await fetch(new URL("/api/revalidate", clientUrl), {
      method: "POST",
      headers: {
        Authorization: `Bearer ${secret}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
      cache: "no-store",
    });

    if (!response.ok) {
      console.error(
        "Client revalidation failed:",
        response.status,
        await response.text(),
      );
      return { ok: false, skipped: false };
    }

    return { ok: true, skipped: false };
  } catch (error) {
    console.error("Client revalidation request failed:", error);
    return { ok: false, skipped: false };
  }
}
