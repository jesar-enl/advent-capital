import React from 'react'

export default function PreviewLetter({ data }) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const date = new Date(data.date).toLocaleDateString(undefined, options);

  return (
    <section className="bg-white p-6 text-gray-900">
      <div className="container mx-auto flex flex-col space-y-2">
        <div className="flex justify-end">
          <img
            src="/images/adventcapital_logo.png"
            alt="Advent Capital Logo"
            className="right-0"
          />
        </div>
      </div>
      {/* 
        name: '',
        email: '',
        date: '',
        bustype: '',
        busLocation: '',
        loanType: '',
        loanInterest: '',
        purpose: '',
        loanAmount: '',
        amountInWords: '',
        loanPeriod: '',
        security: '',
      */}
    </section>
  );
}
