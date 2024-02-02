'use client';
import Image from 'next/image';
import { useState } from 'react';
// // import { AiOutlineClose } from 'react-icons/ai';
// import { Avatar, Dropdown, Navbar } from 'flowbite-react';
// import Link from 'next/link';

// export default function NavbarSection() {
//   const [show, setShow] = useState(false);
//   const isLoggedIn = true;

//   return (
//     <Navbar fluid rounded className="bg-gray-400">
//       <Navbar.Brand href="/">
//         <Image
//           src="/images/adventcapital_logo.png"
//           className="h-16"
//           alt="Advent Capital Logo"
//           width="100"
//           height="240"
//         />
//       </Navbar.Brand>
//       <div className="flex md:order-2">
//         {isLoggedIn && (
//           <Dropdown
//             className="bg-white text-gray-800"
//             arrowIcon={false}
//             inline
//             label={
//               <Avatar
//                 alt="User settings"
//                 img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
//                 rounded
//               />
//             }
//           >
//             <Dropdown.Header>
//               <span className="block text-sm">Bonnie Green</span>
//               <span className="block truncate text-sm font-medium">
//                 name@flowbite.com
//               </span>
//             </Dropdown.Header>
//             <Dropdown.Item>Dashboard</Dropdown.Item>
//             <Dropdown.Item>Settings</Dropdown.Item>
//             <Dropdown.Divider />
//             <Dropdown.Item>Sign out</Dropdown.Item>
//           </Dropdown>
//         )}
//         <Link
//           href="/login"
//           className="text-gray-800 bg-teal-400 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
//         >
//           Log In
//         </Link>
//         <Link
//           href="/register"
//           className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none dark:focus:ring-blue-800"
//         >
//           Get started
//         </Link>
//         <Navbar.Toggle />
//       </div>
//       <Navbar.Collapse>
//         <Navbar.Link href="#" active>
//           Home
//         </Navbar.Link>
//         <Navbar.Link href="/about">About</Navbar.Link>
//         <Navbar.Link href="/services">Services</Navbar.Link>
//         <Navbar.Link href="/contact-us">Contact</Navbar.Link>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// }

// 'use client';

// import { Avatar, Dropdown, Navbar } from 'flowbite-react';

export default function NavbarSection() {
  const [show, setShow] = useState(false);
  const [showUserMenu, setUser] = useState(false);
  function showMenu() {
    setShow((prev) => !prev);
  }
  function userMenu() {
    setUser((prev) => !prev);
  }
  return (
    <nav className="bg-gray-300 border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            width="100"
            height="240"
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            Flowbite
          </span>
        </a>
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded="false"
            onClick={userMenu}
          >
            <span className="sr-only">Open user menu</span>
            <Image
              width="20"
              height="20"
              className="w-8 h-8 rounded-full"
              src="https://via.placeholder.com/500?text=User+Avatar"
              alt="user photo"
            />
          </button>
          {/* <!-- Dropdown menu --> */}
          {showUserMenu && (
            <div
              className="z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow md:flex md:w-auto md:order-1"
              id="user-dropdown"
            >
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 ">
                  Bonnie Green
                </span>
                <span className="block text-sm  text-gray-500 truncate ">
                  name@flowbite.com
                </span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                  >
                    Earnings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          )}

          <button
            data-collapse-toggle="navbar-user"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            aria-controls="navbar-user"
            aria-expanded="false"
            onClick={showMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        {show && (
          <div
            className="items-center justify-between w-full md:flex md:w-auto md:order-1"
            id="navbar-user"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
