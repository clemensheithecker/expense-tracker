"use client";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, forwardRef } from "react";

type DialogProps = {
  open: boolean;
  children: ReactNode;
};

export const Dialog = DialogPrimitive.Root;

export const DialogTrigger = DialogPrimitive.Trigger;

export const DialogContent = forwardRef<HTMLDivElement, DialogProps>(
  ({ open, children, ...props }, forwardedRef) => (
    <AnimatePresence>
      {open && (
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay asChild>
            <motion.div
              className="fixed inset-0 bg-neutral-900/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          </DialogPrimitive.Overlay>
          <DialogPrimitive.Content {...props} ref={forwardedRef} asChild>
            <motion.div
              className="fixed top-1/2 left-1/2 max-h-[85vh] w-[90vw] max-w-md -translate-x-2/4 -translate-y-2/4 bg-white p-6 shadow-xl focus:outline-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {children}
            </motion.div>
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      )}
    </AnimatePresence>
  )
);

DialogContent.displayName = "DialogContent";

export const DialogTitle = ({ children }: { children: ReactNode }) => (
  <DialogPrimitive.Title className="text-lg font-semibold leading-6 text-neutral-900">
    {children}
  </DialogPrimitive.Title>
);

export const DialogDescription = ({ children }: { children: ReactNode }) => (
  <DialogPrimitive.Description className="mt-2 text-neutral-500">
    {children}
  </DialogPrimitive.Description>
);

export const DialogClose = DialogPrimitive.Close;
