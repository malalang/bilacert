"use client";

import type {
  SubmissionStatus,
  SubmissionType,
} from "@bilacert/contracts/formSubmission";
import type { ServiceRowType } from "@bilacert/contracts/service";
import {
  Archive,
  BarChart3,
  CheckCircle2,
  Clock,
  Inbox,
  type LucideIcon,
  MoreHorizontal,
  Package,
  Sparkles,
  XCircle,
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
import { useServices } from "@/lib/hooks/useServices";
import { useSubmissions } from "@/lib/hooks/useSubmissions";
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
    className: "bg-warning/10 text-warning-foreground",
  },
  {
    label: "Processing",
    value: "in-progress",
    Icon: Inbox,
    className: "bg-info/10 text-info-foreground",
  },
  {
    label: "Completed",
    value: "completed",
    Icon: CheckCircle2,
    className: "bg-primary/10 text-primary",
  },
  {
    label: "Rejected",
    value: "rejected",
    Icon: XCircle,
    className: "bg-destructive/10 text-destructive",
  },
  {
    label: "Archived",
    value: "archived",
    Icon: Archive,
    className: "bg-muted text-foreground",
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

function getServiceSubmissions(
  service: ServiceRowType,
  submissions: SubmissionType[],
) {
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
  service: ServiceRowType,
  submissions: SubmissionType[],
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
  services: ServiceRowType[];
  submissions: SubmissionType[];
}) {
  const publishedServices = services.filter((service) => service.published);
  const featuredServices = services.filter((service) => service.featured);
  const draftServices = services.length - publishedServices.length;
  const statusTotals = submissionStatuses.map((status) => ({
    ...status,
    count: submissions.filter(
      (submission) => submission.status === status.value,
    ).length,
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
      href: "/services",
    },
    {
      title: "Featured Services",
      value: featuredServices.length,
      description: "Highlighted on public pages",
      icon: <Sparkles className="h-4 w-4 text-muted-foreground" />,
      href: "/services",
    },
    {
      title: "Service Submissions",
      value: submissions.length,
      description: "Across service and contact flows",
      icon: <BarChart3 className="h-4 w-4 text-muted-foreground" />,
      href: "/formSubmissions",
    },
    {
      title: "Draft Services",
      value: draftServices,
      description: "Not visible publicly yet",
      icon: <Clock className="h-4 w-4 text-muted-foreground" />,
      href: "/services",
    },
        ]}
      />

      <Card >
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
              <div
                key={value}
                className={`rounded-xl p-4 shadow-sm ${className}`}
              >
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
  service: ServiceRowType;
  submissionStatusCounts: ServiceSubmissionStatusCount[];
  onEdit: (service: ServiceRowType) => void;
  onDelete: (service: ServiceRowType) => void;
}) => {
  const router = useRouter();
  const imageUrl =
    service.thumbnail?.trim() ||
    service.image?.trim() ||
    SERVICE_IMAGE_FALLBACK;
  const visibleSubmissionStatusCounts = submissionStatusCounts.filter(
    ({ count }) => count > 0,
  );

  return (
    <Card key={service.id} className="group flex h-full flex-col overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full overflow-hidden bg-muted">
          <img
            src={imageUrl}
            alt={service.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          <div className="absolute right-3 top-3 flex flex-wrap justify-end gap-2">
            <Badge variant={service.published ? "default" : "secondary"}>
              {service.published ? "Published" : "Draft"}
            </Badge>
            {service.featured ? <Badge variant="outline">Featured</Badge> : null}
          </div>
        </div>
      </CardHeader>

      <CardHeader>
        <div className="min-w-0 space-y-1">
          <CardTitle className="truncate">
            <Link
              href={`/services/${service.id}`}
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card"
            >
              {service.title}
            </Link>
          </CardTitle>
          <CardDescription className="truncate">
            {service.category}
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col space-y-4">
        <p className="line-clamp-3 text-sm text-muted-foreground">
          {service.shortDescription}
        </p>
        <div className="rounded-lg bg-muted/40 p-3">
          <p className="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Form Submissions
          </p>
          {visibleSubmissionStatusCounts.length > 0 ? (
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {visibleSubmissionStatusCounts.map(
                ({ label, value, count, Icon, className }) => (
                  <div
                    key={value}
                    className={`flex items-center justify-between gap-2 rounded-lg px-3 py-2 text-xs font-semibold ${className}`}
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

      <CardFooter className="mt-auto justify-between border-t">
        <p className="font-semibold">
          {service.pricing ? `R ${service.pricing.toLocaleString()}` : "Not Set"}
        </p>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              size="sm"
              variant="ghost"
              className="h-8 w-8 rounded-full p-0"
            >
              <span className="sr-only">Actions for {service.title}</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={(e) => {
                e.preventDefault();
                router.push(`/services/${service.id}`);
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
      </CardFooter>
    </Card>
  );
};

interface ServiceDeleteDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onDeleted: () => void;
  item: ServiceRowType | null;
}

const ServiceDeleteDialog = (props: ServiceDeleteDialogProps) => (
  <DeleteServiceDialog
    isOpen={props.isOpen}
    onClose={props.onClose}
    service={props.item}
    onDeleted={props.onDeleted}
  />
);

export default function ServicesClient() {
  const { data: submissions } = useSubmissions();

  return (
    <AdminPage<ServiceRowType>
      useData={useServices}
      title="Services"
      newItemButtonText="Add Service"
      newItemLink="/services/new"
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
      DeleteDialog={ServiceDeleteDialog}
    />
  );
}
