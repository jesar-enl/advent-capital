import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';

export default function Testimonial() {
  return (
    <section className="p-6 my-8">
      <div className="container flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12 mx-auto">
        <h1 className="text-4xl font-semibold leadi text-center">
          What our customers say about us
        </h1>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2">
        <div className="flex flex-col items-center mx-12 lg:mx-0">
          <div className="relative text-center">
            <p className="px-6 py-1 text-lg italic">
              <RiDoubleQuotesL />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
              dolores similique hic laudantium animi vitae voluptas odit,
              officia adipisci ipsa alias tempore soluta labore eos dignissimos
              in voluptatibus iure architecto.
              <RiDoubleQuotesR />
            </p>
          </div>
          <span className="w-12 h-1 my-2 rounded-lg bg-violet-600"></span>
          <p>Leroy Jenkins</p>
        </div>
        <div className="flex flex-col items-center max-w-lg mx-12 lg:mx-0">
          <div className="relative text-center">
            <p className="px-6 py-1 text-lg italic">
              <RiDoubleQuotesL />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
              dolores similique hic laudantium animi vitae voluptas odit,
              officia adipisci ipsa alias tempore soluta labore eos dignissimos
              in voluptatibus iure architecto.
              <RiDoubleQuotesR />
            </p>
          </div>
          <span className="w-12 h-1 my-2 rounded-lg bg-violet-600"></span>
          <p>Leroy Jenkins</p>
        </div>
        <div className="flex flex-col items-center mx-12 lg:mx-0">
          <div className="relative text-center">
            <p className="px-6 py-1 text-lg italic">
              <RiDoubleQuotesL />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
              dolores similique hic laudantium animi vitae voluptas odit,
              officia adipisci ipsa alias tempore soluta labore eos dignissimos
              in voluptatibus iure architecto.
              <RiDoubleQuotesR />
            </p>
          </div>
          <span className="w-12 h-1 my-2 rounded-lg bg-violet-600"></span>
          <p>Leroy Jenkins</p>
        </div>
        <div className="flex flex-col items-center mx-12 lg:mx-0">
          <div className="relative text-center">
            <p className="px-6 py-1 text-lg italic">
              <RiDoubleQuotesL />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
              dolores similique hic laudantium animi vitae voluptas odit,
              officia adipisci ipsa alias tempore soluta labore eos dignissimos
              in voluptatibus iure architecto.
              <RiDoubleQuotesR />
            </p>
          </div>
          <span className="w-12 h-1 my-2 rounded-lg bg-violet-600"></span>
          <p>Leroy Jenkins</p>
        </div>
      </div>
    </section>
  );
}
