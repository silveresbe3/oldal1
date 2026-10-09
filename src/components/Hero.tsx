'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

export default function Hero() {
  return (
    <section id="top" className="section-hero pt-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-blue-100/50 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-slate-200/60 blur-3xl" />
      </div>

      <div className="container-custom flex min-h-screen items-center justify-center pt-20">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="text-center">
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block rounded-full border border-blue-200 bg-blue-50/80 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.28em] text-blue-800">
              Titán-Tech Bau Kft.
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="mx-auto max-w-4xl text-5xl font-black leading-[0.9] tracking-[-0.08em] text-[#081b34] md:text-8xl"
          >
            Precíz építkezés.
            <br />
            <span className="text-gradient">Hosszú távú partnerség.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl"
          >
            A legmodernebb technológiával és a legjobb gyakorlatokkal építünk olyan projekteket,
            amelyek generációkig megállják a helyüket.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="#contact" className="btn-primary">
              Kezdjük el
            </Link>
            <Link href="#projects" className="btn-secondary">
              Projektek
            </Link>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-16 grid grid-cols-3 gap-8 md:gap-16">
            {[
              { value: '300+', label: 'Projekt' },
              { value: '20+', label: 'Év' },
              { value: '99%', label: 'Elégedettség' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-black text-[#081b34] md:text-5xl">{stat.value}</div>
                <div className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-slate-600 md:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.32em] text-slate-500">Görgetni</span>
        <svg className="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}
