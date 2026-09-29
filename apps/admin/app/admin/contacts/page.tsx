import type { Viewport } from "next";
import { Suspense } from "react";
import ContactsClient from "./ContactsClient";
import ContactsLoading from "./loading";

export const metadata = {
  title: "Contacts | Bilacert Admin Pro",
  description: "Manage your contacts.",
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
export default function ContactsPage() {
  return (
    <div className="space-y-6">
      <Suspense fallback={<ContactsLoading />}>
        <ContactsClient />
      </Suspense>
    </div>
  );
}
