import type {
  RevalidationMode,
  RevalidationRequest,
} from "@bilacert/contracts/revalidation";
import { revalidatePath, revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

type RevalidationPayload = RevalidationRequest & {
  tag?: string;
  path?: string;
};

function stringList(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value.filter(
    (item): item is string => typeof item === "string" && item.length > 0,
  );
}

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

  const body = (await request
    .json()
    .catch(() => null)) as RevalidationPayload | null;

  if (!body) {
    return NextResponse.json({ message: "Invalid JSON body" }, { status: 400 });
  }

  const tags = [
    ...stringList(body.tags),
    ...(typeof body.tag === "string" && body.tag ? [body.tag] : []),
  ];
  const paths = [
    ...stringList(body.paths),
    ...(typeof body.path === "string" && body.path ? [body.path] : []),
  ].filter((path) => path.startsWith("/"));
  const uniqueTags = [...new Set(tags)];
  const uniquePaths = [...new Set(paths)];
  const mode: RevalidationMode =
    body.mode === "immediate" ? "immediate" : "max";

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
