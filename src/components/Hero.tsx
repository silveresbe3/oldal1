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
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'border-b border-[#d8c1a2]/10 bg-[#0d1013]/80 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <nav className="container-custom flex h-20 items-center justify-between">
        <Link href="#top" className="group flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d8c1a2]/20 bg-[#d8c1a2]/10 text-sm font-black text-[#f3efe8] shadow-[0_12px_30px_rgba(216,193,162,0.08)]">
            TT
          </div>
          <div className="leading-tight">
            <div className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#d8c1a2]">Titán-Tech</div>
            <div className="text-sm font-black tracking-[-0.04em] text-white">Bau Kft.</div>
          </div>
        </Link>

        <div className="hidden items-center gap-10 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#d9d2ca] transition-colors duration-300 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link href="#contact" className="hidden btn-primary sm:inline-flex">
            Ajánlatkérés
          </Link>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={isOpen}
            className="rounded-lg p-2 text-[#e7dccf] transition-colors duration-300 hover:bg-white/5 lg:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </nav>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-[#d8c1a2]/10 bg-[#0d1013]/95 backdrop-blur-xl lg:hidden"
        >
          <div className="container-custom flex flex-col gap-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[#d9d2ca] transition hover:text-white"
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
