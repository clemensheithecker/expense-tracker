import * as RadixDialog from "@radix-ui/react-dialog";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

let DialogContext = createContext<{
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}>({
  open: false,
  setOpen: () => {},
});

export const Dialog = ({ children }: { children: ReactNode }) => {
  let [open, setOpen] = useState(false);

  return (
    <DialogContext.Provider value={{ open, setOpen }}>
      <RadixDialog.Root open={open} onOpenChange={setOpen}>
        {children}
      </RadixDialog.Root>
    </DialogContext.Provider>
  );
};

export const DialogButton = ({ children }: { children: ReactNode }) => (
  <RadixDialog.Trigger asChild>{children}</RadixDialog.Trigger>
);

Dialog.Button = DialogButton;

export const DialogContent = ({ children }: { children: ReactNode }) => (
  <RadixDialog.Portal>
    <RadixDialog.Overlay className="fixed inset-0 bg-neutral-900/40 data-[state=open]:animate-overlayShow" />
    <RadixDialog.Content className="fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] bg-white p-6 shadow-xl focus:outline-none data-[state=open]:animate-contentShow">
      {children}
    </RadixDialog.Content>
  </RadixDialog.Portal>
);

Dialog.Content = DialogContent;

export const DialogTitle = ({ children }: { children: ReactNode }) => (
  <RadixDialog.Title className="m-0 mb-2 text-lg font-medium text-neutral-900">
    {children}
  </RadixDialog.Title>
);

Dialog.Title = DialogTitle;

export const DialogDescription = ({ children }: { children: ReactNode }) => (
  <RadixDialog.Description className="text- mt-2 mb-6 leading-normal text-neutral-500">
    {children}
  </RadixDialog.Description>
);

Dialog.Description = DialogDescription;

export const DialogClose = ({ children }: { children: ReactNode }) => (
  <RadixDialog.Close asChild>{children}</RadixDialog.Close>
);

Dialog.Close = DialogClose;
