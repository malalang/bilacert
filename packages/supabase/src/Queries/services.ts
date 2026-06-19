import type { Service } from "@bilacert/contracts/service";
import { createSupabaseBrowserClient } from "../client";
import type { Database } from "../supabaseType";

type ServiceRow = Database["public"]["Tables"]["services"]["Row"];

function toStringArray(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value.filter((item): item is string => typeof item === "string");
  }

  if (typeof value === "string") {
    return value
      .split("\n")
      .map((item) => item.trim())
      .filter(Boolean);
  }

  return [];
}

export function normalizeService(row: ServiceRow): Service {
  return {
    id: row.id,
    title: row.title,
    slug: row.slug,
    href: row.href,
    category: row.category ?? "",
    description: row.description ?? "",
    shortDescription: row.shortDescription ?? undefined,
    icon: row.icon ?? undefined,
    orderIndex: row.orderIndex ?? undefined,
    content: row.content ?? undefined,
    features: toStringArray(row.features),
    requirements: toStringArray(row.requirements),
    includes: toStringArray(row.includes),
    published: row.published ?? false,
    featured: row.featured ?? false,
    processingTime: row.processingTime ?? undefined,
    pricing: row.pricing ?? undefined,
    image: row.image ?? undefined,
    thumbnail: row.thumbnail ?? undefined,
    seoTitle: row.seoTitle ?? undefined,
    seoDescription: row.seoDescription ?? undefined,
    seoKeywords: row.seoKeywords ?? undefined,
    pricingPlans: (row.pricingPlans as any) ?? [],
    processSteps: (row.processSteps as any) ?? [],
    successStory: (row.successStory as any) ?? undefined,
    createdAt: row.createdAt ?? new Date().toISOString(),
    updatedAt: row.updatedAt ?? row.createdAt ?? new Date().toISOString(),
  };
}

export async function getPublishedServices(): Promise<Service[]> {
  const supabase = createSupabaseBrowserClient();
  const { data, error } = await supabase
    .from("services")
    .select("*")
    .eq("published", true)
    .order("orderIndex", { ascending: true });

  if (error) {
    console.error("Error fetching services:", error);
    return [];
  }

  return (data || []).map(normalizeService);
}

export async function getFeaturedServices(): Promise<Service[]> {
  const supabase = createSupabaseBrowserClient();
  const { data, error } = await supabase
    .from("services")
    .select("*")
    .eq("published", true)
    .eq("featured", true)
    .order("orderIndex", { ascending: true })
    .limit(4);

  if (error) {
    console.error("Error fetching featured services:", error);
    return [];
  }

  return (data || []).map(normalizeService);
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  const supabase = createSupabaseBrowserClient();
  const { data, error } = await supabase
    .from("services")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !data) {
    return null;
  }

  return normalizeService(data);
}

export async function getAllPublishedServiceSlugs(): Promise<
  { slug: string }[]
> {
  const supabase = createSupabaseBrowserClient();
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
