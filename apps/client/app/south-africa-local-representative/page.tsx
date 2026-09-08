import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  FileCheck2,
  Globe2,
  Handshake,
  MessageSquareText,
  ShieldCheck,
  TestTube2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "South Africa Local Representative for ICASA & NRCS | BILACERT",
  description:
    "BILACERT provides South African local regulatory representation for international manufacturers, testing laboratories, certification bodies and compliance partners.",
  alternates: {
    canonical: "https://bilacert.co.za/south-africa-local-representative",
  },
  openGraph: {
    title: "South Africa Local Representative for ICASA & NRCS | BILACERT",
    description:
      "Your regulatory representative in South Africa for ICASA and NRCS processes.",
    url: "https://bilacert.co.za/south-africa-local-representative",
    type: "website",
  },
};

const capabilities = [
  {
    title: "ICASA Local Representation",
    description:
      "BILACERT acts as the South African applicant or representative for applicable Type Approval matters.",
    icon: ShieldCheck,
  },
  {
    title: "NRCS Regulatory Support",
    description:
      "Support with LOA applications, technical-document review and communication with NRCS.",
    icon: FileCheck2,
  },
  {
    title: "Representation for Test Laboratories",
    description:
      "International laboratories can partner with BILACERT to support their clients entering South Africa.",
    icon: TestTube2,
  },
  {
    title: "Certificate & Compliance Management",
    description:
      "Maintain regulatory records and support future product applications and compliance activities.",
    icon: CheckCircle2,
  },
  {
    title: "Testing Coordination",
    description:
      "Identify missing South African compliance requirements and coordinate the required testing.",
    icon: Globe2,
  },
  {
    title: "Regulatory Communication",
    description:
      "BILACERT handles communication with the relevant South African authorities as part of the regulatory process.",
    icon: MessageSquareText,
  },
];

const process = [
  "Send Product Information",
  "Compliance Review",
  "Testing Gap Analysis",
  "Application",
  "Approval",
  "Ongoing Representation",
];

export default function SouthAfricaLocalRepresentativePage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.22),transparent_42%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-white/5 px-4 py-2 text-sm font-medium text-accent">
              <Handshake className="h-4 w-4" />
              South African regulatory representation
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Your Regulatory Representative in South Africa
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-200 sm:text-xl">
              Expand into the South African market with a trusted local compliance
              partner. BILACERT represents international manufacturers, test
              laboratories and certification partners for ICASA and NRCS regulatory
              processes.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Request Local Representation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white">
                <Link href="/south-africa-market-access">Explore Market Access</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              One local partner
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Navigate South African regulation with confidence
            </h2>
            <p className="mt-5 text-lg leading-8 text-gray-600">
              International companies do not need to navigate South African regulatory
              processes alone. BILACERT provides local compliance support from technical
              document review through regulatory submission, approval and ongoing support.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-shadow hover:shadow-md">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary">{item.title}</h3>
                  <p className="mt-3 leading-7 text-gray-600">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-secondary-gray py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                For international laboratories
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                Are You an International Testing Laboratory?
              </h2>
              <p className="mt-5 text-lg leading-8 text-gray-600">
                Partner with BILACERT to provide your clients with a complete South
                African market-access solution. Your laboratory handles testing.
                <span className="font-semibold text-primary"> BILACERT handles South Africa.</span>
              </p>
              <p className="mt-4 leading-7 text-gray-600">
                When your clients require ICASA Type Approval, NRCS LOA or South African
                regulatory guidance, BILACERT can act as your local compliance partner.
              </p>
            </div>

            <div className="rounded-2xl bg-primary p-8 text-white shadow-xl sm:p-10">
              <h3 className="text-2xl font-bold">A clear regulatory pathway</h3>
              <div className="mt-8 space-y-4">
                {process.map((step, index) => (
                  <div key={step} className="flex items-center gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    <span className="text-gray-100">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-primary p-8 text-center text-white sm:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Start with your product
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Need a South African Regulatory Partner?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-200">
              Send us your product datasheet and available test reports. Our compliance
              team will assess the South African regulatory requirements and advise on the
              next steps.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Request Local Representation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white">
                <Link href="/south-africa-market-access">South Africa Market Access</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 py-12">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm leading-6 text-gray-500">
            BILACERT is positioned as an independent regulatory consultancy and
            representative. This page does not imply accreditation by, affiliation with,
            or endorsement by ICASA or NRCS.
          </p>
        </div>
      </section>
    </div>
  );
}
