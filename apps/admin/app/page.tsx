import type { Viewport } from "next";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Bilacert Admin Pro",
  description: "Administrative dashboard for Bilacert.",
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
  redirect("/admin/login");
}
