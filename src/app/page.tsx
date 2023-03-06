import {
  DeleteWalletDialog,
  NewTransactionDialog,
  NewWalletDialog,
} from "@/components/Dialog";

const HomePage = () => {
  return (
    <>
      <h1 className="mb-6 text-3xl font-bold text-neutral-900">
        Expense Tracker
      </h1>
      <div className=" space-y-2">
        <NewWalletDialog />
        <DeleteWalletDialog walletName="Checking" />
        <NewTransactionDialog />
      </div>
    </>
  );
};

export default HomePage;
