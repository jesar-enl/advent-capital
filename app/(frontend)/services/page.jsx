import Image from 'next/image';
import Link from 'next/link';
import { FaServicestack } from 'react-icons/fa';
import { TbUserCheck } from 'react-icons/tb';

export default function Services() {
  const loans = [
    {
      name: 'Agribusiness Loan',
      desc: 'A loan that aims to fund agribusiness activities such as buying seeds, fertilizers, equipment, or storage facilities.',
      image: '/images/agribusiness.jpeg',
      alt: "agribusiness loan"
    },
    {
      name: 'School fees Loan',
      desc: 'A loan that helps parents, guardians, or students to pay for educational expenses such as tution, hostel, or scholastic materials.',
      image: '/images/school_fees.jpeg',
      alt: "school fees loan"
    },
    {
      name: 'Business Loan',
      desc: 'A loan that supports businesses to finance their working capital, expansion, or acquisition needs.',
      image: '/images/business.jpeg',
      alt: "business loan"
    },
    {
      name: 'Salary Loan',
      desc: 'A loan that offers quick and easy access to funds for salaried employees who need to meet their personal, business, or emergency needs.',
      image: '/images/salary.jpeg',
      alt: "salary loan"
    },
    {
      name: 'Home imporvement Loan',
      desc: 'A loan that enables home owners to carry out home improvement projects such as construction, renovation, extension, or installation of power, water, or sanitation systems.',
      image: '/images/home_improvement.jpeg',
      alt: "home improvement loan"
    },
    {
      name: 'Water & Sanitation Loan',
      desc: 'A loan that facilitates the provision of safe water and sanitation services in urban and rural areas.',
      image: '/images/water&sanitaion.jpeg',
      alt: "water & sanitation loan"
    },
  ];

  const reqs = [
    {
      req: 'Copy of your Identification Card (ID)',
    },
    {
      req: '2 passport photos',
    },
    {
      req: 'Completed loan application',
    },
    {
      req: 'Trading license where applicable',
    },
    {
      req: 'Payment of application fees UGX 5,000',
    },
    {
      req: 'Business should have been in operation for at least 6 months',
    },
    {
      req: 'Business visit',
    },
    {
      req: 'Flexible collateral requirement',
    },
    {
      req: 'Two guarantors',
    },
  ];

  const others = [
    {
      service: 'Farm Business Management.',
    },
    {
      service: 'Financial Consultancy',
    },
    {
      service: 'Business Planning & Proposal Writing',
    },
    {
      service: 'Mobile Money Services',
    },
    {
      service: 'Simcard Registration & Verification',
    },
    {
      service: 'Utility Bills Payments.',
    },
  ];

  return (
    <div className="mt-24">
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
        <div className="text-lg text-gray-800 mt-3 ">
          <h2 className="text-xl font-semibold text-gray-800">
            Other services include:
          </h2>
          {others.map((other, i) => {
            return (
              <div key={i} className="items-center flex gap-3">
                <FaServicestack className="text-blue-600" />
                {other.service}
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
