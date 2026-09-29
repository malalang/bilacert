import type { Metadata, Viewport } from "next";
import Image from "next/image";
import Link from "next/link";
import LicensingApplicationForm from "../_components/LicensingApplicationForm";

export const metadata: Metadata = {
  title: "Ski Boat VHF Licensing Application",
  description:
    "Apply for a ski boat VHF radio licence with Bilacert and stay compliant on South African waters.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://bilacert.co.za/forms/ski-boat-vhf-licensing",
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
export default function SkiBoatVhfLicensingPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link href="/">
          <Image
            className="mx-auto h-12 w-auto"
            src="/logo.png"
            alt="Bilacert"
            width={100}
            height={100}
          />
        </Link>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Ski Boat VHF Licensing Application
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Fill out the form below to begin the process.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-xl">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <LicensingApplicationForm
            formType="ski-boat-vhf"
            serviceName="Ski Boat VHF Licensing"
          />
        </div>
      </div>
    </div>
  );
}
