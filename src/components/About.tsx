const points = [
  {
    title: 'Precíz tervezés',
    text: 'Minden projektben a kezdetektől a kivitelezésig strukturált, átlátható és konkrét tervezési folyamatot követünk.',
  },
  {
    title: 'Tartós minőség',
    text: 'Szigorú ellenőrzések, magas szabványok és gondos kivitelezés garantálják a hosszú távú értéket.',
  },
  {
    title: 'Rugalmas partnerség',
    text: 'Nyílt kommunikációval, gyors reagálással és ügyfélközpontú megoldásokkal dolgozunk.',
  },
  {
    title: 'Teljes körű támogatás',
    text: 'A tervezéstől a záró átvételig, a projekt minden fázisában stabil és megbízható támogatást nyújtunk.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          <div className="section-badge">Rólunk</div>
          <h2 className="mt-5 text-balance text-4xl font-black tracking-[-0.06em] text-[#081b34] md:text-5xl">
            A minőség és a bizalom az építés alapja.
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600 md:text-lg">
            Többéves tapasztalattal, modern megközelítéssel és ügyfélközpontú hozzáállással építünk olyan projektekben,
            amelyek a ma igényeit és a holnap kihívásait is kiszolgálják.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {points.map((point, index) => (
            <div key={point.title} className="card relative overflow-hidden bg-slate-50">
              <div className="absolute -right-5 top-5 text-[100px] font-black leading-none text-blue-100">0{index + 1}</div>
              <div className="relative z-10">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-sm font-black text-blue-900">
                  0{index + 1}
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
