import React, { useState, useEffect, useRef } from 'react';
import {
  Play,
  Pause,
  VolumeX,
  RotateCcw,
  Sparkles,
  Smartphone,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { CHECKOUT_URL } from '../data/landingData';

// Images corresponding to the 6 sets shown in the video
const SET_FRAMES = [
  {
    title: '✨ FACELESS AESTHETIC CLIPS',
    image: '/src/assets/images/pink_aesthetic_reels_1789589121463.jpg',
    tag: 'Set 1 of 6',
  },
  {
    title: '✈️ TRAVEL CONTENT',
    image: '/src/assets/images/travel_reels_preview_1789589104588.jpg',
    tag: 'Set 2 of 6',
  },
  {
    title: '🩷 PINK AESTHETICS',
    image: '/src/assets/images/pink_aesthetic_reels_1789589121463.jpg',
    tag: 'Set 3 of 6',
  },
  {
    title: '💼 BOSS BABE VIDEOS',
    image: '/src/assets/images/boss_babe_reels_1789589138719.jpg',
    tag: 'Set 4 of 6',
  },
  {
    title: '🤎 MELANIN-RICH VISUALS',
    image: '/src/assets/images/melanin_reels_1789589155375.jpg',
    tag: 'Set 5 of 6',
  },
  {
    title: '💎 LUXURY LIFESTYLE CLIPS',
    image: '/src/assets/images/luxury_reels_1789589223758.jpg',
    tag: 'Set 6 of 6',
  },
];

// Timeline chapters of the 21-second video uploaded by the user
const VIDEO_DURATION = 21; // seconds

export const VideoPreviewSection: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef<number | null>(null);

  // Playback timer loop
  useEffect(() => {
    if (!isPlaying) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    const interval = 100; // 100ms ticks
    timerRef.current = window.setInterval(() => {
      setCurrentTime((prev) => {
        const next = prev + interval / 1000;
        if (next >= VIDEO_DURATION) {
          return 0; // Loop seamlessly
        }
        return next;
      });
    }, interval);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleScrub = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
  };

  const restartVideo = () => {
    setCurrentTime(0);
    setIsPlaying(true);
  };

  // Determine current active scene based on video timestamp
  // Scene 1: 0 - 3s (Hook)
  // Scene 2: 3 - 6s (More than video library)
  // Scene 3: 6 - 15s (Phone in hand cycling through 6 categories)
  // Scene 4: 15 - 17.5s (Rebrand & resell)
  // Scene 5: 17.5 - 19.5s (5,500+ videos for $9)
  // Scene 6: 19.5 - 21s (All yours for just $9)
  const isScene1 = currentTime < 3;
  const isScene2 = currentTime >= 3 && currentTime < 6;
  const isScene3 = currentTime >= 6 && currentTime < 15;
  const isScene4 = currentTime >= 15 && currentTime < 17.5;
  const isScene5 = currentTime >= 17.5 && currentTime < 19.5;
  const isScene6 = currentTime >= 19.5;

  // Active phone category index during Scene 3 (6s to 15s, 1.5s per category)
  const categoryIndex = Math.min(
    SET_FRAMES.length - 1,
    Math.max(0, Math.floor((currentTime - 6) / 1.5))
  );
  const activeSet = SET_FRAMES[categoryIndex] || SET_FRAMES[0];

  return (
    <section id="video-preview" className="py-14 sm:py-20 px-4 sm:px-6 bg-[#F4EFE6] border-y border-[#EAE2D5]">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EADFD0] text-[#4A3B2C] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#DCceBD]">
          <Sparkles className="w-3.5 h-3.5 text-[#8C6D4F]" />
          Video Preview
        </div>

        {/* Section Headline */}
        <h2 className="text-3xl sm:text-4xl font-serif-display font-bold text-[#2A221B] tracking-tight mb-3">
          See What's Inside
        </h2>

        {/* Short text */}
        <p className="text-base sm:text-lg text-[#5A4D40] max-w-md mx-auto mb-8 font-normal leading-relaxed">
          A quick look at the content waiting for you.
        </p>

        {/* The Exact Vertical Video Mockup Player */}
        <div className="relative mx-auto max-w-[320px] sm:max-w-[340px] shadow-2xl rounded-[44px] p-3 bg-[#241C15] border-4 border-[#3D3126]">
          {/* Top Speaker Notch Bar */}
          <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-4 bg-[#140F0C] rounded-full z-30 flex items-center justify-center">
            <div className="w-10 h-1 bg-[#33261C] rounded-full" />
            <div className="w-2 h-2 bg-[#261C14] rounded-full ml-3 border border-[#3E3024]" />
          </div>

          {/* Screen Display: 9:16 Aspect Ratio */}
          <div
            onClick={togglePlay}
            className="relative aspect-[9/16] w-full rounded-[34px] overflow-hidden bg-[#D3CD76] flex flex-col justify-between cursor-pointer select-none"
          >
            {/* Top Control Bar (Play status & Muted indicator) */}
            <div className="absolute top-10 left-3 right-3 z-30 flex items-center justify-between pointer-events-none">
              <span className="px-2.5 py-0.5 rounded-full bg-black/40 backdrop-blur-md text-white text-[10px] font-medium border border-white/10">
                Official Reel Promo
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/40 backdrop-blur-md text-white/80 text-[10px] font-medium border border-white/10">
                <VolumeX className="w-3 h-3 text-white/70" />
                <span>Mute</span>
              </span>
            </div>

            {/* SCENE 1 (0:00 - 0:02): Hook */}
            {isScene1 && (
              <div className="relative w-full h-full bg-[#CEC975] flex items-center justify-center p-6 text-center animate-fade-in">
                {/* Faint animated grid tiles in background */}
                <div className="absolute inset-0 opacity-25 grid grid-cols-3 gap-1 p-2 pointer-events-none">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div key={i} className="bg-[#B5AF55] rounded-md" />
                  ))}
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#382E1E] leading-snug tracking-tight">
                    Stop spending hours searching for the perfect B-roll 👀
                  </h3>
                </div>
              </div>
            )}

            {/* SCENE 2 (0:03 - 0:05): More than a video library */}
            {isScene2 && (
              <div className="relative w-full h-full bg-[#D8D377] flex flex-col justify-between p-4 pt-14 pb-12 animate-fade-in text-center">
                <h3 className="text-sm font-extrabold text-[#3A301F] leading-tight px-2">
                  More than a video library — it's a ready-to-sell digital product.
                </h3>
                {/* 9 Aesthetic Grid Tiles */}
                <div className="grid grid-cols-3 gap-1.5 my-auto px-1">
                  <div className="aspect-[4/5] rounded-lg overflow-hidden bg-[#C5BE62]">
                    <img
                      src="/src/assets/images/pink_aesthetic_reels_1789589121463.jpg"
                      alt="Aesthetic clip"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-[4/5] rounded-lg overflow-hidden bg-[#C5BE62]">
                    <img
                      src="/src/assets/images/travel_reels_preview_1789589104588.jpg"
                      alt="Aesthetic clip"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-[4/5] rounded-lg overflow-hidden bg-[#C5BE62]">
                    <img
                      src="/src/assets/images/boss_babe_reels_1789589138719.jpg"
                      alt="Aesthetic clip"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-[4/5] rounded-lg overflow-hidden bg-[#C5BE62]">
                    <img
                      src="/src/assets/images/melanin_reels_1789589155375.jpg"
                      alt="Aesthetic clip"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-[4/5] rounded-lg overflow-hidden bg-[#C5BE62]">
                    <img
                      src="/src/assets/images/luxury_reels_1789589223758.jpg"
                      alt="Aesthetic clip"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-[4/5] rounded-lg overflow-hidden bg-[#C5BE62]">
                    <img
                      src="/src/assets/images/pink_aesthetic_reels_1789589121463.jpg"
                      alt="Aesthetic clip"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-[4/5] rounded-lg overflow-hidden bg-[#C5BE62]">
                    <img
                      src="/src/assets/images/travel_reels_preview_1789589104588.jpg"
                      alt="Aesthetic clip"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-[4/5] rounded-lg overflow-hidden bg-[#C5BE62]">
                    <img
                      src="/src/assets/images/boss_babe_reels_1789589138719.jpg"
                      alt="Aesthetic clip"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-[4/5] rounded-lg overflow-hidden bg-[#C5BE62]">
                    <img
                      src="/src/assets/images/melanin_reels_1789589155375.jpg"
                      alt="Aesthetic clip"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <p className="text-[10px] text-[#4A3E2A] font-semibold">5,500+ Curated Clips</p>
              </div>
            )}

            {/* SCENE 3 (0:06 - 0:14): 6 Sets Phone Display Held in Hand */}
            {isScene3 && (
              <div className="relative w-full h-full bg-[#E5DFC7] flex flex-col justify-between pt-12 pb-10 text-center animate-fade-in">
                {/* Category Header (e.g. ✈️ TRAVEL CONTENT, 🩷 PINK AESTHETICS) */}
                <div className="px-3 pt-2">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#4A3B2B] text-amber-100 text-xs font-bold uppercase tracking-wide shadow-sm">
                    {activeSet.title}
                  </span>
                </div>

                {/* Hand-held Phone Visual Grid */}
                <div className="relative mx-auto w-[86%] aspect-[9/15] rounded-2xl overflow-hidden border-2 border-[#33261C] shadow-lg my-auto bg-black">
                  <img
                    src={activeSet.image}
                    alt={activeSet.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Status Bar inside the reel */}
                  <div className="absolute top-2 left-2 right-2 flex items-center justify-between text-[9px] text-white/80 font-mono">
                    <span className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                      REC
                    </span>
                    <span>RAW 1:05:08</span>
                  </div>
                </div>

                {/* Bottom Tag */}
                <div className="px-3">
                  <span className="text-[10px] font-bold text-[#4B3D2B] bg-white/60 backdrop-blur-xs px-2.5 py-0.5 rounded-full">
                    {activeSet.tag} • Ready to post
                  </span>
                </div>
              </div>
            )}

            {/* SCENE 4 (0:15 - 0:17): Scroll-Stopping Content & Resell */}
            {isScene4 && (
              <div className="relative w-full h-full bg-[#CEC975] flex items-center justify-center p-6 text-center animate-fade-in">
                <div className="space-y-4">
                  <h3 className="text-xl sm:text-2xl font-black text-[#382E1E] leading-tight uppercase tracking-tight">
                    Use them to create scroll-stopping content
                  </h3>
                  <p className="text-sm font-bold text-[#4A3D2A] leading-relaxed">
                    — or rebrand and resell the entire bundle as your own.
                  </p>
                </div>
              </div>
            )}

            {/* SCENE 5 (0:17 - 0:19): Offer Callout */}
            {isScene5 && (
              <div className="relative w-full h-full bg-[#D8D377] flex flex-col justify-between p-4 pt-14 pb-12 animate-fade-in text-center">
                <h3 className="text-sm font-extrabold text-[#382E1E] leading-snug px-2">
                  Get instant access to 5,500+ ready-to-use videos for $9 only,
                </h3>
                <div className="grid grid-cols-3 gap-1.5 my-auto px-1">
                  <div className="aspect-[4/5] rounded-lg overflow-hidden">
                    <img
                      src="/src/assets/images/travel_reels_preview_1789589104588.jpg"
                      alt="Travel"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-[4/5] rounded-lg overflow-hidden">
                    <img
                      src="/src/assets/images/boss_babe_reels_1789589138719.jpg"
                      alt="Boss babe"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-[4/5] rounded-lg overflow-hidden">
                    <img
                      src="/src/assets/images/pink_aesthetic_reels_1789589121463.jpg"
                      alt="Pink aesthetic"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <p className="text-xs font-bold text-[#382E1E]">Instant Lifetime Access</p>
              </div>
            )}

            {/* SCENE 6 (0:19 - 0:21): Final CTA with Pink Arrows */}
            {isScene6 && (
              <div className="relative w-full h-full bg-[#CEC975] flex flex-col items-center justify-center p-5 text-center animate-fade-in space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#4A3D2A] bg-white/40 px-3 py-1 rounded-full">
                  Special Offer
                </span>
                <h3 className="text-2xl font-black text-[#382E1E] tracking-tight">
                  All yours for just $9
                </h3>
                <p className="text-sm font-extrabold text-[#382E1E]">
                  Tap Get Bundle and start creating today!
                </p>
                {/* Hand-drawn style pink arrows */}
                <div className="text-rose-500 font-bold text-3xl tracking-widest animate-bounce pt-1">
                  ↓↓↓
                </div>
                <a
                  href={CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#382E1E] text-amber-100 text-xs font-bold shadow-md hover:scale-105 transition-transform"
                >
                  <span>Get Instant Access</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}

            {/* Tap to Play / Pause Indicator */}
            {!isPlaying && (
              <div className="absolute inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center z-20">
                <div className="w-14 h-14 rounded-full bg-white/90 text-[#2A221B] flex items-center justify-center shadow-xl">
                  <Play className="w-6 h-6 ml-1 fill-current" />
                </div>
              </div>
            )}

            {/* Bottom Scrubbing Progress Bar */}
            <div className="absolute bottom-2 inset-x-3 z-30">
              <div className="w-full h-1.5 bg-black/30 rounded-full overflow-hidden">
                <div
                  className="h-full bg-amber-300 rounded-full transition-all duration-100"
                  style={{ width: `${(currentTime / VIDEO_DURATION) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Player Controls & Chapter Jumping */}
        <div className="mt-6 max-w-md mx-auto space-y-3">
          {/* Controls bar */}
          <div className="flex items-center justify-center gap-4 text-xs font-semibold text-[#5A4D40]">
            <button
              type="button"
              onClick={togglePlay}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#E8DDD0] hover:bg-[#DFCDBB] text-[#2A2118] transition-colors border border-[#D8C7B4]"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
              <span>{isPlaying ? 'Pause' : 'Play'}</span>
            </button>

            <button
              type="button"
              onClick={restartVideo}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#EFE5D8] hover:bg-[#E3D6C5] text-[#554536] transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Replay</span>
            </button>

            <span className="text-[#8C7A67] font-mono text-xs">
              00:{Math.floor(currentTime).toString().padStart(2, '0')} / 00:21
            </span>
          </div>

          {/* Quick Scene Jumper Chips */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 pt-1">
            <button
              type="button"
              onClick={() => setCurrentTime(0)}
              className={`px-2.5 py-1 rounded-full text-[11px] font-medium transition-all ${
                isScene1 ? 'bg-[#3A2E24] text-white' : 'bg-[#EAE0D3] text-[#554536] hover:bg-[#DFD4C5]'
              }`}
            >
              1. The Hook
            </button>
            <button
              type="button"
              onClick={() => setCurrentTime(3)}
              className={`px-2.5 py-1 rounded-full text-[11px] font-medium transition-all ${
                isScene2 ? 'bg-[#3A2E24] text-white' : 'bg-[#EAE0D3] text-[#554536] hover:bg-[#DFD4C5]'
              }`}
            >
              2. Product Inside
            </button>
            <button
              type="button"
              onClick={() => setCurrentTime(6)}
              className={`px-2.5 py-1 rounded-full text-[11px] font-medium transition-all ${
                isScene3 ? 'bg-[#3A2E24] text-white' : 'bg-[#EAE0D3] text-[#554536] hover:bg-[#DFD4C5]'
              }`}
            >
              3. 6 Visual Niches
            </button>
            <button
              type="button"
              onClick={() => setCurrentTime(15)}
              className={`px-2.5 py-1 rounded-full text-[11px] font-medium transition-all ${
                isScene4 ? 'bg-[#3A2E24] text-white' : 'bg-[#EAE0D3] text-[#554536] hover:bg-[#DFD4C5]'
              }`}
            >
              4. Resell Rights
            </button>
            <button
              type="button"
              onClick={() => setCurrentTime(19.5)}
              className={`px-2.5 py-1 rounded-full text-[11px] font-medium transition-all ${
                isScene6 ? 'bg-[#3A2E24] text-white' : 'bg-[#EAE0D3] text-[#554536] hover:bg-[#DFD4C5]'
              }`}
            >
              5. $9 Offer
            </button>
          </div>
        </div>

        {/* Micro-Benefit Callout below player */}
        <div className="mt-8 inline-flex items-center gap-2 text-xs sm:text-sm text-[#635343] font-medium">
          <CheckCircle2 className="w-4 h-4 text-[#8C6D4F]" />
          Instant download access in high resolution right after checkout
        </div>
      </div>
    </section>
  );
};
