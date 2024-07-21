import "./globals.css";
import Nav from '../components/Navbar';
import Footer from '../components/Footer';
import Head from 'next/head'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
        <h1>meow</h1>
      </Head>
      <body class=" border border-green-500">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
