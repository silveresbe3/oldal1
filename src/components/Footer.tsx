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
      viewport={{ once: true, margin: '-80px' }}
      className="border-t border-white/10 bg-[#090d14] py-12"
    >
      <div className="container-custom">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-xl font-black text-white">Titán-Tech</h3>
            <p className="mt-2 text-sm text-slate-400">Bau Kft.</p>
          </div>

          {links.map((link) => (
            <div key={link.href}>
              <h4 className="mb-4 text-[10px] font-bold uppercase tracking-[0.28em] text-slate-500">
                Linkek
              </h4>
              <Link href={link.href} className="block text-sm text-slate-300 transition hover:text-white">
                {link.label}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-slate-500">
            © {year} Titán-Tech Bau Kft.
          </div>

          <div className="flex gap-6">
            <Link href="#" className="text-sm text-slate-300 transition hover:text-white">
              Adatvédelmi politika
            </Link>
            <Link href="#" className="text-sm text-slate-300 transition hover:text-white">
              Felhasználási feltételek
            </Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
