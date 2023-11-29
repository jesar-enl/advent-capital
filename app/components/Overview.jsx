import Image from 'next/image';

export default function Overview() {
  return (
    <div className="flex flex-col text-xl items-center bg-teal-100 shadow md:flex-row md:max-w-5xl py-3 mx-auto px-4">
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h3 className="mb-2 text-2xl font-bold tracking-tight text-slate-600">
          Overview of Advent Product Basket
        </h3>
        <p className="mb-3 font-normal text-gray-800">
          Through understanding the economic environment in which it operates
          and possessing an in-depth knowledge of its target market, market
          conditions and customer requirements. Advent Capital has developed
          loan products to offer to existing and past customers.
        </p>
      </div>
      <div
        className="relative w-full"
        id="default-carousel"
        data-carousel="slide"
      >
        <div className="relative overflow-hidden rounded-lg">
          <div className="duration-700 ease-in-out" data-carousel-item>
            <Image
              className="rounded-t-lg object-cover md:h-auto md:w-auto "
              width="640"
              height="600"
              src="/images/class.jpg"
              alt="overview"
            />
          </div>
          <div className="duration-700 ease-in-out" data-carousel-item>
            <Image
              className="rounded-t-lg object-cover md:h-auto md:w-auto "
              width="640"
              height="600"
              src="/images/happyfarmer.jpeg"
              alt="overview"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
