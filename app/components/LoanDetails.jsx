export default function LoanDetails({ value, onChange }) {
  return (
    <fieldset className="grid grid-cols-4 gap-6 rounded-md bg-gray-300 p-6 shadow-sm">
      <div className="col-span-full space-y-2 lg:col-span-1">
        <p className="font-medium">Loan Details</p>
        <p className="text-xs">All fields are required.</p>
      </div>
      <div className="col-span-full grid grid-cols-6 gap-4 bg-gray-200 p-3 lg:col-span-3">
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
            className="focus:ri focus:ri w-full rounded-md p-1 focus:ring dark:border-gray-700 dark:text-gray-900"
          />
        </div>
        <div className="col-span-full">
          <label htmlFor="loantype" className="text-sm">
            Loan Type
          </label>
          <select
            value={value}
            onChange={onChange}
            defaultValue={"default-v1"}
            required
            id="loantype"
            name="loantype"
            className="focus:ri focus:ri w-full rounded-md p-1 focus:ring dark:border-gray-700"
          >
            <option
              className="text-gray-400"
              value="default-v1"
              disabled
            >
              Select loan type
            </option>
            <option value="agri">Agribusiness loan</option>
            <option value="school">School fees loan</option>
            <option value="business">Business loan</option>
            <option value="salary">Salary loan</option>
            <option value="home">Home Improvement loan</option>
            <option value="watersan">Water &Sanitation loan</option>
          </select>
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
            className="focus:ri focus:ri w-full rounded-md p-1 focus:ring dark:border-gray-700 dark:text-gray-900"
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
            className="focus:ri focus:ri w-full rounded-md p-1 focus:ring dark:border-gray-700 dark:text-gray-900"
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
            className="focus:ri focus:ri w-full rounded-md p-1 focus:ring dark:border-gray-700 dark:text-gray-900"
          />
        </div>
        <div className="col-span-full sm:col-span-3">
          <label htmlFor="source" className="text-sm">
            Loan Repayment source
          </label>
          <select
            value={value}
            onChange={onChange}
            defaultValue={"default"}
            required
            id="source"
            name="source"
            className="focus:ri focus:ri w-full rounded-md p-1 focus:ring dark:border-gray-700 dark:text-gray-900"
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
            className="focus:ri focus:ri w-full rounded-md p-1 focus:ring dark:border-gray-700 dark:text-gray-900"
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
            className="focus:ri focus:ri w-full rounded-md focus:ring dark:border-gray-700 dark:text-gray-900"
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
            className="focus:ri focus:ri w-full rounded-md p-1 focus:ring dark:border-gray-700 dark:text-gray-900"
          ></textarea>
        </div>
      </div>
    </fieldset>
  );
}
