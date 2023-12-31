export default function PersonalDetails({value, onChange}) {
  return (
    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-300">
      <div className="space-y-2 col-span-full lg:col-span-1">
        <p className="font-medium">Personal Inormation</p>
        <p className="text-xs">Fill out all the fields</p>
      </div>
      <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 p-3 bg-gray-200">
        <div className="col-span-full sm:col-span-3">
          <label htmlFor="firstname" className="text-sm">
            Surname
          </label>
          <input
            value={value}
            onChange={onChange}
            required
            id="surname"
            type="text"
            name="surname"
            placeholder="e.g John"
            className="w-full p-1 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
          />
        </div>
        <div className="col-span-full sm:col-span-3">
          <label htmlFor="lastname" className="text-sm">
            Other name(s)
          </label>
          <input
            value={value}
            onChange={onChange}
            required
            id="othername"
            type="text"
            name="othername"
            placeholder="e.g. Doe"
            className="w-full p-1 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
          />
        </div>
        <div className="col-span-full sm:col-span-3">
          <label htmlFor="email" className="text-sm">
            Email
          </label>
          <input
            value={value}
            onChange={onChange}
            required
            id="email"
            type="email"
            name="email"
            placeholder="e.g. example@test.com"
            className="w-full p-1 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
          />
        </div>
        <div className="col-span-full sm:col-span-3">
          <label htmlFor="dob" className="text-sm">
            Date of Birth
          </label>
          <input
            value={value}
            onChange={onChange}
            required
            id="dob"
            type="date"
            name="dob"
            className="w-full p-1 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
          />
        </div>
        <div className="col-span-full sm:col-span-2">
          <label htmlFor="gender" className="text-sm">
            Gender
          </label>
          <select
            value={value}
            onChange={onChange}
            defaultValue={'default'}
            required
            id="gender"
            name="gender"
            className="w-full p-1 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
          >
            <option className="text-gray-400" value="default" disabled hidden>
              Select gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="col-span-full sm:col-span-2">
          <label htmlFor="marital" className="text-sm">
            Marital Status
          </label>
          <select
            value={value}
            onChange={onChange}
            required
            defaultValue={'default-v'}
            id="marital"
            name="marital"
            className="w-full p-1 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
          >
            <option className="text-gray-400" value="default-v" disabled hidden>
              Select marital status
            </option>
            <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="widowed">Widowed</option>
            <option value="divorced">Divorced</option>
          </select>
        </div>
        <div className="col-span-full sm:col-span-2">
          <label htmlFor="mobile" className="text-sm">
            Mobile No.:
          </label>
          <input
            value={value}
            onChange={onChange}
            required
            id="mobile"
            type="text"
            name="mobile"
            placeholder="e.g. 0712345678"
            className="w-full p-1 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
          />
        </div>
        <div className="col-span-full sm:col-span-3">
          <label htmlFor="nin" className="text-sm">
            ID Card No (NIN)
          </label>
          <input
            value={value}
            onChange={onChange}
            required
            id="nin"
            type="text"
            name="nin"
            placeholder=" CM012345678PVBG"
            className="w-full p-1 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
          />
        </div>
        <div className="col-span-full sm:col-span-3">
          <label htmlFor="nin-date" className="text-sm">
            ID Card Expiry Date
          </label>
          <input
            value={value}
            onChange={onChange}
            required
            id="nin-date"
            name="nindate"
            type="date"
            className="w-full p-1 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
          />
        </div>
        <div className="col-span-full sm:col-span-3">
          <label htmlFor="type" className="text-sm">
            Borrower type
          </label>
          <select
            value={value}
            onChange={onChange}
            required
            defaultValue={'default-v1'}
            id="type"
            name="type"
            className="w-full p-1 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
          >
            <option
              className="text-gray-400"
              value="default-v1"
              disabled
              hidden
            >
              Select borrower type
            </option>
            <option value="new">New Borrower</option>
            <option value="existing">Existing Borrower</option>
          </select>
        </div>
        <div className="col-span-full">
          <hr />
        </div>
        <div className="col-span-full">
          <h1 className="text-xl">
            Residential Details{' '}
            <span className="italic text-xs text-gray-500">
              (Please provide a sketch map to the residence)
            </span>
          </h1>
        </div>
        <div className="col-span-full sm:col-span-3">
          <label htmlFor="owner" className="text-sm">
            Home Ownership
          </label>
          <select
            value={value}
            onChange={onChange}
            required
            defaultValue={'default-v2'}
            id="owner"
            name="owner"
            className="w-full p-1 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
          >
            <option
              className="text-gray-400"
              value="default-v2"
              disabled
              hidden
            >
              Select home Ownership
            </option>
            <option value="owned">Owned</option>
            <option value="rented">Rented</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="col-span-full sm:col-span-3">
          <label htmlFor="period" className="text-sm">
            Period at residence{' '}
            <span className="italic text-xs text-gray-500">(years)</span>
          </label>
          <input
            value={value}
            onChange={onChange}
            required
            id="period"
            type="text"
            name="period"
            className="w-full p-1 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
          />
        </div>
        <div className="col-span-full sm:col-span-2">
          <label htmlFor="district" className="text-sm">
            District
          </label>
          <input
            value={value}
            onChange={onChange}
            required
            id="district"
            type="text"
            name="district"
            placeholder=""
            className="w-full p-1 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
          />
        </div>
        <div className="col-span-full sm:col-span-2">
          <label htmlFor="village" className="text-sm">
            Village / County
          </label>
          <input
            value={value}
            onChange={onChange}
            required
            id="village"
            type="text"
            name="village"
            placeholder=""
            className="w-full p-1 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
          />
        </div>
        <div className="col-span-full sm:col-span-2">
          <label htmlFor="role" className="text-sm">
            Community Role (if any)
          </label>
          <input
            value={value}
            onChange={onChange}
            required
            id="role"
            type="text"
            name="role"
            placeholder="e.g. Defence secretary"
            className="w-full p-1 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
          />
        </div>
        <div className="col-span-full sm:col-span-2">
          <label htmlFor="child" className="text-sm">
            School Children (No.)
          </label>
          <select
            value={value}
            onChange={onChange}
            required
            defaultValue={'default-v3'}
            id="child"
            name="child"
            className="w-full p-1 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
          >
            <option
              className="text-gray-400"
              value="default-v3"
              disabled
              hidden
            >
              Select number
            </option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <div className="col-span-full">
          <h1 className="text-xl">Spouse(s) Details</h1>
        </div>
        <div className="col-span-full">
          <label htmlFor="spouce-name" className="text-sm">
            Names:
          </label>
          <input
            value={value}
            onChange={onChange}
            id="spouce-name"
            type="text"
            name="spoucename"
            placeholder="e.g Joan"
            className="w-full p-1 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
          />
        </div>
        <div className="col-span-full sm:col-span-3">
          <label htmlFor="spouce-mobile" className="text-sm">
            Mobile No.:
          </label>
          <input
            value={value}
            onChange={onChange}
            required
            id="spoucemobile"
            type="text"
            name="spoucemobile"
            placeholder="e.g. 0712345678"
            className="w-full p-1 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
          />
        </div>
        <div className="col-span-full sm:col-span-3">
          <label htmlFor="spouce-email" className="text-sm">
            Email
          </label>
          <input
            value={value}
            onChange={onChange}
            required
            id="spouce-email"
            type="email"
            name="spouceemail"
            placeholder="Email"
            className="w-full p-1 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
          />
        </div>
      </div>
    </fieldset>
  );
}
