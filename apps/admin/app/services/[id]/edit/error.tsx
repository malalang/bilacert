"use client";

import { AlertCircle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function EditServiceError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="mx-auto max-w-2xl">
      <Card className="border border-destructive/30">
        <CardHeader>
          <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-destructive/10 text-destructive">
            <AlertCircle className="h-5 w-5" />
          </div>
          <CardTitle>Service could not be loaded</CardTitle>
          <CardDescription>
            An unexpected server error interrupted the service editor. Your
            changes elsewhere are safe.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={reset}>
            <RefreshCw className="h-4 w-4" />
            Try again
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
