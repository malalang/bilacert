"use client";

import type {
  BlogPost,
  Contact,
  Service,
  Submission,
  Testimonial,
} from "@bilacert/shared/types";
import { createSupabaseBrowserClient } from "@bilacert/supabase/client";
import { subYears } from "date-fns";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import type { DateRange } from "react-day-picker";
import AnalysesHeader from "@/components/admin/AnalysesHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DateRangePicker } from "@/components/ui/DateRangePicker";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group";
import {
  Archive,
  BarChart3,
  Clock,
  Eye,
  FileText,
  Inbox,
  Newspaper,
  Package,
  Sparkles,
  XCircle,
  type LucideIcon,
} from "lucide-react";
import {
  BlogViewsChart,
  CombinedActivityChart,
  ContentBarChart,
  DetailedSubmissionsChart,
  SubmissionStatusPieChart,
  SubmissionsBarChart,
  SubmissionsLineChart,
} from "./charts";
import AnalysisLoading from "./loading";

const supabase = createSupabaseBrowserClient();

interface ChartData {
  submissionsByDay: { date: string; count: number }[];
  submissionsByService: { serviceName: string; count: number }[];
  contentBreakdown: { contentType: string; count: number }[];
  blogViews: { title: string; views: number }[];
  submissionStatus: { status: string; count: number }[];
  detailedSubmissions: { date: string; [key: string]: number | string }[];
  combinedActivity: { date: string; [key: string]: number | string }[];
  combinedActivityKeys: string[];
  serviceKeys: string[];
  statusKeys: string[];
  totalSubmissions: number;
  publishedContent: number;
  totalViews: number;
  totalServices: number;
  publishedServices: number;
  featuredServices: number;
  draftServices: number;
  totalBlogs: number;
  featuredBlogs: number;
  draftBlogs: number;
  pendingApplications: number;
  processingApplications: number;
  rejectedApplications: number;
  archivedApplications: number;
}

const serviceActivityKeyOrder = [
  "services_created",
  "services_updated",
  "services_published",
  "services_featured",
];
const blogActivityKeyOrder = [
  "blogs_created",
  "blogs_published",
  "blogs_updated",
  "blogs_featured",
  "blog_drafts_created",
];

function formatActivityLabel(key: string) {
  return key
    .replace(/-/g, "_")
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function metric(title: string, value: string | number, description: string, Icon: LucideIcon) {
  return {
    title,
    value,
    description,
    icon: <Icon className="h-4 w-4 text-muted-foreground" />,
  };
}

function availableKeys(allKeys: string[], keys: string[]) {
  return keys.filter((key) => allKeys.includes(key));
}

function submissionActivityKeys(allKeys: string[]) {
  return allKeys.filter(
    (key) =>
      key === "submissions_created" ||
      key === "submissions_updated" ||
      key.startsWith("submission_status_") ||
      key.startsWith("form_type_"),
  );
}

function AnalyticsSection({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      {children}
    </section>
  );
}

function SectionActivityCard({
  title,
  description,
  data,
  keys,
}: {
  title: string;
  description: string;
  data: { date: string; [key: string]: number | string }[];
  keys: string[];
}) {
  if (keys.length === 0) return null;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardHeader>
      <CardContent>
        <CombinedActivityChart data={data} keys={keys} />
      </CardContent>
    </Card>
  );
}

function statusTotal(submissions: Submission[], status: string) {
  return submissions.filter((submission) => submission.status === status).length;
}

