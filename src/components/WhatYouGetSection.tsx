import React, { useState } from 'react';
import { Check, Sparkles, Film, Smartphone, SlidersHorizontal, Share2, Layers, ShieldCheck, ArrowRight } from 'lucide-react';
import { GALLERY_IMAGES, BENEFITS, CHECKOUT_URL } from '../data/landingData';

export const WhatYouGetSection: React.FC = () => {
  const [selectedSet, setSelectedSet] = useState<string>(GALLERY_IMAGES[0].id);

  const activeGalleryItem = GALLERY_IMAGES.find((item) => item.id === selectedSet) || GALLERY_IMAGES[0];

  return (
    <section id="what-you-get" className="py-14 sm:py-20 px-4 sm:px-6 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3ECE0] text-[#4A3B2B] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#E5DACB]">
          <Layers className="w-3.5 h-3.5 text-[#7A5B3E]" />
          Curated Video Library
        </div>

        <h2 className="text-3xl sm:text-4xl font-serif-display font-bold text-[#2A2118] tracking-tight mb-4">
          Everything You Need to Keep Creating
        </h2>

        <p className="text-base sm:text-lg text-[#5C4E3F] font-normal leading-relaxed">
          Explore the 5 curated visual sets created for modern, high-engagement content.
        </p>
      </div>

      {/* Visual Gallery Tabs (Images 2-6) */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 no-scrollbar mb-8">
        {GALLERY_IMAGES.map((set) => (
          <button
            key={set.id}
            type="button"
            onClick={() => setSelectedSet(set.id)}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-150 ${
              selectedSet === set.id
                ? 'bg-[#3A2E24] text-[#FAF7F2] shadow-sm'
                : 'bg-[#F2EAE0] text-[#554536] hover:bg-[#E9DFD3] border border-[#E2D6C6]'
            }`}
          >
            {set.name}
          </button>
        ))}
      </div>

      {/* Active Set Spotlight & Mobile Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-14 bg-[#F7F2EA] rounded-3xl p-5 sm:p-8 border border-[#E6DCce]">
        {/* Left: Phone Mockup Visual (Images 2-6) */}
        <div className="md:col-span-6 flex justify-center">
          <div className="relative max-w-[280px] sm:max-w-[310px] w-full aspect-[9/16] rounded-3xl overflow-hidden shadow-xl border-4 border-[#3D3126] bg-[#1C1611]">
            <img
              src={activeGalleryItem.image}
              alt={activeGalleryItem.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-opacity duration-300"
            />
            {/* Top pill badge */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
              <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-medium border border-white/15">
                {activeGalleryItem.name}
              </span>
              <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-amber-200 text-[11px] font-semibold border border-white/15">
                {activeGalleryItem.count}
              </span>
            </div>
          </div>
        </div>

        {/* Right: Active Set Detail */}
        <div className="md:col-span-6 text-left space-y-4">
          <div className="inline-block px-3 py-1 rounded-lg bg-[#EADFD1] text-[#4A3B2B] text-xs font-semibold uppercase tracking-wider">
            {activeGalleryItem.subtitle}
          </div>

          <h3 className="text-2xl sm:text-3xl font-serif-display font-bold text-[#2A2118]">
            {activeGalleryItem.name}
          </h3>

          <p className="text-sm sm:text-base text-[#5C4E3F] leading-relaxed">
            Curated high-definition vertical clips ready for your reels, stories, and b-roll sequences.
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {activeGalleryItem.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-full bg-[#FAF7F2] text-[#554536] text-xs font-medium border border-[#E2D5C4]"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="pt-4">
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#E8DDD0] hover:bg-[#DFCDBB] text-[#2A2118] font-semibold text-sm transition-all border border-[#D8C7B4]"
            >
              <span>Get Instant Access</span>
              <ArrowRight className="w-4 h-4 text-[#4A3B2B]" />
            </a>
          </div>
        </div>
      </div>

      {/* Visual Thumbnails Carousel for quick previewing all 5 sets on mobile */}
      <div className="mb-14">
        <p className="text-xs uppercase tracking-wider font-semibold text-[#786552] text-center mb-3">
          Tap any set to preview:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {GALLERY_IMAGES.map((set) => (
            <button
              key={set.id}
              type="button"
              onClick={() => setSelectedSet(set.id)}
              className={`p-2 rounded-2xl text-left transition-all ${
                selectedSet === set.id
                  ? 'bg-[#EFE5D8] ring-2 ring-[#7A5B3E]'
                  : 'bg-[#F5EDE3] hover:bg-[#EFE5D8] border border-[#E4D7C7]'
              }`}
            >
              <div className="aspect-[9/16] rounded-xl overflow-hidden mb-2 bg-[#E0D4C3]">
                <img
                  src={set.image}
                  alt={set.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs font-semibold text-[#2A2118] truncate">{set.name}</p>
              <p className="text-[10px] text-[#7A6957]">{set.count}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Short Benefits (Strictly 6 Benefits Requested) */}
      <div className="border-t border-[#E6DCCE] pt-10">
        <h3 className="text-xl sm:text-2xl font-serif-display font-bold text-[#2A2118] text-center mb-8">
          What You Get
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {BENEFITS.map((benefit) => (
            <div
              key={benefit.id}
              className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E5DACB] flex items-start gap-3.5 shadow-xs"
            >
              <div className="w-8 h-8 rounded-full bg-[#F1E7DA] text-[#6B4E32] flex items-center justify-center shrink-0 mt-0.5 border border-[#E2D5C4]">
                <Check className="w-4 h-4 stroke-[2.5]" />
              </div>
              <div>
                <h4 className="text-base font-semibold text-[#2A2118] leading-tight mb-1">
                  {benefit.text}
                </h4>
                <p className="text-xs sm:text-sm text-[#665747] leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
