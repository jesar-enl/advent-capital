'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="flex h-[762px] w-full flex-col bg-gray-200 p-4 pb-7 pt-7">
      <div className="mx-auto flex flex-col gap-3 md:flex-row">
        {/* image for the company */}

        <div className="flex h-[525px] w-full flex-col gap-4 md:w-[548px]">
          <p className="mb-[8px] text-start text-[15px] font-bold tracking-wide text-green-500 md:text-[20px]">
            Welcome to Advent Capital
          </p>
          <p className="mb-[16px] text-[40px] font-extrabold text-gray-900 md:text-[48px]">
            Low Interest Banking Institution in Uganda You can trust.
          </p>
          <p className="mb-[16px] text-start text-[15px] font-bold tracking-wide text-gray-700 md:text-[20px]">
            Your trusted partner in financial growth. We believe in your dreams.
            Get the support you need to make them a reality and let&#39;s build
            your future together.
          </p>
          <p className="mb-[16px] text-start text-[12px] text-sm font-light italic md:text-[18px]">
            &#39;We make a living by what we get but we make a life by what we
            give.&#39; You got{" "}
            {new Date().toLocaleString("default", { month: "long" })} financial
            crisis? We have got you covered. Apply Today!
          </p>
          <div className="flex gap-[16px]">
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
              className="duration:300 rounded-lg border border-[#F0660A] bg-transparent px-4 py-2 text-[#F0660A] shadow-lg transition delay-100 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#F0660A] hover:text-white"
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
        <div className="flex h-[762px] w-full items-center justify-center rounded-l-md md:w-[777px]">
          <img src="/images/hero1.png" alt="hero image" className='w-[690px] h-full' />
        </div>
      </div>
    </div>
  );
}
