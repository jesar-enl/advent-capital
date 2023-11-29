'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { GiMoneyStack } from 'react-icons/gi';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import { IoWaterOutline } from 'react-icons/io5';
import {
  MdBusinessCenter,
  MdOutlineAddHomeWork,
  MdOutlineAgriculture,
  MdOutlineSchool,
} from 'react-icons/md';

export default function HeroSection() {
  const dataCard = [
    {
      Icon: MdOutlineAgriculture,
      loan_type: 'Agribusiness loan',
    },
    {
      Icon: MdOutlineSchool,
      loan_type: 'School fees loan',
    },
    {
      Icon: MdBusinessCenter,
      loan_type: 'Business loan',
    },
    {
      Icon: GiMoneyStack,
      loan_type: 'Salary loan',
    },
    {
      Icon: MdOutlineAddHomeWork,
      loan_type: 'home Improvement',
    },
    {
      Icon: IoWaterOutline,
      loan_type: 'Water & Sanitation',
    },
  ];

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="text-gray-900 text-4xl bg-hero-img w-full h-screen flex flex-col gap-4 items-center justify-center bg-opacity-20">
      <h3 className="text-slate-900 font-bold text-3xl md:text-4xl sm:text-center">
        Good day. Let&#39;s get you on the go!
      </h3>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-6 text-base px-4 md:px-16 py-4 md:py-16 text-slate-800 bg-gray-200 bg-opacity-80 rounded-lg md:gap-4">
        {dataCard.map(({ Icon, loan_type }, i) => {
          return (
            <Link
              key={i}
              href="/services"
              className="flex sm:mb-4 md:items-center items-center justify-center sm:justify-start gap-3 hover:bg-slate-800 hover:text-gray-200 hover:p-3 hover:rounded"
            >
              <Icon />
              <span>{loan_type}</span>
              {isSmallScreen ? <IoIosArrowForward /> : <IoIosArrowDown />}
            </Link>
          );
        })}        
      </div>
    </div>
  );
}
