import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export const PrimaryButton = ({ children, ...props }: ButtonProps) => (
  <button
    className="bg-blue-600 px-4 py-3 text-sm font-medium leading-none text-white hover:bg-blue-700  focus:outline-none focus:ring-2 focus:ring-blue-500"
    {...props}
  >
    {children}
  </button>
);

export const PrimaryButtonWide = ({ children, ...props }: ButtonProps) => (
  <button
    className="bg-blue-600 px-6 py-3 text-sm font-medium leading-none text-white hover:bg-blue-700  focus:outline-none focus:ring-2 focus:ring-blue-500"
    {...props}
  >
    {children}
  </button>
);

PrimaryButton.Wide = PrimaryButtonWide;

export const SecondaryButton = ({ children, ...props }: ButtonProps) => (
  <button
    className="bg-neutral-100 px-4 py-3 text-sm font-medium leading-none text-neutral-900 hover:bg-neutral-200  focus:outline-none focus:ring-2 focus:ring-blue-500"
    {...props}
  >
    {children}
  </button>
);

export const SecondaryButtonWide = ({ children, ...props }: ButtonProps) => (
  <button
    className="bg-neutral-100 px-6 py-3 text-sm font-medium leading-none text-neutral-900 hover:bg-neutral-200  focus:outline-none focus:ring-2 focus:ring-blue-500"
    {...props}
  >
    {children}
  </button>
);

SecondaryButton.Wide = SecondaryButtonWide;
