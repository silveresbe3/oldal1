import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Titán-Tech Bau Kft. | Professzionális Építőipari Cég',
  description: 'Titán-Tech Bau Kft. - 20+ év tapasztalat az építőiparban. Lakó-, kereskedelmi és ipari projektek. Ajánlatkérés: +36 1 234 5678',
  keywords: ['építőipari cég', 'felújítás', 'építkezés', 'projektmenedzselés', 'Budapest', 'Titán-Tech'],
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