async function getAnalyticsData(
  dateRange: DateRange | undefined,
): Promise<ChartData> {
  const [blogRes, contactRes, serviceRes, testimonialRes, submissionRes] =
    await Promise.all([
      supabase
        .from("blog_posts")
        .select(
          "createdAt,publishedAt,updatedAt,category,published,featured,viewsCount,title",
        ),
      supabase.from("contacts").select("submittedAt"),
      supabase.from("services").select("createdAt,updatedAt,published,featured"),
      supabase.from("testimonials").select("createdAt"),
      supabase
        .from("form_submissions")
        .select("createdAt,updatedAt,serviceName,status,formType"),
    ]);

  const blogs = (blogRes?.data as BlogPost[]) || [];
  const contacts = (contactRes?.data as Contact[]) || [];
  const services = (serviceRes?.data as Service[]) || [];
  const testimonials = (testimonialRes?.data as Testimonial[]) || [];
  const submissions = (submissionRes?.data as Submission[]) || [];
  const activity = new Map<string, Record<string, number>>();
  const activityKeys = new Set<string>();

  const addActivity = (dateValue: string | null | undefined, key: string) => {
    if (!dateValue) return;
    const date = new Date(dateValue).toISOString().split("T")[0];
    if (!date) return;
    const day = activity.get(date) ?? {};
    activity.set(date, { ...day, [key]: (day[key] ?? 0) + 1 });
    activityKeys.add(key);
  };

  blogs.forEach((blog) => {
    addActivity(blog.createdAt, "blogs_created");
    addActivity(blog.publishedAt, "blogs_published");
    addActivity(blog.updatedAt, "blogs_updated");
    if (blog.featured) addActivity(blog.updatedAt ?? blog.createdAt, "blogs_featured");
    if (!blog.published) addActivity(blog.createdAt, "blog_drafts_created");
  });
  contacts.forEach((contact) => addActivity(contact.submittedAt, "contacts_submitted"));
  services.forEach((service) => {
    addActivity(service.createdAt, "services_created");
    addActivity(service.updatedAt, "services_updated");
    if (service.published) addActivity(service.updatedAt ?? service.createdAt, "services_published");
    if (service.featured) addActivity(service.updatedAt ?? service.createdAt, "services_featured");
  });
  testimonials.forEach((testimonial) => addActivity(testimonial.createdAt, "testimonials_created"));
  submissions.forEach((submission) => {
    addActivity(submission.createdAt, "submissions_created");
    addActivity(submission.updatedAt, "submissions_updated");
    addActivity(submission.createdAt, `submission_status_${submission.status}`);
    addActivity(submission.createdAt, `form_type_${submission.formType}`);
  });

  const combinedActivity = Array.from(activity.entries())
    .map(([date, day]) => {
      const row: { date: string; [key: string]: number | string } = { date };
      activityKeys.forEach((key) => {
        row[key] = day[key] ?? 0;
      });
      return row;
    })
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const inDateRange = (dateValue: string | null | undefined) => {
    if (!dateValue) return false;
    const date = new Date(dateValue);
    return (!dateRange?.from || date >= dateRange.from) && (!dateRange?.to || date <= dateRange.to);
  };
  const filteredSubmissions = submissions.filter((submission) => inDateRange(submission.createdAt));
  const filteredBlogs = blogs.filter((blog) => inDateRange(blog.createdAt));
  const filteredServices = services.filter((service) => inDateRange(service.createdAt));

  const dailyCounts = new Map<string, number>();
  filteredSubmissions.forEach(({ createdAt }) => {
    const date = new Date(createdAt).toISOString().split("T")[0] as string;
    dailyCounts.set(date, (dailyCounts.get(date) ?? 0) + 1);
  });
  const submissionsByDay = Array.from(dailyCounts.entries())
    .map(([date, count]) => ({ date, count }))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const serviceCounts = new Map<string, number>();
  filteredSubmissions.forEach(({ serviceName }) => {
    const key = serviceName || "Uncategorized";
    serviceCounts.set(key, (serviceCounts.get(key) ?? 0) + 1);
  });
  const submissionsByService = Array.from(serviceCounts.entries()).map(
    ([serviceName, count]) => ({ serviceName, count }),
  );

  const categoryCounts = new Map<string, number>();
  filteredBlogs.forEach(({ category }) => {
    const key = category || "Uncategorized";
    categoryCounts.set(key, (categoryCounts.get(key) ?? 0) + 1);
  });
  const contentBreakdown = Array.from(categoryCounts.entries()).map(
    ([contentType, count]) => ({ contentType, count }),
  );

  const blogViews = filteredBlogs
    .map(({ title, viewsCount }) => ({ title, views: viewsCount ?? 0 }))
    .sort((a, b) => b.views - a.views)
    .slice(0, 10);

  const statusCounts = new Map<string, number>();
  filteredSubmissions.forEach(({ status }) => {
    const key = status || "Unknown";
    statusCounts.set(key, (statusCounts.get(key) ?? 0) + 1);
  });
  const submissionStatus = Array.from(statusCounts.entries()).map(
    ([status, count]) => ({ status, count }),
  );

  const serviceKeys = Array.from(
    new Set(filteredSubmissions.map((submission) => submission.serviceName || "Uncategorized")),
  );
  const statusKeys = Array.from(
    new Set(filteredSubmissions.map((submission) => submission.status || "Unknown")),
  );
  const detailedCounts = new Map<string, { total: number } & Record<string, number>>();
  filteredSubmissions.forEach(({ createdAt, serviceName, status }) => {
    const date = new Date(createdAt).toISOString().split("T")[0] as string;
    if (!detailedCounts.has(date)) detailedCounts.set(date, { total: 0 });
    const day = detailedCounts.get(date)!;
    day.total += 1;
    day[serviceName || "Uncategorized"] = (day[serviceName || "Uncategorized"] ?? 0) + 1;
    day[status || "Unknown"] = (day[status || "Unknown"] ?? 0) + 1;
  });
  const detailedSubmissions = Array.from(detailedCounts.entries())
    .map(([date, data]) => ({ date, ...data }))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const publishedServices = filteredServices.filter((service) => service.published).length;
  const publishedContent = filteredBlogs.filter((blog) => blog.published).length;
  const totalViews = filteredBlogs.reduce((sum, blog) => sum + (blog.viewsCount ?? 0), 0);

  return {
    submissionsByDay,
    submissionsByService,
    contentBreakdown,
    blogViews,
    submissionStatus,
    detailedSubmissions,
    combinedActivity,
    combinedActivityKeys: Array.from(activityKeys),
    serviceKeys,
    statusKeys,
    totalSubmissions: filteredSubmissions.length,
    publishedContent,
    totalViews,
    totalServices: filteredServices.length,
    publishedServices,
    featuredServices: filteredServices.filter((service) => service.featured).length,
    draftServices: filteredServices.length - publishedServices,
    totalBlogs: filteredBlogs.length,
    featuredBlogs: filteredBlogs.filter((blog) => blog.featured).length,
    draftBlogs: filteredBlogs.filter((blog) => !blog.published).length,
    pendingApplications: statusTotal(filteredSubmissions, "pending"),
    processingApplications: statusTotal(filteredSubmissions, "in-progress"),
    rejectedApplications: statusTotal(filteredSubmissions, "rejected"),
    archivedApplications: statusTotal(filteredSubmissions, "archived"),
  };
}

