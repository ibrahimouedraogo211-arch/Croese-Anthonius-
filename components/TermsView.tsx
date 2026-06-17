import React from 'react';
import { Scale } from 'lucide-react';

export function TermsView() {
  const lastUpdated = "June 16, 2026";

  return (
    <div id="terms-view" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 text-sm text-neutral-350 font-sans leading-relaxed">
      
      {/* Header section */}
      <div className="space-y-4 text-center pb-6 border-b border-neutral-900">
        <span className="text-emerald-400 text-xs font-mono tracking-widest uppercase font-bold">
          📄 Legal terms
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Terms of Service
        </h1>
        <p className="text-neutral-500 font-mono text-xs">
          Last Updated: {lastUpdated}
        </p>
      </div>

      {/* Payment Processing Notice (Alert / Card box) */}
      <div className="bg-neutral-900/40 border border-neutral-800 rounded-2xl p-6 flex flex-col sm:flex-row items-start gap-4">
        <div className="h-10 w-10 bg-emerald-500/10 text-emerald-400 rounded-xl flex items-center justify-center shrink-0">
          <Scale className="h-5 w-5" />
        </div>
        <div className="space-y-1">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider">Payment Processing Notice</h4>
          <p className="text-xs text-neutral-450 leading-relaxed text-justify">
            All checkout, payment processing, VAT calculation, and international sales compliance are handled by <strong>Paddle.com Market Limited</strong>, acting as Merchant of Record. By completing a purchase, you also agree to Paddle's terms of use.
          </p>
        </div>
      </div>

      {/* Main legal content */}
      <div className="space-y-8 select-all text-justify">
        
        {/* Section 1 */}
        <section className="space-y-3">
          <h3 className="text-base font-bold text-white tracking-tight uppercase tracking-wider font-sans">1. Seller Identity</h3>
          <p>
            This website is operated by an individual seller, not a registered legal entity.
          </p>
          <div className="bg-neutral-900/30 border border-neutral-800/60 rounded-xl p-4.5 space-y-3 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-3 border-b border-neutral-800/40">
              <div>
                <span className="block text-neutral-500 uppercase font-mono tracking-wider font-bold text-[10px]">Seller</span>
                <span className="text-white font-semibold text-sm">Anthonius Nicolaas Jozef Croese</span>
              </div>
              <div>
                <span className="block text-neutral-500 uppercase font-mono tracking-wider font-bold text-[10px]">Country of Operation</span>
                <span className="text-white font-semibold text-sm">The Netherlands</span>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div>
                <span className="block text-neutral-500 uppercase font-mono tracking-wider font-bold text-[10px]">Payment Processor</span>
                <span className="text-neutral-350 font-medium">Paddle.com Market Limited (Merchant of Record)</span>
              </div>
              <div>
                <span className="block text-neutral-500 uppercase font-mono tracking-wider font-bold text-[10px]">Customer Support</span>
                <a href="mailto:croeseanthonius@gmail.com" className="text-emerald-400 font-mono font-semibold hover:underline block text-sm">croeseanthonius@gmail.com</a>
              </div>
            </div>
          </div>
          <p className="text-xs text-neutral-450 leading-relaxed">
            For purchase, billing, or refund inquiries, contact us at the email above or visit <a href="https://paddle.com/support" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline font-mono">paddle.com/support</a>.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <h3 className="text-base font-bold text-white tracking-tight uppercase tracking-wider font-sans">2. Products</h3>
          <p>
            We design and sell premium Shopify themes built for Shopify's Online Store 2.0 framework. Each purchase grants the buyer a single-use, non-exclusive, non-transferable license to use the purchased theme on one Shopify store.
          </p>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <h3 className="text-base font-bold text-white tracking-tight uppercase tracking-wider font-sans">3. Purchase Process & Payment</h3>
          <p>
            The customer selects a theme and initiates checkout through the secure Paddle payment interface. Paddle acts as the authorized reseller for our digital products. Paddle collects payment, handles card security, calculates applicable taxes based on the buyer's location, and issues purchase receipts. A purchase is considered complete only once Paddle confirms successful payment.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <h3 className="text-base font-bold text-white tracking-tight uppercase tracking-wider font-sans">4. Digital Delivery</h3>
          <p>
            As our products are digital goods, delivery occurs immediately upon payment confirmation. A download link is sent to the customer's email address. For any download issues, contact us at <a href="mailto:croeseanthonius@gmail.com" className="text-emerald-400 hover:underline font-mono">croeseanthonius@gmail.com</a>.
          </p>
        </section>

        {/* Section 5 */}
        <section className="space-y-3">
          <h3 className="text-base font-bold text-white tracking-tight uppercase tracking-wider font-sans">5. License Restrictions</h3>
          <p>
            The license granted is strictly limited to a single Shopify store. The buyer may not:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-neutral-450 font-sans">
            <li>Redistribute, resell, or share theme files with third parties</li>
            <li>Use a single theme license across multiple Shopify stores</li>
            <li>Modify theme files for the purpose of resale or redistribution</li>
          </ul>
        </section>

        {/* Section 6 */}
        <section className="space-y-3">
          <h3 className="text-base font-bold text-white tracking-tight uppercase tracking-wider font-sans">6. Intellectual Property</h3>
          <p>
            All theme files, code, design assets, and documentation remain the exclusive intellectual property of Anthonius Nicolaas Jozef Croese. No ownership or copyright is transferred upon purchase.
          </p>
        </section>

        {/* Section 7 */}
        <section className="space-y-3">
          <h3 className="text-base font-bold text-white tracking-tight uppercase tracking-wider font-sans">7. Limitation of Liability</h3>
          <p>
            Themes are provided as-is. The seller is not liable for revenue losses, Shopify platform outages, conflicts caused by third-party apps, or issues resulting from unauthorized modifications to the theme code.
          </p>
        </section>

        {/* Section 8 */}
        <section className="space-y-3">
          <h3 className="text-base font-bold text-white tracking-tight uppercase tracking-wider font-sans">8. Governing Law & Jurisdiction</h3>
          <p>
            These Terms are governed by the laws of the Netherlands. Any disputes that cannot be resolved amicably shall be submitted to the competent courts of Amsterdam.
          </p>
        </section>

      </div>

    </div>
  );
}
