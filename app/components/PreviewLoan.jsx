import Image from 'next/image';

export default function PreviewLoan({ data }) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const dob = new Date(data.dob).toLocaleDateString(undefined, options);
  const nindate = new Date(data.nindate).toLocaleDateString(undefined, options);
  const appdate = new Date(data.appdate).toLocaleDateString(undefined, options);
 
  return (
    <div className="p-6 bg-gray-100 text-gray-900">
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
        <h1 className="text-green-600 flex justify-center text-3xl">Application Form</h1>
        {/* personal details */}
        <div className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-200">
          <div className="space-y-2 col-span-full lg:col-span-1 text-xl text-green-600">
            <p className="font-medium">Personal Inormation</p>
          </div>
          <div className="grid grid-cols-6 col-span-full border-gray-300 border px-4 lg:col-span-3 p-3 bg-gray-100">
            <div className="col-span-full border-gray-300 border px-4 sm:col-span-3">
              <label htmlFor="firstname" className="text-xl text-green-600">
                Surname
              </label>
              <p>{data.surname}</p>
            </div>
            <div className="col-span-full border-gray-300 border px-4 sm:col-span-3">
              <label htmlFor="lastname" className="text-xl text-green-600">
                Other name(s)
              </label>
              <p>{data.othername}</p>
            </div>
            <div className="col-span-full border-gray-300 border px-4 sm:col-span-3">
              <label htmlFor="email" className="text-xl text-green-600">
                Email
              </label>
              <p>{data.email}</p>
            </div>
            <div className="col-span-full border-gray-300 border px-4 sm:col-span-3">
              <label htmlFor="dob" className="text-xl text-green-600">
                Date of Birth
              </label>
              <p>{dob}</p>
            </div>
            <div className="col-span-full border-gray-300 border px-4 sm:col-span-2">
              <label htmlFor="gender" className="text-xl text-green-600">
                Gender
              </label>
              <p>{data.gender}</p>
            </div>
            <div className="col-span-full border-gray-300 border px-4 sm:col-span-2">
              <label htmlFor="marital" className="text-xl text-green-600">
                Marital Status
              </label>
              <p>{data.marital}</p>
            </div>
            <div className="col-span-full border-gray-300 border px-4 sm:col-span-2">
              <label htmlFor="mobile" className="text-xl text-green-600">
                Mobile No.:
              </label>
              <p>{data.mobile}</p>
            </div>
            <div className="col-span-full border-gray-300 border px-4 sm:col-span-3">
              <label htmlFor="nin" className="text-xl text-green-600">
                ID Card No (NIN)
              </label>
              <p>{data.nin}</p>
            </div>
            <div className="col-span-full border-gray-300 border px-4 sm:col-span-3">
              <label htmlFor="nin-date" className="text-xl text-green-600">
                ID Card Expiry Date
              </label>
              <p>{nindate}</p>
            </div>
            <div className="col-span-full border-gray-300 border px-4 sm:col-span-3">
              <label htmlFor="type" className="text-xl text-green-600">
                Borrower type
              </label>
              <p>{data.type}</p>
            </div>
            <div className="col-span-full mt-3 mb-4">
              <hr />
            </div>
            <div className="col-span-full px-4 uppercase">
              <h1 className="text-xl text-green-600">Residential Details</h1>
            </div>
            <div className="col-span-full border-gray-300 border px-4 sm:col-span-3">
              <label htmlFor="owner" className="text-xl text-green-600">
                Home Ownership
              </label>
              <p>{data.owner}</p>
            </div>
            <div className="col-span-full border-gray-300 border px-4 sm:col-span-3">
              <label htmlFor="period" className="text-xl text-green-600">
                Period at residence{' '}
                <span className="italic text-xs text-gray-500">(years)</span>
              </label>
              <p>{data.period}</p>
            </div>
            <div className="col-span-full border-gray-300 border px-4 sm:col-span-2">
              <label htmlFor="district" className="text-xl text-green-600">
                District
              </label>
              <p>{data.district}</p>
            </div>
            <div className="col-span-full border-gray-300 border px-4 sm:col-span-2">
              <label htmlFor="village" className="text-xl text-green-600">
                Village / County
              </label>
              <p>{data.village}</p>
            </div>
            <div className="col-span-full border-gray-300 border px-4 sm:col-span-2">
              <label htmlFor="role" className="text-lg text-green-600">
                Community Role (if any)
              </label>
              <p>{data.role}</p>
            </div>
            <div className="col-span-full border-gray-300 border px-4 sm:col-span-2">
              <label htmlFor="child" className="text-xl text-green-600">
                School Children (No.)
              </label>
              <p>{data.child}</p>
            </div>
            <div className="col-span-full mt-3 mb-4">
              <hr />
            </div>
            <div className="col-span-full px-4 uppercase">
              <h1 className="text-xl text-green-600">Spouse(s) Details</h1>
            </div>
            <div className="col-span-full border-gray-300 border px-4">
              <label htmlFor="spouce-name" className="text-xl text-green-600">
                Names:
              </label>
              <p>{data.spoucename}</p>
            </div>
            <div className="col-span-full border-gray-300 border px-4 sm:col-span-3">
              <label htmlFor="spouce-mobile" className="text-xl text-green-600">
                Mobile No.:
              </label>
              <p>{data.spoucemobile}</p>
            </div>
            <div className="col-span-full border-gray-300 border px-4 sm:col-span-3">
              <label htmlFor="spouce-email" className="text-xl text-green-600">
                Email
              </label>
              <p>{data.spouceemail}</p>
            </div>
          </div>
        </div>
        {/* loan details */}
        <div className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-200">
          <div className="space-y-2 col-span-full lg:col-span-1 text-xl text-green-600">
            <p className="font-medium">Loan Details</p>
          </div>
          <div className="grid grid-cols-6 col-span-full border-gray-200 border px-4 lg:col-span-3 p-3 bg-gray-100">
            <div className="col-span-full border-gray-300 border px-4 sm:col-span-3">
              <label htmlFor="purpose" className="text-xl text-green-600">
                Loan Purpose
              </label>
              <p>{data.purpose}</p>
            </div>
            <div className="col-span-full border-gray-300 border px-4 sm:col-span-3">
              <label htmlFor="loantype" className="text-xl text-green-600">
                Loan Type
              </label>
              <p>{data.loantype}</p>
            </div>
            <div className="col-span-full sm:col-span-3 border-gray-300 border px-4">
              <label htmlFor="amount" className="text-xl text-green-600">
                Loan Amount
              </label>
              <p>UGX {data.amount}</p>
            </div>
            <div className="col-span-full sm:col-span-3 border-gray-300 border px-4">
              <label htmlFor="duration" className="text-xl text-green-600">
                Loan Duration (max)
              </label>
              <p>{data.duration}</p>
            </div>
            <div className="col-span-full border-gray-300 border px-4 sm:col-span-3">
              <label htmlFor="words" className="text-xl text-green-600">
                Amount in words
              </label>
              <p>{data.words}</p>
            </div>
            <div className="col-span-full border-gray-300 border px-4 sm:col-span-3">
              <label htmlFor="source" className="text-xl text-green-600">
                Loan Repayment source
              </label>
              <p>{data.source}</p>
            </div>
            <div className="col-span-full border-gray-300 border px-4 sm:col-span-3">
              <label htmlFor="bustype" className="text-xl text-green-600">
                Business Type/employer
              </label>
              <p>{data.bustype}</p>
            </div>
            <div className="col-span-full border-gray-300 border px-4 sm:col-span-3">
              <label htmlFor="permonth" className="text-xl text-green-600">
                How much do you generate per month?
              </label>
              <p>UGX {data.permonth}</p>
            </div>
            <div className="col-span-full border-gray-300 border px-4 sm:col-span-3">
              <label htmlFor="collateral" className="text-xl text-green-600">
                Collateral Details:
              </label>
              <p>{data.collateral}</p>
            </div>
          </div>
        </div>
        {/* declarations */}
        <div className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-200">
          <div className="space-y-2 col-span-full lg:col-span-1 text-xl text-green-600">
            <p className="font-medium">Declarations and Pledge</p>
          </div>
          <div className="grid grid-cols-6 col-span-full lg:col-span-3 bg-gray-100 rounded p-4">
            <div className="col-span-full">
              <label htmlFor="declaration" className="text-sm font-bold">
                Declaration
              </label>
              <p className="text-sm mt-2">
                I/We declare that I/We have voluntarily applied for the loan
                from Advent Capital without any coercion and the information
                given in this form is true and complete and understand that any
                misstatements in the information providedin this form lead to
                automatic disqualification of this application.
              </p>
            </div>
            <div className="col-span-full">
              <label htmlFor="pledge" className="text-sm font-bold">
                Pledge
              </label>
              <ul className="list-disc pl-4 text-sm mt-2">
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
            <div className="col-span-full border-gray-300 border px-4 sm:col-span-3">
              <label htmlFor="appname" className="text-xl text-green-600">
                Applicant Name:
              </label>
              <p>{data.appname}</p>
            </div>
            <div className="col-span-full border-gray-300 border px-4 sm:col-span-3">
              <label htmlFor="date" className="text-xl text-green-600">
                Date
              </label>
              <p>{appdate}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center flex-col">
          <span>&copy; Copyright {new Date().getFullYear()}</span>
          <span className="text-green-500">Advent Capital</span>
        </div>
      </div>
    </div>
  );
}
