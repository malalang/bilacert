"use client";

import { Icon } from "@bilacert/shared/Icon";
import type { BlogPost, Contact, Submission } from "@bilacert/shared/types";
import { useDashboardData } from "@bilacert/supabase/hooks/useDashboardData";
import { format, isValid, parseISO } from "date-fns";
import {
  Archive,
  BarChart as BarChartIcon,
  Calendar,
  CheckCircle2,
  Clock,
  DollarSign,
  Eye,
  Inbox,
  MessageSquare,
  Newspaper,
  Users,
  XCircle,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import StatCard from "@/components/admin/StatCard";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const statusStyles: Record<
  string,
  {
    label: string;
    Icon: LucideIcon;
    className: string;
  }
> = {
  pending: {
    label: "Pending",
    Icon: Clock,
    className: "bg-yellow-100 text-yellow-800 shadow-yellow-500/10",
  },
  "in-progress": {
    label: "Processing",
    Icon: Inbox,
    className: "bg-blue-100 text-blue-800 shadow-blue-500/10",
  },
  completed: {
    label: "Completed",
    Icon: CheckCircle2,
    className: "bg-emerald-100 text-emerald-800 shadow-emerald-500/10",
  },
  rejected: {
    label: "Rejected",
    Icon: XCircle,
    className: "bg-red-100 text-red-800 shadow-red-500/10",
  },
  archived: {
    label: "Archived",
    Icon: Archive,
    className: "bg-slate-100 text-slate-800 shadow-slate-500/10",
  },
};

const safeFormatDate = (
  date: string | Date | undefined,
  fallback = "Invalid date",
) => {
  if (!date) return fallback;
  const d = typeof date === "string" ? parseISO(date) : date;
  return isValid(d) ? format(d, "dd MMM yyyy, HH:mm") : fallback;
};

const compactFormatDate = (date: string | Date | undefined) => {
  if (!date) return "No date";
  const d = typeof date === "string" ? parseISO(date) : date;
  return isValid(d) ? format(d, "dd MMM yyyy") : "Invalid date";
};

function PendingSubmissionItem({ submission }: { submission: Submission }) {
  return (
    <Link
      href={`/admin/form_submissions/${submission.id}`}
      className="block rounded-xl bg-background p-3 shadow-sm shadow-black/5 transition-all hover:-translate-y-0.5 hover:shadow-md hover:shadow-black/10"
    >
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-100 text-yellow-700">
          <Clock className="h-5 w-5" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <p className="truncate text-sm font-semibold">
              {submission.fullName || "Anonymous"}
            </p>
            <Badge
              variant="outline"
              className="bg-yellow-100 text-[10px] font-bold text-yellow-800"
            >
              Pending
            </Badge>
          </div>
          <p className="truncate text-xs text-muted-foreground">
            {submission.email}
          </p>
          <p className="mt-1 truncate text-xs text-muted-foreground">
            {submission.serviceName || "General Inquiry"}
          </p>
        </div>
        <span className="whitespace-nowrap text-xs text-muted-foreground">
          {compactFormatDate(submission.createdAt)}
        </span>
      </div>
    </Link>
  );
}

function ContactItem({ contact }: { contact: Contact }) {
  return (
    <Link
      href={`/admin/contacts/${contact.id}`}
      className="block rounded-xl bg-background p-3 shadow-sm shadow-black/5 transition-all hover:-translate-y-0.5 hover:shadow-md hover:shadow-black/10"
    >
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <MessageSquare className="h-5 w-5" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold">
            {contact.name || "Unnamed contact"}
          </p>
          <p className="truncate text-xs text-muted-foreground">
            {contact.email}
          </p>
          <p className="mt-1 truncate text-xs text-muted-foreground">
            {contact.service || "Contact Form"}
          </p>
        </div>
        <span className="whitespace-nowrap text-xs text-muted-foreground">
          {compactFormatDate(contact.submittedAt)}
        </span>
      </div>
    </Link>
  );
}

function BlogInsightCard({ blog }: { blog: BlogPost }) {
  return (
    <Link
      href={`/admin/blogs/${blog.id}`}
      className="group flex overflow-hidden rounded-xl bg-white shadow-sm shadow-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10"
    >
      <div className="relative h-28 w-32 shrink-0 overflow-hidden bg-muted">
        <Image
          src={blog.featuredImage || `https://picsum.photos/seed/${blog.id}/600/400`}
          alt={blog.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex min-w-0 flex-1 flex-col justify-between p-4">
        <div>
          <div className="mb-2 flex flex-wrap items-center gap-2">
            {blog.category && <Badge variant="secondary">{blog.category}</Badge>}
            <Badge variant={blog.published ? "default" : "outline"}>
              {blog.published ? "Published" : "Draft"}
            </Badge>
          </div>
          <h3 className="line-clamp-2 text-sm font-semibold text-primary">
            {blog.title}
          </h3>
        </div>
        <div className="mt-3 flex items-center justify-between gap-2 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Eye className="h-3.5 w-3.5" />
            {(blog.viewsCount || 0).toLocaleString()} views
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            {compactFormatDate(blog.createdAt)}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function DashboardClient() {
  const {
    loading,
    error,
    stats,
    statusCounts,
    submissionsByService,
    pendingSubmissions,
    recentContacts,
    topViewedBlogs,
  } = useDashboardData();

  if (error) {
    return (
      <div className="text-destructive">
        Error loading dashboard data: {error.message}
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        <StatCard
          title="Total Submissions"
          value={loading ? "..." : `${stats.totalSubmissions}`}
          icon={<Icon name="Package" className="h-4 w-4" />}
        />
        <StatCard
          title="Pending Applications"
          value={loading ? "..." : `${stats.newApplications}`}
          icon={<BarChartIcon className="h-4 w-4" />}
        />
        <StatCard
          title="Total Contacts"
          value={loading ? "..." : `${stats.totalContacts}`}
          icon={<Users className="h-4 w-4" />}
        />
        <StatCard
          title="Total Blogs"
          value={loading ? "..." : `${stats.totalBlogs}`}
          icon={<Newspaper className="h-4 w-4" />}
        />
        <StatCard
          title="Total Revenue"
          value={
            loading
              ? "..."
              : `R ${stats.totalRevenue.toLocaleString("en-ZA", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
          }
          icon={<DollarSign className="h-4 w-4" />}
        />
      </div>

      <Card className="border-0 shadow-xl shadow-black/5">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">
            Submission Status Totals
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-5">
            {statusCounts.map(({ status, count }) => {
              const statusStyle = statusStyles[status];
              if (!statusStyle) return null;
              const { Icon: StatusIcon } = statusStyle;

              return (
                <div
                  key={status}
                  className={`rounded-xl p-4 shadow-sm ${statusStyle.className}`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <StatusIcon className="h-4 w-4" />
                      <span className="text-sm font-semibold">
                        {statusStyle.label}
                      </span>
                    </div>
                    <span className="text-2xl font-bold tabular-nums">
                      {count}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-8 xl:grid-cols-[1.15fr_0.85fr]">
        <Card className="border-0 shadow-xl shadow-black/5">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg font-medium">
              Submissions by Service
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {submissionsByService.length > 0 ? (
                (() => {
                  const progressColorClasses = [
                    "[&>div]:bg-chart-1",
                    "[&>div]:bg-chart-2",
                    "[&>div]:bg-chart-3",
                    "[&>div]:bg-chart-4",
                    "[&>div]:bg-chart-5",
                  ];
                  return submissionsByService
                    .sort((a, b) => b.submissions - a.submissions)
                    .map((item, index) => (
                      <div
                        key={item.id}
                        className="grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-xl bg-muted/20 p-3 shadow-sm shadow-black/5"
                      >
                        <div className="flex min-w-0 items-center gap-3">
                          <Icon
                            name={item.icon as any}
                            className="h-5 w-5 shrink-0 text-muted-foreground"
                          />
                          <span className="truncate text-sm font-medium">
                            {item.title}
                          </span>
                        </div>
                        <Progress
                          value={
                            stats.totalSubmissions > 0
                              ? (item.submissions / stats.totalSubmissions) * 100
                              : 0
                          }
                          className={`h-2 ${progressColorClasses[index % progressColorClasses.length]}`}
                        />
                        <span className="font-mono text-sm font-medium">
                          {item.submissions}
                        </span>
                      </div>
                    ));
                })()
              ) : (
                <div className="pt-4 text-center text-muted-foreground">
                  No submissions yet.
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-xl shadow-black/5">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle className="text-lg font-medium">
                Recent Activity
              </CardTitle>
              <p className="mt-1 text-sm text-muted-foreground">
                Latest pending submissions, limited to 5.
              </p>
            </div>
            <Clock className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {pendingSubmissions.length > 0 ? (
                pendingSubmissions.map((submission) => (
                  <PendingSubmissionItem
                    key={submission.id}
                    submission={submission}
                  />
                ))
              ) : (
                <div className="pt-4 text-center text-muted-foreground">
                  No pending submissions.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-8 xl:grid-cols-[1.15fr_0.85fr]">
        <Card className="border-0 shadow-xl shadow-black/5">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle className="text-lg font-medium">
                Top Blog Views
              </CardTitle>
              <p className="mt-1 text-sm text-muted-foreground">
                Three highest-performing blog posts by views.
              </p>
            </div>
            <Eye className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 lg:grid-cols-3 xl:grid-cols-1">
              {topViewedBlogs.length > 0 ? (
                topViewedBlogs.map((blog) => (
                  <BlogInsightCard key={blog.id} blog={blog} />
                ))
              ) : (
                <div className="pt-4 text-center text-muted-foreground">
                  No blog views yet.
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-xl shadow-black/5">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle className="text-lg font-medium">
                Recent Contacts
              </CardTitle>
              <p className="mt-1 text-sm text-muted-foreground">
                Latest contact messages, limited to 5.
              </p>
            </div>
            <MessageSquare className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentContacts.length > 0 ? (
                recentContacts.map((contact) => (
                  <ContactItem key={contact.id} contact={contact} />
                ))
              ) : (
                <div className="pt-4 text-center text-muted-foreground">
                  No contacts yet.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
