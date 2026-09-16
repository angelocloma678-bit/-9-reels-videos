import React from 'react';
import { ArrowRight, Check, Zap } from 'lucide-react';
import { CHECKOUT_URL } from '../data/landingData';
import { HerDigitalCompassBanner } from './HerDigitalCompassBanner';

export const HeroSection: React.FC = () => {
  return (
    <section className="pt-8 sm:pt-14 pb-12 sm:pb-16 px-4 sm:px-6 max-w-4xl mx-auto text-center">
      {/* Social proof pill badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3ECE0] border border-[#E4D9CA] text-[#4A3B2B] text-xs sm:text-sm font-medium mb-6 shadow-xs">
        <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
        <span>Over 5,500+ Vertical Videos Included</span>
      </div>

      {/* Main Hero Headline */}
      <h1 className="text-3xl sm:text-5xl lg:text-5xl font-serif-display font-bold text-[#2A2118] tracking-tight leading-[1.18] sm:leading-[1.15] mb-5 max-w-2xl mx-auto">
        Create More Content.{' '}
        <span className="italic font-normal text-[#7A5B3E] block sm:inline">
          Without Starting From Scratch.
        </span>
      </h1>

      {/* Short Text */}
      <p className="text-base sm:text-xl text-[#5C4E3F] max-w-xl mx-auto font-normal leading-relaxed mb-8">
        5,500+ ready-to-use faceless reels and videos for your content, brand, or business.
      </p>

      {/* Primary Hero CTA Button */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
        <a
          href={CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#E8DDD0] hover:bg-[#DFCDBB] text-[#2A2118] font-semibold text-base sm:text-lg transition-all duration-200 shadow-sm hover:shadow-md border border-[#D8C7B4] active:scale-[0.99]"
        >
          <span>Get Instant Access</span>
          <ArrowRight className="w-5 h-5 text-[#4A3B2B]" />
        </a>

        <div className="text-xs sm:text-sm text-[#736353] font-medium flex items-center gap-1.5">
          <Zap className="w-3.5 h-3.5 text-amber-600" />
          <span>Instant Download • Just $9</span>
        </div>
      </div>

      {/* Image 1: Main Product / Hero Image */}
      <HerDigitalCompassBanner />

      {/* Floating badge highlights */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-[#5C4E3F]">
        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#F3EDE2] border border-[#E5DBCC]">
          <Check className="w-3.5 h-3.5 text-[#7A5B3E]" /> 5,500+ Clips
        </span>
        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#F3EDE2] border border-[#E5DBCC]">
          <Check className="w-3.5 h-3.5 text-[#7A5B3E]" /> Ready for 9:16 Reels
        </span>
        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#F3EDE2] border border-[#E5DBCC]">
          <Check className="w-3.5 h-3.5 text-[#7A5B3E]" /> One-Time $9 Access
        </span>
        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#F3EDE2] border border-[#E5DBCC]">
          <Check className="w-3.5 h-3.5 text-[#7A5B3E]" /> Resell & Keep 100% Profit
        </span>
      </div>
    </section>
  );
};
