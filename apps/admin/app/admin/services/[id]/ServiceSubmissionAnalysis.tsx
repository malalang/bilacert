"use client";

import type { Service } from "@bilacert/contracts/service";
import type { Submission, SubmissionStatus } from "@bilacert/shared/types";
import { useSubmissions } from "@bilacert/supabase/hooks/useSubmissions";
import {
  Archive,
  CheckCircle2,
  Clock,
  Inbox,
  XCircle,
  type LucideIcon,
} from "lucide-react";
import { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DeleteSubmissionDialog from "../../form_submissions/DeleteSubmissionDialog";
import SubmissionCard from "../../form_submissions/SubmissionCard";
import { SubmissionsLineChart } from "../../analysis/charts";

type StatusConfig = {
  label: string;
  value: SubmissionStatus;
  Icon: LucideIcon;
  className: string;
};

const submissionStatuses: StatusConfig[] = [
  {
    label: "Pending",
    value: "pending",
    Icon: Clock,
    className: "bg-yellow-100 text-yellow-800 shadow-yellow-500/10",
  },
  {
    label: "Processing",
    value: "in-progress",
    Icon: Inbox,
    className: "bg-blue-100 text-blue-800 shadow-blue-500/10",
  },
  {
    label: "Completed",
    value: "completed",
    Icon: CheckCircle2,
    className: "bg-emerald-100 text-emerald-800 shadow-emerald-500/10",
  },
  {
    label: "Rejected",
    value: "rejected",
    Icon: XCircle,
    className: "bg-red-100 text-red-800 shadow-red-500/10",
  },
  {
    label: "Archived",
    value: "archived",
    Icon: Archive,
    className: "bg-slate-100 text-slate-800 shadow-slate-500/10",
  },
];

function getServiceSubmissions(service: Service, submissions: Submission[]) {
  const serviceTitle = service.title.trim().toLowerCase();

  return submissions.filter((submission) => {
    const submissionServiceName = submission.serviceName?.trim().toLowerCase();
    return (
      submission.serviceId === service.id || submissionServiceName === serviceTitle
    );
  });
}

function getSubmissionsByDay(submissions: Submission[]) {
  const dailyCounts = new Map<string, number>();

  for (const submission of submissions) {
    if (!submission.createdAt) continue;

    const date = new Date(submission.createdAt).toISOString().split("T")[0];
    if (!date) continue;

    dailyCounts.set(date, (dailyCounts.get(date) ?? 0) + 1);
  }

  return Array.from(dailyCounts.entries())
    .map(([date, count]) => ({ date, count }))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

interface ServiceSubmissionAnalysisProps {
  service: Service;
}

export default function ServiceSubmissionAnalysis({
  service,
}: ServiceSubmissionAnalysisProps) {
  const { data: submissions, loading } = useSubmissions();
  const [selectedSubmission, setSelectedSubmission] =
    useState<Submission | null>(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const serviceSubmissions = useMemo(
    () => getServiceSubmissions(service, submissions || []),
    [service, submissions],
  );
  const submissionsByDay = useMemo(
    () => getSubmissionsByDay(serviceSubmissions),
    [serviceSubmissions],
  );
  const statusCounts = useMemo(
    () =>
      submissionStatuses.map((status) => ({
        ...status,
        count: serviceSubmissions.filter(
          (submission) => submission.status === status.value,
        ).length,
      })),
    [serviceSubmissions],
  );

  const handleDelete = (submission: Submission) => {
    setSelectedSubmission(submission);
    setIsDeleteDialogOpen(true);
  };

  const handleCloseDialogs = () => {
    setIsDeleteDialogOpen(false);
    setSelectedSubmission(null);
  };

  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">
          Submission Analysis
        </h2>
        <p className="text-sm text-muted-foreground">
          Service-specific activity, status counts, and submission records.
        </p>
      </div>

      <div className="grid gap-3 md:grid-cols-5">
        {statusCounts.map(({ label, value, count, Icon, className }) => (
          <div
            key={value}
            className={`rounded-xl p-4 shadow-sm ${className}`}
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Icon className="h-4 w-4" />
                <span className="text-sm font-semibold">{label}</span>
              </div>
              <span className="text-2xl font-bold tabular-nums">{count}</span>
            </div>
          </div>
        ))}
      </div>

      <Card className="border-0 shadow-xl shadow-black/5">
        <CardHeader>
          <CardTitle>Submissions Over Time</CardTitle>
        </CardHeader>
        <CardContent>
          {submissionsByDay.length > 0 ? (
            <SubmissionsLineChart data={submissionsByDay} />
          ) : (
            <div className="flex h-[300px] items-center justify-center rounded-xl bg-muted/30 text-sm text-muted-foreground">
              No submission activity for this service yet.
            </div>
          )}
        </CardContent>
      </Card>

      <Card className="border-0 shadow-xl shadow-black/5">
        <CardHeader>
          <CardTitle>Submission Records</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="space-y-3">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="h-24 animate-pulse rounded-xl bg-muted"
                />
              ))}
            </div>
          ) : serviceSubmissions.length > 0 ? (
            <div className="grid gap-4">
              {serviceSubmissions.map((submission) => (
                <SubmissionCard
                  key={submission.id}
                  submission={submission}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          ) : (
            <div className="flex min-h-32 items-center justify-center rounded-xl bg-muted/30 text-sm text-muted-foreground">
              No submission records are linked to this service yet.
            </div>
          )}
        </CardContent>
      </Card>

      {isDeleteDialogOpen && (
        <DeleteSubmissionDialog
          isOpen={isDeleteDialogOpen}
          onClose={handleCloseDialogs}
          submission={selectedSubmission}
        />
      )}
    </section>
  );
}
