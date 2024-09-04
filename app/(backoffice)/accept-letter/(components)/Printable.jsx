"use client";
import PreviewLetter from './PreviewLetter'
import { useRef } from "react";
import { PiPrinterThin } from "react-icons/pi";
import { useReactToPrint } from "react-to-print";


const Buttons = ({ printLetter }) => {
  const handlePrint = useReactToPrint({
    content: () => printLetter.current,
  });

  return (
    <div className="inline-flex rounded-md shadow-sm" role="group">
      <button
        type="button"
        onClick={handlePrint}
        className="inline-flex items-center rounded-lg border border-gray-200 bg-white px-3 py-1 text-lg font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-500 focus:ring-2 focus:ring-blue-500"
      >
        <PiPrinterThin className="me-2 text-xl text-gray-900" />
        Print
      </button>
    </div>
  );
};

const Printable = ({ app }) => {
  const printLetter = useRef();
  return (
    <div className="">
      <Buttons printLetter={printLetter} />
      <div ref={printLetter}>
        <PreviewLetter data={app} />
      </div>
    </div>
  );
};

export default Printable;
