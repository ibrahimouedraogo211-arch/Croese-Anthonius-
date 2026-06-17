/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShopifyTheme } from '../types';
import { ThemeCard } from './ThemeCard';
import { ArrowRight, Zap, RefreshCw, HelpCircle, ShieldAlert, BadgeCheck, CheckCircle } from 'lucide-react';

interface HomeViewProps {
  themes: ShopifyTheme[];
  onNavigate: (path: string) => void;
  onCheckout: (priceId: string) => void;
}

export function HomeView({ themes, onNavigate, onCheckout }: HomeViewProps) {
  return (
    <div id="home-view" className="space-y-24 pb-20">
      
      {/* 1. Hero Section */}
      <section className="relative pt-12 pb-20 md:py-32 overflow-hidden">
        {/* Subtle decorative background gradients */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-emerald-500/5 blur-[80px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center space-y-8 relative px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 bg-neutral-900 border border-neutral-800 rounded-full px-4 py-1.5 text-xs text-neutral-300 transform hover:scale-102 transition-transform duration-100">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 load-indicator animate-pulse" />
            <span>Certified Shopify 2.0 Templates — Optimized for high conversion & high speed</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Elite <span className="bg-gradient-to-r from-emerald-400 via-emerald-200 to-white bg-clip-text text-transparent">Shopify Themes</span> <br />
            engineered to grow your brand.
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-neutral-400 leading-relaxed">
            Save up to $80/month in mandatory Shopify app subscriptions. Our premium themes natively include built-in live filter layers, dynamic lookbooks, slide-out carts, and responsive merchandising.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onNavigate('/themes')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold bg-emerald-500 text-neutral-950 hover:bg-emerald-400 transition-all text-sm uppercase tracking-wider shadow-lg shadow-emerald-500/15 flex items-center justify-center gap-2 cursor-pointer animate-scale-up"
            >
              Browse Templates
              <ArrowRight className="h-4 w-4 text-neutral-950 animate-bounce-right" />
            </button>
            <button
              onClick={() => onNavigate('/support')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold border border-neutral-800 bg-neutral-900 hover:bg-neutral-800 text-neutral-200 transition-all text-sm uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer"
            >
              Installation Assistance
            </button>
          </div>

          {/* Social Proof metrics */}
          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto border-t border-neutral-900/80">
            <div>
              <span className="block text-3xl font-extrabold text-white">0.8s</span>
              <span className="text-[10px] text-neutral-550 uppercase tracking-widest font-bold">Average Load Speed</span>
            </div>
            <div>
              <span className="block text-3xl font-extrabold text-white">+28%</span>
              <span className="text-[10px] text-neutral-550 uppercase tracking-widest font-bold">Conversion Rate Growth</span>
            </div>
            <div>
              <span className="block text-3xl font-extrabold text-white">2,400+</span>
              <span className="text-[10px] text-neutral-550 uppercase tracking-widest font-bold">Shopify Stores Powered</span>
            </div>
            <div>
              <span className="block text-3xl font-extrabold text-white">4.9/5</span>
              <span className="text-[10px] text-neutral-550 uppercase tracking-widest font-bold">Global Satisfaction Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Featured Themes Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-mono tracking-widest uppercase font-bold">
              📚 Studio Catalog
            </div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Featured Collections
            </h2>
            <p className="text-sm text-neutral-400 max-w-xl">
              Each template comes with official files, dynamic layout documentation, a secure Paddle-certified activation token, and lifetime updates.
            </p>
          </div>
          <button
            onClick={() => onNavigate('/themes')}
            className="text-emerald-400 hover:text-emerald-300 text-sm font-semibold inline-flex items-center gap-1 group"
          >
            Explore Full Catalog
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
          {themes.map((theme) => (
            <ThemeCard
              key={theme.slug}
              theme={theme}
              onViewDetails={(slug) => onNavigate(`/themes/${slug}`)}
              onCheckout={onCheckout}
            />
          ))}
        </div>
      </section>

      {/* 3. Value Props Section */}
      <section className="bg-neutral-900/40 border-y border-neutral-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-2">
            <span className="text-emerald-400 text-xs font-mono tracking-widest uppercase font-bold">
              ⚙️ Built for high standards
            </span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Why Croese Anthonius?
            </h2>
            <p className="text-sm text-neutral-400 max-w-xl mx-auto">
              We engineer beautiful premium utilities to help professional merchants maximize net profit margin with clean layouts and robust core code.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
            
            {/* Speed card */}
            <div className="bg-neutral-950 border border-neutral-800/80 p-6 rounded-2xl space-y-4">
              <div className="h-10 w-10 bg-emerald-500/10 text-emerald-400 rounded-xl flex items-center justify-center">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Insane Load Speeds</h3>
              <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                Every loading millisecond damages conversions. Our Shopify code exhibits a 98% PageSpeed rating to natively boost organic SEO indexing and decrease paid traffic bounces.
              </p>
            </div>

            {/* Updates card */}
            <div className="bg-neutral-950 border border-neutral-800/80 p-6 rounded-2xl space-y-4">
              <div className="h-10 w-10 bg-emerald-500/10 text-emerald-400 rounded-xl flex items-center justify-center">
                <RefreshCw className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Free Lifetime Updates</h3>
              <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                Shopify's core infrastructure changes regularly. We continuously manage and release corrective updates so your layouts remain perfectly stable across new Shopify updates.
              </p>
            </div>

            {/* Support card */}
            <div className="bg-neutral-950 border border-neutral-800/80 p-6 rounded-2xl space-y-4">
              <div className="h-10 w-10 bg-emerald-500/10 text-emerald-400 rounded-xl flex items-center justify-center">
                <HelpCircle className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Exceptional Support SLA</h3>
              <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                Need guidance integrating a custom layout feature or importing assets? Our technical support desk responds directly inside 24 business hours on weekdays.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Customer Trust / Review Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-2">
          <span className="text-emerald-400 text-xs font-mono tracking-widest uppercase font-bold">
            ⭐️ Merchant Experiences
          </span>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Loved by ambitious independent stores
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          <div className="bg-neutral-900/30 border border-neutral-800/80 p-8 rounded-2xl space-y-4 relative">
            <span className="absolute top-6 right-8 text-6xl font-serif text-neutral-800 pointer-events-none select-none">“</span>
            <div className="flex gap-1 text-amber-500">
              {"★".repeat(5)}
            </div>
            <p className="text-sm font-medium text-neutral-200 leading-relaxed font-sans font-medium text-justify">
              "Setup was incredibly simple. After launching the Elegance theme, our bounce rate dropped down to 20% flat. Genuine craft and excellent support help."
            </p>
            <div>
              <span className="block text-xs font-bold text-white">Justine G.</span>
              <span className="text-[10px] text-neutral-500">Founder of Maison Justine, Paris</span>
            </div>
          </div>

          <div className="bg-neutral-900/30 border border-neutral-800/80 p-8 rounded-2xl space-y-4 relative">
            <span className="absolute top-6 right-8 text-6xl font-serif text-neutral-800 pointer-events-none select-none">“</span>
            <div className="flex gap-1 text-amber-500">
              {"★".repeat(5)}
            </div>
            <p className="text-sm font-medium text-neutral-200 leading-relaxed font-sans font-medium text-justify">
              "The Lively theme completely revolutionized our online bakery and local deliveries! Our customers love the seamless ordering journey, and having local pickup options built-in has boosted conversions significantly."
            </p>
            <div>
              <span className="block text-xs font-bold text-white">Stephen B.</span>
              <span className="text-[10px] text-neutral-550">Founder of Artisan Bakery & Co.</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Final CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 rounded-3xl p-8 md:p-12 text-center space-y-6 relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-60 h-60 bg-emerald-500/5 blur-[50px] rounded-full pointer-events-none" />
          
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ready to elevate your Shopify experience?
          </h2>
          <p className="max-w-xl mx-auto text-xs sm:text-sm text-neutral-400 leading-relaxed">
            Acquire your certified template securely through our authorized reseller Paddle, download your clean liquid ZIP instantly, and launch a beautifully responsive store.
          </p>
          
          <div className="pt-4">
            <button
              onClick={() => onNavigate('/themes')}
              className="px-8 py-4 rounded-xl font-bold bg-white text-neutral-950 hover:bg-neutral-100 transition-all text-xs uppercase tracking-wider shadow-xl flex items-center justify-center gap-2 mx-auto cursor-pointer"
            >
              Browse Shopify Themes
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          
          <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-[10px] text-neutral-500 font-medium">
            <span className="flex items-center gap-1">
              <BadgeCheck className="h-3.5 w-3.5 text-emerald-400" />
              One-Time License Fee (No annoying subscriptions)
            </span>
            <span className="flex items-center gap-1">
              <BadgeCheck className="h-3.5 w-3.5 text-emerald-400" />
              Lifetime Free Upgrades Included
            </span>
            <span className="flex items-center gap-1">
              <BadgeCheck className="h-3.5 w-3.5 text-emerald-400" />
              Secure Checkout Handled via Paddle Payments
            </span>
          </div>
        </div>
      </section>

    </div>
  );
}
