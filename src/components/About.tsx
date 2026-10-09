const aboutPoints = [
  {
    title: 'Mérnöki gondoskodás',
    text: 'Minden projektben a teljes körű tervezési és kivitelezési kontroll érvényesül.',
  },
  {
    title: 'Minőség és precizitás',
    text: 'Precíz ütemezés, szigorú ellenőrzés és kiváló kivitelezés minden szinten.',
  },
  {
    title: 'Vállalati hozzáállás',
    text: 'Ügyfeleinkkel együttműködve, nyílt kommunikációval és hosszú távú megoldásokkal dolgozunk.',
  },
];

export default function About() {
  return (
    <section id="about" className="bg-slate-50 py-20 md:py-28">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-blue-700">Rólunk</p>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] text-slate-900 md:text-5xl">
            A minőség a mi alapvetésünk.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {aboutPoints.map((point) => (
            <div key={point.title} className="card bg-white border-slate-200 shadow-sm">
              <div className="mb-4 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-900 font-black">
                0{aboutPoints.indexOf(point) + 1}
              </div>
              <h3 className="text-xl font-bold text-slate-900">{point.title}</h3>
              <p className="mt-3 text-slate-600 leading-7">{point.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
