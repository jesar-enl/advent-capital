export default function AboutUs() {
  return (
    <div className="mt-6 flex flex-col">
      <div className="flex flex-col space-y-4 h-screen ml-6 mb-0 p-4 bg-[url('/images/adventcapital_logo-removebg-preview.png')]">
        <div className="self-start max-w-lg mb-1 p-6 text-center bg-opacity-20 rounded-lg shadow">
          <h3 className="mb-2 text-center uppercase text-2xl font-bold tracking-tight text-green-500">
            Vision
          </h3>
          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
          <p className="text-gray-800 text-xl">
            To be the preferred provider of sustainable financial services to
            micro and small enterprises.
          </p>
        </div>
        <div className="self-end max-w-md mb-1 p-6 text-center bg-opacity-20 rounded-lg shadow">
          <h3 className="mb-2 text-center uppercase text-2xl font-bold tracking-tight text-green-500">
            Mission
          </h3>
          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
          <p className="text-gray-800 text-xl">
            To transform livelihoods by providing inclusive, affordable and
            innovative financial services to small and micro enterprises
          </p>
        </div>
        <div className="self-start max-w-md mb-1 p-6 bg-opacity-20 rounded-lg shadow">
          <h3 className="mb-2 text-center uppercase text-2xl font-bold tracking-tight text-green-500">
            Values
          </h3>
          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
          <ul className="list-decimal pl-3 text-gray-800 text-xl">
            <li className="mb-1">Collaboration</li>
            <li className="mb-1">Innovation</li>
            <li className="mb-1">Professionalism</li>
            <li className="mb-1">Integrity</li>
            <li className="mb-1">Environmental Protection</li>
            <li className="mb-1">Customer Oriented</li>
            <li className="mb-1">Respect and Dignity</li>
            <li>First Turn Around Time</li>
          </ul>
        </div>
        <div className="self-end max-w-md p-6 bg-opacity-20 rounded-lg shadow">
          <h3 className="mb-2 text-2xl text-center uppercase font-bold tracking-tight text-green-500">
            Objectives
          </h3>
          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
          <ul className="list-disc pl-3 text-gray-800 text-xl">
            <li className="mb-1">
              To increase the participation of micro and small enterprises in
              the money economy.
            </li>
            <li className="mb-1">
              To promote agribusiness by increasing capital flow to the
              agriculture sector.
            </li>
            <li className="mb-1">
              Promote green financing through facilitating awareness,
              accessibility and utilization of green finance products.
            </li>
            <li className="mb-1">
              To empower micro and small enterprises through financial education
              and effective collaborations.
            </li>
            <li>
              To proactively participate in research that provide a platform for
              financial inclusion.
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="self-end p-3 md:mt-36">
        <div className="max-w-md p-6 bg-slate-100 bg-opacity-20 rounded-lg shadow">
          <h3 className="mb-2 text-2xl text-center uppercase font-bold tracking-tight text-gray-50">
            Objectives
          </h3>
          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
          <ul className="list-disc pl-3 text-slate-200 text-xl">
            <li className="mb-1">
              To increase the participation of micro and small enterprises in
              the money economy.
            </li>
            <li className="mb-1">
              To promote agribusiness by increasing capital flow to the
              agriculture sector.
            </li>
            <li className="mb-1">
              Promote green financing through facilitating awareness,
              accessibility and utilization of green finance products.
            </li>
            <li className="mb-1">
              To empower micro and small enterprises through financial education
              and effective collaborations.
            </li>
            <li>
              To proactively participate in research that provide a platform for
              financial inclusion.
            </li>
          </ul>
        </div>
      </div> */}
    </div>
  );
}
