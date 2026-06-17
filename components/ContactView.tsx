/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Send, CheckCircle, Clock, ShieldAlert } from 'lucide-react';

export function ContactView() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setLoading(true);
    
    // Simulating message transmitting
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: 'general', message: '' });
    }, 1200);
  };

  return (
    <div id="contact-view" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Page Header */}
      <div className="space-y-4 text-center max-w-2xl mx-auto">
        <span className="text-emerald-400 text-xs font-mono tracking-widest uppercase font-bold">
          ✉️ Support Desk
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          How can we assist you today?
        </h1>
        <p className="text-neutral-400 text-sm leading-relaxed font-sans">
          Our technical engineering desk assists with all integration questions, zip validation, license registration, and transborder Paddle purchasing processing.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start pt-4">
        
        {/* Left pane details (5/12) */}
        <div className="md:col-span-12 lg:col-span-5 space-y-6">
          
          {/* Card 1: Official Email */}
          <div className="bg-neutral-900/60 border border-neutral-800 p-6 rounded-2xl space-y-3">
            <div className="h-9 w-9 bg-emerald-500/10 text-emerald-400 rounded-lg flex items-center justify-center">
              <Mail className="h-5 w-5" />
            </div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Direct Email Address</h3>
            <p className="text-xs text-neutral-450 font-sans leading-relaxed text-justify">
              For immediate technical consultation, affiliation requests, or custom agency quotas, secure an email directory thread with:
            </p>
            <a 
              href="mailto:croeseanthonius@gmail.com" 
              className="block select-all text-xs font-bold font-mono text-emerald-400 bg-neutral-950 border border-neutral-800 py-3 px-3 rounded-lg hover:underline transition-all text-center"
            >
              croeseanthonius@gmail.com
            </a>
          </div>

          {/* Card 2: Support SLA timeline */}
          <div className="bg-neutral-900/40 border border-[#242424] p-6 rounded-2xl space-y-3">
            <div className="h-9 w-9 bg-emerald-500/10 text-emerald-400 rounded-lg flex items-center justify-center">
              <Clock className="h-5 w-5" />
            </div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Turnaround Time</h3>
            <p className="text-xs text-neutral-450 font-sans leading-relaxed text-justify">
              Our specialists review all requests and dispatch solutions inside <strong className="text-white">24 business hours</strong>, Monday through Friday. Support tickets referencing a validated Paddle transaction receive priority routing.
            </p>
          </div>

          {/* Card 3: Billing statement */}
          <div className="bg-neutral-900/20 border border-neutral-850 p-6 rounded-2xl space-y-2">
            <div className="flex items-center gap-1.5 text-xs text-neutral-300 font-bold">
              <ShieldAlert className="h-4 w-4 text-emerald-400" />
              <span>Invoicing & Paddle Records</span>
            </div>
            <p className="text-[10px] text-neutral-500 leading-normal font-sans text-justify">
              If your request relates to billing discrepancies, local sales taxes refund requests, or card failures, you may contact Paddle Payments directly since they act as our Merchant of Record at <a href="https://paddlesandbox.zendesk.com" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">paddle.com</a>.
            </p>
          </div>

        </div>

        {/* Right pane: Interactive Contact Form (7/12) */}
        <div className="md:col-span-12 lg:col-span-7 bg-neutral-900/45 border border-neutral-800/80 p-8 rounded-2xl">
          
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="mx-auto h-12 w-12 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center font-sans">
                <CheckCircle className="h-6 w-6 animate-pulse" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">Your inquiry was submitted!</h3>
              <p className="text-xs text-neutral-400 max-w-sm mx-auto leading-relaxed font-sans">
                An integration expert from Croese Anthonius will follow up via email within 24 business hours. Please check your spam inbox if you don't hear back soon.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-4 px-4 py-2 border border-neutral-850 text-neutral-300 hover:text-white rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-2 font-sans">
                    Your Name or Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Marcus Dupond"
                    className="w-full bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-600 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-emerald-500 transition-colors font-sans"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-2 font-sans">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="marcus@example.com"
                    className="w-full bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-600 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-emerald-500 transition-colors font-sans"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-2 font-sans">
                  Subject *
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-neutral-950 border border-neutral-800 text-white rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-emerald-500 transition-colors font-sans"
                >
                  <option value="general">Pre-sales Consultation / General Question</option>
                  <option value="theme_help">Shopify theme installation aid</option>
                  <option value="licence">License verification code issue</option>
                  <option value="partnership">Agency licensing agreements</option>
                  <option value="other">Administrative / Invoice issues</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-2 font-sans">
                  Detailed Details *
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your brand website or question with details..."
                  className="w-full bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-600 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-emerald-500 transition-colors font-sans resize-none"
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 text-neutral-950 rounded-xl text-xs uppercase tracking-wider font-extrabold flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-lg shadow-emerald-500/10"
                >
                  {loading ? (
                    <>
                      <span className="h-4 w-4 animate-spin border-2 border-neutral-950 border-t-transparent rounded-full" />
                      <span>Sending inquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 text-neutral-950" />
                      <span>Submit Request</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          )}

        </div>

      </div>

    </div>
  );
}
