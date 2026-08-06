"use client";

import type { Submission } from "@bilacert/shared/types";
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
import { memo } from "react";
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
import { getSubmissionEmailComposeHref } from "@/lib/emailNavigation";
import StatusUpdate from "./StatusUpdate";

interface SubmissionCardProps {
  submission: Submission;
  onDelete: (submission: Submission) => void;
}

const statusStyles: Record<Submission["status"], string> = {
  pending:
    "border-yellow-200 bg-yellow-100 text-yellow-800 dark:border-yellow-900 dark:bg-yellow-950/60 dark:text-yellow-200",
  "in-progress":
    "border-blue-200 bg-blue-100 text-blue-800 dark:border-blue-900 dark:bg-blue-950/60 dark:text-blue-200",
  completed:
    "border-emerald-200 bg-emerald-100 text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950/60 dark:text-emerald-200",
  rejected:
    "border-red-200 bg-red-100 text-red-800 dark:border-red-900 dark:bg-red-950/60 dark:text-red-200",
  archived:
    "border-slate-200 bg-slate-100 text-slate-800 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200",
};

const statusLabels: Record<Submission["status"], string> = {
  pending: "Pending",
  "in-progress": "Processing",
  completed: "Completed",
  rejected: "Rejected",
  archived: "Archived",
};

const shortDateFormatter = new Intl.DateTimeFormat("en-ZA", {
  dateStyle: "medium",
  timeZone: "Africa/Johannesburg",
});

const fullDateFormatter = new Intl.DateTimeFormat("en-ZA", {
  dateStyle: "medium",
  timeStyle: "short",
  timeZone: "Africa/Johannesburg",
});

function getSubmissionDate(value: string) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return {
      dateTime: undefined,
      short: "Unknown date",
      full: "Unknown date",
    };
  }

  return {
    dateTime: date.toISOString(),
    short: shortDateFormatter.format(date),
    full: fullDateFormatter.format(date),
  };
}

function formatFormType(value: string) {
  const label = value.replace(/[-_]+/g, " ");

  return label
    .replace(/\b\w/g, (character) => character.toUpperCase())
    .replace(/\b(Nrcs|Loa|Icasa|Ecns|Ecs|Vhf)\b/g, (word) =>
      word.toUpperCase(),
    );
}

function SubmissionPreview({
  details,
  submissionHref,
}: {
  details: unknown;
  submissionHref: string;
}) {
  const detailsPreview = JSON.stringify(details, null, 2);

  if (!detailsPreview) return null;

  return (
    <section className="mt-4 space-y-3 rounded-xl border bg-background p-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h4 className="text-sm font-semibold">Submission preview</h4>
        <Button variant="ghost" size="sm" asChild>
          <Link href={submissionHref}>View all details</Link>
        </Button>
      </div>
      <pre className="max-h-36 overflow-hidden whitespace-pre-wrap break-words rounded-lg bg-muted/40 p-3 font-sans text-xs leading-relaxed text-muted-foreground">
        {detailsPreview}
      </pre>
    </section>
  );
}

