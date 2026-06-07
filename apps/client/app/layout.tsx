import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Bilacert - Your Compliance Partner | ICASA & NRCS Approvals",
    template: "%s | Bilacert - Compliance Made Simple",
  },
  description:
    "Bilacert simplifies ICASA and NRCS LOA compliance for South African businesses. Expert guidance for type approvals, licensing, and regulatory compliance. Get your approvals faster with our streamlined process.",
  keywords: [
    "ICASA type approval",
    "NRCS LOA",
    "South Africa compliance",
    "radio dealer license",
    "ECS ECNS licensing",
    "VHF radio license",
    "compliance consultant",
    "regulatory approval",
    "telecommunications compliance",
    "electronic communications",
  ],
  authors: [{ name: "Bilacert (Pty) Ltd" }],
  creator: "Bilacert",
  publisher: "Bilacert",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://bilacert.co.za"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Bilacert - Your Compliance Partner | ICASA & NRCS Approvals",
    description:
      "Simplifying ICASA and NRCS compliance for South African businesses. Expert guidance for type approvals, licensing, and regulatory compliance.",
    url: "https://bilacert.co.za",
    siteName: "Bilacert",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Bilacert - Your Compliance Partner",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bilacert - Your Compliance Partner",
    description:
      "Simplifying ICASA and NRCS compliance for South African businesses",
    images: ["/logo.jpg"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
        <Analytics />
      </body>
      <GoogleAnalytics gaId="G-6Y6G6PC48C" />
    </html>
  );
}
