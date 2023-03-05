"use client";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { ReactNode, forwardRef } from "react";

type DialogProps = {
  children: ReactNode;
};

export const Dialog = DialogPrimitive.Root;

export const DialogTrigger = DialogPrimitive.Trigger;

export const DialogContent = forwardRef<HTMLDivElement, DialogProps>(
  ({ children, ...props }, forwardedRef) => (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 bg-neutral-900/40 data-[state=open]:animate-overlayShow" />
      <DialogPrimitive.Content
        className="fixed top-1/2 left-1/2 max-h-[85vh] w-[90vw] max-w-md -translate-x-2/4 -translate-y-2/4 bg-white p-6 shadow-xl focus:outline-none data-[state=open]:animate-contentShow"
        {...props}
        ref={forwardedRef}
      >
        {children}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  )
);

DialogContent.displayName = "DialogContent";

export const DialogTitle = ({ children }: { children: ReactNode }) => (
  <DialogPrimitive.Title className="m-0 mb-2 text-lg font-medium text-neutral-900">
    {children}
  </DialogPrimitive.Title>
);

export const DialogDescription = ({ children }: { children: ReactNode }) => (
  <DialogPrimitive.Description className="text- mt-2 mb-6 leading-normal text-neutral-500">
    {children}
  </DialogPrimitive.Description>
);

export const DialogClose = ({ children }: { children: ReactNode }) => (
  <DialogPrimitive.Close asChild>{children}</DialogPrimitive.Close>
);
