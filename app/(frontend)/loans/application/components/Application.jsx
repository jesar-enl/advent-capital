'use client';

import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { UploadButton } from '@/utils/uploadthing';
import toast from 'react-hot-toast';
import Declarations from '../../../../components/Declarations';
import LoanDetails from '../../../../components/LoanDetails';
import PersonalDetails from '../../../../components/PersonalDetails';
import { redirect } from 'next/navigation';

import { useState } from 'react';
import React from 'react';

export default function Application() {
  const { data: session, status } = useSession();
  const [files, setFiles] = useState();
  const [previous, setPrevious] = useState();
  const [formData, setFormData] = useState({
    surname: '',
    othername: '',
    email: '',
    dob: '',
    gender: '',
    marital: '',
    mobile: '',
    nin: '',
    nindate: '',
    type: '',
    owner: '',
    period: '',
    district: '',
    village: '',
    role: '',
    child: '',
    spoucename: '',
    spoucemobile: '',
    spouceemail: '',
    purpose: '',
    loantype: '',
    amount: '',
    duration: '',
    words: '',
    source: '',
    bustype: '',
    permonth: '',
    collateral: '',
    appname: '',
    appdate: '',
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [image, setImage] = useState('');

  if (!session) {
    redirect('/login?callbackUrl=/loans/application')
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    try {
      setLoading(true);
      const res = await fetch(`${baseUrl}/api/application`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, image }),
      });
      console.log(res);
      if (!res.ok) {
        setLoading(false);
        toast.error('Error while submitting application');
        return;
      }
      setLoading(false);
      toast.success('Application submitted');
      router.push('/dashboard');
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error('Error submitting application');
    }
  };

  return (
    <section className="p-6 bg-gray-200 text-gray-900 mt-1">
      <Image
        src="/images/adventcapital_logo.png"
        alt="Advent Capital Logo"
        className="absolute top-16 right-0 h-16 w-auto"
        width="120"
        height={120}
      />
      {status === 'authenticated' && (
        <form
          noValidate=""
          onSubmit={handleSubmit}
          className="container flex flex-col mx-auto space-y-12"
        >
          {/* Personal details of the applicant */}
          <label htmlFor="files" className="block text-sm font-medium">
            Applicant&#39;s passport photo
          </label>

          {image ? (
            <Image src={image} alt="profile pic" width={120} height={120} />
          ) : (
            <UploadButton
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                // Do something with the response
                setImage(res[0].url);
              }}
              onUploadError={(error) => {
                // Do something with the error.
                toast.error(`ERROR! ${error.message}`);
              }}
            />
          )}
          {/* Applicant's personal details */}
          <PersonalDetails onChange={handleChange} value={formData.name} />

          {/* Loan details of the applicant */}
          <LoanDetails onChange={handleChange} value={formData.name} />

          {/* declarations and Pledge */}
          <Declarations onChange={handleChange} value={formData.name} />

          {/** submit button */}
          {loading ? (
            <div className="flex items-center justify-center">
              <button
                disabled
                type="button"
                className="p-2 rounded-md bg-teal-600 text-gray-100 font-bold text-xl"
              >
                <svg
                  aria-hidden="true"
                  role="status"
                  className="inline w-4 h-4 mr-3 text-white animate-spin"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="#E5E7EB"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentColor"
                  />
                </svg>
                Submitting Application...
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="p-2 rounded-md bg-green-600 hover:bg-green-700 transform transition duration-500 hover:scale-110 text-gray-100 font-bold text-xl"
              >
                Submit Application
              </button>
            </div>
          )}
          <div className="flex justify-end">
            <Link
              href="/dashboard"
              className="text-green-600 text-md hover:text-white hover:bg-green-400 hover:p-3 hover:rounded-lg transform transition duration-500 hover:scale-110"
            >
              Go to your Dashboard
            </Link>
          </div>
        </form>
      )}
    </section>
  );
}
