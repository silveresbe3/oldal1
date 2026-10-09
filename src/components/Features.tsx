const features = [
  {
    icon: '⚡',
    title: 'Lightning Fast',
    description: 'Optimized architecture and modern tooling for exceptional speed and usability.',
  },
  {
    icon: '🎨',
    title: 'Premium Design',
    description: 'Elegant visual systems inspired by the best interfaces from top product teams.',
  },
  {
    icon: '🔒',
    title: 'Secure by Default',
    description: 'Built with modern security patterns, privacy-friendly defaults, and clean code.',
  },
  {
    icon: '📱',
    title: 'Mobile First',
    description: 'Every layout is tuned for clarity and conversion across all screen sizes.',
  },
  {
    icon: '♿',
    title: 'Accessible',
    description: 'Readable, keyboard-friendly, and inclusive experiences designed for everyone.',
  },
  {
    icon: '🚀',
    title: 'Scalable',
    description: 'A clean structure that can evolve with your business, product, and roadmap.',
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-white py-20 md:py-28">
      <div className="container-custom">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">Why choose us</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 md:text-5xl">
            Built to look premium and perform beautifully.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="card">
              <div className="mb-4 text-4xl">{feature.icon}</div>
              <h3 className="text-xl font-bold text-slate-900">{feature.title}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
