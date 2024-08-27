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
            <h1 className="text-base md:text-2xl font-extrabold tracking-wider text-[#10067F] leading-inherit">
              ADVENT CAPITAL
            </h1>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden gap-4 text-xl text-gray-50 sm:flex"
        justify="center"
      >
        <NavbarItem>
          <Link className="gap-1text-xl flex text-gray-50" href="/">
            <img
              src="/icons/home.png"
              alt="icon"
              className="h-[20px] w-[20px]"
            />
            <span>Home</span>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="gap-1text-xl flex text-gray-50" href="/dashboard">
            <img
              src="/icons/dashboard.png"
              alt="icon"
              className="h-[20px] w-[20px]"
            />
            <span>Dashboard</span>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="gap-1text-xl flex text-gray-50" href="/about">
            <img
              src="/icons/about-us.png"
              alt="icon"
              className="h-[20px] w-[20px]"
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
                className="flex gap-1 bg-transparent p-0 text-xl text-gray-50 data-[hover=true]:bg-transparent"
              >
                <img
                  src="/icons/services.png"
                  alt="icon"
                  className="h-[20px] w-[20px]"
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
          <Link className="flex gap-1 text-xl text-gray-50" href="/contact-us">
            <img src="/icons/contact.png" alt="icon" className="h-[20px] w-[20px]" />
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
                    className="flex gap-1 bg-transparent p-0 text-xl data-[hover=true]:bg-transparent"
                  >
                    <img
                      src="/icons/services.png"
                      alt="icon"
                      className="h-[20px] w-[20px]"
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
              <Button as={Link} color="primary" href="/login" variant="solid">
                Get Started
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
                    className="flex gap-1 bg-transparent p-0 text-xl data-[hover=true]:bg-transparent"
                  >
                    {" "}
                    <img
                      src="/icons/services.png"
                      alt="icon"
                      className="h-[20px] w-[20px]"
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
              <button className="flex h-[38px] w-[189px] items-center gap-1 bg-[#1703AD] px-[10px] py-[8px]">
                <img
                  src="/icons/user.png"
                  alt="icon"
                  className="h-[16px] w-[16px]"
                />
                <span>OPEN AN ACCOUNT</span>
              </button>
            </Link>
          </NavbarMenu>
        </>
      )}
    </Navbar>
  );
}
