import Navbar from '../components/backoffice/Navbar';
import Sidebar from '../components/backoffice/Sidebar';
import React from 'react';

export default function Layout({ children }) {
  return (
    <div className="flex ">
      <Sidebar />
      <div className="flex flex-col flex-grow bg-gray-500">
        <Navbar />
        <main className="">{children}</main>
      </div>
    </div>
  );
}
