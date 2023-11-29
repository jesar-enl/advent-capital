import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-l from-green-800 via-teal-700 to-teal-500 shadow">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <Image
              src="/images/adventcapital_logo.png"
              className="h-16"
              alt="Advent Capital Logo"
              width="100"
              height="240"
            />
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-xm font-medium text-gray-100 sm:mb-0">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-xm text-gray-50 sm:text-center">
          &copy; {new Date().getFullYear()} {' '}
          <a href="/" className="hover:underline">
            Advent Capital Uganda
          </a>
          . All rights reserved.
        </span>
      </div>
    </footer>
  );
}
