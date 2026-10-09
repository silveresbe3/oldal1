'use client';

import { FormEvent, useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-[#071b33] py-20 md:py-28">
      <div className="container-custom grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <div className="section-badge border-blue-400/30 bg-blue-500/10 text-blue-100">Kapcsolat</div>
          <h2 className="mt-5 text-balance text-4xl font-black tracking-[-0.06em] text-white md:text-5xl">
            Kérjen ingyenes ajánlatot.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-blue-100">
            Bármilyen kérdése van, szívesen egyeztetünk Önnel a projektigényéről és ajánlatot adunk a legjobb megoldásra.
          </p>

          <div className="mt-10 space-y-5 text-blue-100">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-300">Telefon</div>
              <a href="tel:+36123456789" className="mt-2 inline-block text-lg font-bold text-white hover:text-blue-200">
                +36 1 234 5678
              </a>
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-300">Email</div>
              <a href="mailto:info@titantech.hu" className="mt-2 inline-block text-lg font-bold text-white hover:text-blue-200">
                info@titantech.hu
              </a>
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-300">Cím</div>
              <div className="mt-2 text-lg font-bold text-white">Budapest, Bérc utca 8-10.</div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-[2rem] bg-white/95 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.2)]">
          <div className="grid gap-4 md:grid-cols-2">
            <input
              type="text"
              placeholder="Név"
              required
              className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Projekt típusa"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div className="mt-4">
            <textarea
              rows={6}
              placeholder="Projekt leírása"
              required
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none"
            />
          </div>

          {submitted ? (
            <div className="mt-5 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
              Köszönjük! A megadott adatok alapján hamarosan felvesszük Önnel a kapcsolatot.
            </div>
          ) : null}

          <button type="submit" className="btn-primary mt-5 w-full">
            Ajánlatkérés
          </button>
        </form>
      </div>
    </section>
  );
}
