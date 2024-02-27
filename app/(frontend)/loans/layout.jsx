import React from 'react';
import NavbarSection from '../components/Navbar';
// import AuthProvider from '../context/AuthProviders';

export const metadata = {
  title: 'Loan Application - Advent Capital',
  description: 'Apply now to get a loan that suits your needs and goals.',
};

export default function Layout({ children }) {
  return (
    <main>
      {/* <NavbarSection /> */}
      {children}
    </main>
  );
}
