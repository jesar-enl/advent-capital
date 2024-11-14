import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@/components/ui/popover';
import { Separator } from '@/components/ui/separator';
import { Bell, Home, LogOut, MoreHorizontal, Send, Settings, User2, Users } from 'lucide-react';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { redirect, usePathname } from 'next/navigation';

export default function SidebarDesktop() {
  const adminLinks = [
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
    {
      title: 'General settings',
      icon: <Settings />,
      href: '/dashboard/settings',
    },
    {
      title: 'Manage Users',
      icon: <Users />,
      href: '/dashboard/users',
    },
    {
      title: 'Logs',
      icon: <Settings />,
      href: '/dashboard/logs',
    },
  ];
  const userLinks = [
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
      icon: <Bell />,
      href: '/dashboard/notifications',
    },
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
  ];

  const pathname = usePathname();
  const { data: session, status } = useSession();

  if (status === 'unauthenticated') {
    redirect('/login?callbackUrl=/dashboard');
  }
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
    <aside className="w-[220px] h-screen fixed  left-0 top-0 z-40 border-r bg-green-500 text-gray-100">
      <div className="h-full px-3 py-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/adventcapital_logo.png"
            className="h-16"
            alt="Advent Capital Logo"
            width="100"
            height="240"
          />
        </Link>
        <div className="mt-5">
          <div className="flex flex-col gap-1 w-full">
            {navLinks.map((link, index) => (
              <Link href={link.href} key={index}>
                <Button
                  variant={pathname === link.href ? 'secondary' : 'ghost'}
                  className="gap-2 justify-start"
                >
                  {link.icon}
                  {link.title}
                </Button>
              </Link>
            ))}
          </div>
          <div className="absolute left-0 bottom-3 w-full px-3">
            <Separator className="absolute -top-3 left-0 w-full" />
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" className="w-full justify-start">
                  <div className="flex justify-between items-center w-full">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-5 w-5">
                        <AvatarFallback>{initials}</AvatarFallback>
                      </Avatar>
                      <div className="grow">
                        <p className="text-gray-50 text-[16px] font-semibold">
                          {session?.user?.name}
                        </p>
                        <p className="text-[12px] text-gray-50">
                          {session?.user?.email}
                        </p>
                      </div>
                    </div>
                    <MoreHorizontal size={15} />
                  </div>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="mb-2 w-40 p-2 rounded-[1rem]">
                <Button
                variant='destructive'
                  onClick={() => signOut()}
                  className="w-full flex items-center"
                >
                  <LogOut />
                  <span>Logout</span>
                </Button>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </aside>
  );
}
