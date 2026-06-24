import type { Service } from "@bilacert/contracts/service";
import type { BlogPost } from "@bilacert/shared/types";
import { createSupabaseAdminClient } from "@bilacert/supabase/admin";
import { normalizeService } from "@bilacert/supabase/Queries/services";
import { ArrowLeft, Eye, FileText, Newspaper, Sparkles } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ServiceForm from "./ServiceForm";

export const metadata = {
  title: "Edit Service | Bilacert Admin Pro",
  description: "Edit an existing regulatory service.",
};

async function getService(id: string): Promise<Service | null> {
  const supabase = createSupabaseAdminClient();
  const { data, error } = await supabase
    .from("services")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error("Error fetching service:", error);
    return null;
  }

  return data ? normalizeService(data) : null;
}

async function getBlogs(): Promise<BlogPost[]> {
  const supabase = createSupabaseAdminClient();
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

function ServiceBlogAnalysis({
  service,
  blogs,
}: {
  service: Service;
  blogs: BlogPost[];
}) {
  const relatedBlogs = getRelatedBlogs(service, blogs);
  const publishedBlogs = relatedBlogs.filter((blog) => blog.published);
  const featuredBlogs = relatedBlogs.filter((blog) => blog.featured);
  const totalViews = relatedBlogs.reduce(
    (sum, blog) => sum + (blog.viewsCount ?? 0),
    0,
  );
  const topBlogs = [...relatedBlogs]
    .sort((a, b) => (b.viewsCount ?? 0) - (a.viewsCount ?? 0))
    .slice(0, 5);

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <Card className="border-0 shadow-md shadow-black/5">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Related Blogs</CardTitle>
            <Newspaper className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{relatedBlogs.length}</p>
            <p className="text-xs text-muted-foreground">
              Matched to this service
            </p>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-md shadow-black/5">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Published Blogs</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{publishedBlogs.length}</p>
            <p className="text-xs text-muted-foreground">Visible publicly</p>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-md shadow-black/5">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Blog Views</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{totalViews.toLocaleString()}</p>
            <p className="text-xs text-muted-foreground">Across related posts</p>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-md shadow-black/5">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Featured Blogs</CardTitle>
            <Sparkles className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{featuredBlogs.length}</p>
            <p className="text-xs text-muted-foreground">Promoted content</p>
          </CardContent>
        </Card>
      </div>

      <Card className="border-0 shadow-xl shadow-black/5">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">
            Service Blog Performance
          </CardTitle>
          <CardDescription>
            Blog content connected to {service.title} by title, slug, or
            category match.
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
    </div>
  );
}

export default async function EditServicePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const slug = (await params).id;
  const [service, blogs] = await Promise.all([getService(slug), getBlogs()]);

  if (!service) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="sm" asChild>
          <Link href={`/admin/services/${service.id}`}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Cancel Edit
          </Link>
        </Button>
      </div>

      <ServiceBlogAnalysis service={service} blogs={blogs} />

      <Card>
        <CardHeader>
          <CardTitle>Edit Service</CardTitle>
          <CardDescription>
            You are currently editing the details for:{" "}
            <span className="font-semibold text-foreground">
              {service.title}
            </span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ServiceForm service={service} />
        </CardContent>
      </Card>
    </div>
  );
}
