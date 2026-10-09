const metrics = [
  { value: '100%', label: 'Responsive' },
  { value: 'A+', label: 'Performance' },
  { value: '24/7', label: 'Support' },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-blue-50 py-20 md:py-28">
      <div className="absolute -left-16 top-10 h-56 w-56 rounded-full bg-sky-200/50 blur-3xl" />
      <div className="absolute -right-16 bottom-10 h-72 w-72 rounded-full bg-blue-200/50 blur-3xl" />

      <div className="container-custom relative">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center rounded-full border border-sky-200 bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
            Premium digital experience
          </span>

          <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900 md:text-6xl">
            Crafting <span className="text-sky-600">beautiful</span> websites that convert.
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600 md:text-xl">
            We build high-end online experiences with premium design, lightning-fast development,
            and a focus on measurable business growth.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <button type="button" className="btn-primary">
              Get Started Free
            </button>
            <button type="button" className="btn-secondary">
              View Work
            </button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 text-center md:gap-10">
            {metrics.map((metric) => (
              <div key={metric.label}>
                <div className="text-3xl font-black text-sky-600 md:text-4xl">{metric.value}</div>
                <div className="mt-2 text-sm text-slate-600">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
