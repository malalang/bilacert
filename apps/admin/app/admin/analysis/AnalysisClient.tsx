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
  BlogViewsLineChart,
  CombinedActivityChart,
  ContentBarChart,
  FilteredLineChart,
  SubmissionStatusPieChart,
  SubmissionsBarChart,
  SubmissionsByServicePieChart,
  SubmissionsLineChart,
} from "./charts";
import AnalysisLoading from "./loading";

const supabase = createSupabaseBrowserClient();

interface ChartData {
  submissionsByDay: { date: string; count: number }[];
  submissionsByService: { serviceName: string; count: number }[];
  contentBreakdown: { contentType: string; count: number }[];
  blogViews: { title: string; views: number }[];
  blogViewsByDay: { date: string; views: number }[];
  blogViewsByPostOverTime: { date: string; [key: string]: number | string }[];
  blogViewKeys: string[];
  submissionStatus: { status: string; count: number }[];
  submissionsOverTimeByService: { date: string; [key: string]: number | string }[];
  combinedActivity: { date: string; [key: string]: number | string }[];
  combinedActivityKeys: string[];
  serviceKeys: string[];
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
  "service_submissions",
];
const blogActivityKeyOrder = [
  "blogs_created",
  "blogs_published",
  "blogs_updated",
  "blog_views_total",
];

function formatActivityLabel(key: string) {
  return key
    .replace(/-/g, "_")
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function truncateBlogTitle(title: string) {
  return title.length > 38 ? `${title.slice(0, 38)}...` : title;
}

function metric(
  title: string,
  value: string | number,
  description: string,
  Icon: LucideIcon,
) {
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
      key.startsWith("submission_status_"),
  );
}

