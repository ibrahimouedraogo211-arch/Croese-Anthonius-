/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PaddleProvider } from './components/PaddleProvider';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CookieBanner } from './components/CookieBanner';

// Views
import { HomeView } from './components/HomeView';
import { CatalogueView } from './components/CatalogueView';
import { DetailView } from './components/DetailView';
import { AboutView } from './components/AboutView';
import { SupportView } from './components/SupportView';
import { FaqView } from './components/FaqView';
import { ContactView } from './components/ContactView';
import { SuccessView } from './components/SuccessView';
import { TermsView } from './components/TermsView';
import { PrivacyView } from './components/PrivacyView';
import { RefundView } from './components/RefundView';
import { LicenseView } from './components/LicenseView';

// Helpers & Data
import { getThemes, getThemeBySlug } from './lib/themes';
import { openPaddleCheckout } from './lib/paddle';

/**
 * Extracts the current path from the URL hash.
 * Handles parameters and queries safely.
 */
const getPathFromHash = (): string => {
  const hash = window.location.hash || '#/';
  const routePart = hash.split('?')[0]; // Strip search queries
  if (routePart === '#/' || routePart === '#') return '/';
  
  // Make sure to preserve route structure but return slash-prefix
  const path = routePart.slice(1);
  return path.startsWith('/') ? path : '/' + path;
};

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(getPathFromHash());
  const allThemes = getThemes();

  // Listen for browser navigation hashchanges
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(getPathFromHash());
      // Smooth scroll back to top of page upon route swapping
      window.scrollTo({ top: 0, behavior: 'instant' as any });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const navigateTo = (path: string) => {
    // Sync hash
    window.location.hash = path;
  };

  /**
   * Fires immediate Paddle checkout flow
   */
  const handleQuickCheckout = (priceId: string) => {
    const foundTheme = allThemes.find(t => t.priceId === priceId);
    const slug = foundTheme ? foundTheme.slug : 'gravity';
    
    openPaddleCheckout({
      priceId,
      onSuccess: (data) => {
        const emailParam = encodeURIComponent(data.customer_email || "votre-email@example.com");
        const transactionParam = encodeURIComponent(data.transaction_id || "txn_demo");
        navigateTo(`success?slug=${slug}&email=${emailParam}&txn=${transactionParam}`);
      },
      onClose: () => {
        console.log("[App Checkout] Closed.");
      }
    });
  };

  /**
   * Main Router Renderer
   */
  const renderView = () => {
    // 1. Theme Detail Rule matching e.g. /themes/vitesse
    if (currentPath.startsWith('/themes/') && currentPath !== '/themes') {
      const slug = currentPath.split('/themes/')[1];
      const theme = getThemeBySlug(slug);
      
      if (theme) {
        return <DetailView theme={theme} onNavigate={navigateTo} />;
      }
      // Fallback if slug non-existent
      return <CatalogueView themes={allThemes} onNavigate={navigateTo} onCheckout={handleQuickCheckout} />;
    }

    // 2. Strict match routing structure
    switch (currentPath) {
      case '/':
        return (
          <HomeView
            themes={allThemes}
            onNavigate={navigateTo}
            onCheckout={handleQuickCheckout}
          />
        );
      
      case '/themes':
        return (
          <CatalogueView
            themes={allThemes}
            onNavigate={navigateTo}
            onCheckout={handleQuickCheckout}
          />
        );

      case '/about':
        return <AboutView />;

      case '/support':
        return <SupportView onNavigate={navigateTo} />;

      case '/faq':
        return <FaqView />;

      case '/contact':
        return <ContactView />;

      case '/success':
        return <SuccessView onNavigate={navigateTo} />;

      // Legal Pages
      case '/legal/terms-of-service':
        return <TermsView />;
      
      case '/legal/privacy-policy':
        return <PrivacyView />;

      case '/legal/refund-policy':
        return <RefundView />;

      case '/legal/license':
        return <LicenseView />;

      default:
        // Default to HomeView
        return (
          <HomeView
            themes={allThemes}
            onNavigate={navigateTo}
            onCheckout={handleQuickCheckout}
          />
        );
    }
  };

  return (
    <PaddleProvider>
      <div className="min-h-screen bg-[#050505] text-neutral-400 font-sans flex flex-col antialiased">
        
        {/* Navigation Head */}
        <Header currentPath={currentPath} onNavigate={navigateTo} />

        {/* Dynamic Page Stage Container */}
        <main className="flex-1 animate-fade-in relative">
          {renderView()}
        </main>

        {/* Global footer with crucial Paddle legal notice links */}
        <Footer onNavigate={navigateTo} />

        {/* GDPR Compliant cookies bar */}
        <CookieBanner />

      </div>
    </PaddleProvider>
  );
}
