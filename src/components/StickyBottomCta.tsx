import React, { useState, useEffect } from 'react';
import { ArrowRight, Zap, X } from 'lucide-react';
import { CHECKOUT_URL } from '../data/landingData';

export const StickyBottomCta: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling down 240px
      if (window.scrollY > 240) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-3 sm:p-4 bg-[#FAF7F2]/95 backdrop-blur-md border-t border-[#E5DACB] shadow-2xl transition-all duration-300">
      <div className="max-w-3xl mx-auto flex items-center justify-between gap-3">
        {/* Left: Quick Value Callout */}
        <div className="hidden sm:block text-left">
          <div className="text-xs uppercase tracking-wider font-semibold text-[#8C6D4F] flex items-center gap-1">
            <Zap className="w-3 h-3 text-amber-600" /> Instant Access
          </div>
          <div className="text-sm font-bold text-[#2A2118]">
            5,500+ Faceless Videos • <span className="text-[#7A5B3E]">$9 One-Time</span>
          </div>
        </div>

        {/* Mobile Price indicator */}
        <div className="sm:hidden text-left">
          <div className="text-xs font-bold text-[#2A2118]">5,500+ Videos</div>
          <div className="text-[11px] text-[#7A5B3E] font-semibold">$9 One-Time</div>
        </div>

        {/* Action Button */}
        <a
          href={CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 rounded-full bg-[#E8DDD0] hover:bg-[#DFCDBB] text-[#2A2118] font-bold text-sm sm:text-base transition-all border border-[#D8C7B4] shadow-sm hover:shadow-md active:scale-[0.98]"
        >
          <span>Get Instant Access</span>
          <ArrowRight className="w-4 h-4 text-[#4A3B2B]" />
        </a>
      </div>
    </div>
  );
};
