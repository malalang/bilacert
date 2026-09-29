import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { getCachedServiceBySlug } from "@/app/_lib/cached-public-data";
import ServiceApplicationForm from "./ServiceApplicationForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ serviceId: string }>;
}): Promise<Metadata> {
  const { serviceId } = await params;
  const service = await getCachedServiceBySlug(serviceId);

  if (!service) {
    return {
      title: "Service Form Not Found - Bilacert",
    };
  }

  return {
    title: `Apply for ${service.seoTitle || service.title} - Bilacert`,
    description:
      service.seoDescription ||
      `Apply online for the ${service.title} with Bilacert's expert compliance guidance.`,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `https://bilacert.co.za/services/${serviceId}/form`,
    },
  };
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
