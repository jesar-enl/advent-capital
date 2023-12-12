export default function Declarations({ value, onChange }) {
  return (
    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-300">
      <div className="space-y-2 col-span-full lg:col-span-1">
        <p className="font-medium">Declarations and Pledge</p>
        <p className="text-xs">
          Please read the declarations carefully before you submit the form.
        </p>
      </div>
      <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 bg-gray-100 rounded p-4">
        <div className="col-span-full">
          <label htmlFor="declaration" className="text-sm font-bold">
            Declaration
          </label>
          <p className="text-sm mt-2">
            I/We declare that I/We have voluntarily applied for the loan from
            Advent Capital without any coercion and the information given in
            this form is true and complete and understand that any misstatements
            in the information providedin this form lead to automatic
            disqualification of this application.
          </p>
        </div>
        <div className="col-span-full">
          <label htmlFor="pledge" className="text-sm font-bold">
            Pledge
          </label>
          <ul className="list-disc pl-4 text-sm mt-2">
            <li>
              In the event of the loan applied for being granted and accepted by
              me/us, I/We agreeto be bound by the rules of Advent Capital, I/We
              undertake to sign all documents as may be required to secure a
              Advent Capital loan and to pay all costs in connection therewith
              as will be specified. I/We acknowledge liabilityfor the
              administration fees and wasted costs incurred by Advent Capital or
              its lawyers in the event of my failure to meet my loan obligations
              that may lead to forced recovery.
            </li>
            <li>
              I/We agree that Advent capital may repossess/dispose off security
              pledged if I/We fail to meet my loan repayment obligations either
              in part or wholly. I/We declare that the information given in this
              form is to the best of my/our understanding correct. I/We also
              understand that any misstatemennts in the information provided in
              this form will lead to automatic disqualification of this
              application.
            </li>
          </ul>
        </div>
        <div className="col-span-full sm:col-span-3">
          <label htmlFor="appname" className="text-sm">
            Applicant Name:
          </label>
          <input
            value={value}
            onChange={onChange}
            required
            id="appname"
            type="text"
            name="appname"
            placeholder="e.g. John Doe"
            className="w-full p-1 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
          />
        </div>
        <div className="col-span-full sm:col-span-3">
          <label htmlFor="date" className="text-sm">
            Date
          </label>
          <input
            value={value}
            onChange={onChange}
            required
            id="date"
            type="date"
            name="appdate"
            className="w-full p-1 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
          />
        </div>
      </div>
    </fieldset>
  );
}
