import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/landingData';

export const FaqSection: React.FC = () => {
  // First item open by default for quick glance
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-14 sm:py-20 px-4 sm:px-6 max-w-3xl mx-auto">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3ECE0] text-[#4A3B2B] text-xs font-semibold uppercase tracking-wider mb-3 border border-[#E5DACB]">
          <HelpCircle className="w-3.5 h-3.5 text-[#7A5B3E]" />
          Quick Questions
        </div>

        <h2 className="text-2xl sm:text-3xl font-serif-display font-bold text-[#2A2118] tracking-tight mb-2">
          Frequently Asked Questions
        </h2>
        <p className="text-sm sm:text-base text-[#5C4E3F]">
          Everything you need to know before getting started.
        </p>
      </div>

      <div className="space-y-3">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={faq.id}
              className="rounded-2xl bg-[#FAF7F2] border border-[#E7DDCE] overflow-hidden transition-all shadow-xs"
            >
              <button
                type="button"
                onClick={() => toggleFaq(index)}
                className="w-full text-left px-5 sm:px-6 py-4 flex items-center justify-between gap-4 cursor-pointer hover:bg-[#F6EFE6] transition-colors"
                aria-expanded={isOpen}
              >
                <span className="font-semibold text-sm sm:text-base text-[#2A2118]">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-[#7A5B3E] shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-4 pt-1 text-xs sm:text-sm text-[#5C4E3F] leading-relaxed border-t border-[#F2EAE0]">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
