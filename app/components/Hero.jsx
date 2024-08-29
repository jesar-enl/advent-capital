"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="relative mx-auto flex max-w-screen-xl flex-col items-center px-4 sm:px-6 md:flex-row">
      <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pr-10 md:pt-10">
        <div className="text-left">
          <h2 className="flex flex-col text-3xl font-extrabold leading-10 tracking-tight text-gray-800 sm:text-5xl sm:leading-none md:text-5xl">
            <span className="rounded-full text-xl font-semibold uppercase text-green-500">
              Welcome to Advent Capital
            </span>
            <span className="font-bold text-gray-900">
              Low Interest Banking Institution in Uganda you can Trust.
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-md text-base text-gray-700 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
            Your trusted partner in financial growth. We believe in your dreams.
            Get the support you need to make them a reality and let&#39;s build
            your future together.
          </p>
          <p className="mx-auto mt-1 max-w-md text-sm italic text-gray-500 sm:text-base md:mt-5 md:max-w-2xl md:text-lg">
            &#39;We make a living by what we get but we make a life by what we
            give.&#39; You got{" "}
            {new Date().toLocaleString("default", { month: "long" })} financial
            crisis? We have got you covered. Apply Today!
          </p>
          <div className="mt-5 sm:flex md:mt-8">
            <div className="rounded-md shadow">
              <Link
                href="/register"
                className="focus:shadow-outline-green flex w-full items-center justify-center gap-2 rounded-md border border-transparent bg-green-500 px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out hover:bg-green-600 focus:outline-none md:px-10 md:py-4 md:text-lg"
              >
                <span>Get Started</span>
                <img
                  src="/icons/user.png"
                  alt="icon"
                  className="h-[16px] w-[16px]"
                />
              </Link>
            </div>
            <div className="mt-3 rounded-md shadow sm:ml-3 sm:mt-0">
              <Link
                href="/loans/application"
                className="focus:shadow-outline-green flex w-full items-center justify-center gap-2 rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium leading-6 text-[#F0660A] transition duration-150 ease-in-out hover:bg-[#F0660A] hover:text-white focus:outline-none md:px-10 md:py-4 md:text-lg"
              >
                <span>Apply Now!</span>
                <img
                  src="/icons/Vector.png"
                  alt="icon"
                  className="h-[16px] w-[16px]"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pl-10 md:pt-10">
        <div className="relative w-full rounded p-3 md:p-8">
          <div className="w-full rounded-lg bg-white text-black">
            <img
              src="/images/hero1.png"
              alt=""
              className="h-[300px] w-[400px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
