/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ThemeFAQItem {
  question: string;
  answer: string;
}

export interface ReviewItem {
  id: string;
  userName: string;
  shopName: string;
  rating: number;
  text: string;
  date: string;
}

export interface ShopifyTheme {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  fullDescription: string;
  price: string;
  priceNumber: number;
  priceId: string;
  demoUrl: string;
  coverImage: string;
  images: string[];
  features: string[];
  compatibility: string;
  releaseDate: string;
  version: string;
  author: string;
  supportPeriod: string;
  updatesIncluded: string;
  faq: ThemeFAQItem[];
  reviews: ReviewItem[];
}

export interface CartItem {
  theme: ShopifyTheme;
  licenseType: 'single' | 'multi';
}
