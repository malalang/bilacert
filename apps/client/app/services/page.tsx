import { CheckCircle, Clock, Users } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ServiceCard from "@/components/cards/ServiceCard";
import { Button } from "@/components/ui/button";
import { getCachedServices } from "../_lib/cached-public-data";

export const metadata: Metadata = {
  title: "Our Services - Bilacert",
  description:
    "Comprehensive licensing and certification services for South African businesses. ICASA type approvals, NRCS LOA, radio dealer licensing, and more.",
  keywords: [
    "ICASA licensing",
    "NRCS certification",
    "radio licensing",
    "VHF licensing",
    "ECS ECNS licensing",
    "license exemptions",
    "compliance services South Africa",
  ],
  openGraph: {
    title: "Services - Bilacert",
    description:
      "Comprehensive licensing and certification services for South African businesses.",
    url: "https://bilacert.co.za/services",
    type: "website",
  },
  alternates: {
    canonical: "https://bilacert.co.za/services",
  },
};

export default async function ServicesPage() {
  const services = await getCachedServices();

  const whyChooseUs = [
    {
      title: "Expert Guidance",
      description:
        "Deep industry knowledge and regulatory expertise to guide you through complex compliance requirements.",
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "Efficient Process",
      description:
        "Streamlined applications and proactive problem-solving to minimize delays and maximize success rates.",
      icon: <Clock className="h-6 w-6" />,
    },
    {
      title: "Client-Centric Approach",
      description:
        "Personalized support and clear communication throughout your compliance journey.",
      icon: <CheckCircle className="h-6 w-6" />,
    },
  ];

  const heroHighlights = [
    {
      title: "Expert Compliance Guidance",
      description: "ICASA, NRCS, licensing, and approval support.",
      icon: <Users className="h-6 w-6 text-white" />,
    },
    {
      title: "Streamlined Application Process",
      description: "Clear steps, fewer delays, and proactive support.",
      icon: <Clock className="h-6 w-6 text-white" />,
    },
    {
      title: `${services.length} Active Services`,
      description: "Purpose-built services for regulated businesses.",
      icon: <CheckCircle className="h-6 w-6 text-white" />,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-14 text-white lg:py-20">
        <Image
          src="/images/services/services-hero.svg"
          data-ai-hint="bilacert compliance services"
          alt="Bilacert compliance services"
          fill
          priority
          sizes="100vw"
          unoptimized
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-primary/40 to-black/20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <div className="max-w-3xl">
              <div className="mb-4 inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-accent-light shadow-lg shadow-black/10 backdrop-blur-sm">
                Services built for South African compliance
              </div>
              <h1 className="mb-5 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
                Compliance Services for Your Business
              </h1>
              <p className="mb-7 max-w-2xl text-base leading-relaxed text-gray-100 md:text-lg">
                Licensing, certification, and regulatory approval support for
                businesses that need clear guidance and reliable compliance
                outcomes.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="rounded-lg bg-accent px-8 py-4 text-center text-lg font-semibold text-white transition-all duration-200 hover:-translate-y-1 hover:bg-accent-light"
                >
                  Get Free Consultation
                </Link>
                <Link
                  href="#services-grid"
                  className="rounded-lg border-2 border-white px-8 py-4 text-center text-lg font-semibold text-white transition-all duration-200 hover:bg-white hover:text-primary"
                >
                  Explore Services
                </Link>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="rounded-2xl bg-white/10 p-8 shadow-2xl shadow-black/20 backdrop-blur-sm">
                <div className="space-y-6">
                  {heroHighlights.map((item) => (
                    <div key={item.title} className="flex items-center gap-4">
                      <div className="rounded-lg bg-accent p-3 shadow-lg shadow-black/10">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="text-gray-300">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services-grid" className="py-20 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Why Choose Bilacert?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We make compliance simple, efficient, and stress-free for
              businesses of all sizes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-accent">{item.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Don't see what you need?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us today to discuss your specific licensing and
            certification needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="tel:0754304433">Call 075 430 4433</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
