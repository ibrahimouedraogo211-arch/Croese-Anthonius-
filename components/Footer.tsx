/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Mail, ShieldCheck, Heart, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (path: string) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="app-footer" className="bg-neutral-950 text-neutral-400 border-t border-neutral-900 pt-16 pb-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand/Identity */}
          <div className="space-y-4 col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavClick('/')}>
              <div className="h-8 w-8 rounded-lg bg-emerald-500 flex items-center justify-center text-neutral-950 font-extrabold text-sm">
                C
              </div>
              <span className="font-sans font-extrabold text-base text-white tracking-wider">
                CROESE ANTHONIUS
              </span>
            </div>
            <p className="text-xs text-neutral-500 leading-relaxed">
              Independent boutique studio crafting elite Shopify themes. Pioneering high-performance SEO layouts and custom shopping journeys for global merchants.
            </p>
            <div className="flex items-center gap-2 bg-neutral-900/60 border border-neutral-800/80 rounded-xl p-3 pr-4 max-w-fit">
              <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
              <div className="text-[10px] leading-tight text-neutral-300 font-medium font-sans">
                Official Creative Partner <br />
                <span className="text-neutral-500 font-mono font-bold">Shopify Partners</span>
              </div>
            </div>
          </div>

          {/* Links: Collections */}
          <div>
            <h4 className="text-xs font-bold text-neutral-300 uppercase tracking-widest mb-4">
              Premium Themes
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={() => handleNavClick('/themes/gravity')} className="hover:text-emerald-400 text-left transition-colors">
                  Gravity Shopify Theme (High Density & Catalogs)
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/themes/lively')} className="hover:text-emerald-400 text-left transition-colors">
                  Lively Shopify Theme (Offline & Online Food Store)
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/themes/soleway')} className="hover:text-emerald-400 text-left transition-colors">
                  Soleway Shopify Theme (Retail & Seamless Journey)
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/themes/vows')} className="hover:text-emerald-400 text-left transition-colors">
                  Vows Shopify Theme (Block Flexibility & Luxury)
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/themes/crimson')} className="hover:text-emerald-400 text-left transition-colors">
                  Crimson Shopify Theme (Fashion & Passion)
                </button>
              </li>
              <li className="pt-2">
                <button onClick={() => handleNavClick('/themes')} className="text-emerald-400 hover:underline inline-flex items-center gap-1 font-semibold">
                  Full Catalogue <ArrowUpRight className="h-3 w-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Links: Infos & Support */}
          <div>
            <h4 className="text-xs font-bold text-neutral-300 uppercase tracking-widest mb-4">
              Help & Resources
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={() => handleNavClick('/support')} className="hover:text-emerald-400 text-left transition-colors">
                  Installation Guides
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/about')} className="hover:text-emerald-400 text-left transition-colors">
                  Our Brand History
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/faq')} className="hover:text-emerald-400 text-left transition-colors">
                  Foire Aux Questions (FAQ)
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/contact')} className="hover:text-emerald-400 text-left transition-colors">
                  Request Support
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details & Paddle Statement */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-neutral-300 uppercase tracking-widest mb-4">
              Contact Us
            </h4>
            <div className="space-y-2 text-xs">
              <a 
                href="mailto:croeseanthonius@gmail.com" 
                className="flex items-center gap-2 text-neutral-300 hover:text-emerald-400 transition-colors bg-neutral-900 border border-neutral-800 p-2.5 rounded-lg font-mono font-medium max-w-max"
              >
                <Mail className="h-4 w-4 text-emerald-400 shrink-0" />
                croeseanthonius@gmail.com
              </a>
              <p className="text-[10px] text-neutral-500 leading-normal">
                Our support team reviews all inquiries within 24 business hours. Priority support active for registered licensees.
              </p>
            </div>
            
            {/* Sec. Statement */}
            <div className="pt-2 border-t border-neutral-900 space-y-2">
              <div className="flex items-center gap-1">
                <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-1.5 py-0.5 rounded font-bold font-mono">
                  Paddle MoR
                </span>
                <span className="text-[10px] text-neutral-455">Merchant of Record</span>
              </div>
              <p className="text-[9px] text-neutral-600 leading-snug">
                Our order checkout and sales billing operations are securely processed and verified by Paddle Payments Ltd, our authorized reseller. Purchases are chiffrés SSL.
              </p>
            </div>
          </div>

        </div>

        {/* Legal links + Copyright */}
        <div className="border-t border-neutral-900 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-6 text-xs text-neutral-500 font-medium">
            <button onClick={() => handleNavClick('/legal/terms-of-service')} className="hover:text-neutral-300 transition-colors">
              Terms of Service
            </button>
            <button onClick={() => handleNavClick('/legal/privacy-policy')} className="hover:text-neutral-300 transition-colors">
              Privacy Policy (GDPR)
            </button>
            <button onClick={() => handleNavClick('/legal/refund-policy')} className="hover:text-neutral-300 transition-colors">
              Refund Policy
            </button>
            <button onClick={() => handleNavClick('/legal/license')} className="hover:text-neutral-300 transition-colors">
              License Agreement
            </button>
          </div>
          
          <div className="text-[11px] text-neutral-600 flex items-center gap-1">
            <span>© {currentYear} Croese Anthonius. Crafted with</span>
            <Heart className="h-3 w-3 text-emerald-500 fill-emerald-500" />
            <span>for Shopify merchants.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
