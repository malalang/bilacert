"use client";

import { useMemo } from "react";
import { useBlogs } from "./useBlogs";
import { useContacts } from "./useContacts";
import { useServices } from "./useServices";
import { useSubmissions } from "./useSubmissions";

const submissionStatuses = [
  "pending",
  "in-progress",
  "completed",
  "rejected",
  "archived",
] as const;

function matchesService(submissionServiceName: string | undefined, service: any) {
  const normalizedSubmissionServiceName = submissionServiceName
    ?.trim()
    .toLowerCase();

  return (
    normalizedSubmissionServiceName === service.id?.trim?.().toLowerCase?.() ||
    normalizedSubmissionServiceName === service.slug?.trim?.().toLowerCase?.() ||
    normalizedSubmissionServiceName === service.title?.trim?.().toLowerCase?.()
  );
}

export function useDashboardData() {
  const {
    data: submissions,
    loading: submissionsLoading,
    error: submissionsError,
  } = useSubmissions();
  const {
    data: contacts,
    loading: contactsLoading,
    error: contactsError,
  } = useContacts();
  const {
    data: services,
    loading: servicesLoading,
    error: servicesError,
  } = useServices();
  const {
    data: blogs,
    loading: blogsLoading,
    error: blogsError,
  } = useBlogs();

  const loading =
    submissionsLoading || contactsLoading || servicesLoading || blogsLoading;
  const error = submissionsError || contactsError || servicesError || blogsError;

  const statusCounts = useMemo(() => {
    return submissionStatuses.map((status) => ({
      status,
      count: submissions?.filter((submission) => submission.status === status)
        .length ?? 0,
    }));
  }, [submissions]);

  const stats = useMemo(() => {
    const totalSubmissions = submissions?.length ?? 0;
    const newApplications =
      submissions?.filter((s) => s.status === "pending").length ?? 0;
    const totalContacts = contacts?.length ?? 0;
    const totalBlogs = blogs?.length ?? 0;
    const totalRevenue =
      submissions
        ?.filter((s) => s.status === "archived")
        .reduce((acc, submission) => {
          const service = services?.find((s) =>
            matchesService(submission.serviceName, s),
          );
          return acc + (service?.pricing || 0);
        }, 0) ?? 0;

    return {
      totalSubmissions,
      newApplications,
      totalContacts,
      totalBlogs,
      totalRevenue,
    };
  }, [submissions, contacts, services, blogs]);

  const submissionsByService = useMemo(() => {
    if (!submissions || !services) return [];
    return services
      .map((service) => {
        const count = submissions.filter(
          (submission) =>
            submission.serviceId === service.id ||
            matchesService(submission.serviceName, service),
        ).length;
        return { ...service, submissions: count };
      })
      .filter((service) => service.submissions > 0);
  }, [submissions, services]);

  const recentActivity = useMemo(() => {
    if (!submissions || !contacts) return [];
    const combined = [
      ...submissions.map((s) => ({
        ...s,
        type: "submission" as const,
        date: s.createdAt,
        name: s.fullName,
        id: s.id,
        email: s.email,
        serviceName: s.serviceName,
      })),
      ...contacts.map((c) => ({
        ...c,
        type: "contact" as const,
        date: c.submittedAt,
        name: c.name,
        id: c.id,
        email: c.email,
        serviceName: "Contact Form",
      })),
    ];
    return combined
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 5);
  }, [submissions, contacts]);

  const pendingSubmissions = useMemo(() => {
    return (submissions || [])
      .filter((submission) => submission.status === "pending")
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      )
      .slice(0, 5);
  }, [submissions]);

  const recentContacts = useMemo(() => {
    return (contacts || [])
      .sort(
        (a, b) =>
          new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime(),
      )
      .slice(0, 5);
  }, [contacts]);

  const topViewedBlogs = useMemo(() => {
    return (blogs || [])
      .sort((a, b) => (b.viewsCount || 0) - (a.viewsCount || 0))
      .slice(0, 3);
  }, [blogs]);

  return {
    loading,
    error,
    stats,
    statusCounts,
    submissionsByService,
    recentActivity,
    pendingSubmissions,
    recentContacts,
    topViewedBlogs,
  };
}
