"use client";

import { Dialog } from "./Dialog";
import { Button } from "./Buttons";
import * as RadixDialog from "@radix-ui/react-dialog";

export const NewWalletDialog = () => (
  <>
    <Dialog>
      <RadixDialog.Trigger asChild>
        <Button intent="secondary" wide>
          Create wallet
        </Button>
      </RadixDialog.Trigger>
      <Dialog.Content>
        <Dialog.Title>Create wallet</Dialog.Title>
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <fieldset className="mb-4 mt-6 flex items-center gap-6">
            <label className="w-24 text-right text-neutral-900" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              className="block w-full flex-1 border-gray-300 leading-none text-neutral-900 placeholder:text-neutral-400 focus:border-blue-500 focus:ring-blue-500"
              id="name"
              name="name"
              placeholder="Checking, Savings, etc."
            />
          </fieldset>

          <div className="mt-6 flex justify-end space-x-2">
            <Dialog.Close>
              <Button intent="secondary">Cancel</Button>
            </Dialog.Close>
            <Dialog.Close>
              <Button type="submit">Create</Button>
            </Dialog.Close>
          </div>
        </form>
      </Dialog.Content>
    </Dialog>
  </>
);

export default NewWalletDialog;
