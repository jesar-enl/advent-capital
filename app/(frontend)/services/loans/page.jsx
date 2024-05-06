import Image from 'next/image';
import Link from 'next/link';

import { TbUserCheck } from 'react-icons/tb';
import { loans, reqs } from '../services';

export const metadata = {
  title: 'Loans Services - Advent Capital',
  description:
    'Are you looking for a loan that suits your needs and goals? Whether you want to grow your business, pay for your education, improve your home, or access clean water and sanitation, we have a loan for you. Our loans are affordable, flexible, and convenient. Check out our loan products below and find the one that matches your situation.',
};

function LoansServices() {
  return (
    <div className="mt-3">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-800">
          Offered Services
        </h1>
        <p className="text-lg text-center text-gray-600 mt-4 mb-4">
          Are you looking for a loan that suits your needs and goals? Whether
          you want to grow your business, pay for your education, improve your
          home, or access clean water and sanitation, we have a loan for you.
          Our loans are affordable, flexible, and convenient. You can apply
          online or visit our branch in{' '}
          <span className="text-cyan-600">
            Makerere - Kikoni A, Adwori Road, Near MZ Guest House
          </span>
          . Check out our loan products below and find the one that matches your
          situation.
        </p>
        {/* loans available */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loans.map((loan, i) => {
            return (
              <div
                key={i}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <Image
                  src={loan.image}
                  alt={loan.alt}
                  width="480"
                  height="320"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {loan.name}
                  </h2>
                  <p className="text-gray-600 mt-2 mb-8">{loan.desc}</p>
                  <Link
                    href="/loans/application"
                    className="mt-10 bottom-0 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* requirements div */}
      <section className="py-6 bg-gray-700 text-gray-100">
        <div className="container mx-auto flex flex-col justify-around p-4 text-center md:p-10 lg:flex-row">
          <div className="flex flex-col justify-center lg:text-left">
            <h1 className="py-2 text-5xl font-medium uppercase leadi title-font">
              Requirements needed to apply:
            </h1>
            {reqs.map((req, i) => {
              return (
                <p
                  key={i}
                  className="flex gap-2 items-center mb-1 text-xl font-medium tracki text-blue-600"
                >
                  <TbUserCheck className="text-green-600" />
                  {req.req}
                </p>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default LoansServices;
