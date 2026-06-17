/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShopifyTheme } from '../types';
import { ArrowRight, Star, Cpu } from 'lucide-react';

interface ThemeCardProps {
  theme: ShopifyTheme;
  onViewDetails: (slug: string) => void;
  onCheckout: (priceId: string) => void;
}

export function ThemeCard({ theme, onViewDetails, onCheckout }: ThemeCardProps) {
  // Average calculation of reviews
  const avgRating = theme.reviews.length > 0
    ? (theme.reviews.reduce((acc, r) => acc + r.rating, 0) / theme.reviews.length).toFixed(1)
    : "5.0";

  return (
    <div id={`theme-card-${theme.slug}`} className="group relative bg-neutral-900/40 border border-neutral-800/80 rounded-2xl overflow-hidden hover:border-neutral-700/80 transition-all duration-300 flex flex-col hover:shadow-xl hover:shadow-black/40">
      
      {/* Cover Image Segment */}
      <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950 cursor-pointer" onClick={() => onViewDetails(theme.slug)}>
        <img
          src={theme.coverImage}
          alt={`Aperçu du thème Shopify ${theme.name}`}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
          <span className="text-xs bg-white text-neutral-900 font-extrabold px-3 py-1.5 rounded-lg flex items-center gap-1 uppercase tracking-wide">
            View Details <ArrowRight className="h-3 w-3 text-neutral-900" />
          </span>
        </div>
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          <span className="text-[10px] font-mono font-bold bg-neutral-900/90 text-emerald-400 border border-neutral-800 px-2 py-1 rounded-md backdrop-blur-md flex items-center gap-1">
            <Cpu className="h-3 w-3" /> {theme.compatibility}
          </span>
        </div>
      </div>

      {/* Main Content Info */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          
          {/* Header row: title and reviews rating */}
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-emerald-400 transition-colors cursor-pointer" onClick={() => onViewDetails(theme.slug)}>
              {theme.name} Theme
            </h3>
            <div className="flex items-center gap-1 text-amber-500 text-xs font-bold bg-amber-505/5 px-2 py-0.5 rounded border border-amber-500/10">
              <Star className="h-3.5 w-3.5 fill-amber-500" />
              <span>{avgRating} ({theme.reviews.length})</span>
            </div>
          </div>
          
          <p className="text-xs text-emerald-400/90 font-medium font-sans italic">
            {theme.tagline}
          </p>

          <p className="text-xs text-neutral-400 leading-relaxed font-sans line-clamp-2">
            {theme.description}
          </p>
        </div>

        {/* Purchase & Pricing */}
        <div className="mt-6 pt-4 border-t border-neutral-800/80 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] text-neutral-550 uppercase tracking-widest font-bold">
              License Price
            </span>
            <span className="text-xl font-extrabold text-white">
              {theme.price}
              <span className="text-[10px] font-medium text-neutral-550 ml-1">one-time payment</span>
            </span>
          </div>
          
          <button
            onClick={() => onCheckout(theme.priceId)}
            className="px-4 py-2 rounded-xl font-bold text-xs uppercase tracking-wider bg-emerald-500 hover:bg-emerald-400 text-neutral-950 transition-all flex items-center gap-1 cursor-pointer"
          >
            Buy Now
          </button>
        </div>

      </div>

    </div>
  );
}
