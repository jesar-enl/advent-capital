'use client';
// import Link from 'next/link';
import {
  Button,
  Image,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react';
import { signOut, useSession } from 'next-auth/react';

export default function Navigationbar() {
  const menuItems = [
    { name: 'Profile', href: '/dashboard/profile' },
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'My Settings', href: '/settings' },
  ];
  const { data: session, status } = useSession();
  const role = session?.user?.role;

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
    <Navbar disableAnimation isBordered>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Image
            isZoomed
            width={120}
            height={120}
            alt="Advent Capital Logo"
            src="/images/adventcapital_logo.png"
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/services">
            Services
          </Link>
        </NavbarItem>
        {role === 'admin' && (
          <NavbarItem isActive>
            <Link href="/accept-letter" aria-current="page" color="warning">
              Acceptance Letter
            </Link>
          </NavbarItem>
        )}
        <NavbarItem>
          <Link color="foreground" href="/contact-us">
            Contact Us
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <div className="flex items-center space-x-4">
            <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-600 rounded-full ">
              <span className="font-medium text-gray-900">{initials}</span>
            </div>

            <div className="font-medium">
              <div>{session?.user?.name}</div>
              <div className="text-sm text-gray-900">
                {session?.user?.email}
              </div>
            </div>
          </div>
        </NavbarItem>
        <NavbarItem>
          <Button color="warning" onClick={() => signOut()} variant="flat">
            Log out
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? 'warning'
                  : index === menuItems.length - 1
                  ? 'danger'
                  : 'foreground'
              }
              href={item.href}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
        <button type="button" className="bg-red-500 p-2 text-gray-100" onClick={() => signOut()}>
          Log out
        </button>
      </NavbarMenu>
    </Navbar>
  );
}
