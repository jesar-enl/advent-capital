'use client';

import { Carousel } from 'flowbite-react';
import Image from 'next/image';

export default function Overview() {
  return (
    <div className="flex flex-col text-xl items-center bg-teal-50 shadow md:flex-row py-6 mx-auto px-4">
      <div className="flex flex-col justify-between gap-4 p-4 leading-normal w-full md:w-2/3">
        <h3 className="mb-4 text-xl md:text-3xl font-bold tracking-tight text-green-500">
          Overview of Advent Product Basket
        </h3>
        <p className="mb-3 text-lg md:text-xl font-normal text-gray-800">
          Through understanding the economic environment in which it operates
          and possessing an in-depth knowledge of its target market, market
          conditions and customer requirements. Advent Capital has developed
          loan products to offer to existing and past customers.
        </p>
      </div>
      <div className="w-full md:w-1/3 h-52">
        <Carousel indicators="false" leftControl="" rightControl="">
          <div className="duration-700 ease-in-out" data-carousel-item>
            <Image
              className="rounded-lg object-cover md:h-auto md:w-auto "
              width="640"
              height="600"
              src="/images/class.jpg"
              alt="overview"
            />
          </div>
          <div className="duration-700 ease-in-out" data-carousel-item>
            <Image
              className="rounded-lg object-cover md:h-auto md:w-auto "
              width="640"
              height="600"
              src="/images/agribusiness_2.jpg"
              alt="overview"
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
