// import Buttons from '@/app/components/backoffice/Buttons';
import { authOptions } from '@/app/libs/authOptions';
import { Loan } from '@/app/libs/loan';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';
import Printable from '../../../components/Printable';
import ApproveButton from '../../../components/button';


export const metadata = {
  title: 'Loan Application - Advent Capital',
  description: 'Apply now to get a loan that suits your needs and goals.',
};

export default async function LoanDetails({ params: { id } }) {
  const application = await Loan(id);
  const session = await getServerSession(authOptions);

  return (
    <div className="flex flex-col mt-4">
      <div className="flex flex-col px-4 py-2 gap-2">
        <Link
          href="/dashboard"
          className="text-gray-600 flex gap-2 items-center"
        >
          <FaArrowCircleLeft /> Back to dashboard
        </Link>
        {session?.user?.role === 'admin' && (
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <ApproveButton id={id} />
            <button
              type="button"
              className="inline-flex items-center px-3 py-1 text-xl font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-500 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-500"
            >
              <RxCross2 className="me-2 text-red-500 text-xl" />
              Reject
            </button>
          </div>
        )}
        {/* <div className="flex gap-3 items-center">
            <h2 className="text-3xl text-teal-800">
              Loan Type:{' '}
              <span className="text-gray-800">{application.loantype}</span>
            </h2>
          </div> */}
      </div>
      <Printable app={application} />
    </div>
  );
}
