import React from 'react';
import { Sparkles, Users, ShoppingBag, Briefcase, UserCheck } from 'lucide-react';
import { WHO_ITS_FOR_TAGS } from '../data/landingData';

export const WhoItsForSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 bg-[#F5EDE1] border-y border-[#EAE0D1]">
      <div className="max-w-3xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8DDD0] text-[#4A3B2B] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#DCceBE]">
          <Users className="w-3.5 h-3.5 text-[#7A5B3E]" />
          Who It's For
        </div>

        {/* Headline / Primary Statement */}
        <h2 className="text-2xl sm:text-3xl font-serif-display font-bold text-[#2A2118] mb-6 leading-snug">
          For creators, businesses, digital sellers, personal brands, and anyone who wants more content without filming every day.
        </h2>

        {/* 4 Quick Category Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8">
          {WHO_ITS_FOR_TAGS.map((item) => (
            <div
              key={item.label}
              className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E4D7C7] text-center shadow-xs"
            >
              <div className="font-semibold text-sm text-[#2A2118] mb-0.5">{item.label}</div>
              <div className="text-[11px] text-[#6B5A4B] leading-tight">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
