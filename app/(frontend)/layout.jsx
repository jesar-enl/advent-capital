import React from 'react';
import { Toaster } from 'react-hot-toast';
import NavbarSection from '../components/Navbar';
import AuthProvider from '../context/AuthProviders';

export default function Layout({ children }) {
  return (
    <main>
      <AuthProvider>
        <Toaster position="top-right" reverseOrder={false} />
        <NavbarSection />
        {children}
      </AuthProvider>
    </main>
  );
}
