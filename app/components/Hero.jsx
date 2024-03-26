'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="bg-gray-200 w-full flex flex-col gap-4 p-4 pt-7 pb-7">
      <div className="flex gap-4 flex-col md:flex-row mx-auto">
        {/* image for the company */}
        <div className="w-full md:w-1/3 flex items-center justify-center">
          <Image
            src="/images/adventcapital_logo.png"
            alt="Advent Capital Logo"
            width={400}
            height={420}
          />
        </div>
        <div className="w-full md:w-2/3 flex flex-col justify-center items-center gap-4">
          <h1 className="text-2xl md:text-4xl text-green-500 font-bold tracking-wide mb-2 text-center">
            Welcome to Advent Capital
          </h1>
          <p className="text-lg text-center text-gray-800 tracking-wider md:text-xl mb-2">
            Your trusted partner in financial growth. We believe in your dreams.
            Get the support you need to make them a reality and let&#39;s build
            your future together.
          </p>
          <div className="flex justify-center">
            <Link
              href="/loans/application"
              className="bg-green-500 text-white px-4 py-2 hover:bg-green-600 transition hover:-translate-y-1 hover:scale-110 rounded-lg shadow-lg
            duration:300 ease-in-out delay-100"
            >
              Apply Now!
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/3 text-center text-sm md:text-lg italic mt-6">
        &#39;We make a living by what we get but we make a life by what we
        give.&#39; You got{' '}
        {new Date().toLocaleString('default', { month: 'long' })} financial
        crisis? We have got you covered. Apply Today!
      </div>
    </div>
  );
}
