"use client";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Link from "next/link";
import { useMemo } from "react";
import CurrencyAmount from "./CurrencyAmount";
import Date from "./Date";
import { kebabCase } from "lodash";

type Transaction = {
  id: string;
  name: string;
  date: string;
  amount: number;
  wallet: string;
};

const TransactionTable = ({
  transactions,
}: {
  transactions: Transaction[];
}) => {
  const data = useMemo(() => transactions, [transactions]);
  const columnHelper = createColumnHelper<Transaction>();
  const columns = [
    columnHelper.accessor("name", {
      cell: (info) => (
        <span className="whitespace-nowrap font-medium text-gray-900">
          {info.getValue()}
        </span>
      ),
      header: () => <span>Transaction</span>,
    }),
    columnHelper.accessor("amount", {
      cell: (info) => (
        <span className="block text-right">
          <CurrencyAmount amount={info.getValue()} />
        </span>
      ),
      header: () => <span className="block text-right">Amount</span>,
    }),
    columnHelper.accessor("date", {
      cell: (info) => (
        <span className="block text-right">
          <Date dateString={info.getValue()} />
        </span>
      ),
      header: () => <span className="block text-right">Date</span>,
    }),
    columnHelper.accessor("wallet", {
      cell: (info) => {
        const value = info.getValue();
        const href = `/wallet/${kebabCase(value)}`;
        return (
          <Link href={href} className="underline">
            {value}
          </Link>
        );
      },
      header: () => <span>Wallet</span>,
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-left text-sm text-neutral-500">
        <thead className="bg-gray-50 text-xs uppercase text-neutral-700">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="px-6 py-3">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="border-b bg-white">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-6 py-4">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
