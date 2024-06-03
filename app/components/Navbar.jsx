'use client';
import { SignInButton, SignOutButton } from '@/components/Button';
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
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-green-600">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
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
        <NavbarItem>
          <Link className="text-xl text-gray-50" href="/dashboard">
            Dashboard
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-xl text-gray-50" href="/about">
            About
          </Link>
        </NavbarItem>
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
        <NavbarItem>
          <Link className="text-xl text-gray-50" href="/contact-us">
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
                  <span className="font-medium text-slate-200">{initials}</span>
                </div>

                <div className="font-medium">
                  <div>{session.user.name}</div>
                  <div className="text-sm text-slate-200">
                    {session.user.email}
                  </div>
                </div>
              </div>
            </NavbarItem>
            <NavbarItem>
              <Button color="danger" onClick={() => signOut()} variant="solid">
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
                <DropdownItem
                  key="other-services"
                  href="/services/other-services"
                >
                  Other Services
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            {menuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link className="w-full" href={item.href} size="lg">
                  {item.name}
                </Link>
              </NavbarMenuItem>
            ))}
            {SignOutButton}
          </NavbarMenu>
        </>
      ) : (
        <>
          <NavbarContent justify="end">
            <NavbarItem>{SignInButton}</NavbarItem>
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
                <DropdownItem
                  key="other-services"
                  href="/services/other-services"
                >
                  Other Services
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            {menuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link className="w-full" href={item.href} size="lg">
                  {item.name}
                </Link>
              </NavbarMenuItem>
            ))}
            {SignInButton}
          </NavbarMenu>
        </>
      )}
    </Navbar>
  );
}
