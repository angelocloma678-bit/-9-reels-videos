export interface ReelCategory {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  count: string;
  tags: string[];
}

export interface BenefitItem {
  id: string;
  text: string;
  description: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
