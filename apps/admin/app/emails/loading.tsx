import { Skeleton } from "@/components/ui/skeleton";

export default function EmailsLoading() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <Skeleton className="h-9 w-40" />
          <Skeleton className="h-5 w-72" />
        </div>
        <Skeleton className="h-10 w-28" />
      </div>
      <div className="grid gap-6 xl:grid-cols-[240px_minmax(0,1fr)]">
        <Skeleton className="h-80 w-full" />
        <Skeleton className="h-[34rem] w-full" />
      </div>
    </div>
  );
}
