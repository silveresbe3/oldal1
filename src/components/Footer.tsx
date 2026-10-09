'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const links = [
  { label: 'Rólunk', href: '#about' },
  { label: 'Szolgáltatások', href: '#services' },
  { label: 'Projektek', href: '#projects' },
  { label: 'Kapcsolat', href: '#contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: '-100px' }}
      className="border-t border-slate-200 bg-white py-12 md:py-16"
    >
      <div className="container-custom">
        <div className="mb-12 grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-3 text-xl font-black text-[#081b34]">Titán-Tech</h3>
            <p className="text-sm text-slate-600">Bau Kft.</p>
          </div>

          {links.map((link) => (
            <div key={link.href}>
              <h4 className="mb-4 text-[10px] font-bold uppercase tracking-[0.28em] text-slate-500">
                Linkek
              </h4>
              <Link href={link.href} className="block text-sm text-slate-600 transition-colors duration-300 hover:text-[#081b34]">
                {link.label}
              </Link>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 sm:flex-row">
          <div className="text-xs font-medium uppercase tracking-[0.28em] text-slate-500">
            © {year} Titán-Tech Bau Kft.
          </div>

          <div className="flex gap-6">
            <Link href="#" className="text-sm text-slate-600 transition-colors duration-300 hover:text-[#081b34]">
              Adatvédelmi politika
            </Link>
            <Link href="#" className="text-sm text-slate-600 transition-colors duration-300 hover:text-[#081b34]">
              Felhasználási feltételek
            </Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
