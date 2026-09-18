import type { TestimonialRowType } from "@bilacert/contracts/testimonial";
import { createSupabaseServerClient } from "@bilacert/supabase/server";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import TestimonialForm from "../../TestimonialForm";

async function getTestimonial(id: string): Promise<TestimonialRowType | null> {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("testimonials")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !data) {
    return null;
  }

  return {
    id: data.id,
    postUrl: data.postUrl,
    createdAt: data.createdAt,
  } as TestimonialRowType;
}

export const metadata = {
  title: "Edit Testimonial | Bilacert Admin Pro",
  description: "Edit an existing testimonial.",
};

export default async function EditTestimonialPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const testimonial = await getTestimonial(id);

  if (!testimonial) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <Button variant="outline" asChild>
        <Link href="/admin/testimonials">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Testimonials
        </Link>
      </Button>
      <Card>
        <CardHeader>
          <CardTitle>Edit Testimonial</CardTitle>
          <CardDescription>Update the Facebook post URL.</CardDescription>
        </CardHeader>
        <CardContent>
          <TestimonialForm testimonial={testimonial} />
        </CardContent>
      </Card>
    </div>
  );
}
