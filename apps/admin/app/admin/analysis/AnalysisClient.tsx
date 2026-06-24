"use client";

import type {
  BlogPost,
  Contact,
  Service,
  Submission,
  Testimonial,
  User,
} from "@bilacert/shared/types";
import { createSupabaseBrowserClient } from "@bilacert/supabase/client";
import { subYears } from "date-fns";
import { useEffect, useState } from "react";
import type { DateRange } from "react-day-picker";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DateRangePicker } from "@/components/ui/DateRangePicker";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group";
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
  totalBlogs: number;
  featuredBlogs: number;
  draftBlogs: number;
}

function formatActivityLabel(key: string) {
  return key
    .replace(/-/g, "_")
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function AnalyticsSection({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
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

function MetricCard({
  title,
  value,
  description,
}: {
  title: string;
  value: number;
  description: string;
}) {
  return (
    <Card className="border-0 shadow-md shadow-black/5">
      <CardHeader>
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-4xl font-bold">{value.toLocaleString()}</p>
        <p className="mt-1 text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

async function getAnalyticsData(
  dateRange: DateRange | undefined,
): Promise<ChartData> {
  const queries = [
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
    supabase.from("users").select("createdAt,updatedAt,isActive,role"),
  ];

  const [
    blogRes,
    contactRes,
    serviceRes,
    testimonialRes,
    submissionRes,
    userRes,
  ] = await Promise.all(queries);

  const blogs = (blogRes?.data as BlogPost[]) || [];
  const contacts = (contactRes?.data as Contact[]) || [];
  const services = (serviceRes?.data as Service[]) || [];
  const testimonials = (testimonialRes?.data as Testimonial[]) || [];
  const submissions = (submissionRes?.data as Submission[]) || [];
  const users = (userRes?.data as User[]) || [];

  const activity = new Map<string, { [key: string]: number }>();
  const activityKeys = new Set<string>();

  const addToActivity = (dateStr: string | null | undefined, key: string) => {
    if (!dateStr) return;
    const activityDate = new Date(dateStr);
    const date = activityDate.toISOString().split("T")[0];
    if (!date) return;
    const dayData = activity.get(date) ?? {};
    activity.set(date, { ...dayData, [key]: (dayData[key] ?? 0) + 1 });
    activityKeys.add(key);
  };

  for (const b of blogs) {
    addToActivity(b.createdAt, "blogs_created");
    addToActivity(b.publishedAt, "blogs_published");
    addToActivity(b.updatedAt, "blogs_updated");
    if (b.featured) addToActivity(b.updatedAt ?? b.createdAt, "blogs_featured");
    if (!b.published) addToActivity(b.createdAt, "blog_drafts_created");
  }
  for (const c of contacts) addToActivity(c.submittedAt, "contacts_submitted");
  for (const s of services) {
    addToActivity(s.createdAt, "services_created");
    addToActivity(s.updatedAt, "services_updated");
    if (s.published)
      addToActivity(s.updatedAt ?? s.createdAt, "services_published");
    if (s.featured) addToActivity(s.updatedAt ?? s.createdAt, "services_featured");
  }
  for (const t of testimonials)
    addToActivity(t.createdAt, "testimonials_created");
  for (const s of submissions) {
    addToActivity(s.createdAt, "submissions_created");
    addToActivity(s.updatedAt, "submissions_updated");
    addToActivity(s.createdAt, `submission_status_${s.status}`);
    addToActivity(s.createdAt, `form_type_${s.formType}`);
  }
  for (const u of users) {
    addToActivity(u.createdAt, "users_created");
    addToActivity(u.updatedAt, "users_updated");
    if (u.isActive) addToActivity(u.updatedAt ?? u.createdAt, "active_users");
    addToActivity(u.createdAt, `user_role_${u.role}`);
  }

  const combinedActivity = Array.from(activity.entries())
    .map(([date, dailyData]) => {
      const completeDailyData: {
        date: string;
        [key: string]: number | string;
      } = { date };
      activityKeys.forEach((key) => {
        completeDailyData[key] = dailyData[key] ?? 0;
      });
      return completeDailyData;
    })
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const fromDate = dateRange?.from;
  const toDate = dateRange?.to;
  const filteredSubmissions = submissions.filter((s) => {
    const date = new Date(s.createdAt);
    return (!fromDate || date >= fromDate) && (!toDate || date <= toDate);
  });
  const filteredBlogs = blogs.filter((b) => {
    const date = new Date(b.createdAt);
    return (!fromDate || date >= fromDate) && (!toDate || date <= toDate);
  });
  const filteredServices = services.filter((s) => {
    const date = new Date(s.createdAt);
    return (!fromDate || date >= fromDate) && (!toDate || date <= toDate);
  });

  const dailyCounts = new Map<string, number>();
  for (const { createdAt } of filteredSubmissions) {
    if (!createdAt) continue;
    const date = new Date(createdAt as string)
      .toISOString()
      .split("T")[0] as string;
    dailyCounts.set(date, (dailyCounts.get(date) ?? 0) + 1);
  }
  const submissionsByDay = Array.from(dailyCounts.entries())
    .map(([date, count]) => ({ date, count }))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const serviceCounts = new Map<string, number>();
  for (const { serviceName } of filteredSubmissions) {
    const aService = (serviceName || "Uncategorized") as string;
    serviceCounts.set(aService, (serviceCounts.get(aService) ?? 0) + 1);
  }
  const submissionsByService = Array.from(serviceCounts.entries()).map(
    ([serviceName, count]) => ({ serviceName, count }),
  );

  const categoryCounts = new Map<string, number>();
  for (const { category } of filteredBlogs) {
    const contentType = (category || "Uncategorized") as string;
    categoryCounts.set(contentType, (categoryCounts.get(contentType) ?? 0) + 1);
  }
  const contentBreakdown = Array.from(categoryCounts.entries()).map(
    ([contentType, count]) => ({ contentType, count }),
  );

  const blogViews = filteredBlogs
    .map(({ title, viewsCount }) => ({ title, views: viewsCount ?? 0 }))
    .sort((a, b) => b.views - a.views)
    .slice(0, 10);

  const statusCounts = new Map<string, number>();
  for (const { status } of filteredSubmissions) {
    const aStatus = (status || "Unknown") as string;
    statusCounts.set(aStatus, (statusCounts.get(aStatus) ?? 0) + 1);
  }
  const submissionStatus = Array.from(statusCounts.entries()).map(
    ([status, count]) => ({ status, count }),
  );

  const allServiceKeys = [
    ...new Set(
      filteredSubmissions.map(
        (s) => (s.serviceName || "Uncategorized") as string,
      ),
    ),
  ];
  const allStatusKeys = [
    ...new Set(
      filteredSubmissions.map((s) => (s.status || "Unknown") as string),
    ),
  ];
  const detailedCounts = new Map<
    string,
    { total: number } & Record<string, number>
  >();

  for (const { createdAt, serviceName, status } of filteredSubmissions) {
    if (!createdAt) continue;
    const date = new Date(createdAt as string)
      .toISOString()
      .split("T")[0] as string;
    if (!detailedCounts.has(date)) {
      const initial: { total: number } & Record<string, number> = { total: 0 };
      for (const k of allServiceKeys) initial[k] = 0;
      for (const k of allStatusKeys) initial[k] = 0;
      detailedCounts.set(date, initial);
    }
    const dayData = detailedCounts.get(date)!;
    dayData.total += 1;
    dayData[(serviceName || "Uncategorized") as string]! += 1;
    dayData[(status || "Unknown") as string]! += 1;
  }
  const detailedSubmissions = Array.from(detailedCounts.entries())
    .map(([date, data]) => ({ date, ...data }))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const publishedContent = filteredBlogs.filter(
    (blog) => blog.published,
  ).length;
  const totalSubmissions = filteredSubmissions.length;
  const totalViews = filteredBlogs.reduce(
    (acc, { viewsCount }) => acc + (viewsCount ?? 0),
    0,
  );

  return {
    submissionsByDay,
    submissionsByService,
    contentBreakdown,
    blogViews,
    submissionStatus,
    detailedSubmissions,
    combinedActivity,
    combinedActivityKeys: Array.from(activityKeys),
    serviceKeys: allServiceKeys,
    statusKeys: allStatusKeys,
    totalSubmissions,
    publishedContent,
    totalViews,
    totalServices: filteredServices.length,
    publishedServices: filteredServices.filter((service) => service.published)
      .length,
    featuredServices: filteredServices.filter((service) => service.featured)
      .length,
    totalBlogs: filteredBlogs.length,
    featuredBlogs: filteredBlogs.filter((blog) => blog.featured).length,
    draftBlogs: filteredBlogs.filter((blog) => !blog.published).length,
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
      const data = await getAnalyticsData(dateRange);
      setChartData(data);
      setLoading(false);
    }
    fetchData();
  }, [dateRange]);

  useEffect(() => {
    if (chartData?.combinedActivityKeys) {
      setVisibleKeys(chartData.combinedActivityKeys);
    }
  }, [chartData]);

  if (loading || !chartData) {
    return <AnalysisLoading />;
  }

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
    totalBlogs,
    featuredBlogs,
    draftBlogs,
  } = chartData;
  const sortedActivityKeys = [...combinedActivityKeys].sort();

  return (
    <div className="space-y-10">
      <header className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Analysis Dashboard</h1>
          <p className="text-muted-foreground">
            Live insights into services, submissions, blogs, and platform
            activity.
          </p>
        </div>
        <DateRangePicker date={dateRange} onDateChange={setDateRange} />
      </header>

      <AnalyticsSection
        title="Services Analysis"
        description="Monitor service catalog health and how services drive form submissions."
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <MetricCard
            title="Total Services"
            value={totalServices}
            description={`${publishedServices.toLocaleString()} published`}
          />
          <MetricCard
            title="Featured Services"
            value={featuredServices}
            description="Highlighted on public pages"
          />
          <MetricCard
            title="Service Submissions"
            value={totalSubmissions}
            description="Submission volume in selected range"
          />
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Submissions by Service</CardTitle>
          </CardHeader>
          <CardContent>
            <SubmissionsBarChart data={submissionsByService} />
          </CardContent>
        </Card>
      </AnalyticsSection>

      <AnalyticsSection
        title="Submission Analysis"
        description="Track submission volume, status mix, and detailed service/status trends."
      >
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Submissions Over Time</CardTitle>
            </CardHeader>
            <CardContent>
              <SubmissionsLineChart data={submissionsByDay} />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Submission Status</CardTitle>
            </CardHeader>
            <CardContent>
              <SubmissionStatusPieChart data={submissionStatus} />
            </CardContent>
          </Card>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Detailed Submissions</CardTitle>
          </CardHeader>
          <CardContent>
            <DetailedSubmissionsChart
              data={detailedSubmissions}
              serviceKeys={serviceKeys}
              statusKeys={statusKeys}
            />
          </CardContent>
        </Card>
      </AnalyticsSection>

      <AnalyticsSection
        title="Blogs Analysis"
        description="Review blog publishing, category coverage, and view performance."
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <MetricCard
            title="Published Content"
            value={publishedContent}
            description={`${draftBlogs.toLocaleString()} drafts in range`}
          />
          <MetricCard
            title="Featured Blogs"
            value={featuredBlogs}
            description={`${totalBlogs.toLocaleString()} total posts in range`}
          />
          <MetricCard
            title="Total Views"
            value={totalViews}
            description="Views across posts in range"
          />
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Content Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <ContentBarChart data={contentBreakdown} />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Blog Views</CardTitle>
            </CardHeader>
            <CardContent>
              <BlogViewsChart data={blogViews} />
            </CardContent>
          </Card>
        </div>
      </AnalyticsSection>

      <AnalyticsSection
        title="Combined Activity"
        description="Compare broader platform events over time with expanded activity filters."
      >
        <Card>
          <CardHeader>
            <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <CardTitle>Combined Activity</CardTitle>
                <p className="mt-1 text-sm text-muted-foreground">
                  Toggle activity types to compare platform events over time.
                </p>
              </div>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => setVisibleKeys(sortedActivityKeys)}
              >
                Show All
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="mb-6 rounded-xl bg-muted/30 p-4 shadow-sm shadow-black/5">
              <ToggleGroup
                multiple
                value={visibleKeys}
                onValueChange={setVisibleKeys}
                aria-label="Filter combined activity chart"
              >
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
      </AnalyticsSection>
    </div>
  );
}
