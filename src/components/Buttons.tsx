import { ButtonHTMLAttributes, ReactNode, forwardRef } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  wide?: boolean;
};

export const PrimaryButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, wide, ...props }, ref) => (
    <button
      ref={ref}
      className={`bg-blue-600 ${
        wide ? "px-6" : "px-4"
      } py-3 text-sm font-medium leading-none text-white hover:bg-blue-700  focus:outline-none focus:ring-2 focus:ring-blue-500`}
      {...props}
    >
      {children}
    </button>
  )
);

PrimaryButton.displayName = "PrimaryButton";

export const SecondaryButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, wide, ...props }, ref) => (
    <button
      ref={ref}
      className={`bg-neutral-100 ${
        wide ? "px-6" : "px-4"
      } py-3 text-sm font-medium leading-none text-neutral-900 hover:bg-neutral-200  focus:outline-none focus:ring-2 focus:ring-blue-500`}
      {...props}
    >
      {children}
    </button>
  )
);

SecondaryButton.displayName = "SecondaryButton";
