import type { Metadata } from 'next'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import './globals.css'

export const metadata: Metadata = {
  title: 'Advent Capital',
  description: 'To transform livelihoods by providing inclusive, affordable and innovative financial services to micro and small enterprises.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
