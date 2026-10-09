const points = [
  {
    number: '01',
    title: 'Mérnöki hozzáállás',
    text: 'Minden projektben a tervezést, kivitelezést és ellenőrzést a lehető legnagyobb precizitással kezeljük.',
  },
  {
    number: '02',
    title: 'Minőség és pontosság',
    text: 'Szigorú minőségellenőrzés, pontos ütemterv és magas szabványok az egész folyamatban.',
  },
  {
    number: '03',
    title: 'Ügyfélközpontú megoldás',
    text: 'Nyílt kommunikáció, rugalmas együttműködés és hosszú távú, megbízható partnerkapcsolat.',
  },
];

export default function About() {
  return (
    <section id="about" className="bg-slate-50 py-20 md:py-28">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.32em] text-blue-700">Rólunk</p>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.06em] text-[#081b34] md:text-5xl">
            A minőség a mi alapvetésünk.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {points.map((point) => (
            <div key={point.number} className="card relative overflow-hidden bg-white">
              <div className="absolute -right-5 top-5 text-[90px] font-black leading-none text-blue-50">{point.number}</div>
              <div className="relative z-10">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-sm font-black text-blue-900">
                  {point.number}
                </div>
                <h3 className="text-xl font-bold text-[#081b34]">{point.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{point.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
