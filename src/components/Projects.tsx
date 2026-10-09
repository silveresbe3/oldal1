const projects = [
  {
    title: 'Luxus lakóépület felújítás – Budapest II. kerület',
    category: 'Lakóépület',
    description: '250 m² prémium felújítás, csúcstechnikás megoldások, energiahatékony rendszerek.',
    year: '2024',
  },
  {
    title: 'Irodapark komplexum – Pest megye',
    category: 'Kereskedelmi',
    description: '8000 m² modern irodaegyüttes, zöld tetővel, okos Building Management System-mel.',
    year: '2024',
  },
  {
    title: 'Óvodai komplexum – Debrecen',
    category: 'Közintézmény',
    description: 'Új, 400 gyerek kapacitású óvodaépület, legmodernebb biztonsági rendszerrel.',
    year: '2023',
  },
  {
    title: 'Egyetem homlokzatfelújítás',
    category: 'Felújítás',
    description: 'Teljes homlokzat rehabilitáció 12000 m² felületen, történeti megőrzés.',
    year: '2023',
  },
  {
    title: 'Logisztikai centrum – Gyöngyös',
    category: 'Ipari',
    description: '20000 m² raktárépület modern technológiákkal és automatizált rendszerekkel.',
    year: '2022',
  },
  {
    title: 'Prémium lakópark – Budapest XIII. kerület',
    category: 'Lakóépület',
    description: '65 egység lakópark, közösségi terekkel, wellness központtal és zöld infrastruktúrával.',
    year: '2022',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-white py-20 md:py-28">
      <div className="container-custom">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">Portfólió</span>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-blue-900 md:text-5xl">
            Referencia projektek
          </h2>
          <p className="mt-4 text-lg text-slate-700">
            Néhány kiválasztott projekt, amelyből büszkék vagyunk és amely eredménye máig működik.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="card group overflow-hidden border-l-4 border-l-blue-600 hover:border-l-blue-900 transition-colors"
            >
              <div className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-900 mb-3">
                {project.category}
              </div>
              <h3 className="text-lg font-bold text-blue-900">{project.title}</h3>
              <p className="mt-3 text-sm text-slate-700">{project.description}</p>
              <p className="mt-4 text-xs font-bold text-blue-600">Befejezés: {project.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
