import "./globals.css";
import Nav from '../components/Navbar';
import Footer from '../components/Footer';
import Head from 'next/head'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

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
