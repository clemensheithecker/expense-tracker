import TransactionsTable from "@/components/TransactionsTable";

import fixtureTransactions from "@/fixtures/transactions.json";

export default function TransactionsPage() {
  return (
    <>
      <TransactionsTable transactions={fixtureTransactions} />
    </>
  );
}
