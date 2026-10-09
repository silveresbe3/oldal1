'use client';

import { motion } from 'framer-motion';

const values = [
  {
    title: 'Precizitás',
    description:
      'Minden millimétert gondosan tervezünk és kivitelezünk, hogy a végső eredmény építészeti és funkcionális szempontból is tökéletes legyen.',
  },
  {
    title: 'Minőség',
    description:
      'Csak a legjobb anyagok és kivitelezési gyakorlatok alapján dolgozunk, hogy a projekt hosszú távon is értéket adjon.',
  },
  {
    title: 'Innováció',
    description:
      'A legmodernebb technológiákat és rendszereket alkalmazzuk, hogy gyorsabb, hatékonyabb és fenntarthatóbb megoldásokat nyújtsunk.',
  },
  {
    title: 'Felelősség',
    description:
      'Minden projektünkhöz személyre szabott figyelmet és bizalmat kötünk, hogy a találkozó partnerkapcsolatok is hosszú távúak maradjanak.',
  },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-20 md:py-32">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-16"
        >
          <h2 className="mb-6 text-5xl font-black leading-[1.08] tracking-[-0.07em] text-[#081b34] md:text-7xl">
            Értékek, amelyekben
            <br className="hidden md:block" />
            <span className="text-gradient">megbízhat.</span>
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-slate-600">
            Több mint 20 év tapasztalattal és szigorú minőségi szemlélettel építünk olyan projekteket,
            amelyek a mai igényeket és a holnap kihívásait is kiszolgálják.
          </p>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true, margin: '-100px' }}
              className="group"
            >
              <div className="relative mb-6">
                <div className="absolute -left-8 top-0 text-7xl font-black text-slate-200/50 transition-colors duration-300 group-hover:text-slate-200/75">
                  {(index + 1).toString().padStart(2, '0')}
                </div>
                <h3 className="text-3xl font-black text-[#081b34]">{value.title}</h3>
              </div>
              <p className="text-lg leading-relaxed text-slate-600 transition-colors duration-300 group-hover:text-slate-700">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
