import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1600);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-[#f7f9fc]">
      <div className="text-center">
        <div className="animate-fadeIn text-5xl font-black tracking-[-0.08em] text-[#081b34] md:text-6xl">TITÁN-TECH</div>
        <div className="animate-fadeIn mt-2 text-xl font-bold uppercase tracking-[0.35em] text-blue-700 md:text-2xl">
          BAU KFT.
        </div>

        <div className="mt-8 flex justify-center">
          <div className="animate-bounce-soft h-20 w-20 md:h-24 md:w-24">
            <svg viewBox="0 0 220 220" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M35 150V95L110 45L185 95V150" stroke="#081b34" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M70 150V118H150V150" stroke="#081b34" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M95 102H125V118H95V102Z" fill="#1d4ed8" />
              <path d="M50 150H170" stroke="#081b34" strokeWidth="10" strokeLinecap="round" />
              <path d="M70 94L110 64L150 94" stroke="#1d4ed8" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out both;
        }
        @keyframes bounceSoft {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-bounce-soft {
          animation: bounceSoft 1.2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
