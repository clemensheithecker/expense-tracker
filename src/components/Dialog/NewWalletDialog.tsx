"use client";
import { PlusIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { Button } from "../Buttons";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "./Dialog";

const wait = () => new Promise((resolve) => setTimeout(resolve, 1000));

export const NewWalletDialog = () => {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    wait().then(() => {
      setSubmitting(false);
      setOpen(false);
    });
  };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button intent="secondary" icon={<PlusIcon />} wide>
            Create wallet
          </Button>
        </DialogTrigger>
        <DialogContent open>
          <DialogTitle>Create wallet</DialogTitle>
          <form onSubmit={handleSubmit}>
            <fieldset className="mb-4 mt-6 flex items-center gap-6">
              <label
                className="w-24 text-right text-neutral-900"
                htmlFor="name"
              >
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
              <DialogClose asChild>
                <Button intent="secondary" disabled={submitting}>
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit" disabled={submitting} loading={submitting}>
                {submitting ? "Creating..." : "Create"}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};
