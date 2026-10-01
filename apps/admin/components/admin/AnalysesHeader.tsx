import type { ReactNode } from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export interface AnalysesHeaderItem {
  title: string;
  value: string | number;
  description: string;
  icon?: ReactNode;
  /** When set the whole card becomes a link to this route. */
  href?: string;
}

interface AnalysesHeaderProps {
  items: AnalysesHeaderItem[];
  className?: string;
  gridClassName?: string;
}

export default function AnalysesHeader({
  items,
  className = "",
  gridClassName = "grid gap-4 md:grid-cols-2 xl:grid-cols-4",
}: AnalysesHeaderProps) {
  return (
    <div className={`${gridClassName} ${className}`.trim()}>
      {items.map((item) => {
        const card = (
          <Card className="h-full transition-colors duration-150">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="truncate">{item.title}</CardTitle>
              {item.icon}
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold tabular-nums">
                {typeof item.value === "number"
                  ? item.value.toLocaleString()
                  : item.value}
              </p>
              <p className="truncate text-[13px] text-muted-foreground">
                {item.description}
              </p>
            </CardContent>
          </Card>
        );

        if (!item.href) return <div key={item.title}>{card}</div>;

        return (
          <Link
            key={item.title}
            href={item.href}
            className="block h-full cursor-pointer rounded-lg transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            {card}
          </Link>
        );
      })}
    </div>
  );
}