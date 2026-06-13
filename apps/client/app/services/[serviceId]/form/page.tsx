import { notFound } from "next/navigation";
import { getCachedServiceBySlug } from "@/app/_lib/cached-public-data";
import ServiceApplicationForm from "./ServiceApplicationForm";

export default async function ServiceFormPage({
  params,
}: {
  params: Promise<{ serviceId: string }>;
}) {
  const { serviceId } = await params;
  const service = await getCachedServiceBySlug(serviceId);

  if (!service) {
    notFound();
  }

  return <ServiceApplicationForm service={service} serviceSlug={serviceId} />;
}
