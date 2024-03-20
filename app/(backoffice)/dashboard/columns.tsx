'use client';

import { ColumnDef } from '@tanstack/react-table';
import { MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

// This type is used to define the shape of our data.
export type Application = {
  id: string;
  name: string;
  email: string;
  mobile: string;
  loantype: string;
  appdate: string;
};

export const columns: ColumnDef<Application>[] = [
  {
    accessorKey: 'appname',
    header: 'Name',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'mobile',
    header: 'Mobile',
  },
  {
    accessorKey: 'loantype',
    header: 'Loan Type',
  },
  {
    accessorKey: 'appdate',
    header: 'Date',
    cell: ({ row }) => {
      const date = new Date(row.getValue('appdate'));
      const formated = date.toLocaleDateString();
      return <div className="font-medium">{formated}</div>;
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const application = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(application.id)}
            >
              Copy application ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View application</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
