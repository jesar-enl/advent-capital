'use client';

import { Carousel, Rating } from 'flowbite-react';

function Component() {
  return (
    <div className="h-64 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <div className="flex flex-col justify-center items-center gap-4">
          <p className="bg-gray-400 text-green-700 text-lg md:text-2xl tracking-wider rounded-md py-8 px-8">
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
            <h3 className="text-sm md:text-lg text-gray-800">Customer 1</h3>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <p className="bg-gray-400 text-green-700 text-lg md:text-2xl tracking-wider rounded-md py-8 px-8">
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
            <h3 className="text-sm md:text-lg text-gray-800">Customer 2</h3>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <p className="bg-gray-400 text-green-700 text-lg md:text-2xl tracking-wider rounded-md py-8 px-8">
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
            <h3 className="text-sm md:text-lg text-gray-800">Customer 3</h3>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <p className="bg-gray-400 text-green-700 text-lg md:text-2xl tracking-wider rounded-md py-8 px-8">
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
            <h3 className="text-sm md:text-lg text-gray-800">Customer 4</h3>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <p className="bg-gray-400 text-green-700 text-lg md:text-2xl tracking-wider rounded-md py-8 px-8">
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
            <h3 className="text-sm md:text-lg text-gray-800">Customer 5</h3>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <p className="bg-gray-400 text-green-700 text-lg md:text-2xl tracking-wider rounded-md py-8 px-8">
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
            <h3 className="text-sm md:text-lg text-gray-800">Customer 6</h3>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <p className="bg-gray-400 text-green-700 text-lg md:text-2xl tracking-wider rounded-md py-8 px-8">
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
            <h3 className="text-sm md:text-lg text-gray-800">Customer 7</h3>
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
