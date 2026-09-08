import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  FileSearch,
  Globe2,
  ShieldCheck,
  TestTube2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "South Africa Product Market Access & Compliance | BILACERT",
  description:
    "BILACERT provides end-to-end South African regulatory market-access support for international manufacturers, including product assessment, test-report review, ICASA Type Approval, NRCS LOA and local representation.",
  alternates: {
    canonical: "https://bilacert.co.za/south-africa-market-access",
  },
  openGraph: {
    title: "South Africa Product Market Access & Compliance | BILACERT",
    description:
      "Bring your products to the South African market with one compliance partner.",
    url: "https://bilacert.co.za/south-africa-market-access",
    type: "website",
  },
};

const journey = [
  {
    number: "01",
    title: "Product Regulatory Assessment",
    description:
      "We assess the product and determine whether ICASA, NRCS or other South African regulatory requirements apply.",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Standards & Test Report Review",
    description:
      "Existing IEC, EN, CB, EMC and RF reports are reviewed against South African requirements.",
    icon: FileSearch,
  },
  {
    number: "03",
    title: "Testing Gap Analysis",
    description:
      "If additional testing is required, BILACERT identifies the applicable standards and can coordinate testing with suitable laboratories.",
    icon: TestTube2,
  },
  {
    number: "04",
    title: "ICASA Type Approval",
    description:
      "For applicable telecommunications and radio-frequency equipment.",
    icon: ShieldCheck,
  },
  {
    number: "05",
    title: "NRCS Letter of Authority",
    description:
      "For applicable regulated electrical and electronic products.",
    icon: CheckCircle2,
  },
  {
    number: "06",
    title: "South African Local Representation",
    description:
      "BILACERT can provide local regulatory representation for international manufacturers and compliance partners.",
    icon: Globe2,
  },
  {
    number: "07",
    title: "Ongoing Compliance Support",
    description:
      "Regulatory correspondence, certificate management, levy support and future product applications.",
    icon: CheckCircle2,
  },
];

const regulatoryAreas = [
  {
    title: "ICASA",
    items: "Type Approval • Licensing • Licence Exemptions",
  },
  {
    title: "NRCS",
    items: "LOA Applications • Electrotechnical Compliance • Levy Support",
  },
  {
    title: "Technical Compliance",
    items: "IEC • EN • SANS • EMC • RF • Safety",
  },
];

export default function SouthAfricaMarketAccessPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.22),transparent_42%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-white/5 px-4 py-2 text-sm font-medium text-accent">
              <Globe2 className="h-4 w-4" />
              South Africa product market access
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Bring Your Products to the South African Market
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-200 sm:text-xl">
              BILACERT provides an end-to-end regulatory market-access service for
              international manufacturers entering South Africa. From determining the
              applicable regulatory requirements and reviewing IEC/EN test reports to ICASA
              Type Approval, NRCS LOA and local representation, we provide one point of
              contact for your South African compliance journey.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Submit Product for Assessment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white">
                <Link href="/south-africa-local-representative">Local Representation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              End-to-end support
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              One Partner. Your South African Compliance Journey.
            </h2>
            <p className="mt-5 text-lg leading-8 text-gray-600">
              BILACERT helps manufacturers move from product information and technical
              review through applicable applications, approvals and ongoing compliance
              support.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {journey.map((step) => {
              const Icon = step.icon;
              return (
                <article key={step.number} className="relative rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-shadow hover:shadow-md">
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-3xl font-bold text-accent/50">{step.number}</span>
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-primary">{step.title}</h3>
                  <p className="mt-3 leading-7 text-gray-600">{step.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-secondary-gray py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Trust & expertise
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                South African Compliance Expertise. International Reach.
              </h2>
              <p className="mt-5 text-lg leading-8 text-gray-600">
                BILACERT works with manufacturers, importers and testing laboratories to
                navigate South African product regulatory requirements.
              </p>
              <p className="mt-4 leading-7 text-gray-600">
                Our experience covers telecommunications equipment, wireless devices, ICT
                equipment, electrical products, power supplies, energy products and other
                regulated technologies.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {regulatoryAreas.map((area) => (
                <article key={area.title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
                  <h3 className="text-xl font-bold text-primary">{area.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-gray-600">{area.items}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-accent/20 bg-white p-6 text-center sm:p-8">
            <p className="font-medium text-primary">
              BILACERT operates as an independent regulatory consultancy and representative.
            </p>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              This positioning does not imply accreditation by, affiliation with, or
              endorsement by ICASA or NRCS.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-lg sm:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Product assessment
            </p>
            <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
              Not Sure What Your Product Requires?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
              Send us your product information and our team will review it and advise on
              the applicable South African regulatory pathway.
            </p>

            <div className="mx-auto mt-8 grid max-w-2xl gap-3 text-left sm:grid-cols-2">
              {["Product datasheet", "User manual", "Existing test reports", "Product photographs"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-3 rounded-xl bg-secondary-gray px-4 py-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                    <span className="font-medium text-primary">{item}</span>
                  </div>
                ),
              )}
            </div>

            <div className="mt-9">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Submit Product for Assessment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl">
            Are you a test laboratory, certification company or regulatory consultancy?
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Discover BILACERT&apos;s South African Local Representation & Regulatory
            Partnership services.
          </p>
          <div className="mt-7">
            <Button variant="outline" asChild>
              <Link href="/south-africa-local-representative">
                Explore Local Representation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
