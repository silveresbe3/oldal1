import Link from 'next/link';

export default function Contact() {
  return (
    <section id="contact" className="bg-gradient-to-br from-amber-900 to-slate-900 py-20 md:py-28">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-amber-300">Lépjen velünk kapcsolatba</span>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-white md:text-5xl">
              Kérjen ingyenes ajánlatot
            </h2>
            <p className="mt-4 text-lg text-amber-100">
              Bármilyen kérdésre szívesen válaszolunk. Lépjen kapcsolatba velünk még ma!
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="rounded-lg border border-amber-700/20 bg-amber-900/10 p-6 text-center backdrop-blur">
              <div className="text-3xl mb-3">📞</div>
              <h3 className="font-bold text-white">Telefon</h3>
              <p className="mt-2 text-amber-100">
                <a href="tel:+36123456789" className="hover:text-amber-300 transition">
                  +36 1 234 5678
                </a>
              </p>
              <p className="text-xs text-amber-200 mt-1">Hétfő-Péntek: 8:00-18:00</p>
            </div>

            <div className="rounded-lg border border-amber-700/20 bg-amber-900/10 p-6 text-center backdrop-blur">
              <div className="text-3xl mb-3">✉️</div>
              <h3 className="font-bold text-white">Email</h3>
              <p className="mt-2 text-amber-100">
                <a href="mailto:info@buildcraft.hu" className="hover:text-amber-300 transition">
                  info@buildcraft.hu
                </a>
              </p>
              <p className="text-xs text-amber-200 mt-1">24 óra alatt válaszolunk</p>
            </div>

            <div className="rounded-lg border border-amber-700/20 bg-amber-900/10 p-6 text-center backdrop-blur">
              <div className="text-3xl mb-3">📍</div>
              <h3 className="font-bold text-white">Cím</h3>
              <p className="mt-2 text-amber-100">
                1139 Budapest<br/>
                Stefánia út 42-44.
              </p>
              <p className="text-xs text-amber-200 mt-1">Egyeztetés után meglátogathatjuk</p>
            </div>
          </div>

          <div className="mt-12 rounded-lg border border-amber-600 bg-amber-100/10 p-8 backdrop-blur">
            <h3 className="text-xl font-bold text-white mb-4">Gyors ajánlatkérés</h3>
            <form className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Teljes név"
                  className="rounded-lg border border-amber-600/30 bg-white/10 px-4 py-3 text-white placeholder-amber-200/50 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                />
                <input
                  type="email"
                  placeholder="E-mail cím"
                  className="rounded-lg border border-amber-600/30 bg-white/10 px-4 py-3 text-white placeholder-amber-200/50 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                />
              </div>
              <input
                type="text"
                placeholder="Projekt típusa"
                className="w-full rounded-lg border border-amber-600/30 bg-white/10 px-4 py-3 text-white placeholder-amber-200/50 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
              />
              <textarea
                placeholder="Projekt rövid leírása"
                rows={4}
                className="w-full rounded-lg border border-amber-600/30 bg-white/10 px-4 py-3 text-white placeholder-amber-200/50 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
              />
              <button
                type="submit"
                className="w-full rounded-lg bg-amber-600 py-3 font-bold text-white transition hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                Ajánlat kérése
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
