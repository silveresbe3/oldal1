const aboutPoints = [
  {
    icon: '🏢',
    title: 'Professzionalizmus',
    description: 'Minden projekthez hozzáértő, képzett szakembereket biztosítunk, akik az iparág legújabb módszereit alkalmazzák.',
  },
  {
    icon: '✅',
    title: 'Minőség Kontrol',
    description: 'Szigorú minőségellenőrzés minden fázisban biztosítja, hogy munkánk megfelel a legmagasabb szabványoknak.',
  },
  {
    icon: '⏱️',
    title: 'Pünktualitás',
    description: 'Betartjuk az ütemterveket. Tudjuk, hogy az idő pénz, ezért minden projekt időben és költségvetésen belül készül.',
  },
  {
    icon: '💰',
    title: 'Ár-Érték Arány',
    description: 'Versenyképes árakkal kombinálva a prémium minőséget. Megkapja a legtöbbet befektetésére.',
  },
  {
    icon: '🤝',
    title: 'Támogató Partner',
    description: 'Nem csak szállító vagyunk – a szervezet részéhez válunk. Communikáció, problémamegoldás és rugalmasság.',
  },
  {
    icon: '🔐',
    title: 'Biztonsági Protokoll',
    description: 'A munkahelyi biztonság és az OHSAS szabályok betartása. Nulla tolerancia a kockázatos gyakorlatokkal szemben.',
  },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-20 md:py-28">
      <div className="container-custom">
        <div className="mb-16">
          <span className="text-sm font-bold uppercase tracking-widest text-amber-700">Rólunk</span>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 md:text-5xl">
            Miért válassanak bennünket?
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Több mint 250 sikeresen befejezett projekt, 98% ügyfél-elégedettség és 15 év
            során szerzett tapasztalat. BuildCraft nem csak egy építőipari cég – egy elköteleződés a kiválósághoz.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {aboutPoints.map((point) => (
            <div key={point.title} className="card">
              <div className="mb-4 text-4xl">{point.icon}</div>
              <h3 className="text-xl font-bold text-slate-900">{point.title}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
