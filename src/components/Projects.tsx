'use client';

import { motion } from 'framer-motion';

const services = [
  {
    title: 'Lakóépítés',
    text: 'Családi házak, lakóparkok és energiahatékony lakóprojektek precíz kivitelezése.',
    number: '01',
  },
  {
    title: 'Kereskedelmi létesítmények',
    text: 'Irodaházak, üzlethelyiségek és vállalati beruházások funkcionális kialakítása.',
    number: '02',
  },
  {
    title: 'Felújítás & rekonstrukció',
    text: 'Homlokzatok, belső terek és meglévő épületek modernizálása új értékkel.',
    number: '03',
  },
  {
    title: 'Ipari kivitelezés',
    text: 'Raktári, logisztikai és gyártási projektek gyors, ellenőrzött megvalósítása.',
    number: '04',
  },
];

export default function Services() {
  return (
    <section id="services" className="section-shell bg-[#0d1013]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: '-80px' }}
          className="mb-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
        >
          <div>
            <div className="eyebrow">Szolgáltatások</div>
            <h2 className="mt-6 text-4xl font-black leading-[1.04] tracking-[-0.07em] text-white md:text-6xl">
              Minden, ami az építéshez kell.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-[#c7c0b9] lg:ml-auto">
            A közös cél mindig ugyanaz: biztonságos, precíz és hosszú távon is értéket teremtő megoldás.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.7 }}
              viewport={{ once: true, margin: '-80px' }}
              className="group rounded-[1.3rem] border border-[#d8c1a2]/10 bg-[#12171b] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#d8c1a2]/25 hover:bg-[#171d22]"
            >
              <div className="flex items-center justify-between border-b border-[#d8c1a2]/10 pb-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#d8c1a2]">
                  {service.number}
                </span>
                <div className="h-9 w-9 rounded-full border border-[#d8c1a2]/15 bg-[#d8c1a2]/5" />
              </div>

              <h3 className="mt-5 text-2xl font-black text-white">{service.title}</h3>
              <p className="mt-4 text-base leading-8 text-[#c7c0b9]">{service.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
