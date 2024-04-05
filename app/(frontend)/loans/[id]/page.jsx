// import Buttons from '@/app/components/backoffice/Buttons';
import { authOptions } from '@/app/libs/authOptions';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { FaArrowCircleLeft } from 'react-icons/fa';
import Printable from '../../../components/Printable';
import { Loan } from '@/app/libs/loan';
// import {useRef} from 'react';

export default async function LoanDetails({ params: { id } }) {
  const application = await Loan(id);
  const session = await getServerSession(authOptions);
  // const printForm = useRef();

  return (
    <div className="flex flex-col mt-4">
      <div className="flex flex-col px-4 py-2 gap-2">
          <Link
            href="/dashboard"
            className="text-gray-600 flex gap-2 items-center"
          >
            <FaArrowCircleLeft /> Back to dashboard
          </Link>
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
