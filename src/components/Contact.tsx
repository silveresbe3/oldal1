'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Luxus lakópark',
    type: 'Lakóépítés',
    year: '2024',
    description: 'Modern családi házak és közösségi terek környezetbarát, precíz kialakítással.',
    gradient: 'from-[#d1b28a] via-[#b7895e] to-[#5f4837]',
  },
  {
    title: 'Irodaház rekonstrukció',
    type: 'Kereskedelmi',
    year: '2023',
    description: 'Homlokzati felújítás és belső átalakítás a modern üzleti működéshez.',
    gradient: 'from-[#c7b7a2] via-[#8c7a66] to-[#2d2b2a]',
  },
  {
    title: 'Logisztikai centrum',
    type: 'Ipari',
    year: '2022',
    description: 'Hatékony raktári és szállítási infrastruktúra, teljesítményre optimalizálva.',
    gradient: 'from-[#d9d3c8] via-[#8d7d69] to-[#2a2a2d]',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-shell bg-[#0b0d0f]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: '-80px' }}
          className="mb-12"
        >
          <div className="eyebrow">Referenciák</div>
          <h2 className="mt-6 text-4xl font-black leading-[1.04] tracking-[-0.07em] text-white md:text-6xl">
            Képesítésünk, száraz tényekkel.
          </h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.7 }}
              viewport={{ once: true, margin: '-80px' }}
              className="group overflow-hidden rounded-[1.8rem] border border-[#d8c1a2]/10 bg-[#12171b]"
            >
              <div className={`flex h-64 items-end bg-gradient-to-br ${project.gradient} p-7`}>
                <div className="w-full">
                  <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/80">
                    {project.type}
                  </div>
                  <h3 className="mt-3 text-3xl font-black text-white">{project.title}</h3>
                </div>
              </div>

              <div className="p-7">
                <p className="text-base leading-8 text-[#c7c0b9]">{project.description}</p>

                <div className="mt-6 flex items-center justify-between border-t border-[#d8c1a2]/10 pt-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d4b796]">
                    {project.year}
                  </span>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d8c1a2]/15 bg-[#d8c1a2]/5 text-lg text-white">
                    →
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
