import React from 'react';
import { Shield, Info, Database, Eye, Scale, Download, RefreshCw, Cookie, Globe } from 'lucide-react';

export function PrivacyView() {
  const lastUpdated = "June 16, 2026";

  return (
    <div id="privacy-view" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 text-sm text-neutral-350 font-sans leading-relaxed">
      
      {/* Page Header */}
      <div className="space-y-4 text-center pb-6 border-b border-neutral-900">
        <span className="text-emerald-400 text-xs font-mono tracking-widest uppercase font-bold">
          🛡️ GDPR & Privacy Compliance
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-neutral-500 font-mono text-xs">
          Last Updated: {lastUpdated}
        </p>
      </div>

      {/* Intro Notice card */}
      <div className="bg-neutral-900/40 border border-neutral-800 rounded-2xl p-6 flex flex-col sm:flex-row items-start gap-4">
        <div className="h-10 w-10 bg-emerald-500/10 text-emerald-400 rounded-xl flex items-center justify-center shrink-0">
          <Shield className="h-5 w-5" />
        </div>
        <div className="space-y-1">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider">Our GDPR Commitment</h4>
          <p className="text-xs text-neutral-450 leading-relaxed text-justify">
            Anthonius Nicolaas Jozef Croese unconditionally stands committed to protecting your personal information and commercial credentials in total accordance with General Data Protection Regulations (EU GDPR 2016/679).
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-10 select-all text-justify">
        
        {/* Section 1 */}
        <section className="space-y-3">
          <h3 className="text-base font-bold text-white tracking-tight uppercase tracking-wider font-sans">
            1. Data Controller
          </h3>
          <p>
            This website is operated by:
          </p>
          <div className="bg-neutral-900/30 border border-neutral-800/60 rounded-xl p-4.5 space-y-3 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-3 border-b border-neutral-800/40">
              <div>
                <span className="block text-neutral-500 uppercase font-mono tracking-wider font-bold text-[10px]">Controller</span>
                <span className="text-white font-semibold text-sm">Anthonius Nicolaas Jozef Croese</span>
              </div>
              <div>
                <span className="block text-neutral-500 uppercase font-mono tracking-wider font-bold text-[10px]">Country</span>
                <span className="text-white font-semibold text-sm">The Netherlands</span>
              </div>
            </div>
            <div>
              <span className="block text-neutral-500 uppercase font-mono tracking-wider font-bold text-[10px]">Contact</span>
              <a href="mailto:croeseanthonius@gmail.com" className="text-emerald-400 hover:underline font-mono text-sm font-semibold">croeseanthonius@gmail.com</a>
            </div>
          </div>
          <p className="text-xs text-neutral-450">
            For any privacy-related requests or questions, please contact us at the email address above.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <h3 className="text-base font-bold text-white tracking-tight uppercase tracking-wider font-sans">
            2. Data We Collect
          </h3>
          <p>
            When you browse this website or make a purchase, we may collect the following information:
          </p>
          <div className="space-y-3.5 pl-2 border-l-2 border-neutral-800">
            <div>
              <strong className="text-white block text-xs font-sans uppercase tracking-wide">Personal & order details</strong>
              <p className="text-neutral-400 text-xs mt-0.5">Your name, company name (if applicable), Shopify store URL, and email address.</p>
            </div>
            <div>
              <strong className="text-white block text-xs font-sans uppercase tracking-wide">Billing details</strong>
              <p className="text-neutral-400 text-xs mt-0.5">Billing address, VAT number (if applicable), and transaction records. We never access or store your card number or raw payment credentials — all payment data is handled exclusively by Paddle under PCI-DSS standards.</p>
            </div>
            <div>
              <strong className="text-white block text-xs font-sans uppercase tracking-wide">Technical data</strong>
              <p className="text-neutral-400 text-xs mt-0.5">IP address, browser type, and session cookies used to ensure the website functions correctly.</p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <h3 className="text-base font-bold text-white tracking-tight uppercase tracking-wider font-sans">
            3. Payment Processing — Paddle as Data Processor
          </h3>
          <p>
            All payment transactions are processed by <strong>Paddle.com Market Limited</strong> (and its affiliate Paddle Payments Ltd), acting as Merchant of Record. Paddle independently collects and processes payment data in accordance with their own privacy policy, available at <a href="https://paddle.com/legal/privacy" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline font-mono">paddle.com/legal/privacy</a>.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <h3 className="text-base font-bold text-white tracking-tight uppercase tracking-wider font-sans">
            4. Purpose & Legal Basis for Processing
          </h3>
          
          <div className="overflow-x-auto border border-neutral-800 rounded-xl bg-neutral-900/10">
            <table className="min-w-full divide-y divide-neutral-850 text-xs">
              <thead>
                <tr className="bg-neutral-900/50 text-neutral-400 uppercase font-mono tracking-wider text-[10px]">
                  <th scope="col" className="px-4 py-3 text-left font-bold">Purpose</th>
                  <th scope="col" className="px-4 py-3 text-left font-bold">Legal Basis</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-900 text-neutral-355 font-sans">
                <tr>
                  <td className="px-4 py-3 font-semibold text-white">Processing your order and delivering purchased files</td>
                  <td className="px-4 py-3 text-neutral-400">Performance of a contract (Art. 6(1)(b) GDPR)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-white">Issuing invoices and maintaining accounting records</td>
                  <td className="px-4 py-3 text-neutral-400">Legal obligation (Art. 6(1)(c) GDPR)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-white">Responding to support requests</td>
                  <td className="px-4 py-3 text-neutral-400">Legitimate interest (Art. 6(1)(f) GDPR)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-white">Notifying you of theme updates</td>
                  <td className="px-4 py-3 text-neutral-400">Legitimate interest (Art. 6(1)(f) GDPR)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 5 */}
        <section className="space-y-3">
          <h3 className="text-base font-bold text-white tracking-tight uppercase tracking-wider font-sans">
            5. Data Retention
          </h3>
          <p>
            Order records are retained for <strong className="text-white">10 years</strong> in accordance with Dutch accounting and tax law (Belastingdienst requirements). Support correspondence is retained for <strong className="text-white">2 years</strong>. You may request deletion of non-legally-required data at any time.
          </p>
        </section>

        {/* Section 6 */}
        <section className="space-y-3">
          <h3 className="text-base font-bold text-white tracking-tight uppercase tracking-wider font-sans">
            6. Your Rights Under GDPR
          </h3>
          <p>
            As an EU resident, you have the right to:
          </p>
          <ul className="space-y-2.5 my-4 pl-1">
            <li className="flex items-start gap-2.5">
              <span className="mt-1 h-3.5 w-3.5 bg-emerald-500/10 text-emerald-400 rounded flex items-center justify-center shrink-0 font-mono text-[9px] font-bold">1</span>
              <div>
                <strong className="text-white">Access</strong> — request a copy of the personal data we hold about you
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-1 h-3.5 w-3.5 bg-emerald-500/10 text-emerald-400 rounded flex items-center justify-center shrink-0 font-mono text-[9px] font-bold">2</span>
              <div>
                <strong className="text-white">Rectification</strong> — request correction of inaccurate data
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-1 h-3.5 w-3.5 bg-emerald-500/10 text-emerald-400 rounded flex items-center justify-center shrink-0 font-mono text-[9px] font-bold">3</span>
              <div>
                <strong className="text-white">Erasure</strong> — request deletion of your data where no legal obligation requires us to retain it
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-1 h-3.5 w-3.5 bg-emerald-500/10 text-emerald-400 rounded flex items-center justify-center shrink-0 font-mono text-[9px] font-bold">4</span>
              <div>
                <strong className="text-white">Restriction</strong> — request that we limit how we use your data
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-1 h-3.5 w-3.5 bg-emerald-500/10 text-emerald-400 rounded flex items-center justify-center shrink-0 font-mono text-[9px] font-bold">5</span>
              <div>
                <strong className="text-white">Portability</strong> — receive your data in a structured, machine-readable format
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-1 h-3.5 w-3.5 bg-emerald-500/10 text-emerald-400 rounded flex items-center justify-center shrink-0 font-mono text-[9px] font-bold">6</span>
              <div>
                <strong className="text-white">Object</strong> — object to processing based on legitimate interest
              </div>
            </li>
          </ul>
          <p>
            To exercise any of these rights, contact us at <a href="mailto:croeseanthonius@gmail.com" className="text-emerald-400 hover:underline font-mono">croeseanthonius@gmail.com</a>. We will respond within 30 days, as required by GDPR.
          </p>
          <p className="text-xs text-neutral-450 mt-1">
            You also have the right to lodge a complaint with the Dutch Data Protection Authority (Autoriteit Persoonsgegevens) at <a href="https://autoriteitpersoonsgegevens.nl" target="_blank" rel="noopener noreferrer" className="text-neutral-400 underline hover:text-white">autoriteitpersoonsgegevens.nl</a>.
          </p>
        </section>

        {/* Section 7 */}
        <section className="space-y-3">
          <h3 className="text-base font-bold text-white tracking-tight uppercase tracking-wider font-sans">
            7. Cookies
          </h3>
          <p>
            This website uses only strictly necessary cookies required for the website to function (session management and checkout state). We do not use advertising cookies, tracking pixels, or third-party analytics that require consent. No personal data is sold or shared with advertising networks.
          </p>
        </section>

        {/* Section 8 */}
        <section className="space-y-3">
          <h3 className="text-base font-bold text-white tracking-tight uppercase tracking-wider font-sans">
            8. International Data Transfers
          </h3>
          <p>
            Paddle may process payment data outside the European Economic Area. Paddle ensures that any such transfers comply with applicable data protection law, including through Standard Contractual Clauses. For details, refer to Paddle's privacy policy.
          </p>
        </section>

      </div>

    </div>
  );
}
