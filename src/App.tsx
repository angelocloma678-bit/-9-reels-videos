/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { VideoPreviewSection } from './components/VideoPreviewSection';
import { WhatYouGetSection } from './components/WhatYouGetSection';
import { WhoItsForSection } from './components/WhoItsForSection';
import { OfferCtaSection } from './components/OfferCtaSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { StickyBottomCta } from './components/StickyBottomCta';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2A2118] font-sans antialiased selection:bg-[#EADFD1] selection:text-[#1F1710]">
      {/* Top Bar */}
      <Navbar />

      <main>
        {/* 1. HERO */}
        <HeroSection />

        {/* 2. VIDEO PREVIEW */}
        <VideoPreviewSection />

        {/* 3. WHAT YOU GET */}
        <WhatYouGetSection />

        {/* 4. WHO IT'S FOR */}
        <WhoItsForSection />

        {/* 5. OFFER + CTA */}
        <OfferCtaSection />

        {/* 6. FAQ */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile-First Anchored Sticky Bottom CTA */}
      <StickyBottomCta />
    </div>
  );
}
