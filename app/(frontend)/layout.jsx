import FooterSection from '@/components/FooterSection';
import NavbarSection from '@/components/NavbarSection';
import React from 'react';
import { Toaster } from 'react-hot-toast';

export default function Layout({ children }) {
  return (
    <main>
      <Toaster position="top-right" reverseOrder={false} />
      <NavbarSection />
      {children}
      <FooterSection />
    </main>
  );
}
