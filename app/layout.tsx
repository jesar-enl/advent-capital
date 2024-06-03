import { NextSSRPlugin } from '@uploadthing/react/next-ssr-plugin';
import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';
import { extractRouterConfig } from 'uploadthing/server';
import AuthProvider from '../context/AuthProviders';
import { ourFileRouter } from './api/uploadthing/core';
import './globals.css';

import { Toaster } from 'react-hot-toast';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'Home - Advent Capital',
  description:
    'At Advent Capital, we transform livelihoods by providing inclusive, affordable and innovative financial services to micro and small enterprises.',
  keywords: [
    'loans',
    'Advent Capital',
    'Advent',
    'Capital',
    'School fees loan',
  ],
  openGraph: {
    title: 'Advent Capital',
    description:
      'We transform livelihoods by providing affordable and innovative financial solutions to micro and small enterprizes.',
  },
};

const urbanist = Urbanist({ subsets: ['latin'], display: 'swap' });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={urbanist.className}>
      <body>
        <AuthProvider>
          <Providers>
            <Toaster position="top-right" reverseOrder={false} />
            <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
            {/* <NavbarSection /> */}
            {children}
          </Providers>
        </AuthProvider>
      </body>
    </html>
  );
}
