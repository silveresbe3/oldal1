const services = [
  {
    number: '01',
    title: 'Lakóépületek',
    items: ['Családi házak építése', 'Bővítések és felújítások', 'Lépcsőházak modernizálása', 'Szanaszét szigetelés'],
  },
  {
    number: '02',
    title: 'Kereskedelmi Projektek',
    items: ['Irodaházak', 'Bevásárlóközpontok', 'Gyárak és raktárak', 'Logisztikai központok'],
  },
  {
    number: '03',
    title: 'Felújítás & Helyreállítás',
    items: ['Tetőcsere', 'Homlokzat felújítás', 'Burkolatok és dekoráció', 'Ajtók és ablakok'],
  },
  {
    number: '04',
    title: 'Mérnöki Munkák',
    items: ['Szerkezeti javítások', 'Erősítési munkák', 'Vasbeton munkák', 'Geodéziai felmérés'],
  },
  {
    number: '05',
    title: 'Intézmények',
    items: ['Iskolák és óvodák', 'Kórházak és klinikák', 'Közintézmények', 'Szociális intézmények'],
  },
  {
    number: '06',
    title: 'Speciális Megoldások',
    items: ['Fenntartható építés', 'Zöld tetők', 'Köztéri munkák', 'Infrastruktúra projektek'],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-slate-50 py-20 md:py-28">
      <div className="container-custom">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">Szolgáltatások</span>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-blue-900 md:text-5xl">
            Mit tudunk kínálni
          </h2>
          <p className="mt-4 text-lg text-slate-700">
            Széles körű építőipari megoldások, a legkisebb felújítástól az összetett ipari projektekig.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div key={service.number} className="card bg-white group hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="text-sm font-black text-blue-200 mb-2">{service.number}</div>
              <h3 className="text-2xl font-bold text-blue-900 group-hover:text-blue-700 transition">{service.title}</h3>
              <ul className="mt-4 space-y-2">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-700">
                    <span className="mt-1.5 inline-block h-2 w-2 rounded-full bg-blue-600 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
