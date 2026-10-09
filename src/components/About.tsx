export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(191,219,254,0.45),_transparent_35%),linear-gradient(180deg,#ffffff_0%,#f4f8ff_50%,#edf3ff_100%)] py-20 md:py-28">
      <div className="container-custom grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative z-10">
          <div className="mb-6 inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.26em] text-blue-800">
            Titán-Tech Bau Kft.
          </div>

          <h1 className="max-w-xl text-5xl font-black leading-[0.92] tracking-[-0.08em] text-[#081b34] md:text-7xl">
            Tiszta építkezés.<br />
            Erős partner.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 md:text-lg">
            A Titán-Tech Bau Kft. építőipari kivitelezői csapata a lakó-, kereskedelmi és ipari beruházások minőségi,
            precíz és hosszú távon megbízható megvalósítására specializálódott.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button type="button" className="btn-primary">Ajánlatkérés</button>
            <button type="button" className="btn-secondary">Referenciák</button>
          </div>

          <div className="mt-10 flex flex-wrap gap-8 text-sm text-slate-600">
            <div>
              <div className="text-2xl font-black text-[#081b34]">300+</div>
              <div>projektek</div>
            </div>
            <div>
              <div className="text-2xl font-black text-[#081b34]">20+</div>
              <div>év tapasztalat</div>
            </div>
            <div>
              <div className="text-2xl font-black text-[#081b34]">99%</div>
              <div>elégedettség</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-10 h-44 w-44 rounded-full bg-blue-200/40 blur-3xl" />
          <div className="absolute right-4 bottom-0 h-40 w-40 rounded-full bg-slate-200/60 blur-3xl" />

          <div className="relative rounded-[2rem] border border-slate-200 bg-white/70 p-4 shadow-[0_28px_90px_rgba(15,23,42,0.08)] backdrop-blur-sm">
            <div className="overflow-hidden rounded-[1.6rem] bg-gradient-to-br from-slate-100 to-blue-50 p-5">
              <svg viewBox="0 0 640 520" className="h-auto w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="120" y="125" width="220" height="265" rx="6" fill="#081b34"/>
                <rect x="150" y="155" width="38" height="200" fill="#f8fafc" opacity="0.9"/>
                <rect x="205" y="155" width="38" height="200" fill="#60a5fa" opacity="0.85"/>
                <rect x="260" y="155" width="38" height="200" fill="#dbeafe" opacity="0.9"/>
                <path d="M80 215H120V390H80V215Z" fill="#dbeafe"/>
                <path d="M340 215H380V390H340V215Z" fill="#dbeafe"/>
                <path d="M90 182L180 120H260L350 182" stroke="#081b34" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M230 104L300 48L420 158" stroke="#1d4ed8" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round"/>
                <rect x="390" y="225" width="155" height="165" rx="5" fill="#081b34"/>
                <rect x="415" y="247" width="105" height="120" fill="#dbeafe"/>
                <path d="M150 390H480" stroke="#081b34" strokeWidth="16" strokeLinecap="round"/>
                <path d="M200 390V465H430V390" stroke="#081b34" strokeWidth="16" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
