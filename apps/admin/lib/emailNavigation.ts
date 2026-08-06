import type { Submission } from "@bilacert/shared/types";

const submissionDetailPathPattern =
  /^\/admin\/form_submissions\/[A-Za-z0-9_-]+$/;

function getSubmissionTopic(submission: Submission) {
  const topic =
    submission.serviceName?.trim() ||
    submission.formType.replace(/[-_]+/g, " ").trim() ||
    "Bilacert";

  return topic.replace(/\b(nrcs|loa|icasa|ecns|ecs|vhf)\b/gi, (value) =>
    value.toUpperCase(),
  );
}

export function getSubmissionEmailComposeHref(
  submission: Submission,
): string | null {
  const emailAddress = submission.email.trim();
  if (!emailAddress) return null;

  const topic = getSubmissionTopic(submission);
  const company = submission.company?.trim();
  const content = [
    `Hi ${submission.fullName},`,
    "",
    `We have received your submission for ${topic}.`,
    ...(company ? ["", `Company: ${company}`] : []),
    "",
    "Kind regards,",
    "Bilacert Team",
  ].join("\n");
  const query = new URLSearchParams({
    to: emailAddress,
    subject: `Bilacert submission: ${topic}`,
    content,
    returnTo: `/admin/form_submissions/${submission.id}`,
  });

  return `/admin/emails/compose?${query.toString()}`;
}

export function getSafeEmailReturnPath(value: unknown): string | null {
  if (typeof value !== "string") return null;

  const path = value.trim();
  return submissionDetailPathPattern.test(path) ? path : null;
}
