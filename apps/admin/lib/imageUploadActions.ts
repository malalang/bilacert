"use server";

import type { ActionResult } from "@bilacert/contracts/actionResult";
import {
  type AdminImageMimeTypeType,
  adminImageMaxBytes,
  adminImageMimeTypes,
  adminImageUploadSchema,
} from "@bilacert/contracts/imageUpload";
import { requireAdminUser } from "@bilacert/supabase/auth";

const imageSignatures: readonly {
  mimeType: AdminImageMimeTypeType;
  bytes: readonly number[];
}[] = [
  {
    mimeType: "image/png",
    bytes: [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a],
  },
  { mimeType: "image/jpeg", bytes: [0xff, 0xd8, 0xff] },
  { mimeType: "image/gif", bytes: [0x47, 0x49, 0x46, 0x38] },
];

async function detectImageMimeType(file: File) {
  const header = new Uint8Array(await file.slice(0, 12).arrayBuffer());
  const signature = imageSignatures.find(({ bytes }) =>
    bytes.every((byte, index) => header[index] === byte),
  );
  return signature?.mimeType ?? null;
}

function sanitizeFileName(fileName: string) {
  const baseName = fileName.split(/[\\/]/).pop() ?? "";
  const sanitized = baseName
    .replace(/[^a-zA-Z0-9._-]/g, "_")
    .replace(/^\.+/, "")
    .slice(0, 100);
  return sanitized.length > 0 ? sanitized : "image";
}

// Uploads an admin image to storage. The file travels as FormData so the write
// happens on the server, behind the same admin guard as every other mutation.
// No revalidation is needed: the upload only stages a URL into the caller's
// form field, and the row write that publishes that URL carries its own
// revalidation.
export async function uploadAdminImage(
  formData: FormData,
): Promise<ActionResult<{ url: string }>> {
  try {
    const supabase = await requireAdminUser();

    const file = formData.get("file");
    if (!(file instanceof File)) {
      return { ok: false, error: "No image file was received." };
    }

    const parsedUpload = adminImageUploadSchema.safeParse({
      bucket: formData.get("bucket"),
    });
    if (!parsedUpload.success) {
      return { ok: false, error: "That storage bucket is not allowed." };
    }

    if (file.size === 0) {
      return { ok: false, error: "The selected file is empty." };
    }

    if (file.size > adminImageMaxBytes) {
      return {
        ok: false,
        error: `Images must be ${adminImageMaxBytes / (1024 * 1024)}MB or smaller.`,
      };
    }

    const mimeType = await detectImageMimeType(file);
    if (!mimeType || !adminImageMimeTypes.includes(mimeType)) {
      return {
        ok: false,
        error: `Unsupported image type. Upload one of: ${adminImageMimeTypes.join(", ")}.`,
      };
    }

    const filePath = `${Date.now()}_${sanitizeFileName(file.name)}`;

    const { error } = await supabase.storage
      .from(parsedUpload.data.bucket)
      .upload(filePath, file, { contentType: mimeType, upsert: false });

    if (error) {
      return { ok: false, error: error.message };
    }

    const {
      data: { publicUrl },
    } = supabase.storage.from(parsedUpload.data.bucket).getPublicUrl(filePath);

    return { ok: true, data: { url: publicUrl } };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return { ok: false, error: `Upload error: ${message}` };
  }
}