export default function AnalysisClient() {
  const [chartData, setChartData] = useState<ChartData | null>(null);
  const [loading, setLoading] = useState(true);
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: subYears(new Date(), 1),
    to: new Date(),
  });
  const [visibleKeys, setVisibleKeys] = useState<string[]>([]);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setChartData(await getAnalyticsData(dateRange));
      setLoading(false);
    }
    fetchData();
  }, [dateRange]);

  useEffect(() => {
    if (chartData?.combinedActivityKeys) setVisibleKeys(chartData.combinedActivityKeys);
  }, [chartData]);

  if (loading || !chartData) return <AnalysisLoading />;

  const {
    submissionsByDay,
    submissionsByService,
    contentBreakdown,
    blogViews,
    submissionStatus,
    detailedSubmissions,
    combinedActivity,
    combinedActivityKeys,
    serviceKeys,
    statusKeys,
    totalSubmissions,
    publishedContent,
    totalViews,
    totalServices,
    publishedServices,
    featuredServices,
    draftServices,
    totalBlogs,
    featuredBlogs,
    draftBlogs,
    pendingApplications,
    processingApplications,
    rejectedApplications,
    archivedApplications,
  } = chartData;
  const sortedActivityKeys = [...combinedActivityKeys].sort();

  return (
    <div className="space-y-10">
      <header className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Analysis Dashboard</h1>
          <p className="text-muted-foreground">
            Live insights into services, submissions, blogs, and platform activity.
          </p>
        </div>
        <DateRangePicker date={dateRange} onDateChange={setDateRange} />
      </header>

      <AnalysesHeader
        items={[
          metric("Total Services", totalServices, `${publishedServices.toLocaleString()} published`, Package),
          metric("Total Blogs", totalBlogs, `${publishedContent.toLocaleString()} published`, Newspaper),
          metric("Total Submissions", totalSubmissions, "Submission volume in selected range", FileText),
          metric("Pending Applications", pendingApplications, `${totalViews.toLocaleString()} total blog views`, Clock),
        ]}
      />

      <Card>
        <CardHeader>
          <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <CardTitle>Overview Combined Activity</CardTitle>
              <p className="mt-1 text-sm text-muted-foreground">
                Full-platform activity across services, submissions, blogs, contacts, and testimonials.
              </p>
            </div>
            <Button type="button" variant="outline" size="sm" onClick={() => setVisibleKeys(sortedActivityKeys)}>
              Show All
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="mb-6 rounded-xl bg-muted/30 p-4 shadow-sm shadow-black/5">
            <ToggleGroup multiple value={visibleKeys} onValueChange={setVisibleKeys} aria-label="Filter overview combined activity chart">
              {sortedActivityKeys.map((key) => (
                <ToggleGroupItem key={key} value={key}>
                  {formatActivityLabel(key)}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>
          <CombinedActivityChart data={combinedActivity} keys={visibleKeys} />
        </CardContent>
      </Card>

      <AnalyticsSection title="Services Analysis" description="Monitor service catalog health and how services drive form submissions.">
        <AnalysesHeader
          items={[
            metric("Total Services", totalServices, `${publishedServices.toLocaleString()} published`, Package),
            metric("Featured Services", featuredServices, "Highlighted on public pages", Sparkles),
            metric("Service Submissions", totalSubmissions, "Submission volume in selected range", BarChart3),
            metric("Draft Services", draftServices, "Not visible publicly yet", Clock),
          ]}
        />
        <Card>
          <CardHeader><CardTitle>Submissions by Service</CardTitle></CardHeader>
          <CardContent><SubmissionsBarChart data={submissionsByService} /></CardContent>
        </Card>
        <SectionActivityCard
          title="Services Combined Activity"
          description="Service creation, update, publishing, and featured activity over time."
          data={combinedActivity}
          keys={availableKeys(combinedActivityKeys, serviceActivityKeyOrder)}
        />
      </AnalyticsSection>

      <AnalyticsSection title="Submission Analysis" description="Track submission volume, status mix, and detailed service/status trends.">
        <AnalysesHeader
          items={[
            metric("Pending", pendingApplications, "Awaiting first response", Clock),
            metric("Processing", processingApplications, "Currently being handled", Inbox),
            metric("Rejected", rejectedApplications, "Declined or not approved", XCircle),
            metric("Archived", archivedApplications, "Stored for reference", Archive),
          ]}
        />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader><CardTitle>Submissions Over Time</CardTitle></CardHeader>
            <CardContent><SubmissionsLineChart data={submissionsByDay} /></CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Submission Status</CardTitle></CardHeader>
            <CardContent><SubmissionStatusPieChart data={submissionStatus} /></CardContent>
          </Card>
        </div>
        <Card>
          <CardHeader><CardTitle>Detailed Submissions</CardTitle></CardHeader>
          <CardContent>
            <DetailedSubmissionsChart data={detailedSubmissions} serviceKeys={serviceKeys} statusKeys={statusKeys} />
          </CardContent>
        </Card>
        <SectionActivityCard
          title="Submissions Combined Activity"
          description="Submission creation, update, status, and form-type activity over time."
          data={combinedActivity}
          keys={submissionActivityKeys(combinedActivityKeys)}
        />
      </AnalyticsSection>

      <AnalyticsSection title="Blogs Analysis" description="Review blog publishing, category coverage, and view performance.">
        <AnalysesHeader
          items={[
            metric("Total Blogs", totalBlogs, `${publishedContent.toLocaleString()} published`, Newspaper),
            metric("Published Blogs", publishedContent, `${draftBlogs.toLocaleString()} drafts in range`, FileText),
            metric("Blog Views", totalViews, "Views across posts in range", Eye),
            metric("Featured Blogs", featuredBlogs, "Promoted content in range", Sparkles),
          ]}
        />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader><CardTitle>Content Breakdown</CardTitle></CardHeader>
            <CardContent><ContentBarChart data={contentBreakdown} /></CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Blog Views</CardTitle></CardHeader>
            <CardContent><BlogViewsChart data={blogViews} /></CardContent>
          </Card>
        </div>
        <SectionActivityCard
          title="Blogs Combined Activity"
          description="Blog creation, publishing, update, featured, and draft activity over time."
          data={combinedActivity}
          keys={availableKeys(combinedActivityKeys, blogActivityKeyOrder)}
        />
      </AnalyticsSection>
    </div>
  );
}
