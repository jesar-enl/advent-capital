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
      ben: 'Interest fee Saturdays and Sundays. Pay interest for only 22 days in a month.',
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
    <section className="py-6 bg-gray-100 text-gray-900">
      <div className="container mx-auto flex flex-col justify-around p-4 text-center md:p-10 lg:flex-row">
        <div className="flex flex-col justify-center lg:text-left">
          <h1 className="py-2 text-3xl font-medium uppercase leadi title-font">
            Benefits from our affordable loans
          </h1>
          {benefits.map((benefit, i) => {
            return (
              <p
                key={i}
                className="flex gap-2 items-center mb-1 text-sm font-medium tracking-wide text-blue-600"
              >
                <PiSealCheckLight className="text-green-600" />
                {benefit.ben}
              </p>
            );
          })}
        </div>
        <div className="flex flex-col items-center justify-center flex-shrink-0 mt-6 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 lg:ml-4 lg:mt-0 lg:justify-end">
          <button className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-400 text-gray-900">
            <Link href="/loans/application">Apply Now</Link>
          </button>
        </div>
      </div>
    </section>
  );
}
