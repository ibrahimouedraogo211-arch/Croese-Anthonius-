/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ShoppingBag, Menu, X, Sparkles } from 'lucide-react';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export function Header({ currentPath, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Themes', path: '/themes' },
    { label: 'About', path: '/about' },
    { label: 'Installation', path: '/support' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleNavClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav id="app-header" className="sticky top-0 z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-900/60 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2.5 cursor-pointer" onClick={() => handleNavClick('/')}>
            <div className="h-10 w-10 rounded-xl bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <ShoppingBag className="h-5 w-5 text-neutral-950" />
            </div>
            <div>
              <span className="font-sans font-extrabold text-lg tracking-wide bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
                CROESE ANTHONIUS
              </span>
              <span className="block text-[8px] tracking-widest text-emerald-400 uppercase font-mono font-bold">
                Premium Shopify Themes
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`text-xs font-semibold uppercase tracking-wider transition-colors hover:text-emerald-400 py-1 border-b-2 ${
                  currentPath === item.path || (item.path === '/themes' && currentPath.startsWith('/themes/'))
                    ? 'border-emerald-500 text-white'
                    : 'border-transparent text-neutral-400'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => handleNavClick('/themes')}
              className="px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-white text-neutral-950 hover:bg-neutral-100 transition-all shadow-md active:scale-95 duration-100 flex items-center gap-1.5"
            >
              <Sparkles className="h-3.5 w-3.5 text-neutral-950" />
              Explore Collections
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-neutral-400 hover:text-white p-2 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-900 bg-neutral-950 divide-y divide-neutral-900 transition-all duration-300">
          <div className="px-2 pt-2 pb-4 space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`block w-full text-left px-4 py-3 text-sm font-bold uppercase tracking-wide rounded-xl ${
                  currentPath === item.path
                    ? 'bg-neutral-900 text-emerald-400 border-l-4 border-emerald-500'
                    : 'text-neutral-300 hover:bg-neutral-900/60'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="px-4 py-4">
            <button
              onClick={() => handleNavClick('/themes')}
              className="w-full text-center px-5 py-3 rounded-xl font-bold uppercase tracking-wider text-xs bg-emerald-500 text-neutral-950 hover:bg-emerald-400 transition-all"
            >
              Discover Our Themes
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
