import "./globals.css";
import Nav from '../components/Navbar';
import Footer from '../components/Footer';
import Head from 'next/head'

export default function RootLayout({ children }) {
  return (
    <html lang="en" class="h-full">
      <body class="flex min-h-full flex-col">

        <Head>
          <meta name="viewport" content="viewport-fit=cover" />
        </Head>

        <Nav />
        {children}
        <Footer />
        
      </body>
    </html>
  );
}
