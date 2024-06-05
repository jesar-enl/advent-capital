'use client';

import { Button } from '@/components/ui/button';
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { Home, Settings, User2 } from 'lucide-react';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { redirect, usePathname } from 'next/navigation';
import { FaRegBell } from 'react-icons/fa6';
import { RiUser2Fill } from 'react-icons/ri';
import { Send } from 'lucide-react';

export default function Sidebar() {
  const pathname = usePathname();
  const { data: session, status } = useSession();

  if (status === 'unauthenticated') {
    redirect('/login?callbackUrl=/dashboard');
  }

  const adminLinks = [
    {
      group: 'General',
      items: [
        {
          title: 'Dashboard',
          icon: <Home />,
          href: '/dashboard',
        },
        {
          title: 'Profile',
          icon: <User2 />,
          href: '/dashboard/profile',
        },
        {
          title: 'Acceptance letter',
          icon: <Send />,
          href: '/accept-letter',
        },
      ],
    },
    {
      group: 'Settings',
      items: [
        {
          title: 'General settings',
          icon: <Settings />,
          href: '/dashboard/settings',
        },
        {
          title: 'Manage Users',
          icon: <RiUser2Fill />,
          href: '/dashboard/users',
        },
        {
          title: 'Logs',
          icon: <Settings />,
          href: '/dashboard/logs',
        },
      ],
    },
  ];
  const userLinks = [
    {
      group: 'General',
      items: [
        {
          title: 'Dashboard',
          icon: <Home />,
          href: '/dashboard',
        },
        {
          title: 'Profile',
          icon: <User2 />,
          href: '/dashboard/profile',
        },
        {
          title: 'Notifications',
          icon: <FaRegBell />,
          href: '/dashboard/notifications',
        },
      ],
    },
    {
      group: 'Settings',
      items: [
        {
          title: 'General settings',
          icon: <Settings />,
          href: '/dashboard/settings',
        },
        {
          title: 'Logs',
          icon: <Settings />,
          href: '/dashboard/logs',
        },
      ],
    },
  ];

  const navLinks = session?.user?.role === 'admin' ? adminLinks : userLinks;

  function getInitials(fullName) {
    // Split the full name into words
    const words = fullName.split(' ');
    let initials = '';
    for (let i = 0; i < words.length; i++) {
      initials += words[i][0];
    }
    initials = initials.toUpperCase();

    return initials;
  }
  const initials = getInitials(session?.user?.name ?? 'John Doe');

  return (
    <div className="w-[200px] min-w-[200px] min-h-screen bg-green-500 text-slate-100  p-4 hidden md:block sticky top-10">
      <div className="flex flex-col">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/adventcapital_logo.png"
            className="h-16"
            alt="Advent Capital Logo"
            width="100"
            height="240"
          />
        </Link>
        <div className="grow text-gray-50">
          <Command style={{ overflow: 'visible' }}>
            <CommandList style={{ overflow: 'visible' }}>
              {navLinks.map((nav, key) => (
                <CommandGroup heading={nav.group} key={key}>
                  {nav.items.map((item, itemKey) => (
                    <CommandItem
                      key={itemKey}
                      href={item.href}
                      className="flex gap-2 cursor-pointer"
                    >
                      {item.icon} {item.title}
                    </CommandItem>
                  ))}
                </CommandGroup>
              ))}
            </CommandList>
          </Command>
        </div>
        <div className="flex items-center justify-between gap-2 py-2 px-2 border rounded-[16px]">
          <div className="rounded-full min-h-8 min-w-8 bg-emerald-600 flex items-center justify-center">
            <span className="font-medium text-gray-50">{initials}</span>
          </div>
          <div className="grow">
            <p className="text-gray-50 text-[16px] font-semibold">
              {session?.user?.name}
            </p>
            <p className="text-[12px] text-gray-50">{session?.user?.email}</p>
          </div>
        </div>
        <Button variant="destructive" className='bg-red-600' onClick={() => signOut()}>
          Log out
        </Button>
      </div>
    </div>
  );
}
