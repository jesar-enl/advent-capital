'use client';

import toast from 'react-hot-toast';
import Declarations from '../../components/Declarations';
import LoanDetails from '../../components/LoanDetails';
import PersonalDetails from '../../components/PersonalDetails';

import { useEffect, useState } from 'react';

export default function ApplicationForm() {
  const [files, setFiles] = useState();
  const [previous, setPrevious] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Application submitted.');
  };

  useEffect(() => {
    if (!files) return;

    let tmp = [];
    for (let i = 0; i < files.length; i++) {
      tmp.push(URL.createObjectURL(files[i]));
    }

    const objectUrls = tmp;
    setPrevious(objectUrls);

    for (let i = 0; i < objectUrls.length; i++) {
      URL.revokeObjectURL(objectUrls[i]);
    }
  }, [files]);

  return (
    <section className="p-6 bg-gray-200 text-gray-900 mt-20">
      <form
        noValidate=""
        action=""
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
        <PersonalDetails />

        {/* Loan details of the applicant */}
        <LoanDetails />

        {/* declarations and Pledge */}
        <Declarations />

        {/** submit button */}
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="p-2 rounded-md bg-teal-600 text-gray-100 font-bold text-xl"
          >
            Submit Application
          </button>
        </div>
      </form>
    </section>
  );
}
