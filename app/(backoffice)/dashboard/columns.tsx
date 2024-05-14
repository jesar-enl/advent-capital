'use client';
import Link from 'next/link';
import { ColumnDef } from '@tanstack/react-table';
import { MoreHorizontal, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {Badge} from '@/components/ui/badge'

// This type is used to define the shape of our data.
export type Application = {
  id: string;
  name: string;
  email: string;
  mobile: string;
  loantype: string;
  appdate: string;
  status: string;
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
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = row.original.status;
      switch (status) {
        case 'PENDING':
          return (
            <div className="hover:bg-transparent capitalize bg-orange-100 text-orange-900">
              {status}
            </div>
          );
        case 'APPROVED':
          return (
            <div className="hover:bg-transparent capitalize bg-green-100 text-green-900">
              {status}
            </div>
          );
        case 'REJECTED':
          return (
            <div className="hover:bg-transparent capitalize bg-red-100 text-red-900">
              {status}
            </div>
          );
        default:
          return (
            <div className="capitalize bg-neutral-100 text-neutral-600">
              {status}
            </div>
          );
      }
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
            <DropdownMenuItem>
              <Link
                href={`loans/${application.id}`}
                className="flex items-center gap-2"
              >
                <Eye />
                View application
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
