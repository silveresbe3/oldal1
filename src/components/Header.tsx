'use client';

import Link from 'next/link';
import { useState } from 'react';

const navItems = [
  { href: '#about', label: 'Rólunk' },
  { href: '#services', label: 'Szolgáltatások' },
  { href: '#projects', label: 'Referenciák' },
  { href: '#contact', label: 'Kapcsolat' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
      <nav className="container-custom flex h-20 items-center justify-between">
        <Link href="#top" className="flex items-center gap-3" aria-label="Titán-Tech kezdőlap">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#081b34] text-sm font-black text-white shadow-lg shadow-blue-900/20">
            TT
          </div>
          <div className="leading-tight">
            <div className="text-[10px] font-bold uppercase tracking-[0.32em] text-slate-500">Építőipari</div>
            <div className="text-lg font-black tracking-[-0.06em] text-[#081b34]">Titán-Tech</div>
            <div className="text-[10px] font-bold uppercase tracking-[0.32em] text-blue-700">Bau Kft.</div>
          </div>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-700 transition hover:text-blue-800"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Link href="#contact" className="btn-primary">
            Ajánlatkérés
          </Link>
        </div>

        <button
          type="button"
          className="rounded-md p-2 text-slate-700 md:hidden"
          aria-label="Open menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </nav>

      {isOpen && (
        <div id="mobile-menu" className="border-t border-slate-200 bg-white md:hidden">
          <div className="container-custom flex flex-col gap-3 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-700 transition hover:text-blue-800"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="#contact" className="btn-primary mt-2 w-full" onClick={() => setIsOpen(false)}>
              Ajánlatkérés
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
