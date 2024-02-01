import React from 'react';
import { Toaster } from 'react-hot-toast';
import NavbarSection from '../components/Navbar';

export default function Layout({ children }) {
  return (
    <main>
      <Toaster position="top-right" reverseOrder={false} />
      <NavbarSection />
      {children}
    </main>
  );
}
