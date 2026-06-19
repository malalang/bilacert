import {
  revalidationPayloadSchema,
  type RevalidationMode,
} from "@bilacert/contracts/revalidation";
import { revalidatePath, revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const secret = process.env.REVALIDATION_SECRET;

  if (!secret) {
    return NextResponse.json(
      { message: "Revalidation secret not configured" },
      { status: 500 },
    );
  }

  if (request.headers.get("authorization") !== `Bearer ${secret}`) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const json = await request.json().catch(() => null);
  const parsed = revalidationPayloadSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json(
      { message: "Invalid revalidation payload" },
      { status: 400 },
    );
  }

  const body = parsed.data;
  const tags = [
    ...(body.tags ?? []),
    ...(body.tag ? [body.tag] : []),
  ].filter((tag) => tag.length > 0);
  const paths = [
    ...(body.paths ?? []),
    ...(body.path ? [body.path] : []),
  ].filter((path) => path.length > 0 && path.startsWith("/"));
  const uniqueTags = [...new Set(tags)];
  const uniquePaths = [...new Set(paths)];
  const mode: RevalidationMode = body.mode === "immediate" ? "immediate" : "max";

  if (uniqueTags.length === 0 && uniquePaths.length === 0) {
    return NextResponse.json(
      { message: "At least one tag or path is required" },
      { status: 400 },
    );
  }

  for (const tag of uniqueTags) {
    if (mode === "immediate") {
      revalidateTag(tag, { expire: 0 });
    } else {
      revalidateTag(tag, "max");
    }
  }

  for (const path of uniquePaths) {
    revalidatePath(path);
  }

  return NextResponse.json({
    revalidated: true,
    tags: uniqueTags,
    paths: uniquePaths,
    mode,
    now: Date.now(),
  });
}
