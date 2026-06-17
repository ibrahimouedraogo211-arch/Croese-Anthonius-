/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Download, Upload, Sliders, Mail, FileText, ChevronRight } from 'lucide-react';

interface SupportViewProps {
  onNavigate: (path: string) => void;
}

export function SupportView({ onNavigate }: SupportViewProps) {
  return (
    <div id="support-view" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header section */}
      <div className="space-y-4 text-center">
        <span className="text-emerald-400 text-xs font-mono tracking-widest uppercase font-bold">
          🛠️ Support Hub
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Installation Manual & Resources
        </h1>
        <p className="text-neutral-400 text-sm max-w-2xl mx-auto leading-relaxed font-sans">
          Congratulations on acquiring an elite layout template. Carefully run through these steps to upload and deploy your new Shopify theme ZIP package.
        </p>
      </div>

      {/* Steps list */}
      <div className="space-y-8 pt-4">
        <h2 className="text-xl font-bold text-white tracking-tight border-b border-neutral-800 pb-3">
          Step-by-Step Installation Process
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Step 1 */}
          <div className="bg-neutral-900/40 border border-neutral-800 p-6 rounded-2xl space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="h-10 w-10 bg-emerald-500/10 text-emerald-400 rounded-xl flex items-center justify-center font-bold font-sans">
                1
              </div>
              <h3 className="text-sm font-bold text-white flex items-center gap-1.5 font-sans">
                <Download className="h-4 w-4 text-emerald-400 shrink-0" />
                Obtain ZIP Package
              </h3>
              <p className="text-xs text-neutral-450 leading-relaxed font-sans text-justify">
                Immediately following Paddle complete verification, review your email inbox. You will receive an official download thread with your custom compresssed theme assets (e.g. <code>theme-xxx-v2.zip</code>) and license certificate token.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-neutral-900/40 border border-neutral-800 p-6 rounded-2xl space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="h-10 w-10 bg-emerald-500/10 text-emerald-400 rounded-xl flex items-center justify-center font-bold font-sans">
                2
              </div>
              <h3 className="text-sm font-bold text-white flex items-center gap-1.5 font-sans">
                <Upload className="h-4 w-4 text-emerald-400 shrink-0" />
                Upload to Shopify
              </h3>
              <p className="text-xs text-neutral-450 leading-relaxed font-sans text-justify">
                Sign in to your Shopify store administration portal. Navigate to the left side menu: <strong>Online Store</strong> → <strong>Themes</strong>. Inside the Theme Library deck, select <strong>Add Theme</strong> and upload your downloaded <code>.zip</code> package directly.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-neutral-900/40 border border-neutral-800 p-6 rounded-2xl space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="h-10 w-10 bg-emerald-500/10 text-emerald-400 rounded-xl flex items-center justify-center font-bold font-sans">
                3
              </div>
              <h3 className="text-sm font-bold text-white flex items-center gap-1.5 font-sans">
                <Sliders className="h-4 w-4 text-emerald-400 shrink-0" />
                Customize & Design
              </h3>
              <p className="text-xs text-neutral-450 leading-relaxed font-sans text-justify">
                Once downloaded, the theme displays underneath your library slots. Tap <strong>Customize</strong> to open the drag-and-drop editor to play with your colors and layouts safely without modifying your live production store content.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Help ticketing info block */}
      <div className="bg-neutral-900/20 border border-neutral-800/80 rounded-2xl p-8 space-y-6">
        <h3 className="text-lg font-bold text-white">How to initiate a support request ticket?</h3>
        
        <p className="text-xs text-neutral-300 leading-relaxed font-sans text-justify">
          If you encounter difficulties customizing sections, integrating pixel trackers, or solving conflicts induced by third-party apps, our specialized technical support desk is entirely free for 6 months after acquisition:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-neutral-400 font-sans">
          
          <div className="space-y-2 border-l-2 border-emerald-500 pl-4">
            <h4 className="font-bold text-neutral-200">Interactive Support Forms</h4>
            <p className="text-justify leading-relaxed">
              Use our on-site ticket routing layout to outline details. Insert snapshots of your Shopify block layout settings to let our agents diagnose discrepancies rapidly.
            </p>
            <button 
              onClick={() => onNavigate('/contact')}
              className="text-emerald-400 hover:text-emerald-300 font-bold hover:underline inline-flex items-center gap-1 pt-1 cursor-pointer"
            >
              Open Ticket Form <ChevronRight className="h-3 w-3" />
            </button>
          </div>

          <div className="space-y-2 border-l-2 border-emerald-500 pl-4">
            <h4 className="font-bold text-neutral-200">Direct Priority Email Contacts</h4>
            <p className="text-justify leading-relaxed">
              Email our support desk using the authorized account. Always include your unique Paddle billing reference number or your licensed domain address to qualify for priority queue response.
            </p>
            <a href="mailto:croeseanthonius@gmail.com" className="text-emerald-400 font-mono font-bold hover:underline block pt-1">
              croeseanthonius@gmail.com
            </a>
          </div>

        </div>
      </div>

      {/* Documentation Starter Templates */}
      <div className="border border-neutral-850 bg-neutral-950 p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <FileText className="h-8 w-8 text-neutral-500 shrink-0" />
          <div className="space-y-1">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Need the PDF Setup Manual?</h4>
            <p className="text-[10px] text-neutral-550 font-sans text-justify">
              Download our offline installation guide documenting ideal image compression sizes, CSS class listings, and mega-menu custom selectors.
            </p>
          </div>
        </div>
        <a 
          href="#download-doc"
          onClick={(e) => { e.preventDefault(); alert("Detailed PDF documentation resides directly inside the downloaded theme .ZIP repository package."); }}
          className="text-white hover:text-emerald-400 text-xs font-bold shrink-0 border border-neutral-800 hover:border-neutral-700 p-2.5 rounded-lg transition-all"
        >
          Download PDF Guide
        </a>
      </div>

    </div>
  );
}
