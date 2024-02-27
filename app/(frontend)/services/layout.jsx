import React from 'react';
import NavbarSection from '../components/Navbar';
// import AuthProvider from '../context/AuthProviders';

export const metadata = {
  title: 'Advent Capital - Services',
  description:
    'Are you looking for a loan that suits your needs and goals? Whether you want to grow your business, pay for your education, improve your home, or access clean water and sanitation, we have a loan for you. Our loans are affordable, flexible, and convenient. Check out our loan products below and find the one that matches your situation.',
};

export default function Layout({ children }) {
  return (
    <main>
      {/* <NavbarSection /> */}
      {children}
    </main>
  );
}
