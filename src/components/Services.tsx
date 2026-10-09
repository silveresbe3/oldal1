const services = [
  {
    title: 'Lakóépítés',
    text: 'Családi házak, lakóparkok és bővítési projektek precíz, környezetbarát kivitelezése.',
  },
  {
    title: 'Kereskedelmi létesítmények',
    text: 'Irodaházak, üzlethelyiségek és komplex kereskedelmi beruházások tervezése és kivitelezése.',
  },
  {
    title: 'Felújítás és rekonstrukció',
    text: 'Tető, homlokzat és meglévő ingatlan modernizálása tartós és gazdaságos megoldással.',
  },
  {
    title: 'Ipari kivitelezés',
    text: 'Raktárak, logisztikai és gyártási központok gyors, felügyelet alatt álló megvalósítása.',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 md:py-28">
      <div className="container-custom">
        <div className="max-w-2xl">
          <div className="section-badge">Szolgáltatások</div>
          <h2 className="mt-5 text-balance text-4xl font-black tracking-[-0.06em] text-[#081b34] md:text-5xl">
            Minden, ami az építéshez kell.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className="card border-slate-200 bg-slate-50 transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >
              <div className="mb-4 text-xs font-black uppercase tracking-[0.32em] text-blue-700">0{idx + 1}</div>
              <h3 className="text-xl font-bold text-[#081b34]">{service.title}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
