"use client";

import type { Service } from "@bilacert/contracts/service";
import type { Submission, SubmissionStatus } from "@bilacert/shared/types";
import { useServices } from "@bilacert/supabase/hooks/useServices";
import { useSubmissions } from "@bilacert/supabase/hooks/useSubmissions";
import {
  Archive,
  BarChart3,
  CheckCircle2,
  Clock,
  Inbox,
  LayoutGrid,
  Search,
  XCircle,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";
import AnalysesHeader from "@/components/admin/AnalysesHeader";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DeleteSubmissionDialog from "./DeleteSubmissionDialog";
import SubmissionCard from "./SubmissionCard";

const submissionStatuses: {
  label: string;
  value: SubmissionStatus;
  Icon: LucideIcon;
  className: string;
}[] = [
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

function normalizeServiceKey(value: string | undefined) {
  return value?.trim().toLowerCase();
}

function getSubmissionStatusTotal(
  submissions: Submission[],
  status: SubmissionStatus,
) {
  return submissions.filter((submission) => submission.status === status).length;
}

function getServiceSubmissions(service: Service, submissions: Submission[]) {
  const serviceKeys = [service.id, service.slug, service.title]
    .map(normalizeServiceKey)
    .filter(Boolean);

  return submissions.filter((submission) => {
    const submissionServiceKeys = [submission.serviceId, submission.serviceName]
      .map(normalizeServiceKey)
      .filter(Boolean);

    return submissionServiceKeys.some((submissionServiceKey) =>
      serviceKeys.includes(submissionServiceKey),
    );
  });
}

function TopServicesBySubmissions({
  services,
  submissions,
}: {
  services: Service[];
  submissions: Submission[];
}) {
  const serviceSubmissionRows = services
    .map((service) => {
      const serviceSubmissions = getServiceSubmissions(service, submissions);
      const statusCounts = submissionStatuses.map((status) => ({
        ...status,
        count: serviceSubmissions.filter(
          (submission) => submission.status === status.value,
        ).length,
      }));

      return {
        service,
        total: serviceSubmissions.length,
        statusCounts,
      };
    })
    .filter(({ total }) => total > 0)
    .sort((a, b) => b.total - a.total)
    .slice(0, 5);

  return (
    <Card className="border-0 shadow-xl shadow-black/5">
      <CardHeader className="flex flex-row items-start justify-between gap-4">
        <div>
          <CardTitle className="text-lg font-semibold">
            Top Services by Submissions
          </CardTitle>
          <CardDescription>
            The highest-volume services, with submission status breakdowns.
          </CardDescription>
        </div>
        <BarChart3 className="mt-1 h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {serviceSubmissionRows.length > 0 ? (
            serviceSubmissionRows.map(({ service, total, statusCounts }, index) => (
              <div
                key={service.id}
                className="rounded-xl bg-muted/20 p-4 shadow-sm shadow-black/5"
              >
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-primary">
                      {service.title}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {service.category || "Uncategorized"}
                    </p>
                  </div>
                  <span className="font-mono text-sm font-semibold tabular-nums">
                    {total}
                  </span>
                </div>
                <Progress
                  value={submissions.length > 0 ? (total / submissions.length) * 100 : 0}
                  className={`mt-3 h-2 ${[
                    "[&>div]:bg-chart-1",
                    "[&>div]:bg-chart-2",
                    "[&>div]:bg-chart-3",
                    "[&>div]:bg-chart-4",
                    "[&>div]:bg-chart-5",
                  ][index % 5]}`}
                />
                <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
                  {statusCounts
                    .filter(({ count }) => count > 0)
                    .map(({ label, value, count, Icon, className }) => (
                      <div
                        key={value}
                        className={`flex items-center justify-between gap-2 rounded-lg px-3 py-2 text-xs font-semibold shadow-sm ${className}`}
                      >
                        <span className="flex items-center gap-1.5">
                          <Icon className="h-3.5 w-3.5" />
                          {label}
                        </span>
                        <span className="tabular-nums">{count}</span>
                      </div>
                    ))}
                </div>
              </div>
            ))
          ) : (
            <div className="rounded-xl bg-muted/30 py-10 text-center text-sm text-muted-foreground">
              No service submissions yet.
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default function SubmissionsClient() {
  const { data: submissions, loading, error } = useSubmissions();
  const {
    data: services,
    loading: servicesLoading,
    error: servicesError,
  } = useServices();
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedSubmission, setSelectedSubmission] =
    useState<Submission | null>(null);
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const handleDelete = (submission: Submission) => {
    setSelectedSubmission(submission);
    setIsDeleteDialogOpen(true);
  };

  const handleCloseDialogs = () => {
    setIsDeleteDialogOpen(false);
    setSelectedSubmission(null);
  };

  const pageError = error || servicesError;

  if (pageError) {
    return (
      <div className="rounded-lg border border-destructive bg-destructive/10 p-4 text-destructive font-medium">
        Error loading submissions: {pageError.message}
      </div>
    );
  }

  const allSubmissions = submissions || [];
  const filtered = allSubmissions.filter((s) => {
    const term = search.toLowerCase();
    const matchesSearch =
      s.fullName?.toLowerCase().includes(term) ||
      s.email?.toLowerCase().includes(term) ||
      s.serviceName?.toLowerCase().includes(term);

    if (activeTab === "all") return matchesSearch;
    return matchesSearch && s.status === activeTab;
  });

  if (loading || servicesLoading) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-end gap-4">
          <Skeleton className="h-10 w-48" />
          <Skeleton className="h-10 w-72" />
        </div>
        <Skeleton className="h-72 w-full rounded-xl" />
        <div className="grid gap-4">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-24 w-full rounded-xl" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            Form Submissions
          </h1>
          <p className="text-sm text-muted-foreground">
            Manage and track all customer inquiries and service applications.
          </p>
        </div>
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by name, email, or service..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 h-10 shadow-sm"
          />
        </div>
      </div>

      <AnalysesHeader
        items={[
          {
            title: "Pending",
            value: getSubmissionStatusTotal(allSubmissions, "pending"),
            description: "Awaiting first response",
            icon: <Clock className="h-4 w-4 text-muted-foreground" />,
          },
          {
            title: "Processing",
            value: getSubmissionStatusTotal(allSubmissions, "in-progress"),
            description: "Currently being handled",
            icon: <Inbox className="h-4 w-4 text-muted-foreground" />,
          },
          {
            title: "Rejected",
            value: getSubmissionStatusTotal(allSubmissions, "rejected"),
            description: "Declined or not approved",
            icon: <XCircle className="h-4 w-4 text-muted-foreground" />,
          },
          {
            title: "Archived",
            value: getSubmissionStatusTotal(allSubmissions, "archived"),
            description: "Stored for reference",
            icon: <Archive className="h-4 w-4 text-muted-foreground" />,
          },
        ]}
      />

      <TopServicesBySubmissions
        services={services || []}
        submissions={allSubmissions}
      />

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="w-full justify-start overflow-x-auto sm:w-auto">
          <TabsTrigger value="all" className="gap-2">
            <LayoutGrid className="h-3.5 w-3.5" /> <span>All</span>
          </TabsTrigger>
          <TabsTrigger value="pending" className="gap-2">
            <Clock className="h-3.5 w-3.5 text-yellow-600" />
            <span>Pending</span>
          </TabsTrigger>
          <TabsTrigger value="in-progress" className="gap-2">
            <Inbox className="h-3.5 w-3.5 text-blue-600" />
            <span>Processing</span>
          </TabsTrigger>
          <TabsTrigger value="completed" className="gap-2">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
            <span className="hidden sm:inline">Completed</span>
          </TabsTrigger>
          <TabsTrigger value="rejected" className="gap-2">
            <XCircle className="h-3.5 w-3.5 text-red-600" />
            <span className="hidden sm:inline">Rejected</span>
          </TabsTrigger>
          <TabsTrigger value="archived" className="gap-2">
            <Archive className="h-3.5 w-3.5 text-slate-600" />
            <span className="hidden sm:inline">Archived</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-6">
          {filtered.length === 0 ? (
            <Card className="border-dashed py-12">
              <CardContent className="flex flex-col items-center justify-center text-center">
                <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mb-4">
                  <Inbox className="h-8 w-8 text-muted-foreground/50" />
                </div>
                <h3 className="text-lg font-semibold">No submissions found</h3>
                <p className="text-sm text-muted-foreground max-w-xs mt-2">
                  {search
                    ? "We couldn't find any submissions matching your search criteria."
                    : `You don't have any ${activeTab !== "all" ? activeTab : ""} submissions at the moment.`}
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-4">
              <div className="flex items-center justify-between px-1">
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  Showing {filtered.length} submission
                  {filtered.length !== 1 ? "s" : ""}
                </span>
              </div>
              {filtered.map((submission) => (
                <SubmissionCard
                  key={submission.id}
                  submission={submission}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>

      {isDeleteDialogOpen && (
        <DeleteSubmissionDialog
          isOpen={isDeleteDialogOpen}
          onClose={handleCloseDialogs}
          submission={selectedSubmission}
        />
      )}
    </div>
  );
}
