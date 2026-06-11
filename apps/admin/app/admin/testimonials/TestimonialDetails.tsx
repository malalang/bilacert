"use client";

import type { Testimonial } from "@bilacert/shared/types";
import { ArrowLeft, Edit, Trash2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import DeleteTestimonialDialog from "./DeleteTestimonialDialog";
import TestimonialEmbed from "./TestimonialEmbed";

interface TestimonialDetailsProps {
  testimonial: Testimonial;
}

export default function TestimonialDetails({
  testimonial,
}: TestimonialDetailsProps) {
  const router = useRouter();
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  if (!testimonial) {
    return null;
  }

  const handleDelete = () => {
    setIsDeleteDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDeleteDialogOpen(false);
    router.refresh();
    router.push("/admin/testimonials");
  };

  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <Button variant="outline" asChild>
            <Link href="/admin/testimonials">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Testimonials
            </Link>
          </Button>
          <div className="flex gap-2">
            <Button asChild>
              <Link href={`/admin/testimonials/${testimonial.id}/edit`}>
                <Edit className="mr-2 h-4 w-4" /> Edit
              </Link>
            </Button>
            <Button variant="destructive" onClick={handleDelete}>
              <Trash2 className="mr-2 h-4 w-4" /> Delete
            </Button>
          </div>
        </div>

        <Card>
          <CardContent className="h-[calc(100vh-20rem)] overflow-y-auto p-0">
            <TestimonialEmbed postUrl={testimonial.post_url} />
          </CardContent>
        </Card>
      </div>

      {isDeleteDialogOpen && (
        <DeleteTestimonialDialog
          isOpen={isDeleteDialogOpen}
          onClose={handleCloseDialog}
          testimonial={testimonial}
        />
      )}
    </>
  );
}
