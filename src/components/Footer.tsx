import React from 'react';
import { CHECKOUT_URL } from '../data/landingData';

export const Footer: React.FC = () => {
  return (
    <footer className="py-10 pb-28 px-4 sm:px-6 border-t border-[#EBE1D4] text-center text-xs text-[#7A6957] bg-[#F6EFE5]">
      <div className="max-w-2xl mx-auto space-y-3">
        <p className="font-medium text-[#4A3B2B]">
          5,500+ Faceless Reels & Videos Bundle
        </p>
        <p className="leading-relaxed">
          Use according to the included license. Instant digital delivery via email immediately after checkout.
        </p>
        <div className="pt-2 flex items-center justify-center gap-4 text-[11px] text-[#8C7B6B]">
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-[#2A2118]"
          >
            Get Instant Access
          </a>
          <span>•</span>
          <span>Digital Download</span>
          <span>•</span>
          <span>© {new Date().getFullYear()} All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
};
