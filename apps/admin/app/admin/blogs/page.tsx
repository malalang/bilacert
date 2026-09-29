import type { Viewport } from "next";
import { Suspense } from "react";
import BlogsClient from "./BlogsClient";
import BlogsLoading from "./loading";

export const metadata = {
  title: "Blogs | Bilacert Admin Pro",
  description: "Create and manage blog posts.",
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
export default function BlogsPage() {
  return (
    <div className="space-y-6">
      <Suspense fallback={<BlogsLoading />}>
        <BlogsClient />
      </Suspense>
    </div>
  );
}
