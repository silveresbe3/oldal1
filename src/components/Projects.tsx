const projects = [
  {
    title: 'Budai lakópark',
    description: 'Modern családi házak és közösségi terek',
    year: '2024',
  },
  {
    title: 'Irodatorony felújítás',
    description: 'Teljes homlokzat és belső felújítás',
    year: '2023',
  },
  {
    title: 'Logisztikai központ',
    description: 'Raktár és szállítási infrastruktúra',
    year: '2022',
  },
  {
    title: 'Közösségi épület',
    description: 'Önkormányzati és közösségi létesítmény',
    year: '2021',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-100 py-20 md:py-28">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-blue-700">Referenciák</p>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] text-slate-900 md:text-5xl">
            Sikeres projektek, száraz tényekkel.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((project) => (
            <div key={project.title} className="card bg-white border border-slate-200 p-0 overflow-hidden">
              <div className="h-52 bg-gradient-to-br from-blue-100 via-slate-100 to-blue-200 flex items-center justify-center text-5xl font-black text-blue-900">
                {project.title.charAt(0)}
              </div>
              <div className="p-5">
                <div className="text-xs font-bold uppercase tracking-[0.25em] text-blue-700">{project.year}</div>
                <h3 className="mt-3 text-xl font-bold text-slate-900">{project.title}</h3>
                <p className="mt-2 text-slate-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
