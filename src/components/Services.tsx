'use client';

import { motion } from 'framer-motion';

const stats = [
  {
    title: 'Precizitás',
    text: 'A mérnöki szemlélet és a részletekhez való ragaszkodás teszi különlegessé a projektjeinket.',
  },
  {
    title: 'Minőség',
    text: 'Szigorú ellenőrzés, ellenőrizhető minőség és hosszú távú gondosság minden munkafolyamatban.',
  },
  {
    title: 'Innováció',
    text: 'A modern technológiák és digitális eszközök alkalmazása fokozza a hatékonyságot és a pontosságot.',
  },
  {
    title: 'Felelősség',
    text: 'Ügyfélközpontú kommunikáció, naprakész információ és stabil partnerkapcsolat a teljes projekt során.',
  },
];

export default function About() {
  return (
    <section id="about" className="section-shell bg-[#111517]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: '-80px' }}
          className="mb-16 max-w-3xl"
        >
          <div className="eyebrow">Rólunk</div>
          <h2 className="mt-6 text-4xl font-black leading-[1.04] tracking-[-0.07em] text-white md:text-6xl">
            A minőség és a bizalom
            <br />
            az építés alapja.
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#c7c0b9]">
            Több mint 20 év tapasztalattal, modern megközelítéssel és megbízható munkamorállal
            építünk olyan projekteket, amelyek ma is értéket teremtenek és holnap is megállják a helyüket.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {stats.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.7 }}
              viewport={{ once: true, margin: '-80px' }}
              className="rounded-[1.75rem] border border-[#d8c1a2]/10 bg-[#171d22] p-7"
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d8c1a2]/20 bg-[#d8c1a2]/10 text-lg font-black text-[#f3efe8]">
                  0{index + 1}
                </div>
                <h3 className="text-2xl font-black text-white">{item.title}</h3>
              </div>
              <p className="text-base leading-8 text-[#c7c0b9]">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
