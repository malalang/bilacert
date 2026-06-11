"use client";

import type { Submission } from "@bilacert/supabase/types";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { updateSubmissionStatus } from "./actions";
import { statusVariantMap } from "./columns";

interface StatusUpdateProps {
  submission: Submission;
}

const statuses: Submission["status"][] = [
  "pending",
  "in-progress",
  "completed",
  "rejected",
  "archived",
];

export default function StatusUpdate({ submission }: StatusUpdateProps) {
  const { toast } = useToast();
  const [currentStatus, setCurrentStatus] = useState(submission.status);
  const [isLoading, setIsLoading] = useState(false);

  const handleStatusChange = async (newStatus: Submission["status"]) => {
    if (newStatus === currentStatus) return;

    setIsLoading(true);
    try {
      if (!submission.id) {
        throw new Error("Submission ID is missing");
      }
      const result = await updateSubmissionStatus(submission.id, newStatus);

      if (result.error) throw new Error(result.error);

      setCurrentStatus(newStatus as Submission["status"]);
      toast({
        title: "Status updated",
        description: `Submission status changed to "${newStatus}".`,
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error updating status",
        description: error.message,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center gap-2">
      {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
      <Select
        value={currentStatus}
        onValueChange={handleStatusChange}
        disabled={isLoading}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue asChild>
            <Badge
              variant={statusVariantMap[currentStatus] || "default"}
              className="capitalize"
            >
              {currentStatus}
            </Badge>
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {statuses.map((status) => (
            <SelectItem key={status} value={status} className="capitalize">
              <div className="flex items-center gap-2">{status}</div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
