import Script from "next/script";
import { businessInfo } from "@/lib/business";

interface StructuredDataProps {
  type: "Organization" | "Service" | "FAQ" | "BreadcrumbList";
  data: Record<string, unknown>;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    switch (type) {
      case "Organization":
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: businessInfo.legalName,
          alternateName: businessInfo.name,
          url: businessInfo.domain,
          logo: businessInfo.logoUrl,
          description: businessInfo.description,
          address: {
            "@type": "PostalAddress",
            addressCountry: "ZA",
            addressRegion: businessInfo.serviceArea,
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: businessInfo.telephone,
            contactType: "customer service",
            email: businessInfo.email,
          },
          sameAs: businessInfo.social.sameAs,
          foundingDate: "2024",
          numberOfEmployees: "1-10",
          industry: "Compliance Consulting",
          serviceArea: {
            "@type": "Country",
            name: businessInfo.serviceArea,
          },
        };

      case "Service":
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          name: data.name,
          description: data.description,
          provider: {
            "@type": "Organization",
            name: businessInfo.legalName,
            url: businessInfo.domain,
          },
          serviceType: data.serviceType,
          areaServed: {
            "@type": "Country",
            name: businessInfo.serviceArea,
          },
          offers: {
            "@type": "Offer",
            price: data.price,
            priceCurrency: "ZAR",
            availability: "https://schema.org/InStock",
          },
        };

      case "FAQ":
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: (
            data.questions as Array<{ question: string; answer: string }>
          ).map((q) => ({
            "@type": "Question",
            name: q.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: q.answer,
            },
          })),
        };

      case "BreadcrumbList":
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: (
            data.items as Array<{ name: string; url: string }>
          ).map((item, index: number) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url,
          })),
        };

      default:
        return {};
    }
  };

  const structuredData = JSON.stringify(getStructuredData(), null, 2);

  return (
    <Script
      id={`structured-data-${type.toLowerCase()}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: structuredData }}
    />
  );
}
