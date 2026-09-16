import React from 'react';
import { HERO_IMAGE } from '../data/landingData';

export const HerDigitalCompassBanner: React.FC = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E2D6C5] shadow-lg bg-[#FAF8F5]">
      <img
        src={HERO_IMAGE}
        alt="5,500+ ready-to-use reels for $9 - Your Next Bestseller! is ready!"
        referrerPolicy="no-referrer"
        className="w-full h-auto object-contain block"
      />
    </div>
  );
};

