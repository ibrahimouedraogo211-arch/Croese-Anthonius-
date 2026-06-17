/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useEffect, useState } from 'react';

interface PaddleContextType {
  isReady: boolean;
  paddleInstance: any;
}

const PaddleContext = createContext<PaddleContextType>({
  isReady: false,
  paddleInstance: null,
});

export function usePaddle() {
  return useContext(PaddleContext);
}

interface PaddleProviderProps {
  children: React.ReactNode;
}

export function PaddleProvider({ children }: PaddleProviderProps) {
  const [isReady, setIsReady] = useState(false);
  const [paddleInstance, setPaddleInstance] = useState<any>(null);

  useEffect(() => {
    // Check if script is already present
    const existingScript = document.querySelector('script[src*="paddle.js"]');
    
    const initializePaddle = () => {
      const clientToken = import.meta.env.VITE_PADDLE_CLIENT_TOKEN || "";
      const isSandbox = (import.meta.env.VITE_PADDLE_ENVIRONMENT as string) !== "production";

      if (window.Paddle) {
        try {
          // Only attempt real setup if client token is supplied
          if (clientToken) {
            window.Paddle.Setup({
              token: clientToken,
              environment: isSandbox ? "sandbox" : "production",
            });
            console.log("[Paddle] Setup completed from script injection.");
          }
          setPaddleInstance(window.Paddle);
          setIsReady(true);
        } catch (e) {
          console.error("[Paddle] Failed sandbox/prod setups:", e);
          setIsReady(true); // Let's set ready anyway so that our simulator handles it gracefully
        }
      } else {
        setIsReady(true); // Allow simulator
      }
    };

    if (existingScript) {
      if (window.Paddle) {
        initializePaddle();
      } else {
        existingScript.addEventListener('load', initializePaddle);
      }
      return;
    }

    // Inject Paddle script from official CDN
    const script = document.createElement('script');
    script.src = "https://cdn.paddle.com/paddle/v2/paddle.js";
    script.async = true;
    script.onload = () => {
      initializePaddle();
    };
    script.onerror = () => {
      console.warn("[Paddle Provider] Failed to fetch script. Fallback to Simulator enabled.");
      setIsReady(true);
    };

    document.head.appendChild(script);

    return () => {
      // Cleanup listener if script is still loading
      script.removeEventListener('load', initializePaddle);
    };
  }, []);

  return (
    <PaddleContext.Provider value={{ isReady, paddleInstance }}>
      {children}
    </PaddleContext.Provider>
  );
}
