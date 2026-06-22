"use client";

import type { Service } from "@bilacert/contracts/service";
import type { Submission, SubmissionStatus } from "@bilacert/shared/types";
import { useServices } from "@bilacert/supabase/hooks/useServices";
import { useSubmissions } from "@bilacert/supabase/hooks/useSubmissions";
import { MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AdminPage from "@/components/admin/AdminPage";
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

const submissionStatuses: { label: string; value: SubmissionStatus }[] = [
  { label: "Pending", value: "pending" },
  { label: "Processing", value: "in-progress" },
  { label: "Completed", value: "completed" },
  { label: "Rejected", value: "rejected" },
  { label: "Archived", value: "archived" },
];

type ServiceSubmissionStatusCount = {
  label: string;
  value: SubmissionStatus;
  count: number;
};

function getServiceSubmissionStatusCounts(
  service: Service,
  submissions: Submission[],
): ServiceSubmissionStatusCount[] {
  const serviceTitle = service.title.trim().toLowerCase();
  const serviceSubmissions = submissions.filter((submission) => {
    const submissionServiceName = submission.serviceName?.trim().toLowerCase();
    return submission.serviceId === service.id || submissionServiceName === serviceTitle;
  });

  return submissionStatuses.map((status) => ({
    ...status,
    count: serviceSubmissions.filter(
      (submission) => submission.status === status.value,
    ).length,
  }));
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
          <div className="rounded-xl bg-muted/40 p-3">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Form Submissions
            </p>
            {visibleSubmissionStatusCounts.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {visibleSubmissionStatusCounts.map(({ label, value, count }) => (
                  <Badge key={value} variant="secondary" className="gap-1">
                    <span>{label}</span>
                    <span className="font-semibold tabular-nums">{count}</span>
                  </Badge>
                ))}
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
