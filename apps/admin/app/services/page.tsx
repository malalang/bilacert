import type { Viewport } from "next";
import { Suspense } from "react";
import ServicesLoading from "./loading";
import ServicesClient from "./ServicesClient";

export const metadata = {
  title: "Services | Bilacert Admin Pro",
  description: "Manage regulatory services.",
};

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
export default function ServicesPage() {
  return (
    <Suspense fallback={<ServicesLoading />}>
      <ServicesClient />
    </Suspense>
  );
}
