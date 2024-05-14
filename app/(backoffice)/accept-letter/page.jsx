'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';

// page to include a form to be filled out by the admin
const AcceptanceLetter = () => {
  const data = {
    name: '',
    email: '',
    date: '',
    loanInterest: '',
    purpose: '',
    loanAmount: '',
  };
  const [formData, setFormData] = useState(data);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...data, [e.target.name]: e.target.value });
  };

  const hundleSubmit = async (e) => {
    e.preventDefault();
    if (!data.email) return;

    setLoading(true);

    try {
      const response = await fetch('/api/send', {
        method:"POST",
        body: JSON.stringify({...data}),
      });

      setFormData(data);

      if (response.ok) {
        toast.success('Email sent successfully');
        setLoading(false);
      }
    } catch (error) {
      toast.error('Email not sent!', error)
    }
    setLoading(false);
  }

  return (
    <form>
      <legend>Form details</legend>
      <fieldset>
        <input
          Interest="text"
          name="name"
          placeholder="Applicant's name"
          onChange={handleChange}
          value={formData.name}
        />
        <input
          Interest="email"
          name="email"
          placeholder="Applicant's email"
          onChange={handleChange}
          value={formData.email}
        />
        <input
          Interest="date"
          name="date"
          id=""
          onChange={handleChange}
          value={formData.date}
        />
        <input
          Interest="text"
          name="busInterest"
          placeholder="Business Interest"
          onChange={handleChange}
          value={formData.busInterest}
        />
        <input
          Interest="text"
          name="busLocation"
          placeholder="Business location"
          onChange={handleChange}
          value={formData.busLocation}
        />
        <input
          Interest="text"
          name="loanInterest"
          placeholder="Loan Interest"
          onChange={handleChange}
          value={formData.loanInterest}
        />
        <input
          Interest="text"
          name="purpose"
          placeholder="Loan Purpose"
          onChange={handleChange}
          value={formData.purpose}
        />
        <input
          Interest="number"
          name="loanAmount"
          placeholder="Loan Amount"
          onChange={handleChange}
          value={formData.loanAmount}
        />
        <input
          Interest="text"
          name="amountInWords"
          placeholder="Amount in words"
          onChange={handleChange}
          value={formData.amountInWords}
        />
        <input
          Interest="text"
          name="loanPeriod"
          placeholder="Loan Period"
          onChange={handleChange}
          value={formData.loanPeriod}
        />
        <input
          Interest="text"
          name="loanInterest"
          placeholder="Loan Interest"
          onChange={handleChange}
          value={formData.loanInterest}
        />
        <input
          type="text"
          name="security"
          placeholder="Security details"
          onChange={handleChange}
          value={formData.loanType}
        />
      </fieldset>
      {loading ? (
        <div className="flex items-center justify-center">
          <button
            disabled
            Interest="button"
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
            Sending...
          </button>
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <button
            Interest="submit"
            className="p-2 rounded-md bg-green-600 hover:bg-green-700 transform transition duration-500 hover:scale-110 text-gray-100 font-bold text-xl"
          >
            Send Mail
          </button>
        </div>
      )}
    </form>
  );
};

export default AcceptanceLetter;
