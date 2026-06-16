"use client";

import type { Submission } from "@bilacert/shared/types";
import { 
  User, 
  Mail, 
  Phone, 
  Clock, 
  MoreVertical, 
  Trash2, 
  Eye, 
  ChevronDown,
  Calendar,
  Briefcase
} from "lucide-react";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import StatusUpdate from "./StatusUpdate";
import Link from "next/link";

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

export default function SubmissionCard({ submission, onDelete }: SubmissionCardProps) {
  const date = submission.submitted_at 
    ? format(new Date(submission.submitted_at), "PPP p") 
    : "Unknown date";

  return (
    <Card className="group overflow-hidden transition-all hover:shadow-md border-muted">
      <Accordion type="single" collapsible>
        <AccordionItem value={submission.id} className="border-none">
          <div className="flex items-center p-4 sm:p-6 gap-4">
            <AccordionTrigger className="flex-1 hover:no-underline p-0 py-0 [&>svg]:ml-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-left w-full">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <User className="h-6 w-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-lg leading-none truncate">
                      {submission.full_name || "Anonymous"}
                    </h3>
                    <Badge variant="outline" className={`capitalize px-2 py-0 h-5 text-[10px] font-bold ${statusVariants[submission.status] || ""}`}>
                      {submission.status}
                    </Badge>
                  </div>
                  <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-sm text-muted-foreground font-medium">
                    <div className="flex items-center gap-1.5">
                      <Briefcase className="h-3.5 w-3.5" />
                      {submission.service_name || "General Inquiry"}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      {format(new Date(submission.submitted_at || Date.now()), "MMM d, yyyy")}
                    </div>
                  </div>
                </div>
              </div>
            </AccordionTrigger>
            
            <div className="flex items-center gap-2">
              <div className="hidden sm:block">
                <StatusUpdate submissionId={submission.id} currentStatus={submission.status} />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-9 w-9">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link href={`/admin/form_submissions/${submission.id}`} className="cursor-pointer">
                      <Eye className="mr-2 h-4 w-4" /> View Details
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => onDelete(submission)}
                    className="text-destructive focus:bg-destructive/10 focus:text-destructive cursor-pointer"
                  >
                    <Trash2 className="mr-2 h-4 w-4" /> Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <AccordionContent className="px-6 pb-6 pt-2 border-t bg-muted/20">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-4">
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                  <User className="h-3 w-3" /> Contact Info
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <a href={`mailto:${submission.email}`} className="text-primary hover:underline truncate">
                      {submission.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <a href={`tel:${submission.phone}`} className="hover:underline">
                      {submission.phone || "No phone provided"}
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                  <Calendar className="h-3 w-3" /> Details
                </h4>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Form: <span className="text-muted-foreground">{submission.form_type}</span></p>
                  <p className="text-sm font-medium">Submitted: <span className="text-muted-foreground">{date}</span></p>
                  {submission.assigned_to && (
                    <p className="text-sm font-medium">Assigned to: <Badge variant="secondary">{submission.assigned_to}</Badge></p>
                  )}
                </div>
              </div>

              <div className="sm:col-span-2 lg:col-span-1">
                 <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Quick Actions</h4>
                 <div className="flex flex-wrap gap-2">
                   <Button variant="outline" size="sm" asChild>
                     <Link href={`/admin/form_submissions/${submission.id}`}>Open Record</Link>
                   </Button>
                   <div className="sm:hidden">
                    <StatusUpdate submissionId={submission.id} currentStatus={submission.status} />
                   </div>
                 </div>
              </div>
            </div>
            
            {submission.details && (
              <div className="mt-6 space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Submission Preview</h4>
                <div className="bg-background p-4 rounded-md border text-sm max-h-32 overflow-hidden relative">
                  <pre className="whitespace-pre-wrap font-sans text-xs line-clamp-4">
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
