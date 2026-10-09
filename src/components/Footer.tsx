import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 px-4 py-12 text-slate-300 md:px-0">
      <div className="container-custom">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex flex-col leading-tight">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Építőipari</span>
              <span className="text-2xl font-black text-blue-400">TITÁN-TECH</span>
              <span className="text-xs font-bold tracking-widest text-blue-400">BAU KFT.</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">
              20+ év tapasztalat az építőiparban. Megbízható partner az Ön projektjeihez.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-white">Navigáció</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li><Link href="#about" className="hover:text-blue-400 transition">Rólunk</Link></li>
              <li><Link href="#services" className="hover:text-blue-400 transition">Szolgáltatások</Link></li>
              <li><Link href="#projects" className="hover:text-blue-400 transition">Projektjeink</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white">Cég</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li><Link href="#team" className="hover:text-blue-400 transition">Csapatunk</Link></li>
              <li><Link href="#contact" className="hover:text-blue-400 transition">Kapcsolat</Link></li>
              <li><a href="#" className="hover:text-blue-400 transition">Adatvédelem</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white">Elérhetőségek</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>
                <a href="tel:+36123456789" className="hover:text-blue-400 transition">
                  +36 1 234 5678
                </a>
              </li>
              <li>
                <a href="mailto:info@titantech.hu" className="hover:text-blue-400 transition">
                  info@titantech.hu
                </a>
              </li>
              <li>Budapest, Bérc utca 8-10.</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-sm text-slate-500">
          © {year} Titán-Tech Bau Kft. | Minden jog fenntartva.
        </div>
      </div>
    </footer>
  );
}
