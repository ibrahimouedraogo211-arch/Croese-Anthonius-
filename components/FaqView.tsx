/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export function FaqView() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqData: FAQItem[] = [
    {
      question: "How do I purchase and download my chosen theme?",
      answer: "The transaction is accomplished directly on our portail via secure overlays from our authorized Merchant of Record partner, Paddle. You may check out using Credit Card or PayPal. Once accepted, you'll be routed to an immediate custom Success screen that compiles your ready Shopify ZIP file. A confirmation email carrying your download links and license key is dispatched to your mailbox instantaneously."
    },
    {
      question: "Are your themes fully compatible with all Shopify store plans?",
      answer: "Yes. All Shopify themes we release are constructed to comply natively with Shopify's Online Store 2.0 architectures. They are companionable with any active Shopify tier (Shopify Basic, Shopify, Advanced, and Shopify Plus). Please note that Shopify Starter accounts do not allow uploading custom third-party zip themes."
    },
    {
      question: "What items are included inside my license purchase?",
      answer: "Your license purchase includes: 1) The official compressed theme ZIP archive. 2) Layout handbooks and setup resources in English. 3) A singular, unique license activation code. 4) Uncapped support with our designers and engineers for 6 months. 5) Free lifetime software maintenance updates."
    },
    {
      question: "How do I obtain future version upgrades for the theme?",
      answer: "When premium updates are released (e.g., to support newly unveiled Shopify core APIs), we trigger email notifications automatically. You can obtain updated ZIP packages using your initial Paddle purchase credentials instantly. Settings and custom designs carry over smoothly inside the Shopify Customizer workspace."
    },
    {
      question: "Am I allowed to install the theme on multiple Shopify stores?",
      answer: "The default License purchased ('Single-Use') entitles you to deploy and render your theme components on exactly one (1) live production Shopify storefront at a time. If you run multiple stores or represent e-commerce agencies setting up websites for various clients, you may purchase secondary single licenses or contact croeseanthonius@gmail.com for special multi-site deals."
    },
    {
      question: "What should I do if I encounter an installation error?",
      answer: "Do not worry! Our engineering department is fully available. If you see visual issues caused by third-party apps or custom code additions, simply drop us a ticket using our form or email croeseanthonius@gmail.com. We resolve all technical conflicts inside 24 business hours on weekdays."
    },
    {
      question: "Why does my credit statement show 'PADDLE PAYMENTS'?",
      answer: "Paddle.com acts as our authorized Merchant of Record. They manage our secure payment gateways, international transborder ecommerce tax filing (including EU VAT assessments), and financial safety compliance. Consequently, Paddle's identifier will be listed as the payee on your transaction records and bank statements, representing a secure, fully compliant transaction."
    }
  ];

  const toggleIdx = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div id="faq-view" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Page Header */}
      <div className="space-y-4 text-center">
        <span className="text-emerald-400 text-xs font-mono tracking-widest uppercase font-bold">
          ❔ Clear answers
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Frequently Answered Questions
        </h1>
        <p className="text-neutral-400 text-sm leading-relaxed font-sans">
          Review details on how our digital ordering works, license rules, Shopify 2.0 compliance, and Paddle processing security.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-4 pt-4">
        {faqData.map((item, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div 
              key={idx} 
              className="border border-neutral-800 bg-neutral-900/10 rounded-2xl overflow-hidden transition-colors"
            >
              <button
                onClick={() => toggleIdx(idx)}
                className="w-full flex items-center justify-between p-6 text-left cursor-pointer hover:bg-neutral-900/40 text-sm font-bold text-white tracking-tight"
              >
                <span className="flex items-center gap-2 font-sans text-neutral-200">
                  <HelpCircle className="h-4 w-4 text-emerald-400 shrink-0" />
                  {item.question}
                </span>
                {isOpen ? (
                  <ChevronUp className="h-4 w-4 text-neutral-400 shrink-0" />
                ) : (
                  <ChevronDown className="h-4 w-4 text-neutral-400 shrink-0" />
                )}
              </button>

              <div 
                className={`transition-all overflow-hidden duration-300 ${
                  isOpen ? 'max-h-[500px] border-t border-neutral-850 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed text-justify whitespace-normal break-words">
                  {item.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
