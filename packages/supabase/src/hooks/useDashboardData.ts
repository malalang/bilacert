"use client";

import { useMemo } from "react";
import { useContacts } from "./useContacts";
import { useServices } from "./useServices";
import { useSubmissions } from "./useSubmissions";

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

  const loading = submissionsLoading || contactsLoading || servicesLoading;
  const error = submissionsError || contactsError || servicesError;

  const stats = useMemo(() => {
    const totalSubmissions = submissions?.length ?? 0;
    const newApplications =
      submissions?.filter((s) => s.status === "pending").length ?? 0;
    const totalContacts = contacts?.length ?? 0;
    const totalRevenue =
      submissions
        ?.filter((s) => s.status === "archived")
        .reduce((acc, submission) => {
          const service = services?.find(
            (s) => s.slug === submission.serviceName,
          );
          return acc + (service?.pricing || 0);
        }, 0) ?? 0;

    return { totalSubmissions, newApplications, totalContacts, totalRevenue };
  }, [submissions, contacts, services]);

  const submissionsByService = useMemo(() => {
    if (!submissions || !services) return [];
    return services
      .map((service) => {
        const count = submissions.filter(
          (s) => s.serviceName === service.slug,
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

  return { loading, error, stats, submissionsByService, recentActivity };
}
