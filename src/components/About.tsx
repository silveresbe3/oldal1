'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const animation = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

export default function Hero() {
  return (
    <section id="top" className="section-shell relative pt-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-10 top-16 h-80 w-80 rounded-full bg-[#d8c1a2]/8 blur-3xl" />
        <div className="absolute bottom-16 right-10 h-96 w-96 rounded-full bg-[#8d6a4a]/10 blur-3xl" />
      </div>

      <div className="container-custom">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.12, delayChildren: 0.1 },
              },
            }}
            className="relative z-10"
          >
            <motion.div variants={animation} className="mb-6">
              <span className="eyebrow">Titán-Tech Bau Kft.</span>
            </motion.div>

            <motion.h1
              variants={animation}
              className="max-w-4xl text-5xl font-black leading-[0.88] tracking-[-0.08em] text-white md:text-7xl xl:text-[6.1rem]"
            >
              Precíz építkezés.
              <br />
              <span className="text-[#d8c1a2]">Mérnöki hozzáállás.</span>
            </motion.h1>

            <motion.p
              variants={animation}
              className="mt-7 max-w-xl text-lg leading-8 text-[#c8c0b8] md:text-xl"
            >
              A Titán-Tech Bau Kft. modern, precíz és fenntartható építési megoldásokat kínál
              lakó-, kereskedelmi és ipari projektekhez, a teljes életciklusban.
            </motion.p>

            <motion.div variants={animation} className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="#contact" className="btn-primary">
                Kezdjük el
              </Link>
              <Link href="#projects" className="btn-secondary">
                Referenciák
              </Link>
            </motion.div>

            <motion.div variants={animation} className="mt-12 grid grid-cols-3 gap-6">
              {[
                { value: '300+', label: 'projekt' },
                { value: '20+', label: 'év' },
                { value: '99%', label: 'elégedettség' },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-[#d8c1a2]/10 bg-[#13181c]/80 p-4">
                  <div className="text-2xl font-black text-white md:text-3xl">{stat.value}</div>
                  <div className="mt-2 text-[10px] font-medium uppercase tracking-[0.22em] text-[#d9d1c6]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="animate-float absolute -left-6 top-8 h-32 w-32 rounded-full bg-[#d8c1a2]/12 blur-3xl" />
            <div className="absolute -right-4 bottom-10 h-36 w-36 rounded-full bg-[#8d6a4a]/10 blur-3xl" />

            <div className="panel relative overflow-hidden p-4 shadow-[0_30px_100px_rgba(7,8,10,0.45)]">
              <div className="rounded-[1.5rem] border border-[#d8c1a2]/10 bg-gradient-to-br from-[#12171b] via-[#171d22] to-[#0d1013] p-6">
                <div className="mb-5 flex items-center justify-between">
                  <div className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#d8c1a2]">
                    2024
                  </div>
                  <div className="rounded-full border border-[#d8c1a2]/15 bg-[#d8c1a2]/5 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[#e8dbc7]">
                    Kivitelezés
                  </div>
                </div>

                <div className="rounded-[1.4rem] border border-[#d8c1a2]/10 bg-[#0d1013]/70 p-4">
                  <svg viewBox="0 0 640 520" className="h-auto w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="120" y="125" width="220" height="265" rx="6" fill="#151b1f" />
                    <rect x="150" y="155" width="38" height="200" fill="#f3efe8" opacity="0.9" />
                    <rect x="205" y="155" width="38" height="200" fill="#d8c1a2" opacity="0.9" />
                    <rect x="260" y="155" width="38" height="200" fill="#d6d1ca" opacity="0.9" />
                    <path d="M80 215H120V390H80V215Z" fill="#d9d1ca" />
                    <path d="M340 215H380V390H340V215Z" fill="#d9d1ca" />
                    <path d="M90 182L180 120H260L350 182" stroke="#efe8df" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M230 104L300 48L420 158" stroke="#d8c1a2" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
                    <rect x="390" y="225" width="155" height="165" rx="5" fill="#151b1f" />
                    <rect x="415" y="247" width="105" height="120" fill="#dfe4df" />
                    <path d="M150 390H480" stroke="#efe8df" strokeWidth="16" strokeLinecap="round" />
                    <path d="M200 390V465H430V390" stroke="#efe8df" strokeWidth="16" strokeLinecap="round" />
                  </svg>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#c8b29b]">Projektek</div>
                    <div className="mt-2 text-2xl font-black text-white">12+</div>
                  </div>
                  <div className="rounded-full border border-[#d8c1a2]/15 bg-[#d8c1a2]/5 px-3 py-2 text-sm font-medium text-[#f3efe8]">
                    Ingyenes tanácsadás
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
