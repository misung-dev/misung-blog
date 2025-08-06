import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'misung.dev',
  description: '미숑이의 블로그',
  openGraph: {
    title: 'misung.dev',
    description: '미숑이의 블로그',
    url: 'https://misung.dev',
    siteName: 'misung.dev',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'misung.dev',
    description: '미숑이의 블로그',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {' '}
        <div className="flex min-h-screen flex-col">
          <Header />

          <main className="flex-1">{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
