import Image from 'next/image';
import Link from 'next/link';
import { objectives, values } from './data';

export default function AboutUs() {
  return (
    <div className="mt-6 flex flex-col font-['Urbanist']">
      <div className="flex gap-4 justify-between items-center md:flex-row">
        <div className="flex flex-col justify-between p-4 leading-normal gap-4 w-full md:w-2/3">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-green-500 text-center">
            About Advent Capital
          </h5>
          <p className="mb-3 font-normal text-gray-700 sm:text-center md:text-left">
            Advent Capital is a micro finance, whose main focus and product
            offering is to provide convinient, accessible, online pay day loans
            to clients. Advent Capital provides a short term credit to clients
            up to a maximum of <strong>UGX. 1,000,000</strong>. We are ready to
            get you on the go with our loans.
          </p>
          <hr className="mt-2 mb-4 border-gray-600 sm:mx-auto lg:my-8" />
          <Link
            href="/loans/application"
            className="bg-green-500 text-white font-semibold px-6 py-3 rounded-lg inline-flex mx-auto text-center"
          >
            APPLY FOR A LOAN
          </Link>
        </div>
        <div className="flex items-center justify-centerw-full md:w-1/3 md:block hidden">
          <Image
            src="/images/adventcapital_logo.png"
            width={240}
            height={240}
            alt="Advent Capital logo"
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-full md:rounded-none md:rounded-s-lg"
          />
        </div>
      </div>
      <div
        className="relative bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hand notes.jpeg')" }}
      >
        <div className="bg-black bg-opacity-75 h-full w-full absolute"></div>
        <div className="p-6 ml-10">
          <div className="relative p-4 ml-24">
            <h5 className="text-white text-sm mb-3">ADVENT CAPITAL</h5>
            <h3 className="text-green-500 text-3xl mb-3 font-semibold">
              Lending a helping hand for unexpected mid-month expenses
            </h3>
            <p className="text-white">
              Life is a continuous process, where we need cash flow to manage
              our mid-monthly expenses. Unfortunately, easy and affordable cash
              has become scarce in Uganda. Peopl are finding it hard to pay
              bills and banks are not inclined towards helping out. To resolve
              this burning financial issue,{' '}
              <span className="text-green-500 text-sm font-bold">
                Advent Capital
              </span>{' '}
              offers short term loans, through a revolutionary online
              application system that takes only a few minutes. Our personal
              application process is easy and fast. Our loans have had the
              lowest interest rates since inception.{' '}
              <span className="text-sm italic">
                (We dare you to try us and compare the rates)
              </span>
            </p>
          </div>
          <div className=" relative flex flex-wrap gap-6 p-4 ml-8">
            <div className="max-w-lg mb-1 p-6 text-center rounded-lg shadow-md">
              <h3 className="mb-2 text-center uppercase text-2xl font-bold tracking-tight text-green-500">
                Vision
              </h3>
              <hr className="my-6 border-gray-600 sm:mx-auto lg:my-8" />
              <p className="text-white text-xl">
                To be the preferred provider of sustainable financial services
                to micro and small enterprises.
              </p>
            </div>
            <div className="max-w-md mb-1 p-6 text-center rounded-lg shadow-md">
              <h3 className="mb-2 text-center uppercase text-2xl font-bold tracking-tight text-green-500">
                Mission
              </h3>
              <hr className="my-6 border-gray-600 sm:mx-auto lg:my-8" />
              <p className="text-white text-xl">
                To transform livelihoods by providing inclusive, affordable and
                innovative financial services to small and micro enterprises
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-3 p-4 items-center justify-center">
        <p className="text-gray-800 text-xl text-center mb-6 leading-relaxed tracking-wide">
          At <span className="font-bold text-green-500">ADVENT CAPITAL</span>,
          our core values and objectives guide our daily operations and
          strategic decisions. They form the foundation of our corporate culture
          and reflect our commitment to providing exceptional financial
          services.{' '}
          <span className="italic">
            Let&#39;s delve into what these values and objectives mean to us and
            how they shape our interactions with our clients.
          </span>
        </p>
        <div className="flex gap-6 flex-wrap mt-3">
          <div className="relative max-w-md mb-1 p-6 text-center rounded-lg shadow-md">
            <h3 className="mb-2 text-center uppercase text-2xl font-bold tracking-tight text-green-500">
              Values
            </h3>
            <hr className="my-6 border-gray-600 sm:mx-auto lg:my-8" />
            <ul className="list-decimal pl-3 text-gray-800 text-xl text-left">
              {values.map((value) => {
                return (
                  <li className="mb-1" key={value}>
                    {value}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="max-w-md mb-1 p-6 text-center rounded-lg shadow-md">
            <h3 className="mb-2 text-center uppercase text-2xl font-bold tracking-tight text-green-500">
              Objectives
            </h3>
            <hr className="my-6 border-gray-600 sm:mx-auto lg:my-8" />
            <ul className="list-disc pl-3 text-gray-800 text-xl text-left">
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
      <div className="bg-gray-900 flex flex-col gap-3 justify-center items-center p-10 text-white">
        <h3 className="text-5xl mt-3">We respect your privacy</h3>
        <p className="text-gray-500 text-xl">
          We will never disclose your personal information. We respect our
          clients and keep their data safe and secure on our data servers.
        </p>
      </div>
      <div class="mt-3 text-center text-white bg-green-600 w-full mx-auto max-w-screen-xl p-6">
        <span class="text-md">
          © {new Date().getFullYear()}{' '}
          <Link href="/" class="hover:underline">
            Advent Capital&reg;
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </div>
  );
}
