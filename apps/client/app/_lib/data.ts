import { CACHE_TAGS } from "@bilacert/supabase/cache";
import {
  getAllPublishedBlogPosts,
  getAllPublishedBlogSlugs,
  getBlogPostBySlug,
  getBlogPostsByCategory,
} from "@bilacert/supabase/Queries/blogs";
import {
  getAllPublishedServiceSlugs,
  getFeaturedServices,
  getPublishedServices,
  getServiceBySlug,
} from "@bilacert/supabase/Queries/services";
import { unstable_cache } from "next/cache";

export const getCachedPublishedBlogs = unstable_cache(
  getAllPublishedBlogPosts,
  ["published-blogs"],
  { tags: [CACHE_TAGS.blogs] },
);

export const getCachedPublishedBlogSlugs = unstable_cache(
  getAllPublishedBlogSlugs,
  ["published-blog-slugs"],
  { tags: [CACHE_TAGS.blogs] },
);

export const getCachedBlogBySlug = (slug: string) =>
  unstable_cache(() => getBlogPostBySlug(slug), ["published-blog", slug], {
    tags: [CACHE_TAGS.blogs, CACHE_TAGS.blog(slug)],
  })();

export const getCachedBlogPostsByCategory = (category: string, limit: number) =>
  unstable_cache(
    () => getBlogPostsByCategory(category, limit),
    ["published-blogs-by-category", category, String(limit)],
    { tags: [CACHE_TAGS.blogs] },
  )();

export const getCachedServices = unstable_cache(
  getPublishedServices,
  ["published-services"],
  { tags: [CACHE_TAGS.services] },
);

export const getCachedFeaturedServices = unstable_cache(
  getFeaturedServices,
  ["featured-services"],
  { tags: [CACHE_TAGS.services] },
);

export const getCachedServiceSlugs = unstable_cache(
  getAllPublishedServiceSlugs,
  ["published-service-slugs"],
  { tags: [CACHE_TAGS.services] },
);

export const getCachedServiceBySlug = (slug: string) =>
  unstable_cache(() => getServiceBySlug(slug), ["published-service", slug], {
    tags: [CACHE_TAGS.services, CACHE_TAGS.service(slug)],
  })();
