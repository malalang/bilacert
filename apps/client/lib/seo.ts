import type { Metadata } from "next";
import { businessInfo } from "./business";

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
  author = businessInfo.defaultBlogAuthor,
}: SEOConfig): Metadata {
  const baseUrl = businessInfo.domain;
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
      businessInfo.name,
    ],
    authors: [{ name: author }],
    creator: author,
    publisher: businessInfo.name,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      title,
      description,
      url: fullUrl,
      siteName: businessInfo.name,
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
      creator: businessInfo.social.twitterCreator,
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
