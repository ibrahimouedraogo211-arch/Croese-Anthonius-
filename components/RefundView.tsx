import React from 'react';
import { ShieldCheck } from 'lucide-react';

export function RefundView() {
  const lastUpdated = "June 16, 2026";

  return (
    <div id="refund-view" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 text-sm text-neutral-350 font-sans leading-relaxed">
      
      {/* Page Header */}
      <div className="space-y-4 text-center pb-6 border-b border-neutral-900">
        <span className="text-emerald-400 text-xs font-mono tracking-widest uppercase font-bold">
          💰 Guarantee & Refunds
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Refund Policy
        </h1>
        <p className="text-neutral-500 font-mono text-xs">
          Last Updated: {lastUpdated}
        </p>
      </div>

      {/* Trust Notice box */}
      <div className="bg-neutral-900/40 border border-neutral-800 rounded-2xl p-6 flex flex-col sm:flex-row items-start gap-4">
        <div className="h-10 w-10 bg-emerald-500/10 text-emerald-400 rounded-xl flex items-center justify-center shrink-0">
          <ShieldCheck className="h-5 w-5" />
        </div>
        <div className="space-y-1">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider">Payment Processing Notice</h4>
          <p className="text-xs text-neutral-450 leading-relaxed text-justify">
            All refunds are processed by <strong>Paddle.com Market Limited</strong>, acting as Merchant of Record. Refund requests are reviewed by us and executed through Paddle.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-10 select-all text-justify">
        
        {/* Section 1 */}
        <section className="space-y-3">
          <h3 className="text-base font-bold text-white tracking-tight uppercase tracking-wider font-sans">
            1. Digital Products & Right of Withdrawal
          </h3>
          <p>
            Under EU Directive 2011/83/EU on consumer rights, the standard 14-day right of withdrawal does not apply to digital content once delivery has begun, provided the consumer has given explicit prior consent to immediate delivery and acknowledged the loss of their right of withdrawal.
          </p>
          <p>
            By completing a purchase on this website, you confirm:
          </p>
          <ul className="space-y-2 pl-1 my-3">
            <li className="flex items-start gap-2.5 text-xs text-neutral-405">
              <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
              <span>You consent to immediate delivery of the purchased theme files</span>
            </li>
            <li className="flex items-start gap-2.5 text-xs text-neutral-405">
              <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
              <span>You acknowledge that the right of withdrawal is waived upon delivery</span>
            </li>
          </ul>
          <p>
            This is standard practice for digital software products sold within the European Union.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <h3 className="text-base font-bold text-white tracking-tight uppercase tracking-wider font-sans">
            2. 14-Day Technical Guarantee
          </h3>
          <p>
            Although the right of withdrawal does not apply, we stand behind the quality of our themes. We offer a refund within 14 days of purchase if all of the following conditions are met:
          </p>
          <ul className="space-y-3 pl-1 text-xs">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-4 w-4 bg-neutral-900 border border-neutral-800 text-emerald-400 font-mono text-[9px] font-bold flex items-center justify-center shrink-0 rounded">A</span>
              <div>
                <strong className="text-white">Verified technical defect:</strong> The theme contains a reproducible bug in its original Liquid or JavaScript code that prevents core functionality from working as demonstrated in our preview store.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-4 w-4 bg-neutral-900 border border-neutral-800 text-emerald-400 font-mono text-[9px] font-bold flex items-center justify-center shrink-0 rounded">B</span>
              <div>
                <strong className="text-white">Support request submitted:</strong> You have contacted us at <a href="mailto:croeseanthonius@gmail.com" className="text-emerald-400 hover:underline font-mono font-semibold">croeseanthonius@gmail.com</a> with a clear description of the issue and, where applicable, temporary access to your Shopify store for diagnosis.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-4 w-4 bg-neutral-900 border border-neutral-800 text-emerald-400 font-mono text-[9px] font-bold flex items-center justify-center shrink-0 rounded">C</span>
              <div>
                <strong className="text-white">Unable to resolve:</strong> We are unable to provide a working fix within <strong className="text-white">5 business days</strong> of your support request. If a fix is delivered and the theme functions as intended, the refund claim does not apply.
              </div>
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <h3 className="text-base font-bold text-white tracking-tight uppercase tracking-wider font-sans">
            3. Non-Refundable Situations
          </h3>
          <p>
            Refunds will not be issued in the following cases:
          </p>
          <ul className="space-y-2 pl-1">
            <li className="flex items-start gap-2.5 text-xs text-neutral-400">
              <span className="mt-1.5 h-1.5 w-1.5 bg-neutral-700 rounded-full shrink-0" />
              <span>You changed your mind after downloading the theme files</span>
            </li>
            <li className="flex items-start gap-2.5 text-xs text-neutral-400">
              <span className="mt-1.5 h-1.5 w-1.5 bg-neutral-700 rounded-full shrink-0" />
              <span>You purchased the wrong theme and the files have already been downloaded</span>
            </li>
            <li className="flex items-start gap-2.5 text-xs text-neutral-400">
              <span className="mt-1.5 h-1.5 w-1.5 bg-neutral-700 rounded-full shrink-0" />
              <span>Issues caused by third-party Shopify apps incompatible with the theme</span>
            </li>
            <li className="flex items-start gap-2.5 text-xs text-neutral-400">
              <span className="mt-1.5 h-1.5 w-1.5 bg-neutral-700 rounded-full shrink-0" />
              <span>Issues resulting from modifications made to the theme code by you or a third party</span>
            </li>
            <li className="flex items-start gap-2.5 text-xs text-neutral-400">
              <span className="mt-1.5 h-1.5 w-1.5 bg-neutral-700 rounded-full shrink-0" />
              <span>Inability to install due to restrictions on your Shopify account or plan</span>
            </li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <h3 className="text-base font-bold text-white tracking-tight uppercase tracking-wider font-sans">
            4. How to Request a Refund
          </h3>
          <p>
            To submit a refund request, email us at <a href="mailto:croeseanthonius@gmail.com" className="text-emerald-400 hover:underline font-mono">croeseanthonius@gmail.com</a> with:
          </p>
          <ul className="space-y-2 pl-1 my-3 text-xs text-neutral-405">
            <li className="flex items-start gap-2.5">
              <span className="text-emerald-400 font-mono font-bold">1.</span>
              <span>The email address used at checkout</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-emerald-400 font-mono font-bold">2.</span>
              <span>Your Paddle order receipt number</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-emerald-400 font-mono font-bold">3.</span>
              <span>A description of the technical issue, including screenshots or error logs</span>
            </li>
          </ul>
          <p>
            Once your request is reviewed and approved, we will instruct Paddle to process the refund. Funds typically appear within 3 to 5 business days, depending on your bank or payment provider.
          </p>
        </section>

      </div>

    </div>
  );
}
