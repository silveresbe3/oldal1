import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 px-4 py-10 text-slate-300 md:px-0">
      <div className="container-custom flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-lg font-black tracking-tight text-white">TITÁN-TECH</div>
          <div className="text-xs font-bold tracking-[0.25em] text-blue-300">BAU KFT.</div>
        </div>

        <div className="flex flex-wrap gap-5 text-sm text-slate-400">
          <Link href="#about">Rólunk</Link>
          <Link href="#services">Szolgáltatások</Link>
          <Link href="#projects">Referenciák</Link>
          <Link href="#contact">Kapcsolat</Link>
        </div>

        <div className="text-sm text-slate-500">© {year} Titán-Tech Bau Kft.</div>
      </div>
    </footer>
  );
}
