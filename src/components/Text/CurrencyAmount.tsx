import clsx from "clsx";

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export const CurrencyAmount = ({ amount }: { amount: number }) => (
  <span
    className={clsx({
      "text-green-500": amount > 0,
      "text-red-500": amount < 0,
      "text-inherit": amount === 0,
    })}
  >
    {currencyFormatter.format(amount)}
  </span>
);
