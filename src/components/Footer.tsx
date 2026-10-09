import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-slate-900 px-4 py-12 text-slate-200 md:px-0">
      <div className="container-custom">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="text-2xl font-black text-sky-400">Oldal1</div>
            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">
              High-end web experiences built to impress and convert.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white">Company</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li><Link href="#">About</Link></li>
              <li><Link href="#">Services</Link></li>
              <li><Link href="#">Work</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white">Resources</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li><Link href="#">Blog</Link></li>
              <li><Link href="#">Support</Link></li>
              <li><Link href="#">Privacy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li><a href="mailto:hello@oldal1.com">hello@oldal1.com</a></li>
              <li><a href="tel:+36123456789">+36 1 234 5678</a></li>
              <li>Budapest, Hungary</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-sm text-slate-400">
          © {year} Oldal1. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
