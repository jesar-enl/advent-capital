'use client';
// import Link from 'next/link';
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
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

export default function Navigationbar() {
  const [activePage, setActivePage] = useState('/services');
  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Profile', href: '/dashboard/profile' },
    { name: 'Dashboard', href: '/dashboard' },
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
    <Navbar disableAnimation isBordered className="bg-green-600">
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Link href="/">
            <Image
              isZoomed
              width={100}
              height={100}
              alt="Advent Capital Logo"
              src="/images/adventcapital_logo.png"
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex gap-4 text-xl text-gray-50"
        justify="center"
      >
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                radius="sm"
                variant="light"
                className="text-xl text-gray-50 p-0 bg-transparent data-[hover=true]:bg-transparent"
              >
                Services
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="Link actions"
            className=""
            itemClasses={{ base: 'gap-4' }}
          >
            <DropdownItem key="loans" href="/services/loans">
              Loans
            </DropdownItem>
            <DropdownItem key="other-services" href="/services/other-services">
              Other Services
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        {role === 'admin' && (
          <NavbarItem
            isActive={activePage === '/accept-letter'}
            onClick={() => setActivePage('/accept-letter')}
          >
            <Link href="/accept-letter" aria-current="page">
              Acceptance Letter
            </Link>
          </NavbarItem>
        )}
        <NavbarItem
          isActive={activePage === '/contact-us'}
          onClick={() => setActivePage('/contact-us')}
        >
          <Link href="/contact-us" className="text-xl text-gray-50">
            Contact Us
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <div className="flex items-center space-x-4">
            <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-600 rounded-full ">
              <span className="font-medium text-gray-50">{initials}</span>
            </div>

            <div className="font-medium">
              <div className="text-gray-50">{session?.user?.name}</div>
              <div className="text-sm text-gray-50">{session?.user?.email}</div>
            </div>
          </div>
        </NavbarItem>
        <NavbarItem>
          <Button color="warning" onClick={() => signOut()} variant="solid">
            Log out
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <Dropdown>
          <NavbarMenuItem>
            <DropdownTrigger>
              <Button
                disableRipple
                radius="sm"
                variant="light"
                className="text-xl p-0 bg-transparent data-[hover=true]:bg-transparent"
              >
                Services
              </Button>
            </DropdownTrigger>
          </NavbarMenuItem>
          <DropdownMenu
            aria-label="Link actions"
            className=""
            itemClasses={{ base: 'gap-4' }}
          >
            <DropdownItem key="loans" href="/services/loans">
              Loans
            </DropdownItem>
            <DropdownItem key="other-services" href="/services/other-services">
              Other Services
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full" color="primary" href={item.href} size="lg">
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
        <button
          type="button"
          className="bg-red-500 p-2 rounded-lg text-gray-100"
          onClick={() => signOut()}
        >
          Log out
        </button>
      </NavbarMenu>
    </Navbar>
  );
}
