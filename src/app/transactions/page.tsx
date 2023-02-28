import TransactionsGrid from "@/components/TransactionsGrid";
import TransactionsTable from "@/components/TransactionsTable";

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
