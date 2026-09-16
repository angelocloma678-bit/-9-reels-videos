import { BenefitItem, FaqItem, ReelCategory } from '../types';

export const CHECKOUT_URL =
  'https://shop.beacons.ai/donna_herdigitalcompass/dd35ee4e-8c7e-4a42-9828-5c4b60773f40?pageViewSource=lib_view&referrer=https%3A%2F%2Fbeacons.ai%2Fdonna_herdigitalcompass&show_back_button=true';

export const HERO_IMAGE = '/src/assets/images/reels_phones_improved_1789592287902.jpg';

export const GALLERY_IMAGES: ReelCategory[] = [
  {
    id: 'travel',
    name: 'Travel Content',
    subtitle: 'Wanderlust & Destination Reels',
    image: '/src/assets/images/travel_reels_preview_1789589104588.jpg',
    count: '950+ clips',
    tags: ['Turquoise ocean', 'Tropical villas', 'Golden hour beaches'],
  },
  {
    id: 'pink',
    name: 'Pink Aesthetics',
    subtitle: 'Cozy Morning & Pastels',
    image: '/src/assets/images/pink_aesthetic_reels_1789589121463.jpg',
    count: '880+ clips',
    tags: ['Fresh florals', 'Cozy cafes', 'Morning routine'],
  },
  {
    id: 'boss-babe',
    name: 'Boss Babe',
    subtitle: 'Chic City & Workspaces',
    image: '/src/assets/images/boss_babe_reels_1789589138719.jpg',
    count: '920+ clips',
    tags: ['Tailored blazers', 'Parisian streets', 'Studio setups'],
  },
  {
    id: 'melanin',
    name: 'Melanin-Rich Visuals',
    subtitle: 'Sunlit Living & Care',
    image: '/src/assets/images/melanin_reels_1789589155375.jpg',
    count: '900+ clips',
    tags: ['Natural textures', 'Plant care', 'Desk rituals'],
  },
  {
    id: 'luxury',
    name: 'Luxury Lifestyle',
    subtitle: 'Quiet Luxury & Architecture',
    image: '/src/assets/images/luxury_reels_1789589223758.jpg',
    count: '850+ clips',
    tags: ['Penthouse skylines', 'Fine dining', 'Minimalist marble'],
  },
];

export const BENEFITS: BenefitItem[] = [
  {
    id: '1',
    text: '5,500+ faceless videos',
    description: 'A massive curated library of high-resolution aesthetic clips ready right now.',
  },
  {
    id: '2',
    text: 'Ready-to-use vertical content',
    description: 'Formatted in clean 9:16 portrait ratio to post directly to your channels.',
  },
  {
    id: '3',
    text: 'Multiple styles and niches',
    description: 'Travel, cozy beige, pink aesthetics, boss babe, luxury, and melanin-rich collections.',
  },
  {
    id: '4',
    text: 'Perfect for Reels, TikTok & Shorts',
    description: 'Seamlessly works across all major video platforms and story formats.',
  },
  {
    id: '5',
    text: 'Easy to customize',
    description: 'Drop into Canva, CapCut, or Instagram in seconds. Add your hook and audio.',
  },
  {
    id: '6',
    text: 'Use according to the included license',
    description: 'Full clarity and peace of mind with simple, commercial-friendly guidelines included.',
  },
];

export const WHO_ITS_FOR_TAGS = [
  { label: 'Creators', desc: 'Grow your reach without filming' },
  { label: 'Businesses', desc: 'Promote products with clean aesthetic b-roll' },
  { label: 'Digital Sellers', desc: 'Bundle, repurpose, or market digital offers' },
  { label: 'Personal Brands', desc: 'Post daily consistently in minutes' },
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'How do I get the videos?',
    answer:
      'Immediately after completing your purchase, you will receive an instant access link on your screen and by email. You can download the clips directly or save them to your cloud drive.',
  },
  {
    id: 'faq-2',
    question: 'Can I edit them?',
    answer:
      'Yes. All clips are standard MP4 video files. You can edit them in any app you prefer, including Canva, CapCut, InShot, Premiere, or directly inside Instagram and TikTok.',
  },
  {
    id: 'faq-3',
    question: 'What can I use them for?',
    answer:
      'You can use them for your Instagram Reels, TikTok videos, YouTube Shorts, Pinterest Idea Pins, ad creatives, website backgrounds, and social media campaigns.',
  },
  {
    id: 'faq-4',
    question: 'Is this a one-time purchase?',
    answer:
      'Yes, it is a one-time payment of $9 with lifetime access. There are no recurring subscriptions or hidden fees.',
  },
];
