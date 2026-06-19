import type { RevalidationRequest } from "@bilacert/contracts/revalidation";

export const CACHE_TAGS = {
  blogs: "blogs",
  blog: (slug: string) => `blog:${slug}`,
  services: "services",
  service: (slug: string) => `service:${slug}`,
  testimonials: "testimonials",
  contacts: "contacts",
  formSubmissions: "form-submissions",
} as const;

export const CACHE_PATHS = {
  home: "/",
  blog: "/blog",
  blogPost: (slug: string) => `/blog/${slug}`,
  services: "/services",
  service: (slug: string) => `/services/${slug}`,
} as const;

export interface MutationResult<T> {
  data: T;
  revalidate: RevalidationRequest;
}

export function mutationResult<T>(
  data: T,
  revalidate: RevalidationRequest,
): MutationResult<T> {
  return { data, revalidate };
}
