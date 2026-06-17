/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ShopifyTheme } from '../types';
import { ThemeCard } from './ThemeCard';
import { Sliders } from 'lucide-react';

interface CatalogueViewProps {
  themes: ShopifyTheme[];
  onNavigate: (path: string) => void;
  onCheckout: (priceId: string) => void;
}

export function CatalogueView({ themes, onNavigate, onCheckout }: CatalogueViewProps) {
  const [filter, setFilter] = useState<'all' | 'speed' | 'visual' | 'creative'>('all');

  const filteredThemes = themes.filter(theme => {
    if (filter === 'all') return true;
    if (filter === 'speed') return theme.slug === 'lively' || theme.slug === 'velocity' || theme.slug === 'vitesse';
    if (filter === 'visual') return theme.slug === 'gravity' || theme.slug === 'vows' || theme.slug === 'crimson';
    if (filter === 'creative') return theme.slug === 'soleway';
    return true;
  });

  return (
    <div id="catalogue-view" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Page Header */}
      <div className="space-y-4 text-center max-w-2xl mx-auto">
        <span className="text-emerald-400 text-xs font-mono tracking-widest uppercase font-bold">
          🛍️ Premium Theme Collections
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Explore Our Tested Shopify Templates
        </h1>
        <p className="text-sm text-neutral-400 leading-relaxed font-sans">
          All elite layouts are fully optimized to support Shopify Online Store 2.0. Clean liquid architecture, engineered to launch without complex coding credentials.
        </p>
      </div>

      {/* Filter Toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-y border-neutral-900 py-6">
        <div className="flex items-center gap-2 text-neutral-300 text-xs font-bold uppercase tracking-wider">
          <Sliders className="h-4 w-4 text-emerald-400" />
          <span>Filter by core niche :</span>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {[
            { id: 'all', label: 'View All' },
            { id: 'visual', label: 'Luxury & Aesthetics' },
            { id: 'speed', label: 'Conversion Speed & SEO' },
            { id: 'creative', label: 'Craft & Storytellers' }
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id as any)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-colors border ${
                filter === btn.id
                  ? 'bg-white text-neutral-950 border-white font-bold'
                  : 'bg-neutral-900 text-neutral-450 border-neutral-800 hover:text-white'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>

      {/* Themes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredThemes.map((theme) => (
          <ThemeCard
            key={theme.slug}
            theme={theme}
            onViewDetails={(slug) => onNavigate(`/themes/${slug}`)}
            onCheckout={onCheckout}
          />
        ))}
      </div>

      {filteredThemes.length === 0 && (
        <div className="text-center py-16 border border-dashed border-neutral-850 rounded-2xl">
          <p className="text-sm text-neutral-400">No template matches the selected core filter.</p>
        </div>
      )}

      {/* Trust guarantees bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-neutral-900/20 border border-neutral-900 rounded-2xl p-6 mt-16">
        <div className="flex items-start gap-3">
          <div className="h-4 w-4 rounded bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-xs p-3.5 shrink-0">
            1
          </div>
          <div className="space-y-1">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Instant Deliverability</h4>
            <p className="text-[10px] text-neutral-500 leading-relaxed font-sans text-justify">
              Immediately following successful validation by Paddle, an email with a secure link to save your clean theme .ZIP package and PDF handbook is triggered.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-2.5">
          <div className="h-4 w-4 rounded bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-xs p-3.5 shrink-0">
            2
          </div>
          <div className="space-y-1">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Verified License Security</h4>
            <p className="text-[10px] text-neutral-500 leading-relaxed font-sans text-justify">
              Purchases generate a single production license certificate authorizing deployment on one (1) lifetime production Shopify store.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-2.5">
          <div className="h-4 w-4 rounded bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-xs p-3.5 shrink-0">
            3
          </div>
          <div className="space-y-1">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Fully Compliant Checkout</h4>
            <p className="text-[10px] text-neutral-500 leading-relaxed font-sans text-justify">
              Financial checkout processes are completed strictly via Paddle. This guarantees appropriate transborder sales tax calculations and high fraud defenses.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
