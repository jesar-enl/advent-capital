import Image from 'next/image';
import Link from 'next/link';
import { others } from '../services';

export const metadata = {
  title: 'Other Services - Advent Capital',
  description:
    'Are you looking for a loan that suits your needs and goals? Whether you want to grow your business, pay for your education, improve your home, or access clean water and sanitation, we have a loan for you. Our loans are affordable, flexible, and convenient. Check out our loan products below and find the one that matches your situation.',
};

function OtherServices() {
  return (
    <div className="mt-3">
      <div className="container mx-auto px-4 py-8">
        <div className="text-lg text-gray-800 mb-6 ">
          <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">
            Other Offered Services include:
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {others.map(({ service, image, description }) => {
              return (
                <div
                  key={service}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <Image src={image} alt={service} width="480" height="320" />
                  <div className="flex flex-col justify-between h-full">
                    <div className=" flex flex-col justify-between p-4">
                      <div classname="flex flex-col gap-4">
                      <h2 className="text-xl font-semibold text-gray-800">
                        {service}
                      </h2>
                      <p className="text-gray-600 mt-2 mb-8">{description}</p>
                      </div>
                      <div className="flex justify-center">
                      <Link
                        href="/contact-us"
                        className="mt-10 bottom-0 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                      >
                        Contact us
                      </Link>
                      </div>
                    </div>
                    
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OtherServices;
