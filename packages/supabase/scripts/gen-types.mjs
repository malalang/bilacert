import { spawnSync } from "node:child_process";
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const projectId = process.env.SUPABASE_PROJECT_ID;
const supabaseArgs = ["gen", "types", "typescript", "--project-id", projectId];

if (!projectId || !/^[a-z0-9]{20}$/.test(projectId)) {
  console.error(
    "Set SUPABASE_PROJECT_ID to the 20-character hosted Supabase project reference before generating types.",
  );
  process.exit(1);
}

const windowsCommand = `supabase ${supabaseArgs.join(" ")}`;
const result = spawnSync(
  process.platform === "win32"
    ? (process.env.ComSpec ?? "cmd.exe")
    : "supabase",
  process.platform === "win32"
    ? ["/d", "/s", "/c", windowsCommand]
    : supabaseArgs,
  {
    encoding: "utf8",
    maxBuffer: 16 * 1024 * 1024,
    stdio: ["inherit", "pipe", "inherit"],
    timeout: 120_000,
  },
);

if (result.error) {
  if (result.error.code === "ETIMEDOUT") {
    console.error("Supabase CLI timed out; existing types were not changed.");
    process.exit(1);
  }
  throw result.error;
}

if (result.status !== 0) {
  process.exit(result.status ?? 1);
}

if (!result.stdout.trim()) {
  console.error(
    "Supabase CLI returned empty type output; existing types were not changed.",
  );
  process.exit(1);
}

const outputFile = fileURLToPath(
  new URL("../src/supabaseType.ts", import.meta.url),
);
writeFileSync(outputFile, result.stdout);

// The generator's inline-member punctuation varies by CLI version; keep the
// regenerated file in the repository's Biome formatting so `pnpm lint` stays
// green after every regeneration. The path stays package-relative and
// unquoted: a nested cmd spawn folds the quotes into the path (os error 123).
const format = spawnSync(
  process.platform === "win32"
    ? (process.env.ComSpec ?? "cmd.exe")
    : "pnpm",
  process.platform === "win32"
    ? ["/d", "/s", "/c", "pnpm exec biome format --write src/supabaseType.ts"]
    : ["exec", "biome", "format", "--write", "src/supabaseType.ts"],
  {
    encoding: "utf8",
    stdio: ["inherit", "inherit", "inherit"],
  },
);

if (format.status !== 0) {
  process.exit(format.status ?? 1);
}
