import type { Viewport } from "next";
import { Suspense } from "react";
import DashboardClient from "./DashboardClient";
import DashboardLoading from "./loading";

export const metadata = {
  title: "Dashboard | Bilacert Admin Pro",
  description: "Real-time overview of submissions and metrics.",
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
export default function DashboardPage() {
  return (
    <Suspense fallback={<DashboardLoading />}>
      <DashboardClient />
    </Suspense>
  );
}
