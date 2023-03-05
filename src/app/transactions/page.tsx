import { TransactionsGrid, TransactionsTable } from "@/components/Transactions";

import fixtureTransactions from "@/fixtures/transactions.json";

const TransactionsPage = () => {
  return (
    <>
      <TransactionsGrid transactions={fixtureTransactions} />
      <TransactionsTable transactions={fixtureTransactions} />
    </>
  );
};

export default TransactionsPage;
