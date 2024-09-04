import { authOptions } from "@/app/libs/authOptions";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";
// import ChartRepresentation from '../../components/backoffice/Chart';
import AreaChartWithLabel from "@/components/area-chart";
import TimelineDemo from "@/components/timeline";
import { CalendarDemo } from "../../components/calendar";
import { Loans } from "../../libs/loans";
import { columns } from "./columns";
import { DataTable } from "./data-table";

export default async function LoansPage() {
  const session = await getServerSession(authOptions);
  if (session) {
    console.log(session?.user);
  }
  if (!session) {
    redirect("/login?callbackUrl=/dashboard");
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
    <div className="container relative mx-auto mt-5 w-full overflow-x-auto px-4 py-4 shadow-md sm:rounded-lg">
      <div className="flex h-full w-full flex-col items-center justify-start">
        <h1 className="text-xl text-green-600 md:text-2xl">
          Welcome {session?.user?.name}
        </h1>
      </div>
      <div className="flex items-center justify-between px-8 py-4">
        <h2 className="text-lg text-green-700 md:text-xl">
          Loan applications ({data.length})
        </h2>
        {session?.user?.role === "user" && (
          <Link href="/loans/application">
            <button className="transform rounded-md bg-green-600 p-2 text-base font-bold text-gray-100 transition duration-500 hover:scale-110 hover:bg-green-700">
              Apply for a loan
            </button>
          </Link>
        )}
      </div>
      <div className="container mx-auto px-8 py-10">
        <DataTable columns={columns} data={data} />
      </div>
      <div className="container flex flex-col gap-4 px-2 py-1">
        <div className="flex items-center justify-between">
          <CalendarDemo />
          {session?.user?.role === "admin" && <AreaChartWithLabel />}
        </div>
        <TimelineDemo />
      </div>
    </div>
  );
}
