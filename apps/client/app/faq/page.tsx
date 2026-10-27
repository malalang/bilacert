import type { Metadata, Viewport } from "next";
import { viewportThemeColor } from "@/lib/theme";
import FAQContent from "./FAQContent";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers to common questions about ICASA and NRCS compliance, type approvals, licensing, and regulatory requirements in South Africa.",
  keywords: [
    "ICASA FAQ",
    "NRCS LOA questions",
    "compliance FAQ South Africa",
    "type approval questions",
    "licensing FAQ",
    "regulatory compliance questions",
    "ICASA NRCS help",
  ],
  openGraph: {
    title: "FAQ - ICASA & NRCS Compliance Questions Answered",
    description:
      "Find answers to common questions about ICASA and NRCS compliance, type approvals, licensing, and regulatory requirements in South Africa.",
    url: "https://bilacert.co.za/faq",
    type: "website",
  },
  alternates: {
    canonical: "https://bilacert.co.za/faq",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: viewportThemeColor,
};
export default function FAQPage() {
  return <FAQContent />;
}
