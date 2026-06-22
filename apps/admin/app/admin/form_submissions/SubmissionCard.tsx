"use client";

import type { Submission } from "@bilacert/shared/types";
import { format } from "date-fns";
import {
  Briefcase,
  Calendar,
  Clock,
  Eye,
  Mail,
  MoreVertical,
  Phone,
  Trash2,
  User,
} from "lucide-react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import StatusUpdate from "./StatusUpdate";

interface SubmissionCardProps {
  submission: Submission;
  onDelete: (submission: Submission) => void;
}

const statusVariants: Record<string, string> = {
  pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
  "in-progress": "bg-blue-100 text-blue-800 border-blue-200",
  completed: "bg-emerald-100 text-emerald-800 border-emerald-200",
  rejected: "bg-red-100 text-red-800 border-red-200",
  archived: "bg-gray-100 text-gray-800 border-gray-200",
};

export default function SubmissionCard({
  submission,
  onDelete,
}: SubmissionCardProps) {
  const date = submission.createdAt
    ? format(new Date(submission.createdAt), "PPP p")
    : "Unknown date";

  return (
    <Card className="group overflow-hidden border-0 shadow-sm shadow-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10">
      <Accordion type="single" collapsible>
        <AccordionItem value={submission.id} className="border-none">
          <div className="flex items-center gap-4 p-4 sm:p-6">
            <AccordionTrigger className="flex-1 p-0 py-0 hover:no-underline [&>svg]:ml-4">
              <div className="flex w-full flex-col gap-4 text-left sm:flex-row sm:items-center">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary shadow-sm shadow-primary/10">
                  <User className="h-6 w-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="mb-1 flex flex-wrap items-center gap-2">
                    <h3 className="truncate text-lg font-bold leading-none text-card-foreground">
                      {submission.fullName || "Anonymous"}
                    </h3>
                    <Badge
                      variant="outline"
                      className={`h-5 px-2 py-0 text-[10px] font-bold capitalize ${statusVariants[submission.status] || ""}`}
                    >
                      {submission.status}
                    </Badge>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-medium text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <Briefcase className="h-3.5 w-3.5" />
                      {submission.serviceName || "General Inquiry"}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      {format(
                        new Date(submission.createdAt || Date.now()),
                        "MMM d, yyyy",
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </AccordionTrigger>

            <div className="flex items-center gap-2">
              <div className="hidden sm:block">
                <StatusUpdate submission={submission} />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9 rounded-full bg-muted/50 hover:bg-muted"
                  >
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link
                      href={`/admin/form_submissions/${submission.id}`}
                      className="cursor-pointer"
                    >
                      <Eye className="mr-2 h-4 w-4" /> View Details
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => onDelete(submission)}
                    className="cursor-pointer text-destructive focus:bg-destructive/10 focus:text-destructive"
                  >
                    <Trash2 className="mr-2 h-4 w-4" /> Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <AccordionContent className="bg-muted/20 px-6 pb-6 pt-2">
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-3 rounded-xl bg-background p-4 shadow-sm shadow-black/5">
                <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  <User className="h-3 w-3" /> Contact Info
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <a
                      href={`mailto:${submission.email}`}
                      className="truncate text-primary hover:underline"
                    >
                      {submission.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <a
                      href={`tel:${submission.phone}`}
                      className="hover:underline"
                    >
                      {submission.phone || "No phone provided"}
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-3 rounded-xl bg-background p-4 shadow-sm shadow-black/5">
                <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  <Calendar className="h-3 w-3" /> Details
                </h4>
                <div className="space-y-1">
                  <p className="text-sm font-medium">
                    Form: <span className="text-muted-foreground">{submission.formType}</span>
                  </p>
                  <p className="text-sm font-medium">
                    Submitted: <span className="text-muted-foreground">{date}</span>
                  </p>
                  {submission.assignedTo && (
                    <p className="text-sm font-medium">
                      Assigned to: {" "}
                      <Badge variant="secondary">{submission.assignedTo}</Badge>
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-3 rounded-xl bg-background p-4 shadow-sm shadow-black/5 sm:col-span-2 lg:col-span-1">
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Quick Actions
                </h4>
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/admin/form_submissions/${submission.id}`}>
                      Open Record
                    </Link>
                  </Button>
                  <div className="sm:hidden">
                    <StatusUpdate submission={submission} />
                  </div>
                </div>
              </div>
            </div>

            {!!submission.details && (
              <div className="mt-6 space-y-2 rounded-xl bg-background p-4 shadow-sm shadow-black/5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Submission Preview
                </h4>
                <div className="relative max-h-32 overflow-hidden rounded-lg bg-muted/40 p-4 text-sm">
                  <pre className="line-clamp-4 whitespace-pre-wrap font-sans text-xs">
                    {JSON.stringify(submission.details, null, 2)}
                  </pre>
                  <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-background to-transparent" />
                </div>
              </div>
            )}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
}
