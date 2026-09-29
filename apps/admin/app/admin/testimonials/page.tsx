import type { Viewport } from "next";
import { Suspense } from "react";
import TestimonialsLoading from "./loading";
import TestimonialsClient from "./TestimonialsClient";

export const metadata = {
  title: "Testimonials | Bilacert Admin Pro",
  description: "Manage customer testimonials from social media.",
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
export default function TestimonialsPage() {
  return (
    <div className="space-y-6">
      <Suspense fallback={<TestimonialsLoading />}>
        <TestimonialsClient />
      </Suspense>
    </div>
  );
}
