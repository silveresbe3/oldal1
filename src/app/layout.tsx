import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'BuildCraft | Professzionális Építőipari Cég',
  description: 'BuildCraft - 15+ év tapasztalat az építőiparban. Lakóép, kereskedelmi és ipari projektek megvalósítása. Ajánlatkérés: +36 1 234 5678',
  keywords: ['építőipari cég', 'felújítás', 'építkezés', 'projektmenedzselés', 'Budapest'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu">
      <body>{children}</body>
    </html>
  );
}
