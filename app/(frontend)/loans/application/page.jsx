'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';
import toast from 'react-hot-toast';
import Declarations from '../../../components/Declarations';
import LoanDetails from '../../../components/LoanDetails';
import PersonalDetails from '../../../components/PersonalDetails';

import { useState } from 'react';

export default function ApplicationForm() {
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

  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center align-center bg-gradient-to-b from-green-800 via-teal-700 to-teal-500">
        <p className="mb-2 text-lg">Please Login to your to apply for a loan</p>
        <Link
          href="/login"
          className="bg-blue-600 p-2 text-gray-100 rounded-lg"
        >
          Login
        </Link>
      </div>
    );
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
        body: JSON.stringify(formData),
      });
      console.log(res);
      if (!res.ok) {
        setLoading(false);
        toast.error('Error while submitting application');
        return;
      }
      toast.success('Application submitted');
      router.push('/dashboard');
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error('Error submitting application');
    }
  };

  // useEffect(() => {
  //   if (!files) return;

  //   let tmp = [];
  //   for (let i = 0; i < files.length; i++) {
  //     tmp.push(URL.createObjectURL(files[i]));
  //   }

  //   const objectUrls = tmp;
  //   setPrevious(objectUrls);

  //   for (let i = 0; i < objectUrls.length; i++) {
  //     URL.revokeObjectURL(objectUrls[i]);
  //   }
  // }, [files]);

  return (
    <section className="p-6 bg-gray-200 text-gray-900 mt-20">
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
          {/* {profilePic ? (
            <CldImage
              width="140"
              height="140"
              src={profilePic}
              alt="My profile picture"
            />
          ) : (
            <CldUploadButton className="bg-rose-600 text-gray-100 w-24 h-10 rounded-lg p-1" uploadPreset="profilePic" onUpload={(data) => setProfilePic(data.info.secure_url)} />
          )} */}
          <div className="flex items-center">
            <input
              id="dropzone-file"
              type="file"
              accept="image/*"
              onChange={(e) => {
                if (e.target.files && e.target.files.length > 0) {
                  setFiles(e.target.files);
                }
              }}
            />
          </div>
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
                className="p-2 rounded-md bg-teal-600 text-gray-100 font-bold text-xl"
              >
                Submit Application
              </button>
            </div>
          )}
        </form>
      )}
    </section>
  );
}
