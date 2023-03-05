"use client";
import { TrashIcon } from "@heroicons/react/20/solid";
import { Button } from "../Buttons";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./AlertDialog";

export const DeleteDialog = ({
  entityType,
  entityName,
}: {
  entityType: string;
  entityName: string;
}) => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      {/* Add intent="danger" */}
      <Button intent="secondary" icon={<TrashIcon />} wide>
        Delete {entityType}
      </Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogTitle>Delete {entityType}?</AlertDialogTitle>
      <AlertDialogDescription>
        Are you sure you want to delete <strong>{entityName}</strong>{" "}
        {entityType}? This action cannot be undone.
      </AlertDialogDescription>
      <div className="mt-6 flex justify-end space-x-2">
        <AlertDialogCancel asChild>
          <Button intent="secondary">Cancel</Button>
        </AlertDialogCancel>
        <AlertDialogAction asChild>
          {/* Add intent="danger" */}
          <Button type="submit">Delete</Button>
        </AlertDialogAction>
      </div>
    </AlertDialogContent>
  </AlertDialog>
);
