import type { Viewport } from "next";
import { Suspense } from "react";
import AnalysisClient from "./AnalysisClient";
import AnalysisLoading from "./loading";

export const metadata = {
  title: "Analysis | Bilacert Admin Pro",
  description: "In-depth analysis of submissions and content.",
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
export default function AnalysisPage() {
  return (
    <Suspense fallback={<AnalysisLoading />}>
      <AnalysisClient />
    </Suspense>
  );
}
