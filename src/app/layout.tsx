import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Oldal1 | Premium Website',
  description: 'High-end modern website built with Next.js and Tailwind CSS.',
  keywords: ['website', 'nextjs', 'tailwind', 'premium'],
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
