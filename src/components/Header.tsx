'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { href: '#about', label: 'Rólunk' },
  { href: '#services', label: 'Szolgáltatások' },
  { href: '#projects', label: 'Projektek' },
  { href: '#contact', label: 'Kapcsolat' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1, duration: 0.6 }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 shadow-lg shadow-slate-200/50 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <nav className="container-custom flex h-20 items-center justify-between">
        <Link href="#top" className="group flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#081b34] text-sm font-black text-white transition-transform duration-300 group-hover:scale-110">
            TT
          </div>
          <div className="leading-tight">
            <div className="text-[10px] font-bold uppercase tracking-[0.32em] text-slate-500">Titán-Tech</div>
            <div className="text-sm font-black tracking-[-0.04em] text-[#081b34]">Bau Kft.</div>
          </div>
        </Link>

        <div className="hidden items-center gap-10 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-700 transition-colors duration-300 hover:text-[#081b34]"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link href="#contact" className="hidden sm:inline-flex btn-primary">
            Ajánlatkérés
          </Link>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={isOpen}
            className="rounded-lg p-2 text-slate-700 transition-colors duration-300 hover:bg-slate-100 lg:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </nav>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-slate-200 bg-white/95 backdrop-blur-xl lg:hidden"
        >
          <div className="container-custom flex flex-col gap-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-700 transition-colors duration-300 hover:text-[#081b34]"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="#contact" className="btn-primary mt-2 w-full" onClick={() => setIsOpen(false)}>
              Ajánlatkérés
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
