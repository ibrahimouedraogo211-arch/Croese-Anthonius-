/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Mail, Clock, ShieldCheck, MapPin, Building } from 'lucide-react';

export function AboutView() {
  return (
    <div id="about-view" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header section */}
      <div className="space-y-4 text-center">
        <span className="text-emerald-400 text-xs font-mono tracking-widest uppercase font-bold">
          🏢 Brand Identity
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          About Croese Anthonius
        </h1>
        <p className="text-neutral-400 text-sm max-w-2xl mx-auto leading-relaxed font-sans">
          We are an elite software boutique focused on engineering high-conversion templates and blazing fast liquid frameworks for premium Shopify merchants worldwide.
        </p>
      </div>

      {/* Main content grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start pt-4">
        
        {/* Left column: Story text */}
        <div className="space-y-6 text-sm text-neutral-350 leading-relaxed font-sans text-justify">
          <h2 className="text-xl font-bold text-white tracking-tight">Our Core Mission</h2>
          <p>
            Established in 2021 by a cooperative of design experts and senior Shopify engineers, Croese Anthonius bridges the gap between boutique, luxury-brand aesthetics and the raw speed optimization standards required by modern, high-intensity ecommerce.
          </p>
          <p>
            We repeatedly witnessed merchants slowing down their storefront loading metrics due to installing dozens of bloated auxiliary scripts (reviews widgets, comparison sliders, dynamic tables, countdown clocks). Our approach is simple: <strong>build the most requested modern features directly into the theme's core Liquid template, coded clean and optimized statically on server loads.</strong>
          </p>
          <p>
            By consolidating critical conversion assets straight into the core liquid skeleton, we raise average merchant conversion margins and bypass pricy ongoing app subscription bills entirely.
          </p>
        </div>

        {/* Right column: Individual seller info for Paddle verification */}
        <div className="bg-neutral-900/60 border border-neutral-800 p-6 rounded-2xl space-y-6">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider pb-3 border-b border-neutral-800 font-sans">
            Legal Information & Contact
          </h3>
          
          <p className="text-xs text-neutral-450 leading-relaxed font-sans text-justify">
            This website is operated by an independent individual seller, not a registered legal entity:
          </p>

          <div className="space-y-4 text-xs font-sans">
            
            {/* Seller Name */}
            <div className="flex items-start gap-3">
              <Building className="h-5 w-5 text-emerald-450 shrink-0 mt-0.5" />
              <div>
                <span className="block text-[10px] text-neutral-500 uppercase tracking-widest font-bold font-sans">Seller</span>
                <span className="text-neutral-200 font-semibold text-sm">Anthonius Nicolaas Jozef Croese</span>
              </div>
            </div>

            {/* Country of Operation */}
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-emerald-450 shrink-0 mt-0.5" />
              <div>
                <span className="block text-[10px] text-neutral-500 uppercase tracking-widest font-bold font-sans">Country of Operation</span>
                <span className="text-neutral-200 font-semibold">The Netherlands</span>
              </div>
            </div>

            {/* Payments processor */}
            <div className="flex items-start gap-3">
              <ShieldCheck className="h-5 w-5 text-emerald-450 shrink-0 mt-0.5" />
              <div>
                <span className="block text-[10px] text-neutral-500 uppercase tracking-widest font-bold font-sans">Payments Processor</span>
                <span className="text-neutral-350 leading-relaxed block">
                  Payments are securely processed by Paddle.com (Paddle.com Market Limited), acting as Merchant of Record. Paddle handles all billing, tax compliance, and payment processing on behalf of sellers.
                </span>
              </div>
            </div>

            {/* Support info */}
            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-emerald-450 shrink-0 mt-0.5" />
              <div>
                <span className="block text-[10px] text-neutral-500 uppercase tracking-widest font-bold font-sans">Customer Support</span>
                <a href="mailto:croeseanthonius@gmail.com" className="text-emerald-400 font-mono font-semibold hover:underline block">
                  croeseanthonius@gmail.com
                </a>
                <span className="block text-[10px] text-neutral-500 mt-1 leading-normal">
                  For any questions regarding your purchase, billing, or refunds, please contact us at the email above or reach out directly to Paddle support at <a href="https://paddle.com/support" target="_blank" rel="noopener noreferrer" className="underline hover:text-emerald-400">paddle.com/support</a>.
                </span>
              </div>
            </div>

          </div>

          <div className="h-px bg-neutral-800" />

          {/* Contact note */}
          <div className="text-[10px] text-neutral-550 flex items-center gap-1.5 justify-center font-sans text-center leading-snug">
            <span>Customer satisfaction SLA: reply within 24 business hours.</span>
          </div>

        </div>

      </div>

    </div>
  );
}
