import { authOptions } from '@/app/libs/authOptions';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { redirect } from 'next/navigation';
// import ChartRepresentation from '../../components/backoffice/Chart';
import { Loans } from '../../libs/loans';
import { columns } from './columns';
import { DataTable } from './data-table';
import { CalendarDemo } from '../../components/calendar';
import TimelineDemo from '@/components/timeline';

export default async function LoansPage() {
  const session = await getServerSession(authOptions);
  if (session) {
    console.log(session?.user);
  }
  if (!session) {
    redirect('/login?callbackUrl=/dashboard');
  }
  const email = session?.user?.email;
  const role = session?.user?.role;

  async function getData() {
    // Fetch data from your API here.
    const application = await Loans(email, role);
    return application;
  }
  // const applications = await Loans(email, role);
  // console.log(applications);
  const data = await getData();

  console.log(data);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5 py-4 px-4 container mx-auto w-full">
      <div className="flex flex-col items-center justify-start w-full h-full">
        <h1 className="text-xl md:text-2xl text-green-600">
          Welcome {session?.user?.name}
        </h1>
      </div>
      <div className="flex items-center px-8 py-4 justify-between">
        <h2 className="text-lg md:text-xl text-green-700">
          Loan applications ({data.length})
        </h2>
        {session?.user?.role === 'user' && (
          <Link href="/loans/application">
            <button className="p-2 rounded-md bg-green-600 hover:bg-green-700 transform transition duration-500 hover:scale-110 text-gray-100 font-bold text-base">
              Apply for a loan
            </button>
          </Link>
        )}
      </div>
      <div className="container mx-auto px-8 py-10">
        <DataTable columns={columns} data={data} />
      </div>
      <div className="container flex flex-col gap-4 px-2 py-1">
        <CalendarDemo />
        <TimelineDemo />
      </div>
    </div>
  );
}
