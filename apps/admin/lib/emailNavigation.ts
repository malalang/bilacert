const submissionDetailPathPattern =
  /^\/admin\/form_submissions\/[A-Za-z0-9_-]+$/;

export function getSafeEmailReturnPath(value: unknown): string | null {
  if (typeof value !== "string") return null;

  const path = value.trim();
  return submissionDetailPathPattern.test(path) ? path : null;
}
