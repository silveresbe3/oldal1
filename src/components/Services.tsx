'use client';

import { motion } from 'framer-motion';

const services = [
  {
    title: 'Lakóépítés',
    text: 'Családi házak, lakóparkok és energiahatékony lakóprojektek precíz kivitelezése.',
    icon: '01',
  },
  {
    title: 'Kereskedelmi létesítmények',
    text: 'Irodaházak, üzlethelyiségek és vállalati beruházások funkcionális kialakítása.',
    icon: '02',
  },
  {
    title: 'Felújítás & rekonstrukció',
    text: 'Homlokzatok, belső terek és meglévő épületek modernizálása új értékkel.',
    icon: '03',
  },
  {
    title: 'Ipari kivitelezés',
    text: 'Raktári, logisztikai és gyártási projektek gyors, ellenőrzött megvalósítása.',
    icon: '04',
  },
];

export default function Services() {
  return (
    <section id="services" className="section-shell bg-[#0b111b]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: '-80px' }}
          className="mb-12"
        >
          <div className="eyebrow">Szolgáltatások</div>
          <h2 className="mt-6 text-4xl font-black leading-[1.04] tracking-[-0.07em] text-white md:text-6xl">
            Minden, ami az építéshez kell.
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.7 }}
              viewport={{ once: true, margin: '-80px' }}
              className="group rounded-[1.75rem] border border-white/10 bg-white/5 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="text-xs font-bold uppercase tracking-[0.3em] text-slate-300">{service.icon}</div>
                <div className="h-10 w-10 rounded-full border border-white/10 bg-white/5" />
              </div>

              <h3 className="text-2xl font-black text-white">{service.title}</h3>
              <p className="mt-4 text-base leading-8 text-slate-300">{service.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
