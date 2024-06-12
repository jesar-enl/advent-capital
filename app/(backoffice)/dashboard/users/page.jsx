import React from "react";
import { Users } from "../../../libs/users";
import { columns } from "./columns";
import { DataTable } from "./data-table";

export const metadata = {
  title: "Advent Capital Users",
  description:
    "These are the number of users registered at Advent Capital.",
};

export default async function UsersPage() {
  async function getData() {
    const users = await Users();
    return users;
  }
  const data = await getData();

  return (
    <div className="container relative mx-auto mt-5 w-full overflow-x-auto px-4 py-4 shadow-md sm:rounded-lg">
      <div className="container mx-auto px-8 py-10">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}
