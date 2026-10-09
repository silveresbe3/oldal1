const services = [
  {
    title: 'Lakóépítés',
    text: 'Családi házak, lakóparkok és önkormányzati programok megvalósítása.',
  },
  {
    title: 'Kereskedelmi beruházások',
    text: 'Irodák, üzletek és kereskedelmi létesítmények tervezése és kivitelezése.',
  },
  {
    title: 'Felújítás és rekonstrukció',
    text: 'Homlokzatok, tetők és meglévő épületek komplett modernizációja.',
  },
  {
    title: 'Ipari projektek',
    text: 'Raktárak, gyárak és logisztikai létesítmények racionalizált kivitelezése.',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 md:py-28">
      <div className="container-custom">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-blue-700">Szolgáltatások</p>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] text-slate-900 md:text-5xl">
            Minden, ami az építéshez kell.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, idx) => (
            <div key={service.title} className="card bg-slate-50 border-slate-200">
              <div className="text-sm font-black text-blue-700">0{idx + 1}</div>
              <h3 className="mt-4 text-xl font-bold text-slate-900">{service.title}</h3>
              <p className="mt-3 text-slate-600 leading-7">{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
