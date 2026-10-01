"use client";

import type { TestimonialRowType } from "@bilacert/contracts/testimonial";
import { format } from "date-fns";
import { MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AdminPage from "@/components/admin/AdminPage";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
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
import { useTestimonials } from "@/lib/hooks/useTestimonials";
import DeleteTestimonialDialog from "./DeleteTestimonialDialog";
import TestimonialEmbed from "./TestimonialEmbed";

const renderTestimonial = (
  testimonial: TestimonialRowType,
  onEdit: (testimonial: TestimonialRowType) => void,
  onDelete: (testimonial: TestimonialRowType) => void,
) => {
  const router = useRouter();
  const date = new Date(testimonial.createdAt);
  const formattedDate = !Number.isNaN(date.getTime())
    ? format(date, "PP")
    : "Date not available";
  return (
    <Card key={testimonial.id} className="flex h-full flex-col transition-colors hover:border-primary/50">
        <CardHeader className="flex-row items-start justify-between">
          <div className="min-w-0">
            <CardTitle className="truncate">
              <Link
                href={`/testimonials/${testimonial.id}`}
                className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card"
              >
                Testimonial
              </Link>
            </CardTitle>
            <CardDescription>Added on {formattedDate}</CardDescription>
          </div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="h-8 w-8 shrink-0 p-0"
                >
                  <span className="sr-only">
                    Actions for testimonial from {formattedDate}
                  </span>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem
                  onClick={(e) => {
                    e.preventDefault();
                    router.push(`/testimonials/${testimonial.id}`);
                  }}
                >
                  View
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={(e) => {
                    e.preventDefault();
                    onEdit(testimonial);
                  }}
                >
                  Edit
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="text-destructive focus:bg-destructive/10 focus:text-destructive"
                  onClick={(e) => {
                    e.preventDefault();
                    onDelete(testimonial);
                  }}
                >
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardHeader>
        <CardContent className="flex-grow p-0 overflow-hidden">
          <TestimonialEmbed postUrl={testimonial.postUrl} />
        </CardContent>
    </Card>
  );
};

export default function TestimonialsClient() {
  return (
    <AdminPage<TestimonialRowType>
      useData={useTestimonials}
      title="Testimonials"
      newItemButtonText="Add Testimonial"
      newItemLink="/testimonials/new"
      renderItem={renderTestimonial}
      DeleteDialog={TestimonialDeleteDialog}
    />
  );
}

interface TestimonialDeleteDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onDeleted: () => void;
  item: TestimonialRowType | null;
}

const TestimonialDeleteDialog = (props: TestimonialDeleteDialogProps) => (
  <DeleteTestimonialDialog
    isOpen={props.isOpen}
    onClose={props.onClose}
    testimonial={props.item}
  />
);
