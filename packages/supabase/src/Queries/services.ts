import { createSupabaseBrowserClient } from "../client";
import type { Service } from "@bilacert/shared/types";
import type { Database } from "../supabaseType";

type ServiceRow = Database["public"]["Tables"]["services"]["Row"];

export function normalizeService(row: ServiceRow): Service {
  return {
    id: row.id,
    title: row.title,
    slug: row.slug,
    href: row.href,
    category: row.category ?? undefined,
    description: row.description ?? undefined,
    shortDescription: row.short_description ?? undefined,
    icon: row.icon ?? undefined,
    orderIndex: row.order_index ?? undefined,
    content: row.content ?? undefined,
    features: row.features ?? undefined,
    requirements: row.requirements ?? undefined,
    includes: row.includes ?? undefined,
    published: row.published ?? false,
    featured: row.featured ?? false,
    createdAt: row.created_at ?? new Date(0).toISOString(),
    processingTime: row.processing_time ?? undefined,
    pricing: row.pricing ?? undefined,
    image: row.image ?? undefined,
    thumbnail: row.thumbnail ?? undefined,
    seoTitle: row.seo_title ?? undefined,
    seoDescription: row.seo_description ?? undefined,
    seoKeywords: row.seo_keywords ?? undefined,
    pricingPlans:
      (row.pricing_plans as unknown as Service["pricingPlans"]) ?? undefined,
    processSteps:
      (row.process_steps as unknown as Service["processSteps"]) ?? undefined,
    successStory:
      (row.success_story as unknown as Service["successStory"]) ?? undefined,
    updatedAt: row.updated_at ?? undefined,
  };
}

export async function getPublishedServices(): Promise<Service[]> {
  const supabase = createSupabaseBrowserClient();
  const { data, error } = await supabase
    .from("services")
    .select("*")
    .eq("published", true)
    .order("order_index", { ascending: true });

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
    .order("order_index", { ascending: true })
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
