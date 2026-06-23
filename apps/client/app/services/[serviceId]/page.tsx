import type {
  PricingPlan,
  ProcessStep,
  SuccessStory as TSuccessStory,
} from "@bilacert/shared/types";
import { CheckCircle2, ClipboardList, FileCheck2, ListChecks } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/service/CTASection";
import { PricingPlans } from "@/components/service/PricingPlans";
import { ProcessSteps } from "@/components/service/ProcessSteps";
import { ServiceHero } from "@/components/service/ServiceHero";
import { SuccessStory } from "@/components/service/SuccessStory";
import { WhatIsSection } from "@/components/service/WhatIsSection";
import { WhyChooseUs } from "@/components/service/WhyChooseUs";
import {
  getCachedServiceBySlug,
  getCachedServiceSlugs,
} from "../../_lib/cached-public-data";

interface Props {
  params: Promise<{ serviceId: string }>;
}

interface DetailListCardProps {
  title: string;
  description: string;
  items: string[];
  icon: React.ReactNode;
}

function DetailListCard({
  title,
  description,
  items,
  icon,
}: DetailListCardProps) {
  if (items.length === 0) return null;

  return (
    <div className="rounded-2xl bg-white p-8 shadow-sm shadow-black/5">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
        {icon}
      </div>
      <h3 className="mb-2 text-2xl font-bold text-primary">{title}</h3>
      <p className="mb-6 text-sm leading-relaxed text-gray-600">
        {description}
      </p>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ServiceDetailFields({
  includes,
  features,
  requirements,
}: {
  includes: string[];
  features: string[];
  requirements: string[];
}) {
  const hasFields =
    includes.length > 0 || features.length > 0 || requirements.length > 0;

  if (!hasFields) return null;

  return (
    <section className="bg-secondary-gray py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <h2 className="mb-4 text-3xl font-bold text-primary lg:text-4xl">
            What you get
          </h2>
          <p className="text-lg leading-relaxed text-gray-600">
            A clear breakdown of what is included, what makes this service
            valuable, and what you may need before starting.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          <DetailListCard
            title="Includes"
            description="Core deliverables and support covered by this service."
            items={includes}
            icon={<ClipboardList className="h-6 w-6" />}
          />
          <DetailListCard
            title="Features"
            description="Key benefits and service capabilities available to you."
            items={features}
            icon={<ListChecks className="h-6 w-6" />}
          />
          <DetailListCard
            title="Requirements"
            description="Information or documents usually needed to proceed."
            items={requirements}
            icon={<FileCheck2 className="h-6 w-6" />}
          />
        </div>
      </div>
    </section>
  );
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
  const includes = service.includes || [];
  const features = service.features || [];
  const requirements = service.requirements || [];

  return (
    <div className="min-h-screen">
      <ServiceHero
        title={service.title}
        subtitle={service.shortDescription || ""}
        iconName={service.icon || ""}
        imageSrc={service.image || ""}
        processingTime={service.processingTime || ""}
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

      <ServiceDetailFields
        includes={includes}
        features={features}
        requirements={requirements}
      />

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
              title: plan.title || plan.name || "Pricing Plan",
              popular: plan.popular,
              description: plan.description || "",
              features: Array.isArray(plan.features) ? plan.features : [],
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
