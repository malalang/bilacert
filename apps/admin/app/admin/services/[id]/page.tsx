import type { Service } from "@bilacert/contracts/service";
import type { BlogPost } from "@bilacert/shared/types";
import { createSupabaseBrowserClient } from "@bilacert/supabase/client";
import { normalizeService } from "@bilacert/supabase/Queries/services";
import { Eye } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ServiceDetails from "./ServiceDetails";
import ServiceSubmissionAnalysis from "./ServiceSubmissionAnalysis";

const supabase = createSupabaseBrowserClient();

async function getService(id: string): Promise<Service | null> {
  const { data, error } = await supabase
    .from("services")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !data) {
    return null;
  }

  return normalizeService(data);
}

async function getBlogs(): Promise<BlogPost[]> {
  const { data, error } = await supabase
    .from("blog_posts")
    .select(
      "id,title,slug,excerpt,content,category,tags,readTime,seoTitle,seoDescription,seoKeywords,featuredImage,thumbnail,published,publishedAt,featured,authorId,authorName,viewsCount,createdAt,updatedAt",
    );

  if (error || !data) {
    return [];
  }

  return data as BlogPost[];
}

function normalizeSearchValue(value: string | null | undefined) {
  return value?.trim().toLowerCase() ?? "";
}

function getRelatedBlogs(service: Service, blogs: BlogPost[]) {
  const serviceTerms = [service.title, service.slug, service.category]
    .map(normalizeSearchValue)
    .filter(Boolean);

  return blogs.filter((blog) => {
    const searchableBlogText = [
      blog.title,
      blog.category,
      blog.tags,
      blog.excerpt,
      blog.content,
    ]
      .map(normalizeSearchValue)
      .join(" ");

    return serviceTerms.some((term) => searchableBlogText.includes(term));
  });
}

function ServiceBlogPerformance({
  service,
  blogs,
}: {
  service: Service;
  blogs: BlogPost[];
}) {
  const topBlogs = getRelatedBlogs(service, blogs)
    .sort((a, b) => (b.viewsCount ?? 0) - (a.viewsCount ?? 0))
    .slice(0, 5);

  return (
    <Card className="border-0 shadow-xl shadow-black/5">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">
          Service Blog Performance
        </CardTitle>
        <CardDescription>
          Blog content connected to {service.title} by title, slug, or category
          match.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {topBlogs.length > 0 ? (
          <div className="space-y-3">
            {topBlogs.map((blog) => (
              <div
                key={blog.id}
                className="flex flex-col gap-3 rounded-xl border bg-background p-4 shadow-sm shadow-black/5 md:flex-row md:items-center md:justify-between"
              >
                <div className="min-w-0">
                  <Link
                    href={`/admin/blogs/${blog.id}`}
                    className="font-semibold text-primary hover:text-primary/80"
                  >
                    {blog.title}
                  </Link>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {blog.category && (
                      <Badge variant="secondary">{blog.category}</Badge>
                    )}
                    <Badge variant={blog.published ? "default" : "outline"}>
                      {blog.published ? "Published" : "Draft"}
                    </Badge>
                    {blog.featured && <Badge variant="outline">Featured</Badge>}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                  <Eye className="h-4 w-4" />
                  {(blog.viewsCount ?? 0).toLocaleString()} views
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">
            No related blog posts were found for this service yet.
          </p>
        )}
      </CardContent>
    </Card>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const service = await getService(id);
  if (!service) {
    return {
      title: "Service Not Found",
    };
  }
  return {
    title: `${service.title} | Bilacert Admin Pro`,
  };
}

export default async function ServiceDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const [service, blogs] = await Promise.all([getService(id), getBlogs()]);

  if (!service) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <ServiceDetails service={service} />
      <ServiceSubmissionAnalysis service={service} />
      <ServiceBlogPerformance service={service} blogs={blogs} />
    </div>
  );
}
