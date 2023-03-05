"use client";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { ReactNode, forwardRef } from "react";

type AlertDialogProps = {
  children: ReactNode;
};

export const AlertDialog = AlertDialogPrimitive.Root;

export const AlertDialogTrigger = AlertDialogPrimitive.Trigger;

export const AlertDialogContent = forwardRef<HTMLDivElement, AlertDialogProps>(
  ({ children, ...props }, forwardedRef) => (
    <AlertDialogPrimitive.Portal>
      <AlertDialogPrimitive.Overlay className="fixed inset-0 bg-neutral-900/40 data-[state=open]:animate-overlayShow" />
      <AlertDialogPrimitive.Content
        className="fixed top-1/2 left-1/2 max-h-[85vh] w-[90vw] max-w-md -translate-x-2/4 -translate-y-2/4 bg-white p-6 shadow-xl focus:outline-none data-[state=open]:animate-contentShow"
        {...props}
        ref={forwardedRef}
      >
        {children}
      </AlertDialogPrimitive.Content>
    </AlertDialogPrimitive.Portal>
  )
);

AlertDialogContent.displayName = "AlertDialogContent";

export const AlertDialogTitle = ({ children }: { children: ReactNode }) => (
  <AlertDialogPrimitive.Title className="m-0 mb-2 text-lg font-medium text-neutral-900">
    {children}
  </AlertDialogPrimitive.Title>
);

export const AlertDialogDescription = ({
  children,
}: {
  children: ReactNode;
}) => (
  <AlertDialogPrimitive.Description className="mt-2 mb-6 leading-normal text-neutral-500">
    {children}
  </AlertDialogPrimitive.Description>
);

export const AlertDialogCancel = AlertDialogPrimitive.Cancel;

export const AlertDialogAction = AlertDialogPrimitive.Action;
