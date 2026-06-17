/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { usePaddle } from './PaddleProvider';
import { openPaddleCheckout } from '../lib/paddle';
import { CreditCard, Loader2 } from 'lucide-react';

interface CheckoutButtonProps {
  priceId: string;
  themeSlug: string;
  label?: string;
  className?: string;
  onSuccess?: (data: any) => void;
}

export function CheckoutButton({ priceId, themeSlug, label = "Acheter ce thème", className = "", onSuccess }: CheckoutButtonProps) {
  const { isReady } = usePaddle();
  const [loading, setLoading] = useState(false);

  const handleCheckout = () => {
    if (loading) return;
    setLoading(true);

    try {
      openPaddleCheckout({
        priceId,
        onSuccess: (data) => {
          setLoading(false);
          if (onSuccess) {
            onSuccess(data);
          } else {
            // Default success handling - redirect
            const successParam = encodeURIComponent(themeSlug);
            const emailParam = encodeURIComponent(data.customer_email || "votre-email@example.com");
            const transactionParam = encodeURIComponent(data.transaction_id || "txn_demo");
            window.location.hash = `success?slug=${successParam}&email=${emailParam}&txn=${transactionParam}`;
          }
        },
        onClose: () => {
          setLoading(false);
          console.log("[CheckoutButton] Checkout session was closed or dismissed.");
        }
      });
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      className={`relative overflow-hidden font-bold rounded-xl text-center uppercase tracking-wider text-xs transition-all active:scale-95 duration-150 flex items-center justify-center gap-2 px-6 py-4 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${
        className || "bg-emerald-500 hover:bg-emerald-400 text-neutral-950 shadow-lg shadow-emerald-500/10"
      }`}
    >
      {loading ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin text-inherit shrink-0" />
          <span>Sécurisation en cours...</span>
        </>
      ) : (
        <>
          <CreditCard className="h-4 w-4 text-inherit shrink-0" />
          <span>{label}</span>
        </>
      )}
    </button>
  );
}
