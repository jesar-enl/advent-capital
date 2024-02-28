"use client";

import { PiPrinterThin } from "react-icons/pi";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from 'react-icons/rx';
import { useReactToPrint } from 'react-to-print';
import {useRef} from 'react';

const Buttons = () => {
  const printForm = useRef();
  const handlePrint = useReactToPrint({
    content: () => printForm.current,
  });

  return (
    <div className="inline-flex rounded-md shadow-sm" role="group">
      {/* <button
        type="button"
        onClick={handlePrint}
        className="inline-flex items-center px-4 py-2 text-xl font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
      >
        <PiPrinterThin className="me-2 text-xl" />
        Print
      </button> */}
      <button
        type="button"
        className="inline-flex items-center px-4 py-2 text-xl font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
      >
        <TiTick className="me-2 text-green-600 text-xl" />
        Accept
      </button>
      <button
        type="button"
        className="inline-flex items-center px-4 py-2 text-xl font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
      >
        <RxCross2 className="me-2 text-red-500 text-xl" />
        Reject
      </button>
    </div>
  );
};

export default Buttons;
