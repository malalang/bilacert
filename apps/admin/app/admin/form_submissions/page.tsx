import { Suspense } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import SubmissionsClient from "./SubmissionsClient";

export const metadata = {
  title: "Form Submissions | Bilacert Admin Pro",
  description: "View and manage all form submissions.",
};

function SubmissionsLoading() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>All Submissions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
        </div>
      </CardContent>
    </Card>
  );
}

export default function FormSubmissionsPage() {
  return (
    <div className="space-y-6">
      <Suspense fallback={<SubmissionsLoading />}>
        <SubmissionsClient />
      </Suspense>
    </div>
  );
}
