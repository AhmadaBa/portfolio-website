import './globals.css';
import Nav from '../components/Navbar';
import Footer from '../components/Footer';
import Head from 'next/head';
import { Merriweather } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const merriweather = Merriweather({
  weight: '400',
  subsets: ['latin']
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
      </Head>
      <body className={`flex flex-col min-h-screen md:pt-32 pt-16 ${merriweather.className}`}>
        <Nav />
        <main className="flex-grow min-h-screen">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}