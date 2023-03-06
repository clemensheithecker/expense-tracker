"use client";
import { PlusIcon } from "@heroicons/react/20/solid";
import { Button } from "../Buttons";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "./Dialog";
import { useState } from "react";
import * as Label from "@radix-ui/react-label";

const wait = () => new Promise((resolve) => setTimeout(resolve, 1000));

export const NewTransactionDialog = () => {
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
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button intent="secondary" icon={<PlusIcon />} wide>
          Create transaction
        </Button>
      </DialogTrigger>
      <DialogContent open>
        <DialogTitle>Create transaction</DialogTitle>
        <form onSubmit={handleSubmit}>
          <fieldset className="mb-4 mt-6 flex items-center gap-6">
            <Label.Root
              className="w-24 text-right text-neutral-900"
              htmlFor="name"
            >
              Name
            </Label.Root>
            <input
              type="text"
              className="block w-full flex-1 border-gray-300 leading-none text-neutral-900 placeholder:italic placeholder:text-neutral-400 focus:border-blue-500 focus:ring-blue-500"
              id="name"
              name="name"
              placeholder="Groceries, Rent, etc."
            />
          </fieldset>
          <fieldset className="mb-4 mt-6 flex items-center gap-6">
            <Label.Root
              className="w-24 text-right text-neutral-900"
              htmlFor="date"
            >
              Date
            </Label.Root>
            <input
              type="text"
              className="block w-full flex-1 border-gray-300 leading-none text-neutral-900 placeholder:italic placeholder:text-neutral-400 focus:border-blue-500 focus:ring-blue-500"
              id="date"
              name="date"
              placeholder="DD-MM-YYYY"
            />
          </fieldset>
          <fieldset className="mb-4 mt-6 flex items-center gap-6">
            <Label.Root
              className="w-24 text-right text-neutral-900"
              htmlFor="time"
            >
              Time
            </Label.Root>
            <input
              type="text"
              className="block w-full flex-1 border-gray-300 leading-none text-neutral-900 placeholder:italic placeholder:text-neutral-400 focus:border-blue-500 focus:ring-blue-500"
              id="time"
              name="time"
              placeholder="HH:MM"
            />
          </fieldset>
          <fieldset className="mb-4 mt-6 flex items-center gap-6">
            <Label.Root
              className="w-24 text-right text-neutral-900"
              htmlFor="amount"
            >
              Amount
            </Label.Root>
            <input
              type="text"
              className="block w-full flex-1 border-gray-300 leading-none text-neutral-900 placeholder:italic placeholder:text-neutral-400 focus:border-blue-500 focus:ring-blue-500"
              id="amount"
              name="amount"
              placeholder="12.99"
            />
          </fieldset>
          <fieldset className="mb-4 mt-6 flex items-center gap-6">
            <Label.Root
              className="w-24 text-right text-neutral-900"
              htmlFor="wallet"
            >
              Wallet
            </Label.Root>
            <input
              type="text"
              className="block w-full flex-1 border-gray-300 leading-none text-neutral-900 placeholder:italic placeholder:text-neutral-400 focus:border-blue-500 focus:ring-blue-500"
              id="wallet"
              name="wallet"
              placeholder="Checking, Savings, etc."
            />
          </fieldset>
          <div className="mt-6 flex flex-row-reverse justify-start">
            <div className="ml-2">
              <Button type="submit" disabled={submitting} loading={submitting}>
                {submitting ? "Creating..." : "Create"}
              </Button>
            </div>
            <DialogClose asChild>
              <Button intent="secondary" disabled={submitting}>
                Cancel
              </Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
