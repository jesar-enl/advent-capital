import Link from 'next/link';
import { FaArrowCircleRight } from 'react-icons/fa';

export default function Steps() {
  const lists = [
    {list: 'Complete the easy online application form'},
    {list: 'Our loan officers to check your affordability and verifications'},
    {list: 'Get the money in your account within 24 hours after being approved'},
  ];
  return (
    <div className="bg-green-500 text-white px-4 py-5">
      <div className="mx-auto flex flex-col gap-3 items-center justify-center">
        <h1 className="text-xl md:text-3xl mb-3">
          100 % Online, Fast Application
        </h1>
        <div className="mb-3 py-3 px-4">
          {lists.map(({ list }) => (
            <div key={list} className="flex gap-2 items-center text-left mb-4 tracking-wide text-xl md:text-2xl">
              <FaArrowCircleRight className="text-black" />
              <p>{list}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <Link
            href="/loans/application"
            className="rounded-lg shadow-lg bg-black text-white px-4 py-2"
          >
            Start Application
          </Link>
        </div>
      </div>
    </div>
  );
}
