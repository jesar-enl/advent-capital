import Navbar from '../components/backoffice/Navbar';
import Sidebar from '../components/backoffice/Sidebar';

export const metadata = {
  title: 'Profile - Advent Capital',
  description:
    'You can manage your profile here. Update your personal information, change your password, and more.',
};

export default function Layout({ children }) {
  return (
    <div className="flex ">
      {/* <Sidebar /> */}
      <div className="flex flex-col flex-grow">
        {/* <Navbar /> */}
        <main className="">{children}</main>
      </div>
    </div>
  );
}
