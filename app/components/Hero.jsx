'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="flex h-[762px] w-full flex-col gap-4 bg-gray-200 p-4 pb-7 pt-7">
      <div className="mx-auto flex flex-col gap-6 md:flex-row">
        {/* image for the company */}

        <div className="flex flex-col items-center justify-center gap-4 w-full md:w-[548px] h-[525px]">
          <p className="mb-[15px] text-start text-[15px] font-bold tracking-wide text-green-500 md:text-[20px]">
            Welcome to Advent Capital
          </p>
          <p className="mb-[25px] text-[40px] font-extrabold tracking-wider text-gray-900 md:text-[48px]">
            Low Interest Banking Institution in Uganda You can trust.
          </p>
          <p className="mb-[25px] text-start text-[15px] font-bold tracking-wide text-gray-700 md:text-[20px]">
            Your trusted partner in financial growth. We believe in your dreams.
            Get the support you need to make them a reality and let&#39;s build
            your future together.
          </p>
          <p className="mb-[25px] text-start text-[12px] text-sm font-light italic md:text-[18px]">
            &#39;We make a living by what we get but we make a life by what we
            give.&#39; You got{" "}
            {new Date().toLocaleString("default", { month: "long" })} financial
            crisis? We have got you covered. Apply Today!
          </p>
          <div className="flex items-center gap-[25px]">
            <Link
              href="/register"
              className="duration:300 flex items-center gap-2 rounded-lg bg-green-500 px-4 py-2 text-white shadow-lg transition delay-100 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-green-600"
            >
              <span>Open an Account</span>
              <img
                src="/icons/user.png"
                alt="icon"
                className="h-[16px] w-[16px]"
              />
            </Link>
            <Link
              href="/loans/application"
              className="duration:300 rounded-lg bg-transparent px-4 py-2 text-[#F0660A] shadow-lg transition delay-100 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#F0660A] hover:text-white"
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
        <div className="flex w-full items-center justify-center md:w-[777px] h-[762px] rounded-l-md">
          <img
            src="/images/hero1.png"
            alt="hero image"
          />
        </div>
      </div>
    </div>
  );
}
