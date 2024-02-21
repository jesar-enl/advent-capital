import React from 'react';
import Footer from '../../components/Footer';

const Layout = ({ children }) => {
  return (
    <div>
      {/* Your layout content here */}
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
