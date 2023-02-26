import NewWalletDialog from "@/components/NewWalletDialog";

export default function HomePage() {
  return (
    <>
      <h1 className="mb-6 text-3xl font-bold text-neutral-900">
        Expense Tracker
      </h1>
      <NewWalletDialog />
    </>
  );
}
