import type { ContactType } from "@bilacert/contracts/contact";
import type { SubmissionType } from "@bilacert/contracts/formSubmission";

const emailReturnPathPattern =
  /^\/admin\/(?:contacts|formSubmissions)\/[A-Za-z0-9_-]+$/;

export function getContactEmailComposeHref(
  contact: ContactType,
): string | null {
  const emailAddress = contact.email.trim();
  if (!emailAddress) return null;

  const name = contact.name?.trim() || "there";
  const service = contact.service?.trim();
  const content = [
    `Hi ${name},`,
    "",
    service
      ? `Thank you for contacting Bilacert regarding ${service}. We are following up on your enquiry.`
      : "Thank you for contacting Bilacert. We are following up on your enquiry.",
    "",
    "Kind regards,",
    "Bilacert Team",
  ].join("\n");
  const query = new URLSearchParams({
    to: emailAddress,
    subject: service ? `Bilacert enquiry: ${service}` : "Your Bilacert enquiry",
    content,
    returnTo: `/admin/contacts/${contact.id}`,
  });

  return `/admin/emails/compose?${query.toString()}`;
}

function getSubmissionTopic(submission: SubmissionType) {
  const topic =
    submission.serviceName?.trim() ||
    submission.formType.replace(/[-_]+/g, " ").trim() ||
    "Bilacert";

  return topic.replace(/\b(nrcs|loa|icasa|ecns|ecs|vhf)\b/gi, (value) =>
    value.toUpperCase(),
  );
}

export function getSubmissionEmailComposeHref(
  submission: SubmissionType,
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
    returnTo: `/admin/formSubmissions/${submission.id}`,
  });

  return `/admin/emails/compose?${query.toString()}`;
}

export function getSafeEmailReturnPath(value: unknown): string | null {
  if (typeof value !== "string") return null;

  const path = value.trim();
  return emailReturnPathPattern.test(path) ? path : null;
}
