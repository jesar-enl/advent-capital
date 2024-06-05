import Navbar from '../components/backoffice/Navbar';
import Sidebar from '../components/backoffice/Sidebar';

export const metadata = {
  title: 'Dashboard - Advent Capital',
  description:
    'Welcome to the dashboard. Here, you can manage your account and access all the features of the platform.',
};

export default function Layout({ children }) {
  return (
    <div className="flex ">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Navbar />
        <main className="">{children}</main>
      </div>
    </div>
  );
}
