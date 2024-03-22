import React from 'react';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Contact Us - Advent Capital',
  description:
    'Contact us for any inquiries, feedback, or complaints. We are here to help you.',
};

const Layout = ({ children }) => {
  return (
    <div>
      {/* Your layout content here */}
      {children}
    </div>
  );
};

export default Layout;
