'use client';
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
import { useState } from 'react';

export default function NavbarSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session, status } = useSession();

  const menuItems = [
    {
      name: 'Profile',
      href: '/dashboard/profile',
    },
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'About', href: '/about' },
    {
      name: 'Services',
      href: '/services',
    },
    {
      name: 'Contact',
      href: '/contact-us',
    },
  ];

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
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Image
            isZoomed
            width={100}
            height={100}
            alt="Advent Capital Logo"
            src="/images/adventcapital_logo.png"
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/dashboard">
            Dashboard
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/about">
            About
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/services" aria-current="page">
            Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/contact-us">
            Contact us
          </Link>
        </NavbarItem>
      </NavbarContent>
      {status === 'authenticated' ? (
        <>
          <NavbarContent justify="end">
            <NavbarItem className="hidden lg:flex">
              <div className="flex items-center space-x-4">
                <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-600 rounded-full ">
                  <span className="font-medium text-gray-900">{initials}</span>
                </div>

                <div className="font-medium">
                  <div>{session.user.name}</div>
                  <div className="text-sm text-gray-900">
                    {session.user.email}
                  </div>
                </div>
              </div>
            </NavbarItem>
            <NavbarItem>
              <Button color="danger" onClick={() => signOut()} variant="flat">
                Log out
              </Button>
            </NavbarItem>
          </NavbarContent>
          <NavbarMenu>
            {menuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  color={
                    index === 2
                      ? 'primary'
                      : index === menuItems.length - 1
                      ? 'danger'
                      : 'foreground'
                  }
                  className="w-full"
                  href={item.href}
                  size="lg"
                >
                  {item.name}
                </Link>
                <button type="button" onClick={() => signOut()}>
                  Log out
                </button>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </>
      ) : (
        <>
          <NavbarContent justify="end">
            <NavbarItem className="hidden lg:flex">
              <Link href="/login">Login</Link>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} color="primary" href="/register" variant="flat">
                Sign Up
              </Button>
            </NavbarItem>
          </NavbarContent>
          <NavbarMenu>
            {menuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  color={
                    index === 2
                      ? 'primary'
                      : index === menuItems.length - 1
                      ? 'danger'
                      : 'foreground'
                  }
                  className="w-full"
                  href={item.href}
                  size="lg"
                >
                  {item.name}
                </Link>
                <Link href="/login">Login</Link>
                <Button
                  as={Link}
                  color="primary"
                  href="/register"
                  variant="flat"
                >
                  Sign Up
                </Button>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </>
      )}
    </Navbar>
  );
}
