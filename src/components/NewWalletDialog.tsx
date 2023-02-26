"use client";

import { PlusIcon } from "@heroicons/react/20/solid";
import { Button } from "./Buttons";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "./Dialog";

export const NewWalletDialog = () => (
  <>
    <Dialog>
      <DialogTrigger asChild>
        <Button intent="secondary" icon={<PlusIcon />} wide>
          Create wallet
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Create wallet</DialogTitle>
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
            <DialogClose>
              <Button intent="secondary">Cancel</Button>
            </DialogClose>
            <DialogClose>
              <Button type="submit">Create</Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  </>
);

export default NewWalletDialog;
