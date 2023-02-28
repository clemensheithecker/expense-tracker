import { startCase } from "lodash";

const WalletPage = ({ params }: { params: { slug: string } }) => {
  return (
    <>
      <h1 className="mb-6 text-3xl font-bold text-neutral-900">
        {startCase(params.slug)}
      </h1>
    </>
  );
};

export default WalletPage;
