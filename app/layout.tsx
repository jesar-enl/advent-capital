import { NextSSRPlugin } from '@uploadthing/react/next-ssr-plugin';
import type { Metadata } from 'next';
import { extractRouterConfig } from 'uploadthing/server';
import AuthProvider from '../context/AuthProviders';
import { ourFileRouter } from './api/uploadthing/core';
import './globals.css';

import { Toaster } from 'react-hot-toast';


export const metadata: Metadata = {
  title: 'Advent Capital',
  description:
    'To transform livelihoods by providing inclusive, affordable and innovative financial services to micro and small enterprises.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Toaster position="top-right" reverseOrder={false} />
          <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
          {/* <NavbarSection /> */}
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
