import { startCase } from "lodash";

export default function WalletPage({ params }: { params: { slug: string } }) {
  return (
    <>
      <h1 className="mb-6 text-3xl font-bold text-neutral-900">
        {startCase(params.slug)}
      </h1>
    </>
  );
}
