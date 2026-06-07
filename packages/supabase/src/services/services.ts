import { createClient as createBrowserClient } from "../client";
import type { Service } from "../types";

export async function getPublishedServices(): Promise<Service[]> {
  const supabase = createBrowserClient();
  const { data, error } = await supabase
    .from("services")
    .select("*")
    .eq("published", true)
    .order("order_index", { ascending: true });

  if (error) {
    console.error("Error fetching services:", error);
    return [];
  }

  return data || [];
}

export async function getFeaturedServices(): Promise<Service[]> {
  const supabase = createBrowserClient();
  const { data, error } = await supabase
    .from("services")
    .select("*")
    .eq("published", true)
    .eq("featured", true)
    .order("order_index", { ascending: true })
    .limit(4);

  if (error) {
    console.error("Error fetching featured services:", error);
    return [];
  }

  return data || [];
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  const supabase = createBrowserClient();
  const { data, error } = await supabase
    .from("services")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !data) {
    return null;
  }

  return data;
}

export async function getAllPublishedServiceSlugs(): Promise<
  { slug: string }[]
> {
  const supabase = createBrowserClient();
  const { data, error } = await supabase
    .from("services")
    .select("slug")
    .eq("published", true);

  if (error) {
    console.error("Error fetching service slugs:", error);
    return [];
  }

  return data || [];
}
