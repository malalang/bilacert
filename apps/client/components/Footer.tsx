import Link from "next/link";
import { Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "ICASA Type Approvals", href: "/services/icasa-type-approvals" },
    { name: "NRCS LOA Applications", href: "/services/nrcs-loa-applications" },
    {
      name: "Radio Dealer Licensing",
      href: "/services/radio-dealer-licensing",
    },
    {
      name: "Class ECS/ECNS Licensing",
      href: "/services/class-ecs-ecns-licensing",
    },
    { name: "License Exemptions", href: "/services/license-exemptions" },
    {
      name: "Ski Boat VHF Licensing",
      href: "/services/ski-boat-vhf-licensing",
    },
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold mb-4">Bilacert</div>
            <p className="text-gray-300 mb-6">
              Your trusted compliance partner, simplifying ICASA and NRCS
              approvals for South African businesses.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <span>075 430 4433</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <span>info@bilacert.co.za</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-accent" />
                <span>Mon - Fri: 8:00 - 16:30</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-accent transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-accent transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for compliance updates and industry
              insights.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-accent"
              />
              <button
                type="submit"
                className="w-full bg-accent text-white px-4 py-2 rounded-lg font-medium hover:bg-accent-light transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © {currentYear} Bilacert (Pty) Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-gray-300 hover:text-accent text-sm transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-300 hover:text-accent text-sm transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
            <div>
              <p className="text-gray-300 text-sm">
                Developed by{" "}
                <Link
                  className="text-blue-300 text-sm"
                  href="https://abrameltonntsako.web.app"
                >
                  AEN Nyath
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
