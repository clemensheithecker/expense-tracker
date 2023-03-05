import { kebabCase } from "lodash";
import Link from "next/link";
import { useMemo } from "react";
import CurrencyAmount from "./CurrencyAmount";
import FormattedDate from "./FormattedDate";

type Transaction = {
  id: string;
  name: string;
  date: string;
  amount: number;
  wallet: string;
};

const TransactionsGrid = ({
  transactions,
}: {
  transactions: Transaction[];
}) => {
  const data = useMemo(() => transactions, [transactions]);

  return (
    <div className="grid grid-cols-1 gap-0 sm:hidden">
      {data.map((transaction) => (
        <article
          key={transaction.id}
          className="flex flex-row items-center justify-between p-4 odd:bg-white even:bg-neutral-50"
        >
          <div className="space-y-2">
            <h3 className="text-sm font-semibold tracking-wide text-neutral-900">
              {transaction.name}
            </h3>
            <p className="flex items-center space-x-2 text-sm text-neutral-700">
              <FormattedDate dateString={transaction.date} />
              <Link
                href={`/wallet/${kebabCase(transaction.wallet)}`}
                className="hover:underline"
              >
                {transaction.wallet}
              </Link>
            </p>
          </div>
          <p className="text-sm font-medium">
            <CurrencyAmount amount={transaction.amount} />
          </p>
        </article>
      ))}
    </div>
  );
};

export default TransactionsGrid;
