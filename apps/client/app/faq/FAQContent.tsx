"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import StructuredData from "@/components/StructuredData";

export default function FAQContent() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  const faqCategories = [
    {
      title: "General Questions",
      questions: [
        {
          question: "What is Bilacert and what services do you provide?",
          answer:
            "Bilacert is a specialized compliance consultancy that simplifies ICASA and NRCS LOA approvals for South African businesses. We provide expert guidance for type approvals, licensing, and regulatory compliance across telecommunications and electronic communications sectors.",
        },
        {
          question: "How long does the compliance process typically take?",
          answer:
            "Processing times vary by service type. ICASA type approvals typically take 30 Days, NRCS LOA applications also take 30 - 90 working days, while licensing applications can take 30-60 working days. We work to expedite these processes and keep you informed throughout.",
        },
        {
          question: "Do you work with businesses of all sizes?",
          answer:
            "Yes, we work with businesses of all sizes, from startups and SMEs to large corporations. Our services are tailored to meet the specific needs and budgets of each client, ensuring everyone can access professional compliance support.",
        },
      ],
    },
    {
      title: "ICASA Type Approvals",
      questions: [
        {
          question: "What types of devices require ICASA type approval?",
          answer:
            "All telecommunications and radio frequency devices require ICASA type approval before being sold or used in South Africa. This includes wireless routers, mobile phones, radio equipment, Bluetooth devices, and other electronic communication equipment.",
        },
        {
          question:
            "What is the difference between Standard and Simplified Type Approval?",
          answer:
            "Standard Type approval is required for any equipment that has not been type approved before by the Authority. Simplified Type Approval is required for equipment that has already obtained Type approval from the Authority. A representative sample may be required for further evaluation.",
        },
        {
          question: "Can you help with both tested and untested approvals?",
          answer:
            "Yes, we guide clients through the decision-making process for both tested and untested approvals. We help determine which approach is most suitable for your product and manage the entire application process.",
        },
      ],
    },
    {
      title: "Type Approval Basics",
      questions: [
        {
          question: "What is Type Approval?",
          answer:
            "A process by which Equipment or a device or system is authorized by the Authority to be used in South Africa or imported into South Africa and involves verification of the Equipment compliance with the applicable standards and other regulatory requirements.",
        },
      ],
    },
    {
      title: "NRCS LOA Applications",
      questions: [
        {
          question: "What products require an NRCS LOA?",
          answer:
            "Electrical and electronic products specified under NRCS regulations require a Letter of Authority (LOA) before entering the South African market. This includes household appliances, lighting products, electrical equipment, and other regulated products.",
        },
        {
          question: "What documentation is required for NRCS LOA applications?",
          answer:
            "Required documentation includes technical specifications, test reports from accredited laboratories, product photographs, user manuals, and compliance certificates. We help compile and review all necessary documentation to ensure accuracy.",
        },
        {
          question: "Do you coordinate testing for NRCS compliance?",
          answer:
            "Yes, we coordinate with accredited testing facilities when laboratory testing is required for NRCS compliance. We ensure all testing meets NRCS requirements and is completed efficiently.",
        },
      ],
    },
    {
      title: "Licensing Services",
      questions: [
        {
          question: "Who needs a Radio Dealer License?",
          answer:
            "Any business that sells, distributes, or supplies radio communication equipment in South Africa must hold a valid Radio Dealer License from ICASA. This includes retailers, importers, and distributors of radio equipment.",
        },
        {
          question: "What is the difference between ECS and ECNS licenses?",
          answer:
            "An ECS (Electronic Communications Service) license allows businesses to provide electronic communication services without owning infrastructure. An ECNS (Electronic Communications Network Service) license allows businesses to build and operate network infrastructure.",
        },
        {
          question: "Do all businesses need ECS/ECNS licenses?",
          answer:
            "Not all businesses need these licenses. Some may qualify for exemptions depending on their business model and services provided. We assess your business to determine if you need a license or qualify for an exemption.",
        },
        {
          question: "What is a VHF radio license and who needs one?",
          answer:
            "A VHF radio license is required for marine vessels using VHF radios for communication. This includes ski boats, yachts, commercial vessels, and recreational watercraft. We help vessel owners obtain the necessary licenses for legal operation.",
        },
      ],
    },
    {
      title: "Pricing and Process",
      questions: [
        {
          question: "How do you determine pricing for your services?",
          answer:
            "Our pricing is based on the complexity of the application, required documentation, testing needs, and level of support required. We offer flexible plans from basic consultation to full end-to-end service packages.",
        },
        {
          question: "What is included in your service packages?",
          answer:
            "Our service packages include consultation, documentation preparation, application submission, regulatory liaison, progress tracking, and ongoing compliance support. Premium packages also include testing coordination and priority processing.",
        },
        {
          question: "Do you offer ongoing compliance support?",
          answer:
            "Yes, we provide ongoing compliance support including license renewals, amendments, regulatory updates, and compliance monitoring to ensure your business remains compliant with changing regulations.",
        },
        {
          question: "What happens if my application is rejected?",
          answer:
            "If an application is rejected, we work closely with the regulatory authority to address any issues, update documentation as needed, and resubmit the application. We minimize delays and ensure successful approval.",
        },
      ],
    },
  ];

  // Prepare FAQ data for structured data
  const faqData = {
    questions: faqCategories.flatMap((category) =>
      category.questions.map((q) => ({
        question: q.question,
        answer: q.answer,
      })),
    ),
  };

  return (
    <div className="min-h-screen">
      <StructuredData type="FAQ" data={faqData} />
      {/* Hero Section */}
      <section className="relative text-white py-20">
        <Image
          src="/herosetion/FAQ.jpg"
          alt="Frequently Asked Questions"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Find answers to common questions about ICASA and NRCS compliance,
              type approvals, licensing, and regulatory requirements in South
              Africa.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <div className="bg-secondary-gray px-6 py-4">
                  <h2 className="text-2xl font-bold text-primary">
                    {category.title}
                  </h2>
                </div>
                <div className="divide-y divide-gray-200">
                  {category.questions.map((item, itemIndex) => {
                    const globalIndex = categoryIndex * 100 + itemIndex;
                    const isOpen = openItems.includes(globalIndex);

                    return (
                      <div
                        key={item.question}
                        className="border-b border-gray-200 last:border-b-0"
                      >
                        <button
                          type="button"
                          onClick={() => toggleItem(globalIndex)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                        >
                          <span className="text-lg font-medium text-primary pr-4">
                            {item.question}
                          </span>
                          {isOpen ? (
                            <ChevronUp className="h-5 w-5 text-accent flex-shrink-0" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-accent flex-shrink-0" />
                          )}
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-4">
                            <p className="text-gray-600 leading-relaxed">
                              {item.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Can&apos;t find the answer you&apos;re looking for? Our compliance
            experts are here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-light transition-colors duration-200"
            >
              Contact Us
            </a>
            <a
              href="tel:0754304433"
              className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors duration-200"
            >
              Call 075 430 4433
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
