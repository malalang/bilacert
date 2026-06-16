import { Clock, Mail, Phone } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import ContactMessageForm from "./ContactMessageForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Bilacert for expert ICASA and NRCS compliance guidance. Call 075 430 4433 or email info@bilacert.co.za for a free consultation.",
  keywords: [
    "contact Bilacert",
    "ICASA compliance consultation",
    "NRCS LOA consultation",
    "compliance expert South Africa",
    "regulatory approval consultation",
    "free compliance consultation",
  ],
  openGraph: {
    title: "Contact Bilacert - Get Expert Compliance Guidance",
    description:
      "Get in touch with Bilacert for expert ICASA and NRCS compliance guidance. Call 075 430 4433 or email info@bilacert.co.za for a free consultation.",
    url: "https://bilacert.co.za/contact",
    type: "website",
  },
  alternates: {
    canonical: "https://bilacert.co.za/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <section className="relative text-white py-20">
        <Image
          src="/herosetion/Contact-Us.jpg"
          alt="Get in touch"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Ready to simplify your compliance journey? Contact our experts for
              a free consultation and discover how we can help your business
              navigate ICASA and NRCS requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Phone</h3>
              <p className="text-gray-600 mb-2">075 430 4433</p>
              <p className="text-sm text-gray-500">Mon-Fri 08:00 - 16:30</p>
            </div>

            <div className="text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Email</h3>
              <p className="text-gray-600 mb-2">info@bilacert.co.za</p>
              <p className="text-sm text-gray-500">
                We&apos;ll respond within 24 hours
              </p>
            </div>

            <div className="text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">
                Business Hours
              </h3>
              <p className="text-gray-600 mb-2">Monday - Friday</p>
              <p className="text-sm text-gray-500">08:00 - 16:30</p>
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            <ContactMessageForm />
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Need Immediate Assistance?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            For urgent compliance matters, call us directly at 075 430 4433 or
            reach out via WhatsApp for instant support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0754304433"
              className="bg-accent text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-light transition-colors duration-200"
            >
              Call Now
            </a>
            <a
              href="https://wa.me/27754304433"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600 transition-colors duration-200"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
