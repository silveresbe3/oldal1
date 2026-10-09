'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-sm shadow-md">
      <nav className="container-custom flex h-20 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-3xl">🏢</div>
          <div className="flex flex-col leading-tight">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Építőipari</span>
            <span className="text-2xl font-black tracking-tight text-blue-900">TITÁN-TECH</span>
            <span className="text-xs font-bold tracking-widest text-blue-900">BAU KFT.</span>
          </div>
        </div>

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

        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } absolute left-0 right-0 top-20 border-b border-slate-200 bg-white md:static md:flex md:items-center md:gap-8 md:border-none md:bg-transparent md:!block`}
        >
          <div className="container-custom flex flex-col gap-2 py-4 md:flex-row md:items-center md:gap-8 md:py-0">
            <Link href="#about" className="text-sm font-medium text-slate-700 transition hover:text-blue-700">
              Rólunk
            </Link>
            <Link href="#services" className="text-sm font-medium text-slate-700 transition hover:text-blue-700">
              Szolgáltatások
            </Link>
            <Link href="#projects" className="text-sm font-medium text-slate-700 transition hover:text-blue-700">
              Projektjeink
            </Link>
            <Link href="#team" className="text-sm font-medium text-slate-700 transition hover:text-blue-700">
              Csapatunk
            </Link>
            <Link href="#contact" className="text-sm font-medium text-slate-700 transition hover:text-blue-700">
              Kapcsolat
            </Link>
            <button type="button" className="btn-primary mt-2 md:mt-0">
              Ajánlatkérés
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
