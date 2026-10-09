export default function Contact() {
  return (
    <section id="contact" className="bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 py-20 md:py-28">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-300">Lépjen velünk kapcsolatba</span>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-white md:text-5xl">
              Kérjen ingyenes ajánlatot
            </h2>
            <p className="mt-4 text-lg text-blue-100">
              Bármilyen kérdésre szívesen válaszolunk. Lépjen kapcsolatba velünk még ma!
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="rounded-lg border border-blue-700/50 bg-blue-900/20 p-6 text-center backdrop-blur">
              <div className="text-4xl mb-3">☎️</div>
              <h3 className="font-bold text-white">Telefon</h3>
              <p className="mt-2 text-blue-100">
                <a href="tel:+36123456789" className="hover:text-blue-300 transition">
                  +36 1 234 5678
                </a>
              </p>
              <p className="text-xs text-blue-300 mt-1">Hétfő-Péntek: 8:00-18:00</p>
            </div>

            <div className="rounded-lg border border-blue-700/50 bg-blue-900/20 p-6 text-center backdrop-blur">
              <div className="text-4xl mb-3">✉️</div>
              <h3 className="font-bold text-white">Email</h3>
              <p className="mt-2 text-blue-100">
                <a href="mailto:info@titantech.hu" className="hover:text-blue-300 transition">
                  info@titantech.hu
                </a>
              </p>
              <p className="text-xs text-blue-300 mt-1">24 óra alatt válaszolunk</p>
            </div>

            <div className="rounded-lg border border-blue-700/50 bg-blue-900/20 p-6 text-center backdrop-blur">
              <div className="text-4xl mb-3">📍</div>
              <h3 className="font-bold text-white">Cím</h3>
              <p className="mt-2 text-blue-100">
                1126 Budapest<br/>
                Bérc utca 8-10.
              </p>
              <p className="text-xs text-blue-300 mt-1">Egyeztetés után meglátogathatjuk</p>
            </div>
          </div>

          <div className="mt-12 rounded-lg border border-blue-600 bg-blue-900/30 p-8 backdrop-blur">
            <h3 className="text-xl font-bold text-white mb-4">Gyors ajánlatkérés</h3>
            <form className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Teljes név"
                  className="rounded-lg border border-blue-600/40 bg-white/10 px-4 py-3 text-white placeholder-blue-200/50 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition"
                />
                <input
                  type="email"
                  placeholder="E-mail cím"
                  className="rounded-lg border border-blue-600/40 bg-white/10 px-4 py-3 text-white placeholder-blue-200/50 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition"
                />
              </div>
              <input
                type="text"
                placeholder="Projekt típusa"
                className="w-full rounded-lg border border-blue-600/40 bg-white/10 px-4 py-3 text-white placeholder-blue-200/50 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition"
              />
              <textarea
                placeholder="Projekt rövid leírása"
                rows={4}
                className="w-full rounded-lg border border-blue-600/40 bg-white/10 px-4 py-3 text-white placeholder-blue-200/50 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition"
              />
              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 py-3 font-bold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-900 active:scale-95"
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
