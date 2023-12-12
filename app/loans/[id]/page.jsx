import Link from 'next/link';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { Loan } from '../../libs/loan';
import PreviewLoan from '../../components/PreviewLoan'

export default async function LoanDetails({ params: { id } }) {
  const application = await Loan(id);

  return (
    <div className="flex flex-col mt-28">
      <Link href="/dashboard" className="text-gray-600 flex gap-2 items-center">
        <FaArrowCircleLeft /> Back to dashboard
      </Link>
      <div className="flex gap-3 items-center">
        <h2 className="text-3xl text-teal-800">
          Loan Type:{' '}
          <span className="text-gray-800">#{application.loantype}</span>
        </h2>
      </div>
      <PreviewLoan data={application} />
    </div>
  );
}
