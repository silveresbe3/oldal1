const aboutPoints = [
  {
    number: '01',
    title: 'Professzionalizmus',
    description: 'Minden projekthez hozzáértő, képzett szakembereket biztosítunk, akik az iparág legújabb módszereit alkalmazzák.',
  },
  {
    number: '02',
    title: 'Minőség Kontrol',
    description: 'Szigorú minőségellenőrzés minden fázisban biztosítja, hogy munkánk megfelel a legmagasabb szabványoknak.',
  },
  {
    number: '03',
    title: 'Pünktualitás',
    description: 'Betartjuk az ütemterveket. Az idő pénz - minden projekt időben és költségvetésen belül készül.',
  },
  {
    number: '04',
    title: 'Ár-Érték Arány',
    description: 'Versenyképes árakkal kombinálva a prémium minőséget. Megkapja a legtöbbet beruházására.',
  },
  {
    number: '05',
    title: 'Támogató Partner',
    description: 'Nem csak szállító vagyunk - a szervezet részéhez válunk. Kommunikáció, problémamegoldás és rugalmasság.',
  },
  {
    number: '06',
    title: 'Biztonság Első',
    description: 'A munkahelyi biztonság és az OHSAS szabályok betartása. Nulla tolerancia a kockázatos gyakorlatokkal szemben.',
  },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-20 md:py-28">
      <div className="container-custom">
        <div className="mb-16">
          <span className="text-sm font-bold uppercase tracking-widest text-blue-600">Rólunk</span>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-blue-900 md:text-5xl">
            Miért válasszanak bennünket?
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-slate-700">
            Több mint 300 sikeresen befejezett projekt, 99% ügyfél-elégedettség és 20+ év során szerzett tapasztalat. 
            Titán-Tech Bau Kft. nem csak egy építőipari cég - egy elkötelezodés a kiváló sághoz és a tartóssághoz.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {aboutPoints.map((point) => (
            <div key={point.number} className="card relative">
              <div className="absolute -top-4 -left-4 text-6xl font-black text-blue-100">{point.number}</div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-blue-900">{point.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-700">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
