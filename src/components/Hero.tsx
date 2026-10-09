export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-orange-50 py-20 md:py-32">
      <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-amber-200/40 blur-3xl" />
      <div className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-orange-200/40 blur-3xl" />

      <div className="container-custom relative">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center rounded-full border border-amber-200 bg-amber-100 px-4 py-2 text-xs font-bold uppercase tracking-widest text-amber-800">
            Építőipari Kiválóság
          </span>

          <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900 md:text-6xl">
            Valódi minőség, <span className="text-amber-700">tartós megoldások</span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600 md:text-xl">
            15+ év tapasztalat az építőiparban. Lakóház felújítástól nagyszabású ipari projektek megvalósításáig,
            mi vagyunk az Önök megbízható partnere. Precizitás, felelősség, minőség – ezek az alapjaink.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <button type="button" className="btn-primary">
              Szabadon kapható Ajánlat
            </button>
            <button type="button" className="btn-secondary">
              Galéria megtekintése
            </button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 text-center md:gap-10">
            <div>
              <div className="text-4xl font-black text-amber-700 md:text-5xl">250+</div>
              <div className="mt-2 text-sm text-slate-600">Teljesített projekt</div>
            </div>
            <div>
              <div className="text-4xl font-black text-amber-700 md:text-5xl">15+</div>
              <div className="mt-2 text-sm text-slate-600">Év tapasztalat</div>
            </div>
            <div>
              <div className="text-4xl font-black text-amber-700 md:text-5xl">98%</div>
              <div className="mt-2 text-sm text-slate-600">Ügyfél elégedettség</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
