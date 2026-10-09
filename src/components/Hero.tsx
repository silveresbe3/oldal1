'use client';

import Link from 'next/link';

const stats = [
  { value: '300+', label: 'projektek' },
  { value: '20+', label: 'év tapasztalat' },
  { value: '99%', label: 'elégedettség' },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-8 pb-16 md:pt-12 md:pb-20">
      <div className="absolute inset-x-0 top-0 h-96 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.16),_transparent_40%)]" />
      <div className="container-custom relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative z-10">
          <div className="section-badge">Titán-Tech Bau Kft.</div>

          <h1 className="mt-6 max-w-xl text-balance text-5xl font-black leading-[0.92] tracking-[-0.08em] text-[#081b34] md:text-7xl">
            Modern építkezés.<br />
            Példaértékű partner.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 md:text-lg">
            A Titán-Tech Bau Kft. komplex építőipari megoldásokat kínál lakó-, kereskedelmi és ipari beruházásokhoz,
            precíz kivitelezéssel, átlátható kommunikációval és tartós minőséggel.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="#contact" className="btn-primary">
              Ingyenes ajánlat
            </Link>
            <Link href="#projects" className="btn-secondary">
              Referenciák
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur-sm">
                <div className="text-2xl font-black text-[#081b34]">{stat.value}</div>
                <div className="mt-1 text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-10 top-8 h-44 w-44 rounded-full bg-blue-200/40 blur-3xl" />
          <div className="absolute right-6 bottom-4 h-40 w-40 rounded-full bg-slate-200/70 blur-3xl" />

          <div className="glass-card relative animate-float">
            <div className="overflow-hidden rounded-[1.6rem] bg-gradient-to-br from-slate-100 to-blue-50 p-5">
              <svg viewBox="0 0 640 520" className="h-auto w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="120" y="125" width="220" height="265" rx="6" fill="#081b34" />
                <rect x="150" y="155" width="38" height="200" fill="#f8fafc" opacity="0.9" />
                <rect x="205" y="155" width="38" height="200" fill="#60a5fa" opacity="0.85" />
                <rect x="260" y="155" width="38" height="200" fill="#dbeafe" opacity="0.9" />
                <path d="M80 215H120V390H80V215Z" fill="#dbeafe" />
                <path d="M340 215H380V390H340V215Z" fill="#dbeafe" />
                <path d="M90 182L180 120H260L350 182" stroke="#081b34" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M230 104L300 48L420 158" stroke="#1d4ed8" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="390" y="225" width="155" height="165" rx="5" fill="#081b34" />
                <rect x="415" y="247" width="105" height="120" fill="#dbeafe" />
                <path d="M150 390H480" stroke="#081b34" strokeWidth="16" strokeLinecap="round" />
                <path d="M200 390V465H430V390" stroke="#081b34" strokeWidth="16" strokeLinecap="round" />
              </svg>
            </div>

            <div className="absolute -bottom-4 left-6 rounded-2xl border border-blue-100 bg-white px-4 py-3 shadow-lg shadow-blue-100/80">
              <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-blue-700">2024</div>
              <div className="mt-1 text-base font-extrabold text-[#081b34]">Lakópark kivitelezés</div>
            </div>

            <div className="absolute -right-3 top-8 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-lg">
              <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-slate-500">Minőség</div>
              <div className="mt-1 text-xl font-black text-[#081b34]">99%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
