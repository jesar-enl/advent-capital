import Link from 'next/link';
import { FaArrowCircleRight } from 'react-icons/fa';

export default function Steps() {
  const lists = [
    {list: 'Complete the easy online application form'},
    {list: 'Our loan officers to check your affordability and verifications'},
    {list: 'Get the money in your account within 24 hours after being approved'},
  ];
  return (
    <div className="bg-green-500 px-4 py-5 text-white">
      <div className="mx-auto flex flex-col items-center justify-center gap-3">
        <h1 className="mb-3 text-xl md:text-3xl">
          100 % Online, Fast Application
        </h1>
        <div className="mb-3 px-4 py-3">
          {lists.map(({ list }) => (
            <div
              key={list}
              className="mb-4 flex items-center gap-2 text-left text-xl tracking-wide md:text-2xl"
            >
              <FaArrowCircleRight className="text-[#1703AD]" />
              <p>{list}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center">
          <Link
            href="/loans/application"
            className="rounded-lg bg-[#1703AD] px-8 py-3 font-medium leading-6 text-white shadow-lg md:px-10 md:py-4 md:text-lg"
          >
            Start Application
          </Link>
        </div>
      </div>
    </div>
  );
}
