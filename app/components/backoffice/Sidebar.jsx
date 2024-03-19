'use client';
import { Home, Settings, User2 } from 'lucide-react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { RiUser2Fill } from 'react-icons/ri';

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session, status } = useSession();

  
  if (status === 'unauthenticated') {
    router.push('/login');
    return;
  }

  const adminLinks = [
    {
      title: 'Dashboard',
      icon: Home,
      href: '/dashboard',
    },
    {
      title: 'Profile',
      icon: User2,
      href: '/dashboard/profile',
    },
    {
      title: 'Manage Users',
      icon: RiUser2Fill,
      href: '/dashboard/users',
    },
    {
      title: 'Settings',
      icon: Settings,
      href: '/dashboard/settings',
    },
  ];
  const userLinks = [
    {
      title: 'Dashboard',
      icon: Home,
      href: '/dashboard',
    },
    {
      title: 'Profile',
      icon: User2,
      href: '/dashboard/profile',
    },
  ];

  const navLinks = session?.user?.role === 'admin' ? adminLinks : userLinks;

  return (
    <div className="w-[200px] min-h-screen bg-green-700 text-slate-100  p-4 hidden md:block">
      <Link href="/" className="flex items-center">
        <Image
          src="/images/adventcapital_logo.png"
          className="h-16"
          alt="Advent Capital Logo"
          width="100"
          height="240"
        />
      </Link>
      <div className="my-6 flex flex-col space-y-2">
        {navLinks.map((link, i) => {
          const Icon = link.icon;
          return (
            <Link
              key={i}
              href={link.href}
              className={
                pathname === link.href
                  ? 'text-slate-100 flex items-center bg-green-400 px-4 py-2 rounded-md mb-2'
                  : 'text-slate-100 flex items-center py-2'
              }
            >
              <Icon className="w-4 h-4 mr-2 " />
              <span>{link.title}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
