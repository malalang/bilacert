"use client";

import { Icon } from "@bilacert/shared";
import { type Submission, useDashboardData } from "@bilacert/supabase";
import { format, isValid, parseISO } from "date-fns";
import {
  BarChart as BarChartIcon,
  Clock,
  DollarSign,
  Users,
} from "lucide-react";
import Link from "next/link";
import StatCard from "@/components/admin/StatCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const safeFormatDate = (
  date: string | Date | undefined,
  fallback = "Invalid date",
) => {
  if (!date) return fallback;
  const d = typeof date === "string" ? parseISO(date) : date;
  return isValid(d) ? format(d, "dd MMM yyyy, HH:mm") : fallback;
};

export default function DashboardClient() {
  const { loading, error, stats, submissionsByService, recentActivity } =
    useDashboardData();

  if (error) {
    return (
      <div className="text-destructive">
        Error loading dashboard data: {error.message}
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Submissions"
          value={loading ? "..." : `${stats.totalSubmissions}`}
          icon={<Icon name="Package" className="h-4 w-4" />}
        />
        <StatCard
          title="New Applications"
          value={loading ? "..." : `${stats.newApplications}`}
          icon={<BarChartIcon className="h-4 w-4" />}
        />
        <StatCard
          title="Total Contacts"
          value={loading ? "..." : `${stats.totalContacts}`}
          icon={<Users className="h-4 w-4" />}
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

      <div className="grid gap-8 md:grid-cols-2">
        <Card>
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
                        className="grid grid-cols-[auto_1fr_auto] items-center gap-4"
                      >
                        <div className="flex items-center gap-3">
                          <Icon
                            name={item.icon as any}
                            className="h-5 w-5 text-muted-foreground"
                          />
                          <span className="truncate text-sm font-medium">
                            {item.title}
                          </span>
                        </div>
                        <Progress
                          value={
                            (item.submissions / stats.totalSubmissions) * 100
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
                <div className="text-center text-muted-foreground pt-4">
                  No submissions yet.
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg font-medium">
              Recent Activity
            </CardTitle>
            <Clock className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {recentActivity.length > 0 ? (
                recentActivity.map((activity) => (
                  <Link
                    key={(activity as any).id}
                    href={
                      activity.type === "submission"
                        ? `/admin/form_submissions/${(activity as any).id}`
                        : `/admin/contacts/${(activity as any).id}`
                    }
                    className="block rounded-lg transition-colors hover:bg-muted/50"
                  >
                    <div className="flex items-start gap-4 p-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                        <Icon
                          name={
                            activity.type === "submission"
                              ? "Package"
                              : "MessageSquare"
                          }
                          className="h-5 w-5"
                        />
                      </div>
                      <div className="grid gap-0.5 flex-1">
                        <p className="text-sm font-medium">
                          {(activity as any).fullName || (activity as any).name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {(activity as any).email}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {activity.type === "submission"
                            ? (activity as Submission).service_name ||
                              (activity as Submission).service_name
                            : "Contact Form"}
                        </p>
                      </div>
                      <div className="ml-auto text-xs text-muted-foreground whitespace-nowrap">
                        {safeFormatDate((activity as any).date)}
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="text-center text-muted-foreground pt-4">
                  No recent activity.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
