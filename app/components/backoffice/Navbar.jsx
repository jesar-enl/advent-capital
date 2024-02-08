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
import { signOut } from 'next-auth/react';
import React from 'react';

export default function Navigationbar() {
  const menuItems = [
    'Profile',
    'Dashboard',
    'Activity',
    'My Settings',
    'Help & Feedback',
  ];

  return (
    // <div className="flex border-b justify-between border-gray-300 py-2 px-16 bg-white text-gray-900 items-center">
    //   <Link href="#">
    //     <History />
    //   </Link>
    //   <Dropdown
    //     arrowIcon={false}
    //     inline
    //     className="bg-white text-gray-900"
    //     label={
    //       <Avatar
    //         alt="User settings"
    //         img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
    //         rounded
    //       />
    //     }
    //   >
    //     <Dropdown.Header>
    //       <span className="block text-sm">Bonnie Green</span>
    //       <span className="block truncate text-sm font-medium">
    //         name@flowbite.com
    //       </span>
    //     </Dropdown.Header>
    //     <Dropdown.Item>Dashboard</Dropdown.Item>
    //     <Dropdown.Item>Settings</Dropdown.Item>
    //     <Dropdown.Item>
    //       <Link href="/dashboard/profile">Profile</Link>
    //     </Dropdown.Item>
    //     <Dropdown.Divider />
    //     <Dropdown.Item onClick={() => signOut()}>Sign out</Dropdown.Item>
    //   </Dropdown>
    // </div>
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
        <NavbarBrand>
          <Image
            isZoomed
            width={120}
            height={120}
            alt="Advent Capital Logo"
            src="/images/adventcapital_logo.png"
          />
        </NavbarBrand>
        <NavbarItem>
          <Link color="foreground" href="/services">
            Services
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/accept-letter" aria-current="page" color="warning">
            Acceptance Letter
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/contact-us">
            Contact Us
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="/login">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button color="warning" onClick={() => signout()} variant="flat">
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
              href="#"
              size="lg"
            >
              {item}
            </Link>
            <button type="button" onClick={() => signOut()}>
              Log out
            </button>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
