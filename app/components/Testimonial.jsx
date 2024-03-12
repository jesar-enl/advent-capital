"use client";

import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';
import { Rating } from 'flowbite-react';
import { Carousel } from 'flowbite-react';

function Component() { 
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <div className="flex flex-col justify-center items-center gap-4">
          <p className="bg-gray-400 text-green-700 text-2xl tracking-wider px-4 py-3 rounded-md">
            Always professional and helps me whenever I have financial
            difficulties. You are the best!!
          </p>
          <div className="flex flex-col justify-center items-center gap-2">
            <Rating>
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star filled={false} />
            </Rating>
            <h3 className="text-md text-gray-800">Customer 1</h3>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <p className="bg-gray-400 text-green-700 text-2xl tracking-wider px-4 py-3 rounded-md">
            Advent Capital is one if not the only financial institution that
            offers online and excellent services. There&#39;s no hussle with
            queues and their prices are awesome.
          </p>
          <div className="flex flex-col justify-center items-center gap-2">
            <Rating>
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
            </Rating>
            <h3 className="text-md text-gray-800">Customer 2</h3>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <p className="bg-gray-400 text-green-700 text-2xl tracking-wider px-4 py-3 rounded-md">
            The customer service and delivery of this institution is immaculate,
            its been two months using their services and I am grateful.
          </p>
          <div className="flex flex-col justify-center items-center gap-2">
            <Rating>
              <Rating.Star />
              <Rating.Star />
              <Rating.Star filled={false} />
              <Rating.Star filled={false} />
              <Rating.Star filled={false} />
            </Rating>
            <h3 className="text-md text-gray-800">Customer 3</h3>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <p className="bg-gray-400 text-green-700 text-2xl tracking-wider px-4 py-3 rounded-md">
            Have been their customer for months and they have always treated me
            with kid&#39;s gloves. I also note that their payout turnaround time
            has improved. Well done team!!!
          </p>
          <div className="flex flex-col justify-center items-center gap-2">
            <Rating>
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star filled={false} />
            </Rating>
            <h3 className="text-md text-gray-800">Customer 4</h3>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <p className="bg-gray-400 text-green-700 text-2xl tracking-wider px-4 py-3 rounded-md">
            Excellent customer service. Advent Capital is one of the best.
          </p>
          <div className="flex flex-col justify-center items-center gap-2">
            <Rating>
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
            </Rating>
            <h3 className="text-md text-gray-800">Customer 5</h3>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <p className="bg-gray-400 text-green-700 text-2xl tracking-wider px-4 py-3 rounded-md">
            Best and fast service always on point
          </p>
          <div className="flex flex-col justify-center items-center gap-2">
            <Rating>
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star filled={false} />
              <Rating.Star filled={false} />
            </Rating>
            <h3 className="text-md text-gray-800">Customer 6</h3>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <p className="bg-gray-400 text-green-700 text-2xl tracking-wider px-4 py-3 rounded-md">
            Customer services on point!!! Advent Capital is a breeze, easy
            application and great service. No issues with payouts. Reapplying is
            also easy and quick. Really the best.
          </p>
          <div className="flex flex-col justify-center items-center gap-2">
            <Rating>
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
            </Rating>
            <h3 className="text-md text-gray-800">Customer 7</h3>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default function Testimonial() {
  return (
    <section className="p-6 my-8">
      <div className="container flex items-center justify-center pb-6 mb-4 md:p-10 md:px-12 mx-auto">
        <h1 className="text-4xl font-semibold text-green-500 leadi text-center">
          What our customers say about us
        </h1>
      </div>
      <Component />
    </section>
  );
}
