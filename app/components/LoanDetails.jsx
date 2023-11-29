import React from 'react';

export default function LoanDetails() {
  return (
    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-300">
      <div className="space-y-2 col-span-full lg:col-span-1">
        <p className="font-medium">Loan Details</p>
        <p className="text-xs">All fields are required.</p>
      </div>
      <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 p-3 bg-gray-200">
        <div className="col-span-full">
          <label htmlFor="purpose" className="text-sm">
            Loan Purpose
          </label>
          <input
            required
            id="purpose"
            type="text"
            placeholder="e.g. Poultry"
            className="w-full p-1 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
          />
        </div>
        <div className="col-span-full">
          <label htmlFor="type" className="text-sm">
            Loan Type
          </label>
          <input
            required
            id="type"
            type="text"
            placeholder="e.g. Agribusiness loan"
            className="w-full p-1 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
          />
        </div>
        <div className="col-span-full sm:col-span-3">
          <label htmlFor="amount" className="text-sm">
            Loan Amount
          </label>
          <input
            required
            id="amount"
            type="number"
            placeholder="e.g. 1000000"
            className="w-full p-1 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
          />
        </div>
        <div className="col-span-full sm:col-span-3">
          <label htmlFor="duration" className="text-sm">
            Loan Duration (max)
          </label>
          <input
            required
            id="duration"
            type="text"
            placeholder="e.g. 6 months"
            className="w-full p-1 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
          />
        </div>
        <div className="col-span-full">
          <label htmlFor="words" className="text-sm">
            Amount in words
          </label>
          <input
            required
            id="words"
            type="text"
            placeholder="e.g. One million shillings only"
            className="w-full p-1 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
          />
        </div>
        <div className="col-span-full sm:col-span-3">
          <label htmlFor="source" className="text-sm">
            Loan Repayment source
          </label>
          <select
            defaultValue={'default'}
            required
            id="source"
            className="w-full p-1 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
          >
            <option className="text-gray-400" value="default" disabled hidden>
              Select repayment source
            </option>
            <option value="business">Business</option>
            <option value="salary">Salary</option>
          </select>
        </div>
        <div className="col-span-full sm:col-span-3">
          <label htmlFor="bustype" className="text-sm">
            Business Type/employer
          </label>
          <input
            required
            id="bustype"
            type="text"
            placeholder=""
            className="w-full p-1 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
          />
        </div>
        <div className="col-span-full sm:col-span-3">
          <label htmlFor="permonth" className="text-sm">
            How much do you generate per month?
          </label>
          <input
            required
            id="permonth"
            type="text"
            placeholder=""
            className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
          />
        </div>
        <div className="col-span-full">
          <label htmlFor="collateral" className="text-sm">
            Collateral Details:
          </label>
          <textarea
            id="collateral"
            placeholder=""
            className="w-full p-1 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
          ></textarea>
        </div>
      </div>
    </fieldset>
  );
}
