import clsx from "clsx";
import { ButtonHTMLAttributes, ReactNode, forwardRef } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  intent?: "primary" | "secondary";
  wide?: boolean;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, intent = "primary", wide, ...props }, ref) => (
    <button
      ref={ref}
      className={clsx(
        "py-3 text-sm font-medium leading-none focus:outline-none focus:ring-2",
        {
          "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500":
            intent === "primary",
          "bg-neutral-100 text-neutral-900 hover:bg-neutral-200 focus:ring-blue-500":
            intent === "secondary",
          "px-6": wide,
          "px-4": !wide,
        }
      )}
      {...props}
    >
      {children}
    </button>
  )
);

Button.displayName = "Button";
