export const CACHE_TAGS = {
  blogs: "blogs",
  blog: (slug: string) => `blog:${slug}`,
  services: "services",
  service: (id: string) => `service:${id}`,
  testimonials: "testimonials",
  contacts: "contacts",
  formSubmissions: "form-submissions",
} as const;

export const CACHE_PATHS = {
  home: "/",
  blog: "/blog",
  blogPost: (slug: string) => `/blog/${slug}`,
  services: "/services",
  service: (id: string) => `/services/${id}`,
} as const;

export type RevalidationMode = "max" | "immediate";

export interface RevalidationRequest {
  tags?: readonly string[];
  paths?: readonly string[];
  mode?: RevalidationMode;
}

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
