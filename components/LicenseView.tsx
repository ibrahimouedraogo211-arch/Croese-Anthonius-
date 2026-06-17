/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export function LicenseView() {
  const lastUpdated = "June 16, 2026";

  return (
    <div id="license-view" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 text-sm text-neutral-350 font-sans leading-relaxed">
      
      {/* Page Header */}
      <div className="space-y-4 text-center pb-6 border-b border-neutral-900">
        <span className="text-emerald-400 text-xs font-mono tracking-widest uppercase font-bold">
          📜 Scope of usage
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          License Agreement
        </h1>
        <p className="text-neutral-500 font-mono text-xs">
          Last Updated: {lastUpdated}
        </p>
      </div>

      {/* Intro block */}
      <p className="text-justify font-sans text-neutral-400">
        By purchasing a theme from Anthonius Nicolaas Jozef Croese, sold through Paddle.com Market Limited as Merchant of Record, you agree to the terms of this End User License Agreement (EULA).
      </p>

      {/* Main Content */}
      <div className="space-y-8 select-all text-justify">
        
        {/* Section 1 */}
        <section className="space-y-3">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2 font-sans">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            1. Standard License (Single-Use)
          </h3>
          <p>
            Each theme purchase grants a Single-Use License:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-neutral-450 font-sans">
            <li>You may install and use the theme on exactly <strong>one (1) live Shopify store</strong>.</li>
            <li>You may also use the theme on development or staging environments directly linked to that same store, for testing purposes only.</li>
            <li>To transfer your license to a different store, you must first remove the theme entirely from the original store and notify us at <a href="mailto:croeseanthonius@gmail.com" className="text-emerald-400 font-mono hover:underline">croeseanthonius@gmail.com</a> so we can update our records.</li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2 font-sans">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            2. Restrictions
          </h3>
          <p>
            You may not:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-neutral-450 font-sans">
            <li>Resell, sublicense, share, or redistribute the theme's source code (Liquid, JavaScript, CSS), in original or modified form</li>
            <li>Upload or share the theme files on any public repository, marketplace, or file-sharing platform</li>
            <li>Use a single license to activate the theme on more than one live store at the same time</li>
          </ul>
          <p className="p-3.5 bg-red-500/5 italic border border-red-500/15 rounded-xl text-neutral-450 text-xs leading-relaxed">
            ⚠️ Violation of these terms may result in immediate termination of support access and revocation of the license, at our discretion.
          </p>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2 font-sans">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            3. Agencies & Multiple Stores
          </h3>
          <p>
            If you are a developer or agency building stores for multiple clients, each client store requires its own individual license. For volume pricing or agency licensing arrangements, contact us at <a href="mailto:croeseanthonius@gmail.com" className="text-emerald-400 font-mono hover:underline">croeseanthonius@gmail.com</a>.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2 font-sans">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            4. Support & Updates
          </h3>
          <p className="text-neutral-450 font-sans">
            Each license includes 6 months of priority support from the date of purchase, covering installation assistance and bug fixes.
          </p>
          <p className="text-neutral-450 font-sans">
            Compatibility updates — to keep the theme working with new Shopify core platform changes — are provided free of charge for as long as the theme remains actively maintained. We do not guarantee indefinite updates but will provide reasonable notice if a theme is discontinued.
          </p>
        </section>

      </div>

    </div>
  );
}
