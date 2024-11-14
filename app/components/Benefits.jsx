import { PiSealCheckLight } from 'react-icons/pi';
import Link from 'next/link';

export default function Benefits() {
  const benefits = [
    {
      ben: 'Get up to UGX 5,000,000.',
    },
    {
      ben: 'Get loans as low as UGX 10,000 and pay UGX 500 only per day.',
    },
    {
      ben: 'Convenient and easy application process.',
    },
    {
      ben: 'Loan amounts match your business needs.',
    },
    {
      ben: 'Flexible repayment terms.',
    },
    {
      ben: 'Competitive interest rates.',
    },
    {
      ben: 'Get a loan within just hours after your application.',
    },

    {
      ben: 'Flexible collateral requirements.',
    },
  ];

  return (
    <section className="bg-gray-100 py-6 text-white">
      <div className="container mx-auto flex flex-col justify-around p-4 md:p-10 md:text-center lg:flex-row">
        <div className="flex flex-col justify-center lg:text-left">
          <h1 className="leading-snug title-font mb-4 py-2 text-center text-3xl font-extrabold uppercase text-green-500 md:text-4xl">
            Benefits from our affordable loans
          </h1>
          {benefits.map((benefit, i) => {
            return (
              <p
                key={i}
                className="mb-1 flex items-center gap-2 text-sm font-medium tracking-wide text-gray-900 md:text-lg"
              >
                <PiSealCheckLight className="text-[#1703AD]" size={20} />
                <span>{benefit.ben}</span>
              </p>
            );
          })}
        </div>
        <div className="mt-6 flex flex-shrink-0 items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 lg:ml-4 lg:mt-0 lg:justify-end">
          <button className="inline-flex items-center rounded-lg bg-[#1703AD] px-8  py-3 font-medium leading-6 text-white shadow-lg md:px-10 md:py-4 md:text-lg">
            <Link href="/loans/application">Apply Now</Link>
          </button>
        </div>
      </div>
    </section>
  );
}
