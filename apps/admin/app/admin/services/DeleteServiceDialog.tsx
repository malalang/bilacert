"use client";

import type { Service } from "@bilacert/contracts/service";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { deleteService } from "./actions";

interface DeleteServiceDialogProps {
  isOpen: boolean;
  onClose: () => void;
  service: Service | null;
  onDeleted?: () => void;
}

export default function DeleteServiceDialog({
  isOpen,
  onClose,
  service,
  onDeleted,
}: DeleteServiceDialogProps) {
  const { toast } = useToast();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (!service || !service.id) return;

    setIsDeleting(true);
    try {
      const result = await deleteService(service.id);

      if (result.error) {
        throw new Error(result.error);
      }

      toast({
        title: "Service deleted",
        description: `The service "${service.title}" has been successfully deleted.`,
      });
      if (onDeleted) {
        onDeleted();
      }
      onClose();
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error deleting service",
        description: error.message,
      });
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the
            service "{service?.title}".
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={isDeleting} onClick={onClose}>
            Cancel
          </AlertDialogCancel>
          <Button
            variant="destructive"
            onClick={handleDelete}
            disabled={isDeleting}
          >
            {isDeleting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Delete
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
