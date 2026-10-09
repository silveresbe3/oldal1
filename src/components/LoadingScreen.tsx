'use client';

import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="text-center">
        {/* Building icon animation */}
        <div className="relative w-32 h-32 mx-auto mb-8 flex items-center justify-center">
          <svg
            viewBox="0 0 200 240"
            className="w-full h-full animate-bounce"
            fill="none"
            stroke="#001f3f"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Left building */}
            <g>
              <rect x="30" y="80" width="35" height="100" />
              <rect x="45" y="90" width="12" height="15" />
              <rect x="45" y="110" width="12" height="15" />
              <rect x="45" y="130" width="12" height="15" />
              <rect x="45" y="150" width="12" height="15" />
            </g>
            {/* Middle tall building */}
            <g>
              <polygon points="70,50 100,20 130,50 130,180 70,180" />
              <rect x="75" y="65" width="15" height="20" />
              <rect x="100" y="65" width="15" height="20" />
              <rect x="75" y="95" width="15" height="20" />
              <rect x="100" y="95" width="15" height="20" />
              <rect x="75" y="125" width="15" height="20" />
              <rect x="100" y="125" width="15" height="20" />
            </g>
            {/* House on right */}
            <g>
              <polygon points="140,120 165,90 190,120 190,180 140,180" />
              <rect x="155" y="140" width="15" height="15" />
            </g>
            {/* Ground line */}
            <line x1="20" y1="190" x2="200" y2="190" />
          </svg>
        </div>

        {/* Company name - appears first */}
        <h1 className="text-4xl font-black text-blue-900 mb-2 animate-fadeIn">
          TITÁN-TECH
        </h1>
        <p className="text-2xl font-bold text-blue-900 mb-8 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
          BAU KFT.
        </p>

        {/* Loading bar */}
        <div className="w-64 h-1 bg-slate-200 rounded-full overflow-hidden mx-auto">
          <div className="h-full bg-gradient-to-r from-blue-900 to-blue-600 rounded-full animate-pulse" style={{
            animation: 'loadingBar 2s ease-in-out forwards',
          }} />
        </div>
        <p className="mt-4 text-sm text-slate-600 animate-pulse">Az oldal betöltése...</p>
      </div>

      <style>{`
        @keyframes loadingBar {
          0% { width: 0; }
          50% { width: 70%; }
          100% { width: 100%; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
