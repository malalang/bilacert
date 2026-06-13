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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DateRangePicker } from "@/components/ui/DateRangePicker";
import {
  BlogViewsChart,
  CombinedActivityChart,
  ContentBarChart,
  DetailedSubmissionsChart,
  SubmissionStatusPieChart,
  SubmissionsBarChart,
  SubmissionsLineChart,
  TurnaroundTimeChart,
} from "./charts";
import AnalysisLoading from "./loading";

const supabase = createSupabaseBrowserClient();

interface ChartData {
  submissionsByDay: { date: string; count: number }[];
  submissionsByService: { service_name: string; count: number }[];
  contentBreakdown: { contentType: string; count: number }[];
  blogViews: { title: string; views: number }[];
  submissionStatus: { status: string; count: number }[];
  detailedSubmissions: { date: string; [key: string]: number | string }[];
  turnaroundAnalysis: { service_name: string; average_days: number }[];
  combinedActivity: { date: string; [key: string]: number | string }[];
  combinedActivityKeys: string[];
  serviceKeys: string[];
  statusKeys: string[];
  totalSubmissions: number;
  publishedContent: number;
  totalViews: number;
}

async function getAnalyticsData(
  dateRange: DateRange | undefined,
): Promise<ChartData> {
  const queries = [
    supabase
      .from("blog_posts")
      .select(
        "createdAt,publishedAt,updatedAt,category,published,viewsCount,title",
      ),
    supabase.from("contacts").select("submittedAt"),
    supabase.from("services").select("createdAt,updatedAt"),
    supabase.from("testimonials").select("createdAt"),
    supabase
      .from("form_submissions")
      .select("createdAt,updatedAt,completedAt,serviceName,status"),
    supabase.from("users").select("createdAt"),
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
    activity.set(date, { ...dayData, [key]: (dayData[key] || 0) + 1 });
    activityKeys.add(key);
  };

  for (const b of blogs) {
    addToActivity(b.createdAt, "blogs_created");
    addToActivity(b.publishedAt, "blogs_published");
    addToActivity(b.updatedAt, "blogs_updated");
  }
  for (const c of contacts) addToActivity(c.submittedAt, "contacts_submitted");
  for (const s of services) {
    addToActivity(s.createdAt, "services_created");
    addToActivity(s.updatedAt, "services_updated");
  }
  for (const t of testimonials)
    addToActivity(t.createdAt, "testimonials_created");
  for (const s of submissions) {
    addToActivity(s.createdAt, "submissions_created");
    addToActivity(s.updatedAt, "submissions_updated");
  }
  for (const u of users) addToActivity(u.createdAt, "users_created");

  const combinedActivity = Array.from(activity.entries())
    .map(([date, dailyData]) => {
      const completeDailyData: {
        date: string;
        [key: string]: number | string;
      } = { date };
      activityKeys.forEach((key) => {
        completeDailyData[key] = dailyData[key] || 0;
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

  const dailyCounts = new Map<string, number>();
  for (const { createdAt } of filteredSubmissions) {
    if (!createdAt) continue;
    const date = new Date(createdAt as string)
      .toISOString()
      .split("T")[0] as string;
    dailyCounts.set(date, (dailyCounts.get(date) || 0) + 1);
  }
  const submissionsByDay = Array.from(dailyCounts.entries())
    .map(([date, count]) => ({ date, count }))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const serviceCounts = new Map<string, number>();
  for (const { serviceName } of filteredSubmissions) {
    const aService = (serviceName || "Uncategorized") as string;
    serviceCounts.set(aService, (serviceCounts.get(aService) || 0) + 1);
  }
  const submissionsByService = Array.from(serviceCounts.entries()).map(
    ([service_name, count]) => ({ service_name, count }),
  );

  const categoryCounts = new Map<string, number>();
  for (const { category } of filteredBlogs) {
    const contentType = (category || "Uncategorized") as string;
    categoryCounts.set(contentType, (categoryCounts.get(contentType) || 0) + 1);
  }
  const contentBreakdown = Array.from(categoryCounts.entries()).map(
    ([contentType, count]) => ({ contentType, count }),
  );

  const blogViews = filteredBlogs
    .map(({ title, viewsCount }) => ({ title, views: viewsCount || 0 }))
    .sort((a, b) => b.views - a.views)
    .slice(0, 10);

  const statusCounts = new Map<string, number>();
  for (const { status } of filteredSubmissions) {
    const aStatus = (status || "Unknown") as string;
    statusCounts.set(aStatus, (statusCounts.get(aStatus) || 0) + 1);
  }
  const submissionStatus = Array.from(statusCounts.entries()).map(
    ([status, count]) => ({ status, count }),
  );

  const turnaroundData = new Map<
    string,
    { total_days: number; count: number }
  >();
  for (const s of filteredSubmissions) {
    if (s.completedAt && s.createdAt) {
      const created = new Date(s.createdAt);
      const completed = new Date(s.completedAt);
      const diffDays =
        (completed.getTime() - created.getTime()) / (1000 * 3600 * 24);
      const service = (s.serviceName || "Uncategorized") as string;
      const data = turnaroundData.get(service) || { total_days: 0, count: 0 };
      data.total_days += diffDays;
      data.count += 1;
      turnaroundData.set(service, data);
    }
  }
  const turnaroundAnalysis = Array.from(turnaroundData.entries()).map(
    ([service_name, data]) => ({
      service_name,
      average_days: parseFloat((data.total_days / data.count).toFixed(2)),
    }),
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
    (acc, { viewsCount }) => acc + (viewsCount || 0),
    0,
  );
  return {
    submissionsByDay,
    submissionsByService,
    contentBreakdown,
    blogViews,
    submissionStatus,
    detailedSubmissions,
    turnaroundAnalysis,
    combinedActivity,
    combinedActivityKeys: Array.from(activityKeys),
    serviceKeys: allServiceKeys,
    statusKeys: allStatusKeys,
    totalSubmissions,
    publishedContent,
    totalViews,
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

  const handleKeyVisibilityChange = (key: string) => {
    setVisibleKeys((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key],
    );
  };

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
    turnaroundAnalysis,
    combinedActivity,
    combinedActivityKeys,
    serviceKeys,
    statusKeys,
    totalSubmissions,
    publishedContent,
    totalViews,
  } = chartData;

  return (
    <div className="space-y-6">
      <header className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold">Analysis Dashboard</h1>
          <p className="text-muted-foreground">
            Live insights into submissions and content performance.
          </p>
        </div>
        <DateRangePicker date={dateRange} onDateChange={setDateRange} />
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Total Submissions</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">{totalSubmissions}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Published Content</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">{publishedContent}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Views</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">{totalViews}</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
            <CardTitle>Submissions by Service</CardTitle>
          </CardHeader>
          <CardContent>
            <SubmissionsBarChart data={submissionsByService} />
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Submission Status</CardTitle>
          </CardHeader>
          <CardContent>
            <SubmissionStatusPieChart data={submissionStatus} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Turnaround Time</CardTitle>
          </CardHeader>
          <CardContent>
            <TurnaroundTimeChart data={turnaroundAnalysis} />
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

      <Card>
        <CardHeader>
          <CardTitle>Combined Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <CombinedActivityChart
            data={combinedActivity}
            visibleKeys={visibleKeys}
            onKeyVisibilityChange={handleKeyVisibilityChange}
            availableKeys={combinedActivityKeys}
          />
        </CardContent>
      </Card>
    </div>
  );
}
