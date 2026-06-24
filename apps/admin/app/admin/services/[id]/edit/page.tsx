import type { Service } from "@bilacert/contracts/service";
import { createSupabaseAdminClient } from "@bilacert/supabase/admin";
import { normalizeService } from "@bilacert/supabase/Queries/services";
import { ArrowLeft } from "lucide-react";
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

async function getService(id: string): Promise<Service | null> {
  const supabase = createSupabaseAdminClient();
  const { data, error } = await supabase
    .from("services")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error("Error fetching service:", error);
    return null;
  }

  return data ? normalizeService(data) : null;
}

export default async function EditServicePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const slug = (await params).id;
  const service = await getService(slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="sm" asChild>
          <Link href={`/admin/services/${service.id}`}>
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
