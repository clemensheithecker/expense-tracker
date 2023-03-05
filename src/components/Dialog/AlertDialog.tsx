"use client";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, forwardRef, useEffect } from "react";

type AlertDialogProps = {
  open: boolean;
  children: ReactNode;
};

export const AlertDialog = AlertDialogPrimitive.Root;

export const AlertDialogTrigger = AlertDialogPrimitive.Trigger;

export const AlertDialogContent = forwardRef<HTMLDivElement, AlertDialogProps>(
  ({ open, children, ...props }, forwardedRef) => {
    return (
      <AnimatePresence>
        {open && (
          <AlertDialogPrimitive.Portal>
            <AlertDialogPrimitive.Overlay asChild>
              <motion.div
                className="fixed inset-0 bg-neutral-900/40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            </AlertDialogPrimitive.Overlay>
            <AlertDialogPrimitive.Content {...props} ref={forwardedRef} asChild>
              <motion.div
                className="fixed top-1/2 left-1/2 max-h-[85vh] w-[90vw] max-w-md -translate-x-2/4 -translate-y-2/4 bg-white p-6 shadow-xl focus:outline-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {children}
              </motion.div>
            </AlertDialogPrimitive.Content>
          </AlertDialogPrimitive.Portal>
        )}
      </AnimatePresence>
    );
  }
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
