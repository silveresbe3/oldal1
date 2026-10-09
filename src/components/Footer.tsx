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
    <section id="contact" className="section-shell bg-[#111517]">
      <div className="container-custom">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: '-80px' }}
          >
            <div className="eyebrow">Kapcsolat</div>
            <h2 className="mt-6 text-4xl font-black leading-[1.04] tracking-[-0.07em] text-white md:text-6xl">
              Kérjen ingyenes ajánlatot.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#c7c0b9]">
              Bármilyen kérdése van, szívesen egyeztetünk a projekt kapcsán és megadjuk az optimális
              megoldást az Ön igényeihez.
            </p>

            <div className="mt-10 space-y-6">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d8c1a2]">Telefon</div>
                <a href="tel:+36123456789" className="mt-2 inline-block text-lg font-medium text-white hover:text-[#d8c1a2]">
                  +36 1 234 5678
                </a>
              </div>

              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d8c1a2]">Email</div>
                <a href="mailto:info@titantech.hu" className="mt-2 inline-block text-lg font-medium text-white hover:text-[#d8c1a2]">
                  info@titantech.hu
                </a>
              </div>

              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d8c1a2]">Cím</div>
                <div className="mt-2 text-lg font-medium text-white">Budapest, Bérc utca 8-10.</div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true, margin: '-80px' }}
            onSubmit={handleSubmit}
            className="rounded-[1.75rem] border border-[#d8c1a2]/10 bg-[#171d22] p-6"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Név"
                required
                className="w-full rounded-xl border border-[#d8c1a2]/10 bg-[#0f1418] px-4 py-3 text-white placeholder:text-[#c8c0b8] focus:border-[#d8c1a2]/40 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full rounded-xl border border-[#d8c1a2]/10 bg-[#0f1418] px-4 py-3 text-white placeholder:text-[#c8c0b8] focus:border-[#d8c1a2]/40 focus:outline-none"
              />
            </div>

            <div className="mt-4">
              <input
                type="text"
                placeholder="Projekt típusa"
                className="w-full rounded-xl border border-[#d8c1a2]/10 bg-[#0f1418] px-4 py-3 text-white placeholder:text-[#c8c0b8] focus:border-[#d8c1a2]/40 focus:outline-none"
              />
            </div>

            <div className="mt-4">
              <textarea
                rows={5}
                placeholder="Üzenet"
                required
                className="w-full resize-none rounded-xl border border-[#d8c1a2]/10 bg-[#0f1418] px-4 py-3 text-white placeholder:text-[#c8c0b8] focus:border-[#d8c1a2]/40 focus:outline-none"
              />
            </div>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-100"
              >
                Köszönjük! Hamarosan felvesszük Önnel a kapcsolatot.
              </motion.div>
            )}

            <button type="submit" className="btn-primary mt-5 w-full">
              Küldés
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
