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
    <div className="space-y-6">
      <Button variant="outline" asChild>
        <Link href="/admin/services">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Services
        </Link>
      </Button>
      <Card>
        <CardHeader>
          <CardTitle>Edit Service</CardTitle>
          <CardDescription>
            Update the details for "{service.title}".
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ServiceForm service={service} />
        </CardContent>
      </Card>
    </div>
  );
}
