/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ShopifyTheme } from '../types';
import { CheckoutButton } from './CheckoutButton';
import { BadgeCheck, ArrowLeft, Star, CheckCircle, ChevronRight } from 'lucide-react';

interface DetailViewProps {
  theme: ShopifyTheme;
  onNavigate: (path: string) => void;
}

export function DetailView({ theme, onNavigate }: DetailViewProps) {
  const [activeImage, setActiveImage] = useState(theme.images[0] || theme.coverImage);
  const [activeTab, setActiveTab] = useState<'features' | 'faq' | 'reviews'>('features');

  // Calculates reviews average rating
  const avgRating = theme.reviews.length > 0
    ? (theme.reviews.reduce((acc, r) => acc + r.rating, 0) / theme.reviews.length).toFixed(1)
    : "5.0";

  return (
    <div id={`detail-view-${theme.slug}`} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      
      {/* Back button */}
      <div>
        <button
          onClick={() => onNavigate('/themes')}
          className="group inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-400 hover:text-emerald-400 transition-colors cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Catalogue
        </button>
      </div>

      {/* Main product showcase section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Cover & screenshot gallery */}
        <div className="lg:col-span-7 space-y-4">
          <div className="aspect-[16/10] overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950">
            <img
              src={activeImage}
              alt={`Detailed preview of ${theme.name} theme`}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-all"
            />
          </div>
          
          {/* Thumbnails switcher */}
          {theme.images.length > 1 && (
            <div className="grid grid-cols-3 gap-4">
              {theme.images.map((imgUrl, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(imgUrl)}
                  className={`aspect-[16/10] rounded-xl overflow-hidden border transition-all cursor-pointer ${
                    activeImage === imgUrl ? 'border-emerald-500 ring-2 ring-emerald-500/10' : 'border-neutral-800 hover:border-neutral-700'
                  }`}
                >
                  <img
                    src={imgUrl}
                    alt={`${theme.name} layout preview ${idx + 1}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Checkout panel & specs */}
        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded font-extrabold font-mono tracking-wider uppercase">
                Shopify OS 2.0 Ready
              </span>
              <div className="flex items-center gap-1 text-xs text-amber-500 font-semibold bg-amber-505/5 px-2 py-0.5 rounded border border-amber-500/10">
                <Star className="h-3 w-3 fill-amber-500" />
                <span>{avgRating} ({theme.reviews.length} reviews)</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-none">
              {theme.name} Theme
            </h1>
            <p className="text-sm text-emerald-400 font-medium italic">
              {theme.tagline}
            </p>
          </div>

          <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans text-justify">
            {theme.fullDescription}
          </p>

          {/* Pricing Box (Compliant with Paddle rule: displays clear price on site) */}
          <div className="bg-neutral-900/60 border border-neutral-800 p-5 rounded-2xl space-y-4">
            <div className="flex justify-between items-baseline">
              <span className="text-xs text-neutral-400 font-medium font-sans">One-time license acquisition</span>
              <span className="text-3xl font-black text-white">
                {theme.price}
                <span className="text-xs font-normal text-neutral-550 ml-1">USD flat</span>
              </span>
            </div>

            <div className="h-px bg-neutral-800" />

            <div className="space-y-2 text-xs text-neutral-400 font-sans">
              <div className="flex items-center gap-2">
                <BadgeCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Licensed for <strong>one (1) live production store</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <BadgeCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Free lifetime theme updates included</span>
              </div>
              <div className="flex items-center gap-2">
                <BadgeCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>{theme.supportPeriod}</span>
              </div>
            </div>

            <div className="pt-2">
              <CheckoutButton
                priceId={theme.priceId}
                themeSlug={theme.slug}
                label="Acquire License"
                className="w-full bg-emerald-500 hover:bg-emerald-400 text-neutral-950 px-6 py-4 shadow-xl"
              />
            </div>

            {/* Sec warning */}
            <p className="text-[9px] text-neutral-550 text-center font-mono">
              🔒 Fully encrypted SSL layer. Processed by Paddle (Merchant of Record).
            </p>
          </div>

          {/* Quick specs grid */}
          <div className="grid grid-cols-2 gap-4 text-xs bg-neutral-950 border border-neutral-800 rounded-xl p-4">
            <div>
              <span className="text-neutral-550 block font-medium">Developer</span>
              <span className="text-neutral-200 font-semibold">{theme.author}</span>
            </div>
            <div>
              <span className="text-neutral-550 block font-medium">Current Version</span>
              <span className="text-neutral-200 font-mono font-semibold">v{theme.version}</span>
            </div>
            <div>
              <span className="text-neutral-550 block font-medium">Released on</span>
              <span className="text-neutral-200 font-semibold">{theme.releaseDate}</span>
            </div>
            <div>
              <span className="text-neutral-550 block font-medium">Compatibility</span>
              <span className="text-neutral-200 font-semibold">{theme.compatibility}</span>
            </div>
          </div>

        </div>

      </div>

      {/* Tabs */}
      <div className="border-t border-neutral-900 pt-10">
        <div className="flex border-b border-neutral-800 mb-8 overflow-x-auto whitespace-nowrap gap-6 text-sm font-semibold">
          {[
            { id: 'features', label: 'Key Features' },
            { id: 'faq', label: 'Theme FAQ' },
            { id: 'reviews', label: `Merchant Reviews (${theme.reviews.length})` }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`pb-4 border-b-2 px-1 transition-colors hover:text-white cursor-pointer uppercase text-xs tracking-wider ${
                activeTab === tab.id ? 'border-emerald-500 text-white font-bold' : 'border-transparent text-neutral-500'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab contents */}
        <div className="min-h-[200px]">
          {activeTab === 'features' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {theme.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-neutral-900/20 border border-neutral-800 p-5 rounded-xl">
                  <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                  <p className="text-sm text-neutral-300 font-sans">{feature}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'faq' && (
            <div className="space-y-4 max-w-3xl">
              {theme.faq.map((item, idx) => (
                <div key={idx} className="border border-neutral-800 bg-neutral-900/10 rounded-xl p-5 space-y-2">
                  <h4 className="text-sm font-bold text-white font-sans">{item.question}</h4>
                  <p className="text-xs text-neutral-400 leading-relaxed font-sans text-justify">{item.answer}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="space-y-6">
              {theme.reviews.map((rev) => (
                <div key={rev.id} className="border border-neutral-800/80 bg-neutral-900/10 p-6 rounded-xl space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="block text-sm font-bold text-white font-sans">{rev.userName}</span>
                      <span className="text-[10px] text-emerald-400 font-mono italic">Shopify Store: {rev.shopName}</span>
                    </div>
                    <span className="text-[10px] text-neutral-500 font-medium">{rev.date}</span>
                  </div>
                  <div className="flex gap-1 text-amber-500 text-xs">
                    {"★".repeat(rev.rating)}
                  </div>
                  <p className="text-xs text-neutral-450 leading-relaxed font-sans text-justify">{rev.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Help block */}
      <div className="bg-gradient-to-r from-neutral-900/40 via-neutral-950 to-neutral-900/40 border border-neutral-850 p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-white">Seeking pre-sales advice or customization consulting?</h3>
          <p className="text-xs text-neutral-450 max-w-xl font-sans leading-relaxed text-left">
            Read our verified installation checklist, explore optimal compression guides, or consult with our brand experts to determine which template best fits your niche's product sizing grids.
          </p>
        </div>
        <div className="flex gap-4 shrink-0 text-xs font-bold">
          <button onClick={() => onNavigate('/support')} className="text-emerald-400 hover:underline inline-flex items-center gap-1 cursor-pointer">
            Explore Documentation <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

    </div>
  );
}
