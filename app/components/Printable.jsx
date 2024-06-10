'use client';
import PreviewLoan from '@/app/components/PreviewLoan';
import { useSession } from 'next-auth/react';
import { useRef } from 'react';
import { PiPrinterThin } from 'react-icons/pi';
import { RxCross2 } from 'react-icons/rx';
import { TiTick } from 'react-icons/ti';
import { useReactToPrint } from 'react-to-print';

// const printForm = useRef();

const Buttons = ({printForm}) => {
  
  const handlePrint = useReactToPrint({
    content: () => printForm.current,
  });

  return (
    <div className="inline-flex rounded-md shadow-sm" role="group">
      <button
        type="button"
        onClick={handlePrint}
        className="inline-flex items-center px-3 py-1 text-lg font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:text-blue-500"
      >
        <PiPrinterThin className="me-2 text-gray-900 text-xl" />
        Print
      </button>
    </div>
  );
};

const Printable = ({ app }) => {
  const { data: session, status } = useSession();
  const printForm = useRef();
  return (
    <div className="">
      {session?.user?.role === 'admin' && <Buttons printForm={printForm} />}
      <div ref={printForm}>
        <PreviewLoan data={app} />
      </div>
    </div>
  );
};

export default Printable;
