const projects = [
  {
    title: 'Luxus lakópark',
    type: 'Lakóépület',
    text: 'Modern családi házak, közösségi terek és zöld infrastruktúra.',
    year: '2024',
  },
  {
    title: 'Irodaház rekonstrukció',
    type: 'Kereskedelmi',
    text: 'Teljes homlokzat és belső felújítás modern üzleti igényekre.',
    year: '2023',
  },
  {
    title: 'Logisztikai központ',
    type: 'Ipari',
    text: 'Raktár és szállítási infrastruktúra, gyors kivitelezéssel.',
    year: '2022',
  },
  {
    title: 'Közösségi épület',
    type: 'Intézmény',
    text: 'Óvoda és közösségi épület, funkcionalitás és tartósság.',
    year: '2021',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-100 py-20 md:py-28">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.32em] text-blue-700">Referenciák</p>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.06em] text-[#081b34] md:text-5xl">
            Sikeres projektek, száraz tényekkel.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((project) => (
            <article key={project.title} className="card overflow-hidden border-slate-200 bg-white p-0">
              <div className="flex h-52 items-center justify-center bg-[linear-gradient(135deg,#dbeafe_0%,#f8fafc_40%,#bfdbfe_100%)] text-5xl font-black text-[#081b34]">
                {project.title.charAt(0)}
              </div>
              <div className="p-5">
                <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-blue-700">{project.type}</div>
                <h3 className="mt-3 text-xl font-bold text-[#081b34]">{project.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{project.text}</p>
                <div className="mt-4 text-xs font-bold uppercase tracking-[0.25em] text-slate-500">{project.year}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
