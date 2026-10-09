const projects = [
  {
    title: 'Családi ház felújítás – Budapest XIV. kerület',
    category: 'Lakóépület',
    description: '180 m² felújítás, komplett belső átalakítás, energiahatékony megoldások.',
    image: '🏘️',
    year: '2023',
  },
  {
    title: 'Irodaház bővítés – Pest megye',
    category: 'Kereskedelmi',
    description: '5000 m² modern irodaegyüttes, zöld tetővel, parkolóhelyekkel.',
    image: '🏢',
    year: '2023',
  },
  {
    title: 'Óvodai komplexum – Debrecen',
    category: 'Közintézmény',
    description: 'Új, 400 gyerek kapacitású óvodaépület, legmodernebb biztonsági rendszerrel.',
    image: '🏛️',
    year: '2022',
  },
  {
    title: 'Homlokzat felújítás – Egyetem épület',
    category: 'Felújítás',
    description: 'Teljes homlokzat rehabilitáció 8000 m² felületen, történeti megőrzés.',
    image: '🏗️',
    year: '2022',
  },
  {
    title: 'Logisztikai központ – Gyöngyös',
    category: 'Ipari',
    description: '15000 m² raktárépület modernkori technológiákkal és szisztémákkal.',
    image: '⚙️',
    year: '2021',
  },
  {
    title: 'Lakópark fejlesztés – Budapest III. kerület',
    category: 'Lakóépület',
    description: '45 egység lakópark, közösségi terekkel, parkolóval és zöld infrastruktúrával.',
    image: '🌿',
    year: '2021',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-white py-20 md:py-28">
      <div className="container-custom">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-amber-700">Portfólió</span>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 md:text-5xl">
            Referencia projektek
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Néhány kiválasztott projekt, amelyből büszkék vagyunk és amelyek eredménye máig működik.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <div key={project.title} className="card group overflow-hidden">
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {project.image}
              </div>
              <div className="inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800 mb-3">
                {project.category}
              </div>
              <h3 className="text-lg font-bold text-slate-900">{project.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{project.description}</p>
              <p className="mt-4 text-xs font-semibold text-amber-700">Befejezés: {project.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
