
import { createClient } from '@supabase/supabase-js';
import Search from '../components/Search';
import { Loans } from '../libs/loans';

export default async function LoansPage({ searchParams }) {
  const applications = await Loans();
  console.log(applications);

  const supabaseUrl = 'https://brervsuzfhqonpklurug.supabase.co';
  const supabaseKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJyZXJ2c3V6Zmhxb25wa2x1cnVnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwMTY3MjgwNCwiZXhwIjoyMDE3MjQ4ODA0fQ.aETGjkBx6ydDeYIZQ0V4Wswl2zOYW3RsvIvFePBKrrc';
  const supabase = createClient(supabaseUrl, supabaseKey);

  const search = searchParams.q ?? '';
  const loantype = await supabase
    .from('Application')
    .select('*')
    .like('loantype', `%${search}%`);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-16 py-4 px-4 container mx-auto max-w-4xl">
      <div className="flex items-center px-8 py-8 justify-between">
        <h2 className="text-3xl text-teal-800">
          Loan applications ({applications.length})
        </h2>
        <Search />
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              Applicant&#39;s Name
            </th>
            <th scope="col" className="px-6 py-3">
              Applicant&#39;s Email
            </th>
            <th scope="col" className="px-6 py-3">
              Applicant&#39;s Mobile
            </th>
            <th scope="col" className="px-6 py-3">
              Loan Type
            </th>
            <th scope="col" className="px-6 py-3">
              Application Date
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">View</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {applications?.map((application) => {
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            const normalDate = new Date(application.appdate).toLocaleDateString(
              undefined,
              options
            );

            return (
              <tr
                key={application.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {application.id}
                </th>
                <td className="px-6 py-4">{application.appname}</td>
                <td className="px-6 py-4">{application.email}</td>
                <td className="px-6 py-4">{application.mobile}</td>
                <td className="px-6 py-4">{application.loantype}</td>
                <td className="px-6 py-4">{normalDate}</td>
                <td className="px-6 py-4 text-right">
                  <a
                    href={`/loans/${application.id}`}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    View
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
