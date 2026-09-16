import React from 'react';
import { Film, ArrowRight } from 'lucide-react';
import { CHECKOUT_URL } from '../data/landingData';

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#EBE1D4]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        {/* Brand identity */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#EADFD1] flex items-center justify-center text-[#5A4533] border border-[#DCceBE]">
            <Film className="w-4 h-4" />
          </div>
          <span className="text-sm sm:text-base font-serif-display font-bold text-[#2A2118] tracking-tight">
            Faceless Reels Vault
          </span>
        </div>

        {/* Quick Access CTA */}
        <a
          href={CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#E8DDD0] hover:bg-[#DFCDBB] text-[#2A2118] text-xs sm:text-sm font-semibold transition-colors border border-[#D8C7B4]"
        >
          <span>Get Access</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#4A3B2B]" />
        </a>
      </div>
    </header>
  );
};
