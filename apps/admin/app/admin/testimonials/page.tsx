import { Suspense } from "react";
import TestimonialsLoading from "./loading";
import TestimonialsClient from "./TestimonialsClient";

export const metadata = {
  title: "Testimonials | Bilacert Admin Pro",
  description: "Manage customer testimonials from social media.",
};

export default function TestimonialsPage() {
  return (
    <div className="space-y-6">
      <Suspense fallback={<TestimonialsLoading />}>
        <TestimonialsClient />
      </Suspense>
    </div>
  );
}
