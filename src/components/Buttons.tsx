import { ButtonHTMLAttributes, ReactNode, forwardRef } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export const PrimaryButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => (
    <button
      ref={ref}
      className="bg-blue-600 px-4 py-3 text-sm font-medium leading-none text-white hover:bg-blue-700  focus:outline-none focus:ring-2 focus:ring-blue-500"
      {...props}
    >
      {children}
    </button>
  )
);

PrimaryButton.displayName = "PrimaryButton";

export const PrimaryButtonWide = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => (
    <button
      ref={ref}
      className="bg-blue-600 px-6 py-3 text-sm font-medium leading-none text-white hover:bg-blue-700  focus:outline-none focus:ring-2 focus:ring-blue-500"
      {...props}
    >
      {children}
    </button>
  )
);

PrimaryButtonWide.displayName = "PrimaryButtonWide";

export const SecondaryButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => (
    <button
      ref={ref}
      className="bg-neutral-100 px-4 py-3 text-sm font-medium leading-none text-neutral-900 hover:bg-neutral-200  focus:outline-none focus:ring-2 focus:ring-blue-500"
      {...props}
    >
      {children}
    </button>
  )
);

SecondaryButton.displayName = "SecondaryButton";

export const SecondaryButtonWide = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => (
    <button
      ref={ref}
      className="bg-neutral-100 px-6 py-3 text-sm font-medium leading-none text-neutral-900 hover:bg-neutral-200  focus:outline-none focus:ring-2 focus:ring-blue-500"
      {...props}
    >
      {children}
    </button>
  )
);

SecondaryButtonWide.displayName = "SecondaryButtonWide";
