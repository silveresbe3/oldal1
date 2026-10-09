export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-slate-50 py-20 md:py-32">
      <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-slate-200/30 blur-3xl" />

      <div className="container-custom relative">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-widest text-blue-900">
            Építőipari Kiváló ság - Megbízható Partner
          </span>

          <h1 className="mt-6 text-4xl font-black tracking-tight text-blue-900 md:text-6xl">
            Titán erő, <span className="text-blue-600">tech precizió</span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-700 md:text-xl">
            20+ év tapasztalat az építőiparban. Lakóépületek, kereskedelmi objektumok, ipari megoldások.
            Mi nem kompromisszumot kötünk a minőséggel. Titán-Tech Bau Kft. - ahol az álom és a tartósság találkozik.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <button type="button" className="btn-primary">
              Szabad Ajánlat
            </button>
            <button type="button" className="btn-secondary">
              Portfólió
            </button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 text-center md:gap-10">
            <div>
              <div className="text-4xl font-black text-blue-900 md:text-5xl">300+</div>
              <div className="mt-2 text-sm text-slate-700">Teljesített projekt</div>
            </div>
            <div>
              <div className="text-4xl font-black text-blue-900 md:text-5xl">20+</div>
              <div className="mt-2 text-sm text-slate-700">Év tapasztalat</div>
            </div>
            <div>
              <div className="text-4xl font-black text-blue-900 md:text-5xl">99%</div>
              <div className="mt-2 text-sm text-slate-700">Ügyfél elégedettség</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
