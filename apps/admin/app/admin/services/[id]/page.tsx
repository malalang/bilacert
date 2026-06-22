import type { Service } from "@bilacert/contracts/service";
import { createSupabaseBrowserClient } from "@bilacert/supabase/client";
import { normalizeService } from "@bilacert/supabase/Queries/services";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetails from "./ServiceDetails";
import ServiceSubmissionAnalysis from "./ServiceSubmissionAnalysis";

const supabase = createSupabaseBrowserClient();

async function getService(id: string): Promise<Service | null> {
  const { data, error } = await supabase
    .from("services")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !data) {
    return null;
  }

  return normalizeService(data);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const service = await getService(id);
  if (!service) {
    return {
      title: "Service Not Found",
    };
  }
  return {
    title: `${service.title} | Bilacert Admin Pro`,
  };
}

export default async function ServiceDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const service = await getService(id);

  if (!service) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <ServiceDetails service={service} />
      <ServiceSubmissionAnalysis service={service} />
    </div>
  );
}
