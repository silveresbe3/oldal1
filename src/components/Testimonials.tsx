const testimonials = [
  {
    name: 'John Smith',
    role: 'CEO, Northstar Studio',
    quote:
      'The team delivered a premium experience that helped us look more credible online and convert more leads.',
    emoji: '👨‍💼',
  },
  {
    name: 'Sarah Johnson',
    role: 'Product Lead, Ember Labs',
    quote:
      'The design feels world-class and the final product loads instantly. It was a joy to work with.',
    emoji: '👩‍💻',
  },
  {
    name: 'Michael Chen',
    role: 'Founder, PeakWorks',
    quote:
      'We launched with more clarity, better branding, and a website that genuinely feels premium.',
    emoji: '👨‍🎨',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-slate-50 py-20 md:py-28">
      <div className="container-custom">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">Testimonials</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 md:text-5xl">
            Trusted by teams building for the future.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.name} className="card bg-white">
              <div className="flex items-center gap-4">
                <div className="text-3xl">{item.emoji}</div>
                <div>
                  <div className="font-bold text-slate-900">{item.name}</div>
                  <div className="text-sm text-slate-500">{item.role}</div>
                </div>
              </div>
              <p className="mt-4 text-base leading-7 text-slate-600">“{item.quote}”</p>
              <div className="mt-4 text-yellow-400">★★★★★</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
