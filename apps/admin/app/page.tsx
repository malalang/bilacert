import type { Metadata, Viewport } from "next";
import { Suspense } from "react";
import DashboardClient from "./dashboard/DashboardClient";
import DashboardLoading from "./dashboard/loading";

export const metadata: Metadata = {
  title: "Dashboard | Bilacert Admin Pro",
  description: "Real-time overview of submissions and metrics.",
  robots: {
    index: false,
  },
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

export default function HomePage() {
  return (
    <Suspense fallback={<DashboardLoading />}>
      <DashboardClient />
    </Suspense>
  );
}
