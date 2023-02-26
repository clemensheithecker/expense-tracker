"use client";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo } from "react";
import Amount from "./Amount";
import Date from "./Date";

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
      cell: (info) => info.getValue(),
      header: () => <span>Transaction</span>,
    }),
    columnHelper.accessor("amount", {
      cell: (info) => <Amount amount={info.getValue()} />,
      header: () => <span>Amount</span>,
    }),
    columnHelper.accessor("date", {
      cell: (info) => <Date dateString={info.getValue()} />,
      header: () => <span>Date</span>,
    }),
    columnHelper.accessor("wallet", {
      cell: (info) => info.getValue(),
      header: () => <span>Wallet</span>,
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
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
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionTable;
