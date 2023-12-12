import { Loan } from '../../libs/loan';

export default async function LoanDetails({ params: { id } }) {
  const application = await Loan(id);

  return (
    <div className="flex flex-col mt-28">
      <div className="flex gap-3 items-center">
        <h2 className="text-3xl text-teal-800">
          Loan Application: #{application.id}
        </h2>
      </div>
    </div>
  );
}
