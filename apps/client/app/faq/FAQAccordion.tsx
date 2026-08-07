"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export interface FaqCategory {
  title: string;
  questions: Array<{
    question: string;
    answer: string;
  }>;
}

export default function FAQAccordion({
  faqCategories,
}: {
  faqCategories: FaqCategory[];
}) {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  return (
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
  );
}