function overviewActivityKeys(allKeys: string[]) {
  return [
    ...availableKeys(allKeys, serviceActivityKeyOrder),
    ...submissionActivityKeys(allKeys),
    ...availableKeys(allKeys, blogActivityKeyOrder),
  ];
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

function FilterableLineCard({
  title,
  description,
  data,
  keys,
  height = 400,
  className = "",
  showLegend = true,
  formatKeyLabel = formatActivityLabel,
  seriesNameFormatter,
}: {
  title: string;
  description: string;
  data: { date: string; [key: string]: number | string }[];
  keys: string[];
  height?: number;
  className?: string;
  showLegend?: boolean;
  formatKeyLabel?: (key: string) => string;
  seriesNameFormatter?: (key: string) => string;
}) {
  const [visibleKeys, setVisibleKeys] = useState(keys);
  const keySignature = keys.join("|");

  useEffect(() => {
    setVisibleKeys(keys);
  }, [keySignature, keys]);

  if (keys.length === 0) return null;

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardHeader>
      <CardContent>
        <div className="mb-6 rounded-xl bg-muted/30 p-4 shadow-sm shadow-black/5">
          <ToggleGroup
            multiple
            value={visibleKeys}
            onValueChange={setVisibleKeys}
            aria-label={`Filter ${title}`}
          >
            {keys.map((key) => (
              <ToggleGroupItem key={key} value={key}>
                {formatKeyLabel(key)}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>
        <FilteredLineChart
          data={data}
          keys={visibleKeys}
          height={height}
          showLegend={showLegend}
          seriesNameFormatter={seriesNameFormatter}
        />
      </CardContent>
    </Card>
  );
}

function statusTotal(submissions: Submission[], status: string) {
  return submissions.filter((submission) => submission.status === status).length;
}

function dateKey(dateValue: string | null | undefined) {
  if (!dateValue) return null;
  const date = new Date(dateValue).toISOString().split("T")[0];
  return date || null;
}

async function getAnalyticsData(
  dateRange: DateRange | undefined,
): Promise<ChartData> {
  const [blogRes, contactRes, serviceRes, testimonialRes, submissionRes] =
    await Promise.all([
      supabase
        .from("blog_posts")
        .select(
          "id,title,slug,createdAt,publishedAt,updatedAt,category,published,featured,viewsCount",
        ),
      supabase.from("contacts").select("submittedAt"),
      supabase.from("services").select("createdAt,updatedAt,published,featured"),
      supabase.from("testimonials").select("createdAt"),
      supabase
        .from("form_submissions")
        .select("createdAt,updatedAt,serviceName,status"),
    ]);

  const blogs = (blogRes?.data as BlogPost[]) || [];
  const contacts = (contactRes?.data as Contact[]) || [];
  const services = (serviceRes?.data as Service[]) || [];
  const testimonials = (testimonialRes?.data as Testimonial[]) || [];
  const submissions = (submissionRes?.data as Submission[]) || [];
  const activity = new Map<string, Record<string, number>>();
  const activityKeys = new Set<string>();

  const addActivity = (
    dateValue: string | null | undefined,
    key: string,
    value = 1,
  ) => {
    const date = dateKey(dateValue);
    if (!date) return;
    const day = activity.get(date) ?? {};
    activity.set(date, { ...day, [key]: (day[key] ?? 0) + value });
    activityKeys.add(key);
  };

  blogs.forEach((blog) => {
    const views = blog.viewsCount ?? 0;
    addActivity(blog.createdAt, "blogs_created");
    addActivity(blog.publishedAt, "blogs_published");
    addActivity(blog.updatedAt, "blogs_updated");
    if (!blog.published) addActivity(blog.createdAt, "blog_drafts_created");
    if (views > 0) addActivity(blog.updatedAt ?? blog.createdAt, "blog_views_total", views);
  });
  contacts.forEach((contact) => addActivity(contact.submittedAt, "contacts_submitted"));
  services.forEach((service) => {
    addActivity(service.createdAt, "services_created");
    addActivity(service.updatedAt, "services_updated");
    if (service.published) addActivity(service.updatedAt ?? service.createdAt, "services_published");
  });
  testimonials.forEach((testimonial) => addActivity(testimonial.createdAt, "testimonials_created"));
  submissions.forEach((submission) => {
    addActivity(submission.createdAt, "service_submissions");
    addActivity(submission.createdAt, "submissions_created");
    addActivity(submission.updatedAt, "submissions_updated");
    addActivity(submission.createdAt, `submission_status_${submission.status}`);
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
  const blogsWithViews = filteredBlogs.filter((blog) => (blog.viewsCount ?? 0) > 0);

  const submissionDayCounts = new Map<string, number>();
  const submissionServiceCounts = new Map<string, number>();
  const submissionServiceDayCounts = new Map<string, Record<string, number>>();
  filteredSubmissions.forEach(({ createdAt, serviceName }) => {
    const date = dateKey(createdAt);
    if (!date) return;
    const service = serviceName || "Uncategorized";
    submissionDayCounts.set(date, (submissionDayCounts.get(date) ?? 0) + 1);
    submissionServiceCounts.set(service, (submissionServiceCounts.get(service) ?? 0) + 1);
    const day = submissionServiceDayCounts.get(date) ?? {};
    submissionServiceDayCounts.set(date, { ...day, [service]: (day[service] ?? 0) + 1 });
  });
  const submissionsByDay = Array.from(submissionDayCounts.entries())
    .map(([date, count]) => ({ date, count }))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  const submissionsByService = Array.from(submissionServiceCounts.entries()).map(
    ([serviceName, count]) => ({ serviceName, count }),
  );
  const serviceKeys = Array.from(submissionServiceCounts.keys());
  const submissionsOverTimeByService = Array.from(submissionServiceDayCounts.entries())
    .map(([date, day]) => {
      const row: { date: string; [key: string]: number | string } = { date };
      serviceKeys.forEach((key) => {
        row[key] = day[key] ?? 0;
      });
      return row;
    })
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const categoryCounts = new Map<string, number>();
  const blogViewDayCounts = new Map<string, number>();
  const blogViewPostDayCounts = new Map<string, Record<string, number>>();
  filteredBlogs.forEach((blog) => {
    const category = blog.category || "Uncategorized";
    categoryCounts.set(category, (categoryCounts.get(category) ?? 0) + 1);
  });
  blogsWithViews.forEach((blog) => {
    const views = blog.viewsCount ?? 0;
    const date = dateKey(blog.updatedAt ?? blog.createdAt);
    if (!date) return;
    blogViewDayCounts.set(date, (blogViewDayCounts.get(date) ?? 0) + views);
    const day = blogViewPostDayCounts.get(date) ?? {};
    blogViewPostDayCounts.set(date, { ...day, [blog.title]: (day[blog.title] ?? 0) + views });
  });
  const contentBreakdown = Array.from(categoryCounts.entries()).map(
    ([contentType, count]) => ({ contentType, count }),
  );
  const blogViews = filteredBlogs
    .map(({ title, viewsCount }) => ({ title, views: viewsCount ?? 0 }))
    .sort((a, b) => b.views - a.views)
    .slice(0, 10);
  const blogViewsByDay = Array.from(blogViewDayCounts.entries())
    .map(([date, views]) => ({ date, views }))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  const blogViewKeys = Array.from(new Set(blogsWithViews.map((blog) => blog.title)));
  const blogViewsByPostOverTime = Array.from(blogViewPostDayCounts.entries())
    .map(([date, day]) => {
      const row: { date: string; [key: string]: number | string } = { date };
      blogViewKeys.forEach((key) => {
        row[key] = day[key] ?? 0;
      });
      return row;
    })
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const statusCounts = new Map<string, number>();
  filteredSubmissions.forEach(({ status }) => {
    const key = status || "Unknown";
    statusCounts.set(key, (statusCounts.get(key) ?? 0) + 1);
  });
  const submissionStatus = Array.from(statusCounts.entries()).map(
    ([status, count]) => ({ status, count }),
  );

  const publishedServices = filteredServices.filter((service) => service.published).length;
  const publishedContent = filteredBlogs.filter((blog) => blog.published).length;
  const totalViews = filteredBlogs.reduce((sum, blog) => sum + (blog.viewsCount ?? 0), 0);

  return {
    submissionsByDay,
    submissionsByService,
    contentBreakdown,
    blogViews,
    blogViewsByDay,
    blogViewsByPostOverTime,
    blogViewKeys,
    submissionStatus,
    submissionsOverTimeByService,
    combinedActivity,
    combinedActivityKeys: Array.from(activityKeys),
    serviceKeys,
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
    if (chartData?.combinedActivityKeys) {
      setVisibleKeys(overviewActivityKeys(chartData.combinedActivityKeys));
    }
  }, [chartData]);

  if (loading || !chartData) return <AnalysisLoading />;

  const {
    submissionsByDay,
    submissionsByService,
    contentBreakdown,
    blogViews,
    blogViewsByDay,
    blogViewsByPostOverTime,
    blogViewKeys,
    submissionStatus,
    submissionsOverTimeByService,
    combinedActivity,
    combinedActivityKeys,
    serviceKeys,
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
  const overviewKeys = overviewActivityKeys(combinedActivityKeys);
  const serviceActivityKeys = availableKeys(combinedActivityKeys, serviceActivityKeyOrder);
  const submissionKeys = submissionActivityKeys(combinedActivityKeys);
  const blogActivityKeys = availableKeys(combinedActivityKeys, blogActivityKeyOrder);

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
                All section activity for services, submissions, and blogs.
              </p>
            </div>
            <Button type="button" variant="outline" size="sm" onClick={() => setVisibleKeys(overviewKeys)}>
              Show All
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="mb-6 rounded-xl bg-muted/30 p-4 shadow-sm shadow-black/5">
            <ToggleGroup multiple value={visibleKeys} onValueChange={setVisibleKeys} aria-label="Filter overview combined activity chart">
              {overviewKeys.map((key) => (
                <ToggleGroupItem key={key} value={key}>
                  {formatActivityLabel(key)}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>
          <CombinedActivityChart data={combinedActivity} keys={visibleKeys} />
        </CardContent>
      </Card>

      <AnalyticsSection title="Services Analysis" description="Monitor service catalog health and service-driven activity.">
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
        <FilterableLineCard
          title="Services Combined Activity"
          description="Service creation, update, publishing, and service submission activity over time."
          data={combinedActivity}
          keys={serviceActivityKeys}
        />
      </AnalyticsSection>

      <AnalyticsSection title="Submission Analysis" description="Track submission volume, status mix, and service trends.">
        <AnalysesHeader
          items={[
            metric("Pending", pendingApplications, "Awaiting first response", Clock),
            metric("Processing", processingApplications, "Currently being handled", Inbox),
            metric("Rejected", rejectedApplications, "Declined or not approved", XCircle),
            metric("Archived", archivedApplications, "Stored for reference", Archive),
          ]}
        />
        <Card>
          <CardHeader><CardTitle>Submissions Over Time</CardTitle></CardHeader>
          <CardContent><SubmissionsLineChart data={submissionsByDay} /></CardContent>
        </Card>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader><CardTitle>Submission Status</CardTitle></CardHeader>
            <CardContent><SubmissionStatusPieChart data={submissionStatus} /></CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Submissions by Service</CardTitle></CardHeader>
            <CardContent><SubmissionsByServicePieChart data={submissionsByService} /></CardContent>
          </Card>
        </div>
        <FilterableLineCard
          title="Submissions Over Time per Service"
          description="Submission volume split by service with selectable service filters."
          data={submissionsOverTimeByService}
          keys={serviceKeys}
        />
        <FilterableLineCard
          title="Submissions Combined Activity"
          description="Submission creation, update, and status activity over time."
          data={combinedActivity}
          keys={submissionKeys}
        />
      </AnalyticsSection>

      <AnalyticsSection title="Blogs Analysis" description="Review blog publishing, views, categories, and content activity.">
        <AnalysesHeader
          items={[
            metric("Total Blogs", totalBlogs, `${publishedContent.toLocaleString()} published`, Newspaper),
            metric("Published Blogs", publishedContent, `${draftBlogs.toLocaleString()} drafts in range`, FileText),
            metric("Blog Views", totalViews, "Views across posts in range", Eye),
            metric("Featured Blogs", featuredBlogs, "Promoted content in range", Sparkles),
          ]}
        />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Card className="lg:col-span-2">
            <CardHeader><CardTitle>Content Breakdown</CardTitle></CardHeader>
            <CardContent><ContentBarChart data={contentBreakdown} /></CardContent>
          </Card>
          <Card className="lg:col-span-2">
            <CardHeader><CardTitle>Blog Views</CardTitle></CardHeader>
            <CardContent><BlogViewsChart data={blogViews} /></CardContent>
          </Card>
          <Card className="lg:col-span-2">
            <CardHeader><CardTitle>Views Over Time</CardTitle></CardHeader>
            <CardContent><BlogViewsLineChart data={blogViewsByDay} /></CardContent>
          </Card>
          <FilterableLineCard
            title="Views Over Time per Blog"
            description="Recorded view totals split by blog post."
            data={blogViewsByPostOverTime}
            keys={blogViewKeys}
            height={300}
            className="lg:col-span-2"
            showLegend={false}
            formatKeyLabel={truncateBlogTitle}
            seriesNameFormatter={truncateBlogTitle}
          />
        </div>
        <FilterableLineCard
          title="Blogs Combined Activity"
          description="Blog creation, publishing, update, and view activity over time."
          data={combinedActivity}
          keys={blogActivityKeys}
        />
      </AnalyticsSection>
    </div>
  );
}
