"use client";

import { useSubmissions } from "./useSubmissions";
import { useServices } from "./useServices";
import { useBlogs } from "./useBlogs";
import { useMemo } from "react";
import { format, startOfDay, isValid } from "date-fns";

export function useAnalyticsData() {
  const {
    data: submissions,
    loading: submissionsLoading,
    error: submissionsError,
  } = useSubmissions();
  const {
    data: services,
    loading: servicesLoading,
    error: servicesError,
  } = useServices();
  const { data: blogs, loading: blogsLoading, error: blogsError } = useBlogs();

  const loading = submissionsLoading || servicesLoading || blogsLoading;
  const error = submissionsError || servicesError || blogsError;

  const totalSubmissions = useMemo(() => {
    if (!submissions || !services) return [];
    return submissions.map((submission) => {
      const service = services.find((s) => s.slug === submission.service_name);
      const serviceName = service ? service.title : "Unknown Service";
      const submitterName = submission.full_name || "Anonymous";
      return `${submitterName} - ${serviceName}`;
    });
  }, [submissions, services]);

  const totalRevenue = useMemo(() => {
    if (!submissions || !services) return 0;
    return submissions
      .filter((s) => s.status === "archived")
      .reduce((acc, submission) => {
        const service = services.find(
          (s) => s.slug === submission.service_name,
        );
        return acc + (service?.pricing || 0);
      }, 0);
  }, [submissions, services]);

  const revenueSubmissions = useMemo(() => {
    if (!submissions || !services) return [];
    return submissions
      .filter((s) => s.status === "archived")
      .map((submission) => {
        const service = services.find(
          (s) => s.slug === submission.service_name,
        );
        const serviceName = service ? service.title : "Unknown Service";
        const submitterName = submission.full_name || "Anonymous";
        return `${submitterName} - ${serviceName}`;
      });
  }, [submissions, services]);

  const newApplications = useMemo(() => {
    if (!submissions) return [];
    return submissions.filter((s) => s.status === "pending");
  }, [submissions]);

  const submissionsByDay = useMemo(() => {
    if (!submissions) return [];
    const counts = submissions.reduce(
      (acc, submission) => {
        if (submission.created_at) {
          const date = new Date(submission.created_at);
          if (isValid(date)) {
            const day = format(startOfDay(date), "yyyy-MM-dd");
            acc[day] = (acc[day] || 0) + 1;
          }
        }
        return acc;
      },
      {} as Record<string, number>,
    );

    return Object.entries(counts)
      .map(([day, count]) => ({ day, count }))
      .sort((a, b) => new Date(a.day).getTime() - new Date(b.day).getTime());
  }, [submissions]);

  const submissionsByService = useMemo(() => {
    if (!submissions) return [];
    const counts = submissions.reduce(
      (acc, submission) => {
        const serviceName = submission.service_name || "Unknown";
        acc[serviceName] = (acc[serviceName] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>,
    );

    return Object.entries(counts).map(([name, count]) => ({ name, count }));
  }, [submissions]);

  return {
    submissions,
    services,
    blogs,
    totalSubmissions,
    totalRevenue,
    revenueSubmissions,
    newApplications,
    submissionsByDay,
    submissionsByService,
    loading,
    error,
  };
}
