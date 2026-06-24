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
  MoreHorizontal,
  Package,
  Sparkles,
  XCircle,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AdminPage from "@/components/admin/AdminPage";
import AnalysesHeader from "@/components/admin/AnalysesHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DeleteServiceDialog from "./DeleteServiceDialog";

const SERVICE_IMAGE_FALLBACK = "/logo.jpg";

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

type ServiceSubmissionStatusCount = {
  label: string;
  value: SubmissionStatus;
  Icon: LucideIcon;
  className: string;
  count: number;
};

function normalizeServiceKey(value: string | undefined) {
  return value?.trim().toLowerCase();
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

function getServiceSubmissionStatusCounts(
  service: Service,
  submissions: Submission[],
): ServiceSubmissionStatusCount[] {
  const serviceSubmissions = getServiceSubmissions(service, submissions);

  return submissionStatuses.map((status) => ({
    ...status,
    count: serviceSubmissions.filter(
      (submission) => submission.status === status.value,
    ).length,
  }));
}

function ServicesAnalysis({
  services,
  submissions,
}: {
  services: Service[];
  submissions: Submission[];
}) {
  const publishedServices = services.filter((service) => service.published);
  const featuredServices = services.filter((service) => service.featured);
  const draftServices = services.length - publishedServices.length;
  const statusTotals = submissionStatuses.map((status) => ({
    ...status,
    count: submissions.filter((submission) => submission.status === status.value)
      .length,
  }));

  return (
    <div className="space-y-6">
      <AnalysesHeader
        items={[
          {
            title: "Total Services",
            value: services.length,
            description: `${publishedServices.length.toLocaleString()} published`,
            icon: <Package className="h-4 w-4 text-muted-foreground" />,
          },
          {
            title: "Featured Services",
            value: featuredServices.length,
            description: "Highlighted on public pages",
            icon: <Sparkles className="h-4 w-4 text-muted-foreground" />,
          },
          {
            title: "Service Submissions",
            value: submissions.length,
            description: "Across service and contact flows",
            icon: <BarChart3 className="h-4 w-4 text-muted-foreground" />,
          },
          {
            title: "Draft Services",
            value: draftServices,
            description: "Not visible publicly yet",
            icon: <Clock className="h-4 w-4 text-muted-foreground" />,
          },
        ]}
      />

      <Card className="border-0 shadow-xl shadow-black/5">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">
            Service Submission Status
          </CardTitle>
          <CardDescription>
            Submission health across all services.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-5">
            {statusTotals.map(({ label, value, count, Icon, className }) => (
              <div key={value} className={`rounded-xl p-4 shadow-sm ${className}`}>
                <div className="flex items-center justify-between gap-3">
                  <span className="flex items-center gap-2 text-sm font-semibold">
                    <Icon className="h-4 w-4" />
                    {label}
                  </span>
                  <span className="text-2xl font-bold tabular-nums">
                    {count}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

const ServiceCard = ({
  service,
  submissionStatusCounts,
  onEdit,
  onDelete,
}: {
  service: Service;
  submissionStatusCounts: ServiceSubmissionStatusCount[];
  onEdit: (service: Service) => void;
  onDelete: (service: Service) => void;
}) => {
  const router = useRouter();
  const imageUrl =
    service.thumbnail?.trim() || service.image?.trim() || SERVICE_IMAGE_FALLBACK;
  const visibleSubmissionStatusCounts = submissionStatusCounts.filter(
    ({ count }) => count > 0,
  );

  return (
    <div key={service.id} className="group relative">
      <Link
        href={`/admin/services/${service.id}`}
        className="absolute inset-0 z-10"
        aria-label={`View ${service.title}`}
      >
        <span className="sr-only">View Details</span>
      </Link>
      <Card className="flex h-full flex-col overflow-hidden border-0 shadow-sm transition-all duration-300 hover:-translate-y-2 group-hover:shadow-xl group-hover:shadow-black/10">
        <div className="relative h-48 w-full overflow-hidden bg-muted">
          <img
            src={imageUrl}
            alt={service.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
        <CardHeader>
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0 space-y-1">
              <CardTitle className="line-clamp-2 text-lg text-primary">
                {service.title}
              </CardTitle>
              <CardDescription>{service.category}</CardDescription>
            </div>
            <div className="relative z-20 shrink-0">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="h-8 w-8 rounded-full bg-background/70 p-0 backdrop-blur-sm hover:bg-background"
                    onClick={(e) => e.preventDefault()}
                  >
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuItem
                    onClick={(e) => {
                      e.preventDefault();
                      router.push(`/admin/services/${service.id}`);
                    }}
                  >
                    View Details
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={(e) => {
                      e.preventDefault();
                      onEdit(service);
                    }}
                  >
                    Edit
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    className="text-destructive focus:bg-destructive/10 focus:text-destructive"
                    onClick={(e) => {
                      e.preventDefault();
                      onDelete(service);
                    }}
                  >
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex-grow space-y-4">
          <div className="flex flex-wrap gap-2">
            <Badge variant={service.published ? "default" : "secondary"}>
              {service.published ? "Published" : "Draft"}
            </Badge>
            {service.featured && <Badge variant="outline">Featured</Badge>}
          </div>
          <p className="line-clamp-3 text-sm text-muted-foreground">
            {service.shortDescription}
          </p>
          <div className="rounded-xl bg-muted/40 p-3 shadow-sm shadow-black/5">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Form Submissions
            </p>
            {visibleSubmissionStatusCounts.length > 0 ? (
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {visibleSubmissionStatusCounts.map(
                  ({ label, value, count, Icon, className }) => (
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
                  ),
                )}
              </div>
            ) : (
              <p className="text-xs text-muted-foreground">No submissions yet</p>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <p className="text-lg font-semibold">
            {service.pricing
              ? `R ${service.pricing.toLocaleString()}`
              : "Not Set"}
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default function ServicesClient() {
  const { data: submissions } = useSubmissions();

  return (
    <AdminPage<Service>
      useData={useServices}
      title="Services"
      newItemButtonText="Add Service"
      newItemLink="/admin/services/new"
      renderBeforeContent={(services) => (
        <ServicesAnalysis services={services} submissions={submissions || []} />
      )}
      renderItem={(service, onEdit, onDelete) => (
        <ServiceCard
          service={service}
          submissionStatusCounts={getServiceSubmissionStatusCounts(
            service,
            submissions || [],
          )}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      )}
      DeleteDialog={DeleteServiceDialog as any}
    />
  );
}
