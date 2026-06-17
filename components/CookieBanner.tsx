/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';

export function CookieBanner() {
  const [consent, setConsent] = useState<string | null>(null);

  useEffect(() => {
    // Read previous choices
    const savedConsent = localStorage.getItem('cookie-consent');
    if (savedConsent) {
      setConsent(savedConsent);
    } else {
      setConsent('none');
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setConsent('accepted');
  };

  const handleRefuseAll = () => {
    localStorage.setItem('cookie-consent', 'refused');
    setConsent('refused');
  };

  if (consent !== 'none') {
    return null; // Don't render anything if decision is made (either accepted or refused)
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:max-w-md z-45 bg-neutral-900/95 border border-neutral-800 text-white p-5 rounded-2xl shadow-xl backdrop-blur-md animate-fade-in divide-y divide-neutral-800">
      <div className="pb-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xl">🍪</span>
          <h3 className="font-semibold text-sm tracking-wide uppercase text-neutral-200">Privacy Preference</h3>
        </div>
        <p className="text-xs text-neutral-400 leading-relaxed">
          We utilize essential cookies to secure your transactions via <span className="text-emerald-400 font-semibold">Paddle</span> and to evaluate overall performance on our Shopify theme store. You can choose to accept or refuse non-essential trackers. More details are available in our{" "}
          <a href="#/legal/privacy-policy" className="text-emerald-400 hover:underline">
            Privacy Policy
          </a>.
        </p>
      </div>
      <div className="pt-4 flex items-center justify-end gap-3 text-xs">
        <button
          onClick={handleRefuseAll}
          className="px-3.5 py-1.5 rounded-lg border border-neutral-800 hover:bg-neutral-800 text-neutral-300 transition-colors"
        >
          Refuse
        </button>
        <button
          onClick={handleAcceptAll}
          className="px-4 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold tracking-wide transition-colors"
        >
          Accept All
        </button>
      </div>
    </div>
  );
}
