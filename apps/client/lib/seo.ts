import type { Metadata } from "next";

interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  url?: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  url,
  image = "/logo.jpg",
  type = "website",
  publishedTime,
  modifiedTime,
  author = "Bilacert",
}: SEOConfig): Metadata {
  const baseUrl = "https://bilacert.co.za";
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl;
  const fullImageUrl = image.startsWith("http") ? image : `${baseUrl}${image}`;

  return {
    title,
    description,
    keywords: [
      ...keywords,
      "ICASA",
      "NRCS",
      "compliance",
      "South Africa",
      "regulatory approval",
      "Bilacert",
    ],
    authors: [{ name: author }],
    creator: author,
    publisher: "Bilacert",
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      title,
      description,
      url: fullUrl,
      siteName: "Bilacert",
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_ZA",
      type,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [fullImageUrl],
      creator: "@bilacert",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: "your-google-verification-code",
      // Add other verification codes as needed
    },
  };
}

// Common SEO configurations for different page types
export const seoConfigs = {
  home: {
    title: "Bilacert - Your Compliance Partner | ICASA & NRCS Approvals",
    description:
      "Bilacert simplifies ICASA and NRCS LOA compliance for South African businesses. Expert guidance for type approvals, licensing, and regulatory compliance.",
    keywords: [
      "ICASA type approval South Africa",
      "NRCS LOA applications",
      "radio dealer licensing",
      "ECS ECNS licensing",
      "VHF radio license",
      "compliance consultant South Africa",
    ],
    url: "/",
  },

  about: {
    title: "About Us - Bilacert Compliance Experts",
    description:
      "Learn about Bilacert, South Africa's trusted compliance partner. We simplify ICASA and NRCS approvals with our values of simplicity, clarity, efficiency, and support.",
    keywords: [
      "about Bilacert",
      "compliance consultant South Africa",
      "ICASA NRCS experts",
      "regulatory compliance team",
    ],
    url: "/about",
  },

  services: {
    title: "Our Services - ICASA & NRCS Compliance Solutions",
    description:
      "Comprehensive ICASA and NRCS compliance services including type approvals, licensing, and regulatory support. Expert guidance for South African businesses.",
    keywords: [
      "ICASA type approval services",
      "NRCS LOA applications",
      "radio dealer licensing",
      "ECS ECNS licensing services",
    ],
    url: "/services",
  },

  contact: {
    title: "Contact Us - Get Expert Compliance Guidance",
    description:
      "Get in touch with Bilacert for expert ICASA and NRCS compliance guidance. Call 075 430 4433 or email info@bilacert.co.za for a free consultation.",
    keywords: [
      "contact Bilacert",
      "ICASA compliance consultation",
      "NRCS LOA consultation",
      "free compliance consultation",
    ],
    url: "/contact",
  },

  faq: {
    title: "FAQ - ICASA & NRCS Compliance Questions Answered",
    description:
      "Find answers to common questions about ICASA and NRCS compliance, type approvals, licensing, and regulatory requirements in South Africa.",
    keywords: [
      "ICASA FAQ",
      "NRCS LOA questions",
      "compliance FAQ South Africa",
      "type approval questions",
    ],
    url: "/faq",
  },

  blog: {
    title: "Blog - ICASA & NRCS Compliance Insights",
    description:
      "Stay updated with the latest ICASA and NRCS compliance news, guides, and insights. Expert articles on type approvals, licensing, and regulatory changes in South Africa.",
    keywords: [
      "ICASA compliance blog",
      "NRCS LOA news",
      "compliance articles South Africa",
      "type approval guides",
    ],
    url: "/blog",
  },
};

// Service-specific SEO configurations
export const serviceSeoConfigs = {
  "icasa-type-approvals": {
    title: "ICASA Type Approvals - Expert Certification Services",
    description:
      "Expert ICASA type approval services for South African businesses. We handle Standard, Simplified, Tested, and Untested approvals with fast processing and comprehensive support.",
    keywords: [
      "ICASA type approval",
      "ICASA certification",
      "telecommunications approval",
      "radio frequency approval",
    ],
    url: "/services/icasa-type-approvals",
  },

  "nrcs-loa-applications": {
    title: "NRCS LOA Applications - Expert Certification Services",
    description:
      "Professional NRCS Letter of Authority (LOA) application services for South African businesses. Expert guidance for electrical and electronic product compliance.",
    keywords: [
      "NRCS LOA",
      "NRCS Letter of Authority",
      "NRCS certification",
      "electrical product approval",
    ],
    url: "/services/nrcs-loa-applications",
  },

  "radio-dealer-licensing": {
    title: "Radio Dealer Licensing - ICASA License Services",
    description:
      "Complete Radio Dealer License services for South African businesses selling radio communication equipment. Expert ICASA licensing support and compliance guidance.",
    keywords: [
      "radio dealer license",
      "ICASA radio license",
      "radio communication license",
      "two-way radio license",
    ],
    url: "/services/radio-dealer-licensing",
  },

  "class-ecs-ecns-licensing": {
    title: "Class ECS/ECNS Licensing - Telecommunications License Services",
    description:
      "Professional ECS and ECNS licensing services for South African telecommunications providers. Expert guidance for Electronic Communications Service and Network Service licenses.",
    keywords: [
      "ECS license",
      "ECNS license",
      "electronic communications service",
      "telecommunications license",
    ],
    url: "/services/class-ecs-ecns-licensing",
  },

  "license-exemptions": {
    title: "License Exemptions - ECS/ECNS Exemption Services",
    description:
      "Expert ECS/ECNS license exemption services for South African businesses. We help determine if your business qualifies for ICASA license exemptions and provide compliance documentation.",
    keywords: [
      "license exemption",
      "ECS exemption",
      "ECNS exemption",
      "ICASA exemption",
    ],
    url: "/services/license-exemptions",
  },

  "ski-boat-vhf-licensing": {
    title: "Ski Boat VHF Licensing - Marine Radio License Services",
    description:
      "Professional VHF radio licensing services for South African marine vessels including ski boats, yachts, and recreational watercraft. Expert ICASA maritime compliance support.",
    keywords: [
      "VHF radio license",
      "ski boat VHF",
      "marine radio license",
      "boat VHF license",
    ],
    url: "/services/ski-boat-vhf-licensing",
  },
};
