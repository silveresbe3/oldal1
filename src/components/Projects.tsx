'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Luxus lakópark',
    category: 'Lakóépítés',
    year: '2024',
    description:
      'Modern családi házak, közösségi terek és a környező természetes környezethez illeszkedő zöld infrastruktúra.',
    color: 'from-blue-400 to-blue-600',
  },
  {
    title: 'Irodaház rekonstrukció',
    category: 'Kereskedelmi',
    year: '2023',
    description:
      'Teljes homlokzat- és belső felújítás, modern munkakörnyezet és funkcionalitás a modern üzleti igényekhez.',
    color: 'from-emerald-400 to-emerald-600',
  },
  {
    title: 'Logisztikai centrum',
    category: 'Ipari',
    year: '2022',
    description:
      'Raktári és szállítási infrastruktúra, precíz tervezéssel és hatékony, biztonságos kivitelezéssel.',
    color: 'from-orange-400 to-orange-600',
  },
  {
    title: 'Oktatási intézmény',
    category: 'Intézmény',
    year: '2021',
    description:
      'Óvoda és általános iskola projekt, amely a modern, környezetbarát megoldásokat ötvözi a funkcionalitással.',
    color: 'from-purple-400 to-purple-600',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden bg-white py-20 md:py-32">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-16"
        >
          <h2 className="text-5xl font-black leading-[1.08] tracking-[-0.07em] text-[#081b34] md:text-7xl">
            Képesítésünk.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
            Több mint 300 sikeres projekt bizonyítja, hogy a precizitás és a minőség mellett a
            partnerség is az ötletünk középpontjában áll.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true, margin: '-100px' }}
              className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(15,23,42,0.08)]"
            >
              <div className={`flex h-64 items-end bg-gradient-to-br ${project.color} p-8`}>
                <div className="relative z-10">
                  <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.28em] text-white/80">
                    {project.category}
                  </div>
                  <h3 className="text-3xl font-black text-white">{project.title}</h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-lg leading-relaxed text-slate-600">{project.description}</p>

                <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-4">
                  <span className="text-xs font-bold uppercase tracking-[0.26em] text-slate-500">
                    {project.year}
                  </span>

                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-[#081b34] text-lg text-white"
                  >
                    →
                  </motion.div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
