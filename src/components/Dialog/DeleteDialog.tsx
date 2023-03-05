"use client";
import { TrashIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { Button } from "../Buttons";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./AlertDialog";

const wait = () => new Promise((resolve) => setTimeout(resolve, 1000));

export const DeleteDialog = ({
  entityType,
  entityName,
}: {
  entityType: string;
  entityName: string;
}) => {
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
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button intent="secondary" icon={<TrashIcon />} wide>
          Delete {entityType}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent open>
        <AlertDialogTitle>Delete {entityType}?</AlertDialogTitle>
        <AlertDialogDescription>
          Are you sure you want to delete <strong>{entityName}</strong>{" "}
          {entityType}? This action cannot be undone.
        </AlertDialogDescription>
        <div className="mt-6 flex justify-end space-x-2">
          <AlertDialogCancel asChild>
            <Button intent="secondary" disabled={submitting}>
              Cancel
            </Button>
          </AlertDialogCancel>
          <form onSubmit={handleSubmit}>
            <Button
              type="submit"
              intent="danger"
              disabled={submitting}
              loading={submitting}
            >
              {submitting ? "Deleting..." : "Delete"}
            </Button>
          </form>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};
