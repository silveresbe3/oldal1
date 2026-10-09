import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Titán-Tech Bau Kft. | Építőipari kivitelezés',
  description: 'Titán-Tech Bau Kft. - századokhoz méltó építkezés, precizitás, minőség és megbízható kivitelezés.',
  keywords: ['Titán-Tech', 'építőipari kivitelezés', 'lakóépítés', 'felújítás', 'Budapest'],
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
