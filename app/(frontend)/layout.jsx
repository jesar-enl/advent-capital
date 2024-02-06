import React from 'react';
import NavbarSection from '../components/Navbar';
// import AuthProvider from '../context/AuthProviders';

export default function Layout({ children }) {
  return (
    <main>
        <NavbarSection />
        {children}
      {/* <AuthProvider>
      </AuthProvider> */}
    </main>
  );
}
