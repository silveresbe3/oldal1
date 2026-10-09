'use client';

import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-white">
      <div className="text-center">
        <div className="text-5xl font-black tracking-tight text-blue-900 mb-2 animate-fadeIn">
          TITÁN-TECH
        </div>
        <div className="text-2xl font-bold tracking-[0.25em] text-blue-800 animate-fadeIn delay-100">
          BAU KFT.
        </div>

        <div className="mt-6 flex justify-center">
          <div className="w-20 h-20 animate-bounce">
            <svg viewBox="0 0 200 220" className="w-full h-full" fill="none" stroke="#001b4a" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M40 160V80L100 30L160 80V160" />
              <path d="M90 160V110H120V160" />
              <path d="M70 120H130" />
              <path d="M70 100H130" />
              <path d="M140 90H180V160" />
              <path d="M20 160H180" />
            </svg>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(8px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out both;
        }
        .delay-100 { animation-delay: 0.15s; }
      `}</style>
    </div>
  );
}
