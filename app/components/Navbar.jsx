'use client';
import Image from 'next/image';
import { useState } from 'react';
// import { AiOutlineClose } from 'react-icons/ai';
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { Codesandbox } from 'lucide-react';
import Link from 'next/link';

export default function NavbarSection() {
  const [show, setShow] = useState(false);
  const isLoggedIn = false;

  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="/">
        <Codesandbox className="mr-3 h-6 sm:h-9" />
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
            src="/images/adventcapital_logo.png"
            className="h-16"
            alt="Advent Capital Logo"
            width="100"
            height="240"
          />
        </a>
      </Navbar.Brand>
      <div className="flex md:order-2">
        {isLoggedIn && (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        )}
        <Link
          href="/login"
          class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
        >
          Log in
        </Link>
        <Link
          href="/register"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Get started
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="/about">About</Navbar.Link>
        <Navbar.Link href="/services">Services</Navbar.Link>
        <Navbar.Link href="/contact-us">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
