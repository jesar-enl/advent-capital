'use client';

import { Alert } from 'flowbite-react';
import { HiInformationCircle } from 'react-icons/hi';

export default function VerifyAccount() {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-cyan-300">
      <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
        <div className="w-full rounded-lg bg-white shadow-2xl sm:max-w-2xl md:mt-0 xl:p-0 dark:border dark:border-gray-700 dark:bg-gray-800">
          <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
            <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Verify Account
            </h1>
            <Alert
              color="success"
              icon={HiInformationCircle}
              className="h-24 text-lg"
            >
              <span className="font-medium">Please Check your Email!</span> We
              have sent you a Verification Link and Click on the Link to Verify
              your Account. Thank you!
            </Alert>
            <div className="my-6">
              <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                Did not see it?{" "}
                <button className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                  Resend the Link
                </button>
              </p>
            </div>
          </div>
        </div>
        <div className="pt-6 text-base font-semibold leading-7">
          <p className="text-md font-sans text-red-500 hover:text-red-800">
            <a href="/" className="absolute">
              &larr; Home
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
