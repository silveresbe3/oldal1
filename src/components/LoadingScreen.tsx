'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur-xl shadow-[0_10px_30px_rgba(15,23,42,0.03)]">
      <nav className="container-custom flex h-20 items-center justify-between">
        <Link href="#top" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#081b34] text-sm font-black text-white shadow-lg shadow-blue-900/20">
            TT
          </div>
          <div className="leading-tight">
            <div className="text-[10px] font-bold uppercase tracking-[0.32em] text-slate-500">Építőipari</div>
            <div className="text-lg font-black tracking-[-0.06em] text-[#081b34]">Titán-Tech</div>
            <div className="text-[10px] font-bold uppercase tracking-[0.32em] text-blue-700">Bau Kft.</div>
          </div>
        </Link>

        <button
          type="button"
          className="rounded-md p-2 text-slate-700 md:hidden"
          aria-label="Open menu"
          onClick={() => setIsOpen((current) => !current)}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>

        <div className={`${isOpen ? 'block' : 'hidden'} absolute left-0 right-0 top-20 border-b border-slate-200 bg-white md:static md:flex md:items-center md:gap-8 md:border-none md:bg-transparent md:!block`}>
          <div className="container-custom flex flex-col gap-2 py-4 md:flex-row md:items-center md:gap-8 md:py-0">
            <Link href="#about" className="text-sm font-medium text-slate-700 transition hover:text-blue-800">Rólunk</Link>
            <Link href="#services" className="text-sm font-medium text-slate-700 transition hover:text-blue-800">Szolgáltatások</Link>
            <Link href="#projects" className="text-sm font-medium text-slate-700 transition hover:text-blue-800">Referenciák</Link>
            <Link href="#contact" className="text-sm font-medium text-slate-700 transition hover:text-blue-800">Kapcsolat</Link>
            <button type="button" className="btn-primary mt-2 md:mt-0">Ajánlatkérés</button>
          </div>
        </div>
      </nav>
    </header>
  );
}
