import { z } from "zod";

// The only storage buckets the admin image uploaders may write to, taken from
// the `bucket` props of every `ImageUpload` call site in apps/admin. A
// browser-supplied bucket is rejected on the server unless it is in this list.
export const adminImageBuckets = ["blogs", "services"] as const;

export const adminImageBucketSchema = z.enum(adminImageBuckets);

export type AdminImageBucketType = z.infer<typeof adminImageBucketSchema>;

export const adminImageUploadSchema = z.object({
  bucket: adminImageBucketSchema,
});

export type AdminImageUploadType = z.infer<typeof adminImageUploadSchema>;

// Limits for one admin image object. The browser `accept` attribute is advisory,
// so the server enforces both of these against the received bytes.
// 4 MB is the documented per-image ceiling and stays under the 4.5 MB
// request-body cap of the deployment platform's serverless functions.
export const adminImageMaxBytes = 4 * 1024 * 1024;

export const adminImageMimeTypes = [
  "image/png",
  "image/jpeg",
  "image/gif",
] as const;

export type AdminImageMimeTypeType = (typeof adminImageMimeTypes)[number];
