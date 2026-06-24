import type { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export interface AnalysesHeaderItem {
  title: string;
  value: string | number;
  description: string;
  icon?: ReactNode;
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
      {items.map((item) => (
        <Card key={item.title} className="border-0 shadow-md shadow-black/5">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
            {item.icon}
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">
              {typeof item.value === "number"
                ? item.value.toLocaleString()
                : item.value}
            </p>
            <p className="text-xs text-muted-foreground">{item.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
