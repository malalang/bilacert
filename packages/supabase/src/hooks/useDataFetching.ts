"use client";

import { useCallback, useEffect, useState } from "react";
import { createSupabaseBrowserClient, isSupabaseConfigured } from "../client";
import type { Database } from "../supabaseType";

type PublicTableName = keyof Database["public"]["Tables"] & string;

export function useDataFetching<T>(
  tableName: PublicTableName,
  selectQuery: string = "*",
  orderBy: string = "created_at",
) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    if (!isSupabaseConfigured) {
      setLoading(false);
      return;
    }

    const supabase = createSupabaseBrowserClient();
    setLoading(true);
    const { data: fetchedData, error: fetchError } = await supabase
      .from(tableName)
      .select(selectQuery)
      .order(orderBy, { ascending: false });

    if (fetchError) {
      setError(fetchError as unknown as Error);
      setData([]);
    } else {
      setData((fetchedData as unknown as T[]) || []);
      setError(null);
    }
    setLoading(false);
  }, [tableName, selectQuery, orderBy]);

  useEffect(() => {
    fetchData();

    if (!isSupabaseConfigured) {
      return;
    }

    const supabase = createSupabaseBrowserClient();
    const channel = supabase
      .channel(`${tableName}-realtime`)
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: tableName },
        () => {
          fetchData();
        },
      )
      .subscribe((status: string, err?: Error) => {
        if (err) {
          console.error("Supabase subscription error:", err);
        }
      });

    return () => {
      supabase.removeChannel(channel);
    };
  }, [tableName, fetchData]);

  return { data, loading, error, refresh: fetchData };
}
