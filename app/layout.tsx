import type { Metadata } from 'next';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import './globals.css';

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
        <Toaster position="top-right" reverseOrder={false} />
        <Navbar />
        {children}        
      </body>
    </html>
  )
}
