'use client';

import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-[#081b34] py-20 text-white md:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -right-20 top-1/4 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -left-20 bottom-1/4 h-96 w-96 rounded-full bg-slate-500/10 blur-3xl" />
      </div>

      <div className="container-custom">
        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <h2 className="mb-6 text-5xl font-black leading-[1.08] tracking-[-0.07em] text-white md:text-7xl">
              Hozzunk létre
              <br />
              valami nagyot.
            </h2>
            <p className="max-w-xl text-lg leading-relaxed text-blue-100">
              Legyen szó kisebb felújításról vagy teljes körű kivitelezésről, szívesen megismerjük a projektet,
              és személyre szabott ajánlatot készítünk.
            </p>

            <div className="mt-8 space-y-6 text-lg">
              <div>
                <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.28em] text-blue-300">
                  Telefon
                </div>
                <a href="tel:+36123456789" className="font-semibold text-white transition-colors duration-300 hover:text-blue-300">
                  +36 1 234 5678
                </a>
              </div>

              <div>
                <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.28em] text-blue-300">
                  Email
                </div>
                <a href="mailto:info@titantech.hu" className="font-semibold text-white transition-colors duration-300 hover:text-blue-300">
                  info@titantech.hu
                </a>
              </div>

              <div>
                <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.28em] text-blue-300">
                  Cím
                </div>
                <p className="font-semibold text-white">Budapest, Bérc utca 8-10.</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: '-100px' }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Név"
                required
                className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:border-blue-400 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:border-blue-400 focus:outline-none"
              />
            </div>

            <input
              type="text"
              placeholder="Projekt típusa"
              className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:border-blue-400 focus:outline-none"
            />

            <textarea
              rows={5}
              placeholder="Üzenet"
              required
              className="w-full resize-none rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:border-blue-400 focus:outline-none"
            />

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-xl border border-emerald-500/40 bg-emerald-500/20 px-4 py-3 text-sm text-emerald-100"
              >
                Köszönjük! Hamarosan felvesszük Önnel a kapcsolatot.
              </motion.div>
            )}

            <button type="submit" className="btn-primary w-full bg-white text-[#081b34] hover:bg-slate-100">
              Küldés
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
