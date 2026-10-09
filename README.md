import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Titán-Tech Bau Kft. | Építőipari kivitelezés',
  description: 'Titán-Tech Bau Kft. - építőipari kivitelezés, lakó-, kereskedelmi és ipari projektek, megbízható minőséggel.',
  keywords: ['Titán-Tech Bau Kft.', 'építőipari cég', 'lakóépítés', 'felújítás', 'Budapest'],
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
