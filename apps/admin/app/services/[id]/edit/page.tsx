import type { ServiceRowType } from "@bilacert/contracts/service";
import { normalizeService } from "@bilacert/supabase/Queries/services";
import { createSupabaseServerClient } from "@bilacert/supabase/server";
import { ArrowLeft } from "lucide-react";
import type { Viewport } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ServiceForm from "./ServiceForm";

export const metadata = {
  title: "Edit Service | Bilacert Admin Pro",
  description: "Edit an existing regulatory service.",
};

/**
 * "missing" (no such row → 404) and "error" (the load itself failed → error
 * boundary, retryable) are different states and must not be conflated.
 */
type ServiceLoadResult =
  | { kind: "ok"; service: ServiceRowType }
  | { kind: "missing" }
  | { kind: "error" };

async function getService(id: string): Promise<ServiceLoadResult> {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("services")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error("Error fetching service:", {
      id,
      code: error.code,
      message: error.message,
    });
    return { kind: "error" };
  }

  return data
    ? { kind: "ok", service: normalizeService(data) }
    : { kind: "missing" };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1f2937" },
  ],
};
export default async function EditServicePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const slug = (await params).id;
  const result = await getService(slug);

  if (result.kind === "missing") {
    notFound();
  }
  if (result.kind === "error") {
    throw new Error(`Failed to load service ${slug}`);
  }

  const service = result.service;
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="sm" asChild>
          <Link href={`/services/${service.id}`}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Cancel Edit
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Edit Service</CardTitle>
          <CardDescription>
            You are currently editing the details for:{" "}
            <span className="font-semibold text-foreground">
              {service.title}
            </span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ServiceForm service={service} />
        </CardContent>
      </Card>
    </div>
  );
}
