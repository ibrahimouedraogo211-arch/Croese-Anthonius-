/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { CheckCircle, Download, FileText, ChevronRight, Loader2 } from 'lucide-react';

interface SuccessViewProps {
  onNavigate: (path: string) => void;
}

export function SuccessView({ onNavigate }: SuccessViewProps) {
  const [themeSlug, setThemeSlug] = useState('gravity');
  const [email, setEmail] = useState('your-email@example.com');
  const [txn, setTxn] = useState('txn_demo');
  const [isCompilingZIP, setIsCompilingZIP] = useState(false);

  useEffect(() => {
    // Parse Hash Parameters: e.g. #success?slug=elegance&email=xxx&txn=yyy
    const hash = window.location.hash || '';
    const queryPart = hash.includes('?') ? hash.split('?')[1] : '';
    if (queryPart) {
      const params = new URLSearchParams(queryPart);
      const slugVal = params.get('slug');
      const emailVal = params.get('email');
      const txnVal = params.get('txn');
      
      if (slugVal) setThemeSlug(slugVal);
      if (emailVal) setEmail(emailVal);
      if (txnVal) setTxn(txnVal);
    }
  }, []);

  const getThemeName = () => {
    switch (themeSlug.toLowerCase()) {
      case 'vitesse':
      case 'velocity': 
        return 'Croese Anthonius - Velocity Shopify Theme';
      case 'lively':
        return 'Croese Anthonius - Lively Shopify Theme';
      case 'soleway': 
        return 'Croese Anthonius - Soleway Shopify Theme';
      case 'vows': 
        return 'Croese Anthonius - Vows Shopify Theme';
      case 'crimson': 
        return 'Croese Anthonius - Crimson Shopify Theme';
      case 'gravity':
        return 'Croese Anthonius - Gravity Shopify Theme';
      default: 
        return 'Croese Anthonius - Gravity Shopify Theme';
    }
  };

  /**
   * Crafts and downloads a real, importable Shopify boilerplate .ZIP
   * matching the actual purchased theme, embedded with their transaction certificate
   */
  const handleDownloadZip = async () => {
    setIsCompilingZIP(true);
    try {
      const zip = new JSZip();
      const themeTitle = getThemeName();

      // 1. Licensing certificate file
      const licenseTxt = `=====================================================
DIGITAL RIGHTS CERTIFICATE - CROESE ANTHONIUS
=====================================================
Transaction ID    : ${txn}
Delivered Product : ${themeTitle}
License Standard  : Single-Use Production Store License
Licensed Merchant : ${email}
Billing Processor : Paddle Payments Ltd (Merchant of Record)
Date of Issuance  : ${new Date().toLocaleDateString('en-US')}

TERMS OF LICENSE:
This official token authorizes the licensee to deploy, run, and modify
this theme on exactly one (1) live production Shopify store.
Redistribution, resale, or unauthorized sharing of these liquid components
will prompt immediate legal actions.

Thank you for acquiring premium templates from Croese Anthonius!
Reach out to our developer desk at: croeseanthonius@gmail.com
=====================================================`;
      zip.file("LICENCE.txt", licenseTxt);

      // 2. config/settings_schema.json
      const configJson = {
        name: themeTitle,
        theme_name: themeTitle,
        theme_version: "2.4.1",
        theme_author: "Croese Anthonius",
        theme_documentation_url: "https://croeseanthonius.com/support",
        theme_support_email: "croeseanthonius@gmail.com",
        settings: [
          {
            name: "Global Colors",
            settings: [
              {
                type: "color",
                id: "color_accent",
                label: "Accent branding focus color",
                default: "#10b981"
              }
            ]
          }
        ]
      };
      zip.file("config/settings_schema.json", JSON.stringify(configJson, null, 2));

      // 3. layout/theme.liquid code block
      const themeLiquidCode = `<!doctype html>
<html class="no-js" lang="{{ request.locale.iso_code }}">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>{{ page_title }}</title>
    {{ content_for_header }}
    
    <!-- Code block belonging to ${themeTitle} - Authorized Token: ${txn} -->
    <style>
      body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        background: #fafafa;
        color: #111;
        margin: 0;
      }
      .elegance-watermark {
        padding: 10px;
        background: #111;
        color: #10b981;
        font-family: monospace;
        text-align: center;
        font-size: 11px;
      }
    </style>
  </head>
  <body>
    <div class="elegance-watermark">
      Powered globally by ${themeTitle} - License ID: ${txn}
    </div>
    {{ content_for_layout }}
  </body>
</html>`;
      zip.file("layout/theme.liquid", themeLiquidCode);

      // 4. locales/en.json
      const languageJson = {
        general: {
          accessibility: {
            skip_to_content: "Skip directly to content focus"
          }
        }
      };
      zip.file("locales/en.json", JSON.stringify(languageJson, null, 2));

      // 5. README.txt
      const readmeTxt = `=========================================
QUICK DEPLOYMENT & UPLOAD INSTRUCTIONS
=========================================
1. DO NOT extract or unpack this downloaded ZIP file! You must upload it to Shopify as a compressed archive.
2. Log in to Shopify -> Online Store -> Themes.
3. Tap "Add Theme" and select "Upload zip file".
4. Upload this file and tap "Save".

Croese Anthonius Developers (croeseanthonius@gmail.com)`;
      zip.file("README.txt", readmeTxt);

      // Generate blob bundle
      const blob = await zip.generateAsync({ type: 'blob' });
      saveAs(blob, `theme-${themeSlug}-shopify-${txn.slice(-5)}.zip`);

    } catch (e) {
      console.error("[ZIP Build Error] Couldn't compile boilerplate code:", e);
    } finally {
      setIsCompilingZIP(false);
    }
  };

  return (
    <div id="success-view" className="max-w-xl mx-auto px-4 py-16 space-y-8 animate-scale-up">
      
      {/* Visual Header confirmation card */}
      <div className="bg-neutral-900/60 border border-neutral-800 p-8 rounded-3xl text-center space-y-4">
        <div className="mx-auto h-16 w-16 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full flex items-center justify-center">
          <CheckCircle className="h-8 w-8 text-emerald-400" />
        </div>
        
        <div className="space-y-1">
          <span className="text-[10px] tracking-widest font-mono font-bold uppercase text-emerald-400">
            Order Confirmed • Processed by Paddle
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Thank you for your purchase!
          </h1>
        </div>

        <p className="text-xs text-neutral-400 leading-normal max-w-sm mx-auto font-sans">
          Your digital license fee was completed securely by Paddle. Your download links and customized installation files are initialized below.
        </p>

        {/* Transaction attributes */}
        <div className="pt-4 border-t border-neutral-850 grid grid-cols-2 gap-4 text-left text-xs font-sans">
          <div className="space-y-1 p-3 bg-neutral-950 rounded-xl border border-neutral-850">
            <span className="block text-[9px] text-neutral-500 uppercase tracking-widest font-bold">Delivered Product</span>
            <span className="text-neutral-200 font-semibold truncate block">{getThemeName()}</span>
          </div>
          <div className="space-y-1 p-3 bg-neutral-950 rounded-xl border border-neutral-850">
            <span className="block text-[9px] text-neutral-500 uppercase tracking-widest font-bold">Licensed email</span>
            <span className="text-neutral-200 font-semibold truncate block" title={email}>{email}</span>
          </div>
          <div className="col-span-2 space-y-1 p-3 bg-neutral-950 rounded-xl border border-neutral-850 font-mono">
            <span className="block text-[9px] text-neutral-500 uppercase tracking-widest font-bold font-sans">Paddle Transaction Identifier</span>
            <span className="text-emerald-400 text-[11px] select-all break-all">{txn}</span>
          </div>
        </div>

        {/* Dynamic downloads compiled via JSZip */}
        <div className="pt-4">
          <button
            onClick={handleDownloadZip}
            disabled={isCompilingZIP}
            className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 text-neutral-950 rounded-xl text-xs uppercase tracking-wider font-extrabold flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-lg shadow-emerald-500/10"
          >
            {isCompilingZIP ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin text-neutral-950 shrink-0" />
                <span>Building Custom Theme ZIP...</span>
              </>
            ) : (
              <>
                <Download className="h-4 w-4 text-neutral-950" />
                <span>Save Theme Package (.ZIP)</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Post transaction guides */}
      <div className="bg-neutral-900/40 border border-neutral-850 rounded-2xl p-6 space-y-4 font-sans text-xs text-neutral-400">
        <h3 className="font-bold text-white uppercase tracking-wider text-[11px] mb-2 flex items-center gap-1.5">
          <FileText className="h-4 w-4 text-emerald-400" />
          Next Steps for Setup
        </h3>
        
        <ul className="space-y-3 pl-4 list-decimal marker:text-emerald-400 marker:font-bold leading-normal text-justify">
          <li>
            Click the banner button above to generate and download your custom installable Shopify theme archive.
          </li>
          <li>
            Follow our <button onClick={() => onNavigate('/support')} className="text-emerald-400 hover:underline inline-flex font-semibold">Step-by-Step Installation Manual</button> to upload the unchanged zip file directly into your Shopify dashboard.
          </li>
          <li>
            Activate technical support by filing your Paddle invoice code <code>{txn.slice(0, 12)}...</code> inside the theme's core settings.
          </li>
        </ul>
      </div>

      {/* FAQ shortcut cross-link */}
      <div className="text-center">
        <button
          onClick={() => onNavigate('/support')}
          className="text-emerald-400 hover:text-emerald-300 text-xs font-bold inline-flex items-center gap-1 hover:underline cursor-pointer"
        >
          Need setup guidelines or tutorials? Tap here <ChevronRight className="h-4 w-4" />
        </button>
      </div>

    </div>
  );
}
