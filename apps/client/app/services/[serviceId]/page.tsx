import type {
  PricingPlan,
  ProcessStep,
  SuccessStory as TSuccessStory,
} from "@bilacert/shared/types";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/service/CTASection";
import { PricingPlans } from "@/components/service/PricingPlans";
import { ProcessSteps } from "@/components/service/ProcessSteps";
import { ServiceHero } from "@/components/service/ServiceHero";
import { SuccessStory } from "@/components/service/SuccessStory";
import { WhatIsSection } from "@/components/service/WhatIsSection";
import { WhyChooseUs } from "@/components/service/WhyChooseUs";
import { getCachedServiceBySlug, getCachedServiceSlugs } from "../../_lib/cached-public-data";

interface Props {
  params: Promise<{ serviceId: string }>;
}

export async function generateStaticParams() {
  const slugs = await getCachedServiceSlugs();
  return slugs.map((item) => ({ serviceId: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { serviceId } = await params;
  const service = await getCachedServiceBySlug(serviceId);

  if (!service) {
    return {
      title: "Service Not Found - Bilacert",
    };
  }

  return {
    title: service.seoTitle || `${service.title} - Bilacert`,
    description: service.seoDescription || service.description,
    keywords: service.seoKeywords || [
      service.title.toLowerCase(),
      ...(service.category?.split(", ").map((c: string) => c.toLowerCase()) ||
        []),
      "licensing",
      "certification",
      "ICASA",
      "South Africa",
    ],
    openGraph: {
      title: service.seoTitle || service.title,
      description: service.seoDescription || service.shortDescription,
      url: `https://bilacert.co.za/services/${serviceId}`,
      type: "website",
      images: service.image ? [{ url: service.image }] : [],
    },
    alternates: {
      canonical: `https://bilacert.co.za/services/${serviceId}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { serviceId } = await params;
  const service = await getCachedServiceBySlug(serviceId);

  if (!service) {
    notFound();
  }

  const formPath = `/services/${serviceId}/form`;

  return (
    <div className="min-h-screen">
      <ServiceHero
        title={service.title}
        subtitle={service.shortDescription || ""}
        iconName={service.icon || ""}
        imageSrc={service.image || ""}
        processing_time={service.processingTime || ""}
        formPath={formPath}
        phone="075 430 4433"
      />

      {service.content && (
        <WhatIsSection
          title={`What is this ${service.title}?`}
          firstParagraph={service.content}
          secondParagraph=""
          checkpoints={[]}
        />
      )}

      <WhyChooseUs />

      {service.processSteps && (
        <ProcessSteps
          title="Our Process"
          subtitle="A streamlined approach to get you certified."
          steps={(service.processSteps as unknown as ProcessStep[]).map(
            (step) => ({ ...step, step: step.step.toString() }),
          )}
        />
      )}

      {service.pricingPlans && (
        <PricingPlans
          title="Pricing Plans"
          subtitle="Choose the best plan for your needs."
          plans={(service.pricingPlans as unknown as PricingPlan[]).map(
            (plan) => ({
              ...plan,
              title: plan.name,
              popular: false,
              description: plan.description || "",
            }),
          )}
          formPath={formPath}
        />
      )}

      {service.successStory && (
        <SuccessStory {...(service.successStory as TSuccessStory)} />
      )}

      <CTASection
        heading="Ready to get started?"
        description="Contact us today for a free consultation."
        primaryCTA={{ label: "Contact Us", href: "/contact" }}
        secondaryCTA={{ label: "Learn More", href: "/about" }}
      />
    </div>
  );
}
