import React from 'react';
import { ArrowRight, Check, Zap, ShieldCheck, Download, Lock } from 'lucide-react';
import { CHECKOUT_URL } from '../data/landingData';

export const OfferCtaSection: React.FC = () => {
  return (
    <section id="offer" className="py-14 sm:py-20 px-4 sm:px-6 bg-[#F3ECE0] border-t border-[#E5DACB]">
      <div className="max-w-3xl mx-auto text-center">
        {/* Price tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E5D7C5] text-[#3E2F22] text-xs sm:text-sm font-semibold mb-6 border border-[#D5C4AF]">
          <Zap className="w-4 h-4 text-amber-600" />
          One-Time Payment • $9 Only
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-display font-bold text-[#2A2118] tracking-tight mb-4">
          5,500+ Faceless Reels & Videos
        </h2>

        {/* Short text */}
        <p className="text-lg sm:text-xl text-[#5C4E3F] font-medium mb-8">
          Pick a clip. Add your message. Post.
        </p>

        {/* Offer Box */}
        <div className="max-w-md mx-auto p-6 sm:p-8 rounded-3xl bg-[#FAF7F2] border border-[#DFCFC0] shadow-md mb-8 text-left">
          <div className="flex items-baseline justify-between border-b border-[#EFE5D8] pb-4 mb-5">
            <div>
              <span className="text-xs uppercase tracking-wider font-semibold text-[#8C6D4F]">
                Full Access Bundle
              </span>
              <div className="text-xl font-bold text-[#2A2118]">5,500+ Video Clips</div>
            </div>
            <div className="text-right">
              <span className="text-xs text-[#9B8877] line-through block">$97</span>
              <span className="text-3xl font-bold text-[#2A2118]">$9</span>
            </div>
          </div>

          <ul className="space-y-3 text-xs sm:text-sm text-[#4E3E2F] mb-6">
            <li className="flex items-center gap-2.5">
              <Check className="w-4 h-4 text-[#7A5B3E] shrink-0" />
              <span>5,500+ High-Quality Aesthetic Vertical Videos</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Check className="w-4 h-4 text-[#7A5B3E] shrink-0" />
              <span>All 5 Aesthetic Niches & Collections Included</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Check className="w-4 h-4 text-[#7A5B3E] shrink-0" />
              <span>Immediate Instant Download Access</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Check className="w-4 h-4 text-[#7A5B3E] shrink-0" />
              <span>Commercial Use According to Included License</span>
            </li>
          </ul>

          {/* Primary CTA */}
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-[#E8DDD0] hover:bg-[#DFCDBB] text-[#2A2118] font-bold text-base transition-all border border-[#D8C7B4] shadow-xs hover:shadow-md active:scale-[0.99]"
          >
            <span>Get Instant Access</span>
            <ArrowRight className="w-4 h-4 text-[#4A3B2B]" />
          </a>

          <div className="mt-4 flex items-center justify-center gap-4 text-[11px] text-[#7A6957]">
            <span className="flex items-center gap-1">
              <Lock className="w-3 h-3 text-[#8C6D4F]" /> Secure Checkout
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Download className="w-3 h-3 text-[#8C6D4F]" /> Instant Email Delivery
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
