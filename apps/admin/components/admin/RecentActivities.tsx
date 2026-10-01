import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export interface RecentActivityItem {
  /** Stable key for the list item. */
  id: string;
  /** Primary line, e.g. the client or contact name. */
  title: string;
  /** Secondary line under the title, e.g. the service or email. */
  subtitle?: ReactNode;
  /** Where the whole row links to. */
  href: string;
  /** Preformatted date string rendered in the trailing `<time>`. */
  date?: string;
  /** ISO value for the `<time dateTime>` attribute. */
  dateTime?: string | null;
  /** Optional trailing status pill. */
  badge?: {
    label: string;
    className?: string;
  };
  /** Optional leading avatar image. */
  avatar?: {
    src?: string;
    fallback?: string;
  };
}

interface RecentActivitiesProps {
  title: string;
  description: string;
  /** Icon shown at the top right of the header. */
  icon: LucideIcon;
  items: RecentActivityItem[];
  /** Destination for the footer "View All" button. */
  viewAllHref: string;
  viewAllLabel?: string;
  /** Message shown when `items` is empty. */
  emptyLabel?: string;
  className?: string;
}

export default function RecentActivities({
  title,
  description,
  icon: Icon,
  items,
  viewAllHref,
  viewAllLabel = "View All",
  emptyLabel = "No recent activity.",
  className = "",
}: RecentActivitiesProps) {
  return (
    <Card className={`flex h-full flex-col ${className}`.trim()}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="min-w-0 space-y-1">
          <CardTitle className="truncate">{title}</CardTitle>
          <CardDescription className="truncate">{description}</CardDescription>
        </div>
        <Icon
          className="h-5 w-5 shrink-0 text-muted-foreground"
          aria-hidden="true"
        />
      </CardHeader>

      <CardContent className="flex-1">
        {items.length === 0 ? (
          <div className="py-6 text-center text-sm text-muted-foreground">
            {emptyLabel}
          </div>
        ) : (
          <ul className="space-y-3">
            {items.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className="flex items-center justify-between gap-4 rounded-xl bg-background p-3 shadow-sm shadow-black/5 transition-all hover:-translate-y-0.5 hover:shadow-md hover:shadow-black/10"
                >
                  {item.avatar ? (
                    <Avatar className="h-9 w-9 shrink-0">
                      <AvatarImage src={item.avatar.src} alt="" />
                      <AvatarFallback>
                        {(item.avatar.fallback ?? "").charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  ) : null}

                  <div className="min-w-0 flex-1 space-y-1">
                    <p className="truncate text-sm font-medium leading-none">
                      {item.title}
                    </p>
                    {item.subtitle ? (
                      <p className="truncate text-xs text-muted-foreground">
                        {item.subtitle}
                      </p>
                    ) : null}
                  </div>

                  {item.badge ? (
                    <span
                      className={`shrink-0 rounded-full border px-2 py-0.5 text-[11px] font-semibold uppercase tracking-tight ${item.badge.className ?? ""}`}
                    >
                      {item.badge.label}
                    </span>
                  ) : null}

                  {item.date ? (
                    <time
                      dateTime={item.dateTime ?? undefined}
                      className="ml-2 shrink-0 whitespace-nowrap text-xs text-muted-foreground"
                    >
                      {item.date}
                    </time>
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </CardContent>

      <CardFooter className="border-t">
        <Button asChild size="sm" variant="ghost" className="ml-auto gap-1">
          <Link href={viewAllHref}>{viewAllLabel}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
