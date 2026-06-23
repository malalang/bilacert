import type { RevalidationRequest } from "@bilacert/contracts/revalidation";

const fallbackClientUrls = [
  "https://bilacert-client.malalang.co.za",
  "https://bilacert-malalang.vercel.app",
];

function splitClientUrls(value: string | undefined) {
  return (
    value
      ?.split(",")
      .map((url) => url.trim())
      .filter((url) => url.length > 0) ?? []
  );
}

function getClientRevalidationUrl(clientUrl: string) {
  const trimmedClientUrl = clientUrl.trim();
  const normalizedClientUrl = trimmedClientUrl.match(/^https?:\/\//)
    ? trimmedClientUrl
    : `https://${trimmedClientUrl}`;
  const url = new URL(normalizedClientUrl);

  if (url.pathname.endsWith("/api/revalidate")) {
    return url;
  }

  return new URL("/api/revalidate", url);
}

function getClientRevalidationUrls() {
  const configuredUrls = [
    ...splitClientUrls(process.env.CLIENT_REVALIDATION_URL),
    ...splitClientUrls(process.env.NEXT_PUBLIC_CLIENT_URL),
    ...splitClientUrls(process.env.BILACERT_CLIENT_URL),
  ];

  const urls = [...configuredUrls, ...fallbackClientUrls]
    .map((clientUrl) => getClientRevalidationUrl(clientUrl).toString())
    .filter((url, index, allUrls) => allUrls.indexOf(url) === index);

  return urls.map((url) => new URL(url));
}

export async function triggerRevalidation(request: RevalidationRequest) {
  const secret = process.env.REVALIDATION_SECRET;
  const revalidationUrls = getClientRevalidationUrls();

  if (!secret) {
    console.warn(
      "REVALIDATION_SECRET is not configured. Skipping client revalidation.",
    );
    return { ok: false, skipped: true };
  }

  for (const revalidationUrl of revalidationUrls) {
    try {
      const response = await fetch(revalidationUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${secret}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(request),
        cache: "no-store",
      });

      if (response.ok) {
        return {
          ok: true,
          skipped: false,
          url: revalidationUrl.origin,
        };
      }

      console.error(
        "Client revalidation failed:",
        revalidationUrl.origin,
        response.status,
        await response.text(),
      );
    } catch (error) {
      console.error(
        "Client revalidation request failed:",
        revalidationUrl.origin,
        error,
      );
    }
  }

  return { ok: false, skipped: false };
}
