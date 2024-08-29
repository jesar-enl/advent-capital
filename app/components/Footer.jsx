export default function Footer() {
  return (
    <footer className="bg-green-500 shadow">
      <div className="mx-auto w-full max-w-screen-xl md:py-4">
        <span className="text-xm block text-gray-50 sm:text-center">
          &copy; {new Date().getFullYear()}{" "}
          <a
            href="/"
            className="transition duration-150 ease-in-out hover:text-[#1703AD]"
          >
            Advent Capital Uganda
          </a>
          . All rights reserved.
        </span>
      </div>
    </footer>
  );
}
