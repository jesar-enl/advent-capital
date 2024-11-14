import Image from "next/image";
import Link from "next/link";
import { objectives, values } from "./data";

export const metadata = {
  title: "About Us - Advent Capital",
  description:
    "Here are some the details that you can know about us and will help you to trust us.",
};

export default function AboutUs() {
  return (
    <div className="mt-6 flex flex-col font-['Urbanist']">
      <div className="flex items-center justify-between gap-4 md:flex-row">
        <div className="flex w-full flex-col justify-between gap-4 px-20 py-4 leading-normal md:w-2/3">
          <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-green-500">
            About Advent Capital
          </h5>
          <p className="mb-3 font-normal text-gray-700 sm:text-center md:text-left">
            Advent Capital is a credible financial service provider, whose main
            focus and product offering is to provide convinient, accessible,
            online pay day loans to clients. We provide online quick loans to
            clients and are ready to get you on the go with our loans.
          </p>
          <hr className="mb-4 mt-2 border-gray-600 sm:mx-auto lg:my-8" />
          <Link
            href="/loans/application"
            className="mx-auto inline-flex rounded-lg bg-green-500 px-6 py-3 text-center font-semibold text-white"
          >
            APPLY FOR A LOAN
          </Link>
        </div>
        <div className="justify-centerw-full flex hidden items-center md:block md:w-1/3">
          <Image
            src="/images/adventcapital_logo.png"
            width={240}
            height={240}
            alt="Advent Capital logo"
            className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-full md:rounded-none md:rounded-s-lg"
          />
        </div>
      </div>
      <div
        className="relative bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hand notes.jpeg')" }}
      >
        <div className="absolute h-full w-full bg-black bg-opacity-75"></div>
        <div className="ml-10 p-6">
          <div className="relative ml-24 px-20 py-4">
            <h5 className="mb-3 text-sm text-white">ADVENT CAPITAL</h5>
            <h3 className="mb-3 text-3xl font-semibold text-green-500">
              Lending a helping hand for unexpected mid-month expenses
            </h3>
            <p className="text-white">
              Life is a continuous process, where we need cash flow to manage
              our mid-monthly expenses. Unfortunately, easy and affordable cash
              has become scarce in Uganda. People are finding it hard to pay
              bills and banks are not inclined towards helping out. To resolve
              this burning financial issue,{" "}
              <span className="text-sm font-bold text-green-500">
                Advent Capital
              </span>{" "}
              offers short term loans, through a revolutionary online
              application system that takes only a few minutes. Our personal
              application process is easy and fast.
            </p>
          </div>
          <div className="relative ml-8 flex flex-wrap gap-6 p-4">
            <div className="mb-1 max-w-lg rounded-lg px-10 py-4 text-center shadow-md">
              <h3 className="mb-2 text-center text-2xl font-bold uppercase tracking-tight text-green-500">
                Vision
              </h3>
              <hr className="my-6 border-gray-600 sm:mx-auto lg:my-8" />
              <p className="text-xl text-white">
                To be the preferred provider of sustainable financial services
                to micro, small and medium enterprises.
              </p>
            </div>
            <div className="mb-1 max-w-md rounded-lg px-10 py-4 text-center shadow-md">
              <h3 className="mb-2 text-center text-2xl font-bold uppercase tracking-tight text-green-500">
                Mission
              </h3>
              <hr className="my-6 border-gray-600 sm:mx-auto lg:my-8" />
              <p className="text-xl text-white">
                To transform livelihoods by providing inclusive, affordable and
                innovative financial services to micro, small and medium
                enterprises
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3 flex flex-col items-center justify-center px-20 py-4">
        <p className="mb-6 text-center text-xl leading-relaxed tracking-wide text-gray-800">
          At <span className="font-bold text-green-500">ADVENT CAPITAL</span>,
          our core values and objectives guide our daily operations and
          strategic decisions. They form the foundation of our corporate culture
          and reflect our commitment to providing exceptional financial
          services.{" "}
          <span className="italic">
            Let&#39;s delve into what these values and objectives mean to us and
            how they shape our interactions with our clients.
          </span>
        </p>
        <div className="mt-3 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="relative mb-1 max-w-md rounded-lg px-10 py-4 text-center shadow-md">
            <h3 className="mb-2 text-center text-2xl font-bold uppercase tracking-tight text-green-500">
              Values
            </h3>
            <hr className="my-6 border-gray-600 sm:mx-auto lg:my-8" />
            <ul className="list-decimal pl-3 text-left text-xl text-gray-800">
              {values.map((value) => {
                return (
                  <li className="mb-1" key={value}>
                    {value}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="mb-1 max-w-md rounded-lg px-10 py-4 text-center shadow-md">
            <h3 className="mb-2 text-center text-2xl font-bold uppercase tracking-tight text-green-500">
              Objectives
            </h3>
            <hr className="my-6 border-gray-600 sm:mx-auto lg:my-8" />
            <ul className="list-disc pl-3 text-left text-xl text-gray-800">
              {objectives.map((value) => {
                return (
                  <li className="mb-1" key={value}>
                    {value}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-3 bg-gray-900 px-16 py-8 text-white">
        <h3 className="mt-3 text-5xl">We respect your privacy</h3>
        <p className="text-xl text-gray-500">
          We will never disclose your personal information. We respect our
          clients and keep their data safe and secure on our data servers.
        </p>
      </div>
      <div className="mx-auto w-full max-w-screen-xl bg-green-600 p-6 text-center text-white">
        <span className="text-md">
          © {new Date().getFullYear()}{" "}
          <Link href="/" className="hover:underline">
            Advent Capital&reg;
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </div>
  );
}
