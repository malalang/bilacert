"use client";

import type { Submission } from "@bilacert/supabase";
import { createBrowserClient } from "@bilacert/supabase";
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

const supabase = createBrowserClient();

interface DeleteSubmissionDialogProps {
  isOpen: boolean;
  onClose: () => void;
  submission: Submission | null;
  onDeleted?: () => void;
}

export default function DeleteSubmissionDialog({
  isOpen,
  onClose,
  submission,
  onDeleted,
}: DeleteSubmissionDialogProps) {
  const { toast } = useToast();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (!submission) return;

    setIsDeleting(true);
    try {
      const { error } = await supabase
        .from("form_submissions")
        .delete()
        .eq("id", submission.id);

      if (error) throw error;

      toast({
        title: "Submission deleted",
        description: `The submission from "${submission.full_name}" has been successfully deleted.`,
      });
      if (onDeleted) {
        onDeleted();
      } else {
        onClose();
      }
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error deleting submission",
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
            submission from "{submission?.full_name}".
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
