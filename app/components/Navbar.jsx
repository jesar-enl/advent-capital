"use client";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { signOut, useSession } from "next-auth/react";
import { useState } from "react";

export default function NavbarSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session, status } = useSession();

  const menuItems = [
    {
      name: "Home",
      href: "/",
      icon: "/icons/home.png",
    },
    { name: "Dashboard", href: "/dashboard", icon: "/icons/dashboard.png" },
    { name: "About Us", href: "/about", icon: "/icons/about-us.png" },
    {
      name: "Contact Us",
      href: "/contact-us",
      icon: "/icons/contact.png",
    },
    {
      name: "Profile",
      href: "/dashboard/profile",
      icon: "/icons/user.png",
    },
  ];

  function getInitials(fullName) {
    // Split the full name into words
    const words = fullName.split(" ");
    let initials = "";
    for (let i = 0; i < words.length; i++) {
      initials += words[i][0];
    }
    initials = initials.toUpperCase();

    return initials;
  }

  const initials = getInitials(session?.user?.name ?? "John Doe");

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-green-500">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/">
            <h1 className="text-base font-extrabold tracking-wider text-[#10067F] leading-inherit md:text-2xl">
              ADVENT CAPITAL
            </h1>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden gap-3 text-base text-gray-50 sm:flex"
        justify="center"
      >
        <NavbarItem>
          <Link className="flex gap-1 text-base text-gray-50" href="/">
            <img
              src="/icons/home.png"
              alt="icon"
              className="h-[12px] w-[12px]"
            />
            <span>Home</span>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="flex gap-1 text-base text-gray-50" href="/dashboard">
            <img
              src="/icons/dashboard.png"
              alt="icon"
              className="h-[12px] w-[12px]"
            />
            <span>Dashboard</span>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="flex gap-1 text-base text-gray-50" href="/about">
            <img
              src="/icons/about-us.png"
              alt="icon"
              className="h-[12px] w-[12px]"
            />
            <span>About Us</span>
          </Link>
        </NavbarItem>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                radius="sm"
                variant="light"
                className="flex gap-1 bg-transparent p-0 text-base text-gray-50 data-[hover=true]:bg-transparent"
              >
                <img
                  src="/icons/services.png"
                  alt="icon"
                  className="h-[12px] w-[12px]"
                />
                <span>Services</span>
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="Link actions"
            className=""
            itemClasses={{ base: "gap-4" }}
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
          <Link
            className="flex gap-1 text-base text-gray-50"
            href="/contact-us"
          >
            <img
              src="/icons/contact.png"
              alt="icon"
              className="h-[12px] w-[12px]"
            />
            <span>Contact Us</span>
          </Link>
        </NavbarItem>
      </NavbarContent>
      {status === "authenticated" ? (
        <>
          <NavbarContent justify="end">
            <NavbarItem className="hidden lg:flex">
              <div className="flex items-center space-x-4">
                <div className="relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-gray-600">
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
                    className="flex gap-1 bg-transparent p-0 text-base data-[hover=true]:bg-transparent"
                  >
                    <img
                      src="/icons/services.png"
                      alt="icon"
                      className="h-[12px] w-[12px]"
                    />
                    <span>Services</span>
                  </Button>
                </DropdownTrigger>
              </NavbarMenuItem>
              <DropdownMenu
                aria-label="Link actions"
                className=""
                itemClasses={{ base: "gap-4" }}
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
                <Link className="flex w-full gap-1" href={item.href} size="lg">
                  {item.icon}
                  {item.name}
                </Link>
              </NavbarMenuItem>
            ))}
            <Button color="danger" onClick={() => signOut()} variant="solid">
              Log out
            </Button>
          </NavbarMenu>
        </>
      ) : (
        <>
          <NavbarContent justify="end">
            <NavbarItem>
              <Link href="/register">
                <button className="flex h-[38px] w-full lg:w-[189px] items-center justify-center gap-1 rounded-lg bg-[#1703AD] px-8 py-3 font-medium leading-6 text-white shadow-lg md:px-10 md:py-4 md:text-base">
                  <img
                    src="/icons/user.png"
                    alt="icon"
                    className="h-[12px] w-[12px]"
                  />
                  <span className="hidden text-white lg:block">
                    Open an Account
                  </span>
                </button>
              </Link>
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
                    className="flex gap-1 bg-transparent p-0 text-base data-[hover=true]:bg-transparent"
                  >
                    {" "}
                    <img
                      src="/icons/services.png"
                      alt="icon"
                      className="h-[12px] w-[12px]"
                    />
                    <span>Services</span>
                  </Button>
                </DropdownTrigger>
              </NavbarMenuItem>
              <DropdownMenu
                aria-label="Link actions"
                className=""
                itemClasses={{ base: "gap-4" }}
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
                <Link className="flex w-full gap-1" href={item.href} size="lg">
                  {item.icon}
                  {item.name}
                </Link>
              </NavbarMenuItem>
            ))}
            <Link href="/login">
              <button className="ml-4 flex h-[38px] w-full lg:w-[189px] items-center gap-1 rounded-lg bg-[#1703AD] px-8 py-3 font-medium leading-6 text-white shadow-lg md:px-10 md:py-4 md:text-lg">
                <img
                  src="/icons/user.png"
                  alt="icon"
                  className="h-[12px] w-[12px]"
                />
                <span className="hidden text-base text-white lg:block">
                  Open an Account
                </span>
              </button>
            </Link>
          </NavbarMenu>
        </>
      )}
    </Navbar>
  );
}
