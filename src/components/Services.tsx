'use client';

import { motion } from 'framer-motion';

const services = [
  {
    title: 'Lakóépítés',
    description: 'Családi házak, lakóparkok, bővítések és modern, energiatudatos megoldások.',
    icon: '🏠',
  },
  {
    title: 'Kereskedelmi projektek',
    description: 'Irodaházak, üzlethelyiségek és vállalati beruházások precíz megvalósítása.',
    icon: '🏢',
  },
  {
    title: 'Ipari komplexumok',
    description: 'Raktárak, gyártási létesítmények és logisztikai központok fejlesztése.',
    icon: '🏭',
  },
  {
    title: 'Felújítás és rekonstrukció',
    description: 'Homlokzati felújítás, bővítés, szerkezeti javítás és belső átépítés.',
    icon: '🔨',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-slate-50 py-20 md:py-32">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-16"
        >
          <h2 className="text-5xl font-black leading-[1.08] tracking-[-0.07em] text-[#081b34] md:text-7xl">
            Amit kínálunk.
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true, margin: '-100px' }}
              className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_30px_80px_rgba(15,23,42,0.08)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-50/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative z-10">
                <div className="mb-5 text-5xl">{service.icon}</div>
                <h3 className="mb-3 text-2xl font-black text-[#081b34]">{service.title}</h3>
                <p className="text-lg leading-relaxed text-slate-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
