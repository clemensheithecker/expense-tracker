import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { kebabCase } from "lodash";
import Link from "next/link";
import { useMemo } from "react";
import { CurrencyAmount, FormattedDate } from "../Text";
import { Transaction } from "./types";

export const TransactionsTable = ({
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
          <FormattedDate dateString={info.getValue()} />
        </span>
      ),
      header: () => <span className="block text-right">Date</span>,
    }),
    columnHelper.accessor("wallet", {
      cell: (info) => {
        const value = info.getValue();
        const href = `/wallet/${kebabCase(value)}`;
        return (
          <Link href={href} className="hover:underline">
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
    <div className="relative hidden overflow-x-auto sm:block">
      <table className="w-full text-left text-neutral-700">
        <thead className="border-b-2 border-neutral-200 bg-neutral-50 text-sm font-semibold tracking-wide text-neutral-900">
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
            <tr
              key={row.id}
              className="text-sm odd:bg-white even:bg-neutral-50"
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-6 py-3">
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
