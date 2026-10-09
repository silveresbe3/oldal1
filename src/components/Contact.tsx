export default function Contact() {
  return (
    <section id="contact" className="bg-[#071b33] py-20 md:py-28">
      <div className="container-custom grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-blue-300">Kapcsolat</p>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] text-white md:text-5xl">
            Kérjen ingyenes ajánlatot.
          </h2>
          <p className="mt-4 text-blue-100 leading-7">
            Ha meglátogatná, vagy egyszerűen csak fel szeretné kérni a személyreszabott ajánlatunkat,
            írjon nekünk és visszajelzést adunk a projekthez leginkább megfelelő megoldásról.
          </p>

          <div className="mt-10 space-y-5 text-blue-100">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-blue-300">Telefon</div>
              <a href="tel:+36123456789" className="mt-2 inline-block text-lg font-bold text-white">+36 1 234 5678</a>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-blue-300">Email</div>
              <a href="mailto:info@titantech.hu" className="mt-2 inline-block text-lg font-bold text-white">info@titantech.hu</a>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-blue-300">Cím</div>
              <div className="mt-2 text-lg font-bold text-white">Budapest, Bérc utca 8-10.</div>
            </div>
          </div>
        </div>

        <form className="rounded-[2rem] bg-white p-6 shadow-2xl">
          <div className="grid gap-4 md:grid-cols-2">
            <input type="text" placeholder="Név" className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:outline-none" />
            <input type="email" placeholder="Email" className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:outline-none" />
          </div>
          <div className="mt-4">
            <input type="text" placeholder="Projekt típusa" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:outline-none" />
          </div>
          <div className="mt-4">
            <textarea rows={6} placeholder="Projekt leírása" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:outline-none" />
          </div>
          <button type="submit" className="mt-5 w-full btn-primary">Ajánlat kérés</button>
        </form>
      </div>
    </section>
  );
}
