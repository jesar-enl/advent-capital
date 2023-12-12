export default function LoanDetails({ value, onChange }) {
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
            value={value}
            onChange={onChange}
            required
            id="purpose"
            type="text"
            name="purpose"
            placeholder="e.g. Poultry"
            className="w-full p-1 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
          />
        </div>
        <div className="col-span-full">
          <label htmlFor="loantype" className="text-sm">
            Loan Type
          </label>
          <input
            value={value}
            onChange={onChange}
            required
            id="loantype"
            type="text"
            name="loantype"
            placeholder="e.g. Agribusiness loan"
            className="w-full p-1 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
          />
        </div>
        <div className="col-span-full sm:col-span-3">
          <label htmlFor="amount" className="text-sm">
            Loan Amount
          </label>
          <input
            value={value}
            onChange={onChange}
            required
            id="amount"
            type="number"
            name="amount"
            placeholder="e.g. 1000000"
            className="w-full p-1 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
          />
        </div>
        <div className="col-span-full sm:col-span-3">
          <label htmlFor="duration" className="text-sm">
            Loan Duration (max)
          </label>
          <input
            value={value}
            onChange={onChange}
            required
            id="duration"
            type="text"
            name="duration"
            placeholder="e.g. 6 months"
            className="w-full p-1 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
          />
        </div>
        <div className="col-span-full">
          <label htmlFor="words" className="text-sm">
            Amount in words
          </label>
          <input
            value={value}
            onChange={onChange}
            required
            id="words"
            type="text"
            name="words"
            placeholder="e.g. One million shillings only"
            className="w-full p-1 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
          />
        </div>
        <div className="col-span-full sm:col-span-3">
          <label htmlFor="source" className="text-sm">
            Loan Repayment source
          </label>
          <select
            value={value}
            onChange={onChange}
            defaultValue={'default'}
            required
            id="source"
            name="source"
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
            value={value}
            onChange={onChange}
            required
            id="bustype"
            type="text"
            name="bustype"
            placeholder=""
            className="w-full p-1 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
          />
        </div>
        <div className="col-span-full sm:col-span-3">
          <label htmlFor="permonth" className="text-sm">
            How much do you generate per month?
          </label>
          <input
            value={value}
            onChange={onChange}
            required
            id="permonth"
            type="text"
            name="permonth"
            placeholder=""
            className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
          />
        </div>
        <div className="col-span-full">
          <label htmlFor="collateral" className="text-sm">
            Collateral Details:
          </label>
          <textarea
            required
            value={value}
            onChange={onChange}
            id="collateral"
            placeholder=""
            name="collateral"
            className="w-full p-1 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
          ></textarea>
        </div>
      </div>
    </fieldset>
  );
}
