// import Search from '../../../components/Search';
import { authOptions } from '@/app/libs/authOptions';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { Loans } from '../../libs/loans';

export default async function LoansPage() {
  
  const session = await getServerSession(authOptions);
  if (session) {
    console.log(session?.user);
  }
  if (!session) {
    redirect('/login');
  }
  const userId = session?.user?.email
  const applications = await Loans(userId);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5 py-4 px-4 container mx-auto max-w-3xl">
      <div className="flex flex-col items-center justify-start w-full h-full">
        <h1 className="text-2xl text-teal-400">
          Welcome {session?.user?.name}
        </h1>
      </div>
      <div className="flex items-center px-8 py-4 justify-between">
        <h2 className="text-xl text-teal-800">
          Loan applications ({applications.length})
        </h2>
        {/* <Search /> */}
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
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
            const applicationDate = application.appdate;
            const normalDate = new Date(applicationDate).toLocaleDateString(
              undefined,
              options
            );

            return (
              <tr
                key={
                  application.id
                }
                className="bg-white border-b hover:bg-gray-50"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  {application.id}
                </th>
                <td className="px-6 py-4">
                  {application.appname}
                </td>
                <td className="px-6 py-4">
                  {application.email}
                </td>
                <td className="px-6 py-4">
                  {application.mobile}
                </td>
                <td className="px-6 py-4">
                  {application.loantype}
                </td>
                <td className="px-6 py-4">{normalDate}</td>
                <td className="px-6 py-4 text-right">
                  <a
                    href={`/loans/${application.id}`}
                    className="font-medium text-blue-600 hover:underline"
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
