import clsx from "clsx";
import { ButtonHTMLAttributes, ReactNode, forwardRef } from "react";
import { LoadingIndicator } from "./Icons";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  intent?: "primary" | "secondary";
  icon?: ReactNode;
  wide?: boolean;
  loading?: boolean;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, intent = "primary", icon, wide, loading, ...props }, ref) => (
    <button
      ref={ref}
      className={clsx(
        "flex h-9 items-center py-2 text-sm font-medium leading-none focus:outline-none focus:ring-2",
        {
          "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 disabled:bg-blue-400 disabled:hover:bg-blue-400":
            intent === "primary",
          "bg-neutral-100 text-neutral-900 hover:bg-neutral-200 focus:ring-blue-500 disabled:text-neutral-400 disabled:hover:bg-neutral-100":
            intent === "secondary",
          "px-6": wide,
          "px-4": !wide,
          "disabled:cursor-progress": loading,
          "disabled:cursor-not-allowed": !loading,
        }
      )}
      {...props}
    >
      {icon && <span className="mr-2 hidden h-5 w-5 sm:block">{icon}</span>}
      {loading && <LoadingIndicator />}
      {children}
    </button>
  )
);

Button.displayName = "Button";
