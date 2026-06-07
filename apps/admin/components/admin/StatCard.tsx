"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  items?: string[];
}

export default function StatCard({
  title,
  value,
  icon,
  items = [],
}: StatCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {items.length > 0 && (
          <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
            {items.slice(0, 3).map(
              (
                item,
                index, // Show first 3 items
              ) => (
                <li key={index} className="flex items-center truncate">
                  <span className="mr-2">&#8226;</span>
                  {item}
                </li>
              ),
            )}
            {items.length > 3 && <li className="truncate">......</li>}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}
