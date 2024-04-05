import Image from 'next/image';

export default function PreviewLoan({ data }) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const dob = new Date(data.dob).toLocaleDateString(undefined, options);
  const nindate = new Date(data.nindate).toLocaleDateString(undefined, options);
  const appdate = new Date(data.appdate).toLocaleDateString(undefined, options);

  return (
    <div className="p-6 bg-white text-gray-900">
      <div className="container flex flex-col mx-auto space-y-2">
        <div className="flex justify-end">
          <Image
            src="/images/adventcapital_logo.png"
            alt="Advent Capital Logo"
            className=" right-0"
            width="120"
            height={120}
          />
        </div>
        <h1 className="text-green-600 font-bold flex justify-center text-2xl md:text-3xl tracking-wider leading-inherit">
          Loan Application Form
        </h1>
        {/* personal details */}
        <div className="flex justify-start">
          <Image
            src={data.image}
            alt="Advent Capital Logo"
            className=" right-0"
            width="120"
            height={120}
          />
        </div>
        <div className="bg-green-500 w-full h-3 rounded"></div>
        <div className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm ">
          <div className="space-y-2 col-span-full lg:col-span-1 text-lg md:text-xl text-green-600">
            <p className="font-medium">Personal Inormation</p>
          </div>
          <div className="grid grid-cols-6 col-span-full px-4 lg:col-span-3 p-3">
            <div className="col-span-full border-gray-100 border px-4 py-3 sm:col-span-3">
              <label
                htmlFor="firstname"
                className="text-lg md:text-xl text-green-600"
              >
                Surname:{' '}
              </label>
              <p className="text-sm tracking-wide leading-snug">{data.surname}</p>
            </div>
            <div className="col-span-full border-gray-100 border px-4 py-3 sm:col-span-3">
              <label
                htmlFor="lastname"
                className="text-lg md:text-xl text-green-600"
              >
                Other name(s):{' '}
              </label>
              <p className="text-sm tracking-wide leading-snug">{data.othername}</p>
            </div>
            <div className="col-span-full border-gray-100 border px-4 py-3 sm:col-span-3">
              <label
                htmlFor="email"
                className="text-lg md:text-xl text-green-600"
              >
                Email
              </label>
              <p className="text-sm tracking-wide leading-snug">{data.email}</p>
            </div>
            <div className="col-span-full border-gray-100 border px-4 py-3 sm:col-span-3">
              <label
                htmlFor="dob"
                className="text-lg md:text-xl text-green-600"
              >
                Date of Birth
              </label>
              <p className="text-sm tracking-wide leading-snug">{dob}</p>
            </div>
            <div className="col-span-full border-gray-100 border px-4 py-3 sm:col-span-2">
              <label
                htmlFor="gender"
                className="text-lg md:text-xl text-green-600"
              >
                Gender
              </label>
              <p className="text-sm tracking-wide leading-snug">{data.gender}</p>
            </div>
            <div className="col-span-full border-gray-100 border px-4 py-3 sm:col-span-2">
              <label
                htmlFor="marital"
                className="text-lg md:text-xl text-green-600"
              >
                Marital Status
              </label>
              <p className="text-sm tracking-wide leading-snug">{data.marital}</p>
            </div>
            <div className="col-span-full border-gray-100 border px-4 py-3 sm:col-span-2">
              <label
                htmlFor="mobile"
                className="text-lg md:text-xl text-green-600"
              >
                Mobile No.:
              </label>
              <p className="text-sm tracking-wide leading-snug">{data.mobile}</p>
            </div>
            <div className="col-span-full border-gray-100 border px-4 py-3 sm:col-span-3">
              <label
                htmlFor="nin"
                className="text-lg md:text-xl text-green-600"
              >
                ID Card No (NIN)
              </label>
              <p className="text-sm tracking-wide leading-snug">{data.nin}</p>
            </div>
            <div className="col-span-full border-gray-100 border px-4 py-3 sm:col-span-3">
              <label
                htmlFor="nin-date"
                className="text-lg md:text-xl text-green-600"
              >
                ID Card Expiry Date
              </label>
              <p className="text-sm tracking-wide leading-snug">{nindate}</p>
            </div>
            <div className="col-span-full border-gray-100 border px-4 py-3">
              <label
                htmlFor="type"
                className="text-lg md:text-xl text-green-600"
              >
                Borrower type
              </label>
              <p className="text-sm tracking-wide leading-snug">{data.type}</p>
            </div>
            <div className="col-span-full mt-4 mb-4">
              <hr />
            </div>
            <div className="col-span-full px-4 uppercase">
              <h1 className="text-lg md:text-xl text-gray-800 mb-3 uppercase font-semibold tracking-wide">
                Residential Details
              </h1>
            </div>
            <div className="col-span-full border-gray-100 border px-4 py-3 sm:col-span-3">
              <label
                htmlFor="owner"
                className="text-lg md:text-xl text-green-600"
              >
                Home Ownership
              </label>
              <p className="text-sm tracking-wide leading-snug">{data.owner}</p>
            </div>
            <div className="col-span-full border-gray-100 border px-4 py-3 sm:col-span-3">
              <label
                htmlFor="period"
                className="text-lg md:text-xl text-green-600"
              >
                Period at residence{' '}
                <span className="italic text-xs text-gray-500">(years)</span>
              </label>
              <p className="text-sm tracking-wide leading-snug">{data.period}</p>
            </div>
            <div className="col-span-full border-gray-100 border px-4 py-3 sm:col-span-2">
              <label
                htmlFor="district"
                className="text-lg md:text-xl text-green-600"
              >
                District
              </label>
              <p className="text-sm tracking-wide leading-snug">{data.district}</p>
            </div>
            <div className="col-span-full border-gray-100 border px-4 py-3 sm:col-span-2">
              <label
                htmlFor="village"
                className="text-lg md:text-xl text-green-600"
              >
                Village / County
              </label>
              <p className="text-sm tracking-wide leading-snug">{data.village}</p>
            </div>
            <div className="col-span-full border-gray-100 border px-4 py-3 sm:col-span-2">
              <label htmlFor="role" className="text-lg text-green-600">
                Community Role (if any)
              </label>
              <p className="text-sm tracking-wide leading-snug">{data.role}</p>
            </div>
            <div className="col-span-full border-gray-100 border px-4 py-3">
              <label
                htmlFor="child"
                className="text-lg md:text-xl text-green-600"
              >
                School Children (No.)
              </label>
              <p className="text-sm tracking-wide leading-snug">{data.child}</p>
            </div>
            <div className="col-span-full mt-4 mb-4">
              <hr />
            </div>
            <div className="col-span-full px-4 uppercase">
              <h1 className="text-lg md:text-xl text-gray-800 mb-3 uppercase font-semibold tracking-wide">
                Spouse(s) Details
              </h1>
            </div>
            <div className="col-span-full border-gray-100 border px-4 py-3">
              <label
                htmlFor="spouce-name"
                className="text-lg md:text-xl text-green-600"
              >
                Names:
              </label>
              <p className="text-sm tracking-wide leading-snug">{data.spoucename}</p>
            </div>
            <div className="col-span-full border-gray-100 border px-4 py-3 sm:col-span-3">
              <label
                htmlFor="spouce-mobile"
                className="text-lg md:text-xl text-green-600"
              >
                Mobile No.:
              </label>
              <p className="text-sm tracking-wide leading-snug">{data.spoucemobile}</p>
            </div>
            <div className="col-span-full border-gray-100 border px-4 py-3 sm:col-span-3">
              <label
                htmlFor="spouce-email"
                className="text-lg md:text-xl text-green-600"
              >
                Email
              </label>
              <p className="text-sm tracking-wide leading-snug">{data.spouceemail}</p>
            </div>
          </div>
        </div>
        {/* loan details */}
        <div className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm ">
          <div className="space-y-2 col-span-full lg:col-span-1 text-lg md:text-xl text-green-600">
            <p className="font-medium">Loan Details</p>
          </div>
          <div className="grid grid-cols-6 col-span-full px-4 lg:col-span-3 p-3">
            <div className="col-span-full border-gray-100 border px-4 py-3 sm:col-span-3">
              <label
                htmlFor="purpose"
                className="text-lg md:text-xl text-green-600"
              >
                Loan Purpose
              </label>
              <p className="text-sm tracking-wide leading-snug">{data.purpose}</p>
            </div>
            <div className="col-span-full border-gray-100 border px-4 py-3 sm:col-span-3">
              <label
                htmlFor="loantype"
                className="text-lg md:text-xl text-green-600"
              >
                Loan Type
              </label>
              <p className="text-sm tracking-wide leading-snug">{data.loantype}</p>
            </div>
            <div className="col-span-full sm:col-span-3 border-gray-100 border px-4 py-3">
              <label
                htmlFor="amount"
                className="text-lg md:text-xl text-green-600"
              >
                Loan Amount
              </label>
              <p className="text-sm tracking-wide leading-snug">UGX {data.amount}</p>
            </div>
            <div className="col-span-full sm:col-span-3 border-gray-100 border px-4 py-3">
              <label
                htmlFor="duration"
                className="text-lg md:text-xl text-green-600"
              >
                Loan Duration (max)
              </label>
              <p className="text-sm tracking-wide leading-snug">{data.duration}</p>
            </div>
            <div className="col-span-full border-gray-100 border px-4 py-3 sm:col-span-3">
              <label
                htmlFor="words"
                className="text-lg md:text-xl text-green-600"
              >
                Amount in words
              </label>
              <p className="text-sm tracking-wide leading-snug">{data.words}</p>
            </div>
            <div className="col-span-full border-gray-100 border px-4 py-3 sm:col-span-3">
              <label
                htmlFor="source"
                className="text-lg md:text-xl text-green-600"
              >
                Loan Repayment source
              </label>
              <p className="text-sm tracking-wide leading-snug">{data.source}</p>
            </div>
            <div className="col-span-full border-gray-100 border px-4 py-3 sm:col-span-3">
              <label
                htmlFor="bustype"
                className="text-lg md:text-xl text-green-600"
              >
                Business Type/employer
              </label>
              <p className="text-sm tracking-wide leading-snug">{data.bustype}</p>
            </div>
            <div className="col-span-full border-gray-100 border px-4 py-3 sm:col-span-3">
              <label
                htmlFor="permonth"
                className="text-lg md:text-xl text-green-600"
              >
                How much do you generate per month?
              </label>
              <p className="text-sm tracking-wide leading-snug">UGX {data.permonth}</p>
            </div>
            <div className="col-span-full border-gray-100 border px-4 py-3">
              <label
                htmlFor="collateral"
                className="text-lg md:text-xl text-green-600"
              >
                Collateral Details:
              </label>
              <p className="text-sm tracking-wide leading-snug">{data.collateral}</p>
            </div>
          </div>
        </div>
        {/* declarations */}
        <div className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm ">
          <div className="space-y-2 col-span-full lg:col-span-1 text-lg md:text-xl text-green-600">
            <p className="font-medium">Declarations and Pledge</p>
          </div>
          <div className="grid grid-cols-6 col-span-full lg:col-span-3 rounded">
            <div className="col-span-full">
              <label
                htmlFor="declaration"
                className="text-base md:text-lg font-bold"
              >
                Declaration
              </label>
              <p className="text-sm md:text-base mt-2">
                I/We declare that I/We have voluntarily applied for the loan
                from Advent Capital without any coercion and the information
                given in this form is true and complete and understand that any
                misstatements in the information providedin this form lead to
                automatic disqualification of this application.
              </p>
            </div>
            <div className="col-span-full mt-3">
              <label
                htmlFor="pledge"
                className="text-base md:text-lg font-bold"
              >
                Pledge
              </label>
              <ul className="list-disc pl-4 text-sm md:text-base mt-2">
                <li>
                  In the event of the loan applied for being granted and
                  accepted by me/us, I/We agreeto be bound by the rules of
                  Advent Capital, I/We undertake to sign all documents as may be
                  required to secure a Advent Capital loan and to pay all costs
                  in connection therewith as will be specified. I/We acknowledge
                  liabilityfor the administration fees and wasted costs incurred
                  by Advent Capital or its lawyers in the event of my failure to
                  meet my loan obligations that may lead to forced recovery.
                </li>
                <li>
                  I/We agree that Advent capital may repossess/dispose off
                  security pledged if I/We fail to meet my loan repayment
                  obligations either in part or wholly. I/We declare that the
                  information given in this form is to the best of my/our
                  understanding correct. I/We also understand that any
                  misstatemennts in the information provided in this form will
                  lead to automatic disqualification of this application.
                </li>
              </ul>
            </div>
            <div className="col-span-full border-gray-100 border px-4 sm:col-span-3">
              <label
                htmlFor="appname"
                className="text-lg md:text-xl text-green-600 py-2"
              >
                Applicant Name:
              </label>
              <p className="text-sm tracking-wide leading-snug">{data.appname}</p>
            </div>
            <div className="col-span-full border-gray-100 border px-4 sm:col-span-3">
              <label
                htmlFor="date"
                className="text-lg md:text-xl text-green-600 py-2"
              >
                Date
              </label>
              <p className="text-sm tracking-wide leading-snug">{appdate}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center mt-6 bg-green-500 rounded-b-lg text-white justify-center  py-2 gap-2">
        <span>&copy; Copyright {new Date().getFullYear()}</span>
        <span className="uppercase leading-normal tracking-wider">
          Advent Capital
        </span>
      </div>
    </div>
  );
}
