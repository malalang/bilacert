"use client";

import type { Testimonial } from "@bilacert/shared/types";
import { useTestimonials } from "@bilacert/supabase/hooks/useTestimonials";
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
import DeleteTestimonialDialog from "./DeleteTestimonialDialog";
import TestimonialEmbed from "./TestimonialEmbed";

const renderTestimonial = (
  testimonial: Testimonial,
  onEdit: (testimonial: Testimonial) => void,
  onDelete: (testimonial: Testimonial) => void,
) => {
  const router = useRouter();
  const date = new Date(testimonial.created_at);
  const formattedDate = !Number.isNaN(date.getTime())
    ? format(date, "PP")
    : "Date not available";
  return (
    <div key={testimonial.id} className="group relative">
      <Link
        href={`/admin/testimonials/${testimonial.id}`}
        className="absolute inset-0 z-10"
        aria-label={`View testimonial`}
      >
        <span className="sr-only">View Details</span>
      </Link>
      <Card className="flex flex-col h-full hover:shadow-lg hover:border-primary/50 transition-all">
        <CardHeader className="flex-row items-center justify-between">
          <div>
            <CardTitle className="text-base">Testimonial</CardTitle>
            <CardDescription className="text-xs">
              Added on {formattedDate}
            </CardDescription>
          </div>
          <div className="relative z-20">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="h-8 w-8 p-0"
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
                    router.push(`/admin/testimonials/${testimonial.id}`);
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
          <TestimonialEmbed postUrl={testimonial.post_url} />
        </CardContent>
      </Card>
    </div>
  );
};

export default function TestimonialsClient() {
  return (
    <AdminPage<Testimonial>
      useData={useTestimonials}
      title="Testimonials"
      newItemButtonText="Add Testimonial"
      newItemLink="/admin/testimonials/new"
      renderItem={renderTestimonial}
      DeleteDialog={DeleteTestimonialDialog as any}
    />
  );
}
