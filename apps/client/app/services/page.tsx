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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white py-20">
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
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Comprehensive licensing and certification services to help your
              business stay compliant and competitive in South Africa's
              regulated industries.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
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
