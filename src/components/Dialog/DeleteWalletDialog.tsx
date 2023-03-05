"use client";
import { TrashIcon } from "@heroicons/react/20/solid";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { Button } from "../Buttons";

export const DeleteWalletDialog = ({ walletName }: { walletName: string }) => (
  <AlertDialog.Root>
    <AlertDialog.Trigger asChild>
      {/* Add intent="danger" */}
      <Button intent="secondary" icon={<TrashIcon />} wide>
        Delete wallet
      </Button>
    </AlertDialog.Trigger>
    <AlertDialog.Portal>
      <AlertDialog.Overlay className="fixed inset-0 bg-neutral-900/40 data-[state=open]:animate-overlayShow" />
      <AlertDialog.Content className="fixed top-1/2 left-1/2 max-h-[85vh] w-[90vw] max-w-md -translate-x-2/4 -translate-y-2/4 bg-white p-6 shadow-xl focus:outline-none data-[state=open]:animate-contentShow">
        <AlertDialog.Title className="m-0 mb-2 text-lg font-medium text-neutral-900">
          Delete wallet?
        </AlertDialog.Title>
        <AlertDialog.Description className="text- mt-2 mb-6 leading-normal text-neutral-500">
          Are you sure you want to delete <strong>{walletName}</strong> wallet?
          This action cannot be undone.
        </AlertDialog.Description>
        <div className="mt-6 flex justify-end space-x-2">
          <AlertDialog.Cancel asChild>
            <Button intent="secondary">Cancel</Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action asChild>
            {/* Add intent="danger" */}
            <Button type="submit">Delete</Button>
          </AlertDialog.Action>
        </div>
      </AlertDialog.Content>
    </AlertDialog.Portal>
  </AlertDialog.Root>
);
