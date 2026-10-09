export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-18 md:py-24">
      <div className="container-custom grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="z-10">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-blue-700">TITÁN-TECH BAU KFT.</p>
          <h1 className="text-5xl font-black leading-[0.95] tracking-[-0.06em] text-slate-900 md:text-7xl">
            Tiszta építkezés.<br />
            Megbízható partner.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 md:text-lg">
            Vállaljuk a lakó-, kereskedelmi és ipari építési beruházások teljes körű kivitelezését.
            Szakértelem, precizitás és hosszú távú minőség a projekt minden szakaszában.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button type="button" className="btn-primary">Ajánlatkérés</button>
            <button type="button" className="btn-secondary">Referenciák</button>
          </div>

          <div className="mt-10 flex gap-8 text-sm text-slate-600">
            <div>
              <div className="text-2xl font-black text-blue-900">300+</div>
              <div>projekt</div>
            </div>
            <div>
              <div className="text-2xl font-black text-blue-900">20+</div>
              <div>év tapasztalat</div>
            </div>
            <div>
              <div className="text-2xl font-black text-blue-900">99%</div>
              <div>elégedettség</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100/80 to-slate-100/50 blur-3xl" />
          <div className="relative rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
            <div className="overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-slate-100 to-blue-50 p-4">
              <svg viewBox="0 0 600 520" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="120" y="120" width="220" height="260" rx="6" fill="#001b4a"/>
                <rect x="150" y="150" width="40" height="200" fill="#f8fafc" opacity="0.9"/>
                <rect x="210" y="150" width="40" height="200" fill="#1d4ed8" opacity="0.9"/>
                <rect x="270" y="150" width="40" height="200" fill="#93c5fd" opacity="0.9"/>
                <path d="M80 210H120V380H80V210Z" fill="#dbeafe"/>
                <path d="M340 210H380V380H340V210Z" fill="#dbeafe"/>
                <path d="M90 182L180 120H260L350 182" stroke="#001b4a" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M210 110L290 50L400 150" stroke="#1d4ed8" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M390 220H520V370H390V220Z" fill="#001b4a"/>
                <rect x="410" y="240" width="90" height="120" fill="#dbeafe"/>
                <path d="M140 380H480" stroke="#0f172a" strokeWidth="16" strokeLinecap="round"/>
                <path d="M200 380V460H380V380" stroke="#0f172a" strokeWidth="16" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