function SubmissionCard({ submission, onDelete }: SubmissionCardProps) {
  const submissionHref = `/admin/form_submissions/${submission.id}`;
  const emailComposeHref = getSubmissionEmailComposeHref(submission);
  const submittedAt = getSubmissionDate(submission.createdAt);
  const phone = submission.phone?.trim();

  return (
    <Card className="group overflow-hidden border border-border/70 shadow-sm transition-[border-color,box-shadow] duration-200 hover:border-primary/25 hover:shadow-md">
      <Accordion type="single" collapsible>
        <AccordionItem value={submission.id} className="border-none">
          <div className="grid gap-3 p-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:gap-4 sm:p-5">
            <AccordionTrigger className="min-w-0 rounded-lg p-1 text-left hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 [&>svg]:ml-3">
              <div className="flex min-w-0 flex-1 items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <User className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="min-w-0 truncate text-base font-semibold text-card-foreground sm:text-lg">
                      {submission.fullName || "Anonymous"}
                    </h3>
                    <Badge
                      variant="outline"
                      className={`h-6 px-2 text-xs font-semibold ${statusStyles[submission.status]}`}
                    >
                      {statusLabels[submission.status]}
                    </Badge>
                  </div>

                  <div className="mt-1.5 flex min-w-0 items-center gap-1.5 text-sm text-muted-foreground">
                    <Briefcase
                      className="h-3.5 w-3.5 shrink-0"
                      aria-hidden="true"
                    />
                    <span className="truncate">
                      {submission.serviceName || "General inquiry"}
                    </span>
                  </div>

                  <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                    {submission.company && (
                      <span className="max-w-56 truncate font-medium text-foreground/80">
                        {submission.company}
                      </span>
                    )}
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                      <time dateTime={submittedAt.dateTime}>
                        {submittedAt.short}
                      </time>
                    </span>
                  </div>
                </div>
              </div>
            </AccordionTrigger>

            <div className="flex items-center gap-2 pl-12 sm:justify-end sm:pl-0">
              {emailComposeHref && (
                <Button
                  size="sm"
                  className="h-11 flex-1 px-4 sm:h-9 sm:flex-none"
                  asChild
                >
                  <Link href={emailComposeHref} prefetch={false}>
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    Email
                  </Link>
                </Button>
              )}

              <div className="hidden lg:block">
                <StatusUpdate submission={submission} />
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-11 w-11 shrink-0 rounded-lg sm:h-9 sm:w-9"
                    aria-label={`More actions for ${submission.fullName || "submission"}`}
                  >
                    <MoreVertical className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem asChild>
                    <Link href={submissionHref} className="cursor-pointer">
                      <Eye className="h-4 w-4" aria-hidden="true" />
                      View details
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => onDelete(submission)}
                    className="cursor-pointer text-destructive focus:bg-destructive/10 focus:text-destructive"
                  >
                    <Trash2 className="h-4 w-4" aria-hidden="true" />
                    Delete submission
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <AccordionContent className="border-t bg-muted/10 px-4 pb-5 pt-5 sm:px-5">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              <section className="space-y-3 rounded-xl border bg-background p-4">
                <h4 className="flex items-center gap-2 text-sm font-semibold">
                  <User
                    className="h-4 w-4 text-muted-foreground"
                    aria-hidden="true"
                  />
                  Contact information
                </h4>
                <div className="space-y-2.5">
                  {emailComposeHref ? (
                    <Link
                      href={emailComposeHref}
                      prefetch={false}
                      className="flex min-w-0 items-center gap-2 text-sm text-primary hover:underline"
                      title="Compose email in Bilacert"
                    >
                      <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                      <span className="truncate">{submission.email}</span>
                    </Link>
                  ) : (
                    <span className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Mail className="h-4 w-4" aria-hidden="true" />
                      No email provided
                    </span>
                  )}

                  {phone ? (
                    <a
                      href={`tel:${phone}`}
                      className="flex items-center gap-2 text-sm hover:underline"
                    >
                      <Phone
                        className="h-4 w-4 text-muted-foreground"
                        aria-hidden="true"
                      />
                      {phone}
                    </a>
                  ) : (
                    <span className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Phone className="h-4 w-4" aria-hidden="true" />
                      No phone provided
                    </span>
                  )}
                </div>
              </section>

              <section className="space-y-3 rounded-xl border bg-background p-4">
                <h4 className="flex items-center gap-2 text-sm font-semibold">
                  <Calendar
                    className="h-4 w-4 text-muted-foreground"
                    aria-hidden="true"
                  />
                  Submission details
                </h4>
                <dl className="space-y-2.5 text-sm">
                  <div className="flex items-start justify-between gap-4">
                    <dt className="text-muted-foreground">Form</dt>
                    <dd className="max-w-56 text-right font-medium">
                      {formatFormType(submission.formType)}
                    </dd>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <dt className="text-muted-foreground">Submitted</dt>
                    <dd className="text-right font-medium">
                      <time dateTime={submittedAt.dateTime}>
                        {submittedAt.full}
                      </time>
                    </dd>
                  </div>
                  {submission.assignedTo && (
                    <div className="flex items-center justify-between gap-4">
                      <dt className="text-muted-foreground">Assigned to</dt>
                      <dd>
                        <Badge variant="secondary">
                          {submission.assignedTo}
                        </Badge>
                      </dd>
                    </div>
                  )}
                </dl>
              </section>

              <section className="space-y-3 rounded-xl border bg-background p-4 md:col-span-2 xl:col-span-1">
                <h4 className="text-sm font-semibold">Quick actions</h4>
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={submissionHref}>
                      <Eye className="h-4 w-4" aria-hidden="true" />
                      View full submission
                    </Link>
                  </Button>
                </div>

                <div className="space-y-2 border-t pt-3 lg:hidden">
                  <p className="text-xs font-medium text-muted-foreground">
                    Update status
                  </p>
                  <StatusUpdate submission={submission} />
                </div>
              </section>
            </div>

            {submission.details != null && (
              <SubmissionPreview
                details={submission.details}
                submissionHref={submissionHref}
              />
            )}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
}

export default memo(SubmissionCard);
