"use client";

import type { BlogPost } from "@bilacert/shared/types";
import { format } from "date-fns";
import {
  ArrowLeft,
  Clock,
  Edit,
  Eye,
  FileText,
  ImageIcon,
  Tags,
  Trash2,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import DeleteBlogDialog from "./DeleteBlogDialog";

interface BlogDetailsProps {
  blog: BlogPost;
}

const bilacertArticleDetailsStyles = `
  .bilacert-article {
    color: #1f2937;
    font-size: 1.0625rem;
    line-height: 1.9;
    max-width: 100%;
    overflow-wrap: normal;
    word-break: normal;
  }

  .bilacert-article p {
    margin-bottom: 1.5rem;
    overflow-wrap: normal;
    text-wrap: pretty;
    white-space: normal;
    word-break: normal;
  }

  .bilacert-article h1,
  .bilacert-article h2,
  .bilacert-article h3,
  .bilacert-article h4 {
    color: #0a2b4c;
    font-weight: 800;
    letter-spacing: -0.03em;
    line-height: 1.2;
    text-wrap: balance;
  }

  .bilacert-article h1 {
    font-size: 2.5rem;
    margin: 0 0 1.5rem;
  }

  .bilacert-article h2 {
    font-size: 2rem;
    margin: 3rem 0 1rem;
  }

  .bilacert-article h3 {
    font-size: 1.5rem;
    margin: 2rem 0 0.75rem;
  }

  .bilacert-article strong {
    color: #334155;
    font-weight: 800;
  }

  .bilacert-article a {
    color: #1a4a6b;
    font-weight: 700;
    text-decoration: underline;
    text-decoration-color: #f2994a;
    text-underline-offset: 0.2em;
  }

  .bilacert-article ul,
  .bilacert-article ol {
    margin: 1.5rem 0 1.5rem 1.5rem;
    padding-left: 1rem;
  }

  .bilacert-article ul {
    list-style: disc;
  }

  .bilacert-article ol {
    list-style: decimal;
  }

  .bilacert-article li {
    margin-bottom: 0.75rem;
    padding-left: 0.25rem;
  }

  .bilacert-article blockquote {
    border-left: 4px solid #f2994a;
    color: #475569;
    font-size: 1.125rem;
    font-style: italic;
    margin: 2rem 0;
    padding: 1rem 0 1rem 1.5rem;
  }

  .bilacert-article img,
  .bilacert-article iframe,
  .bilacert-article video {
    border-radius: 1rem;
    height: auto;
    margin: 2rem auto;
    max-width: 100%;
  }

  .bilacert-article pre {
    background: #0a2b4c;
    border-radius: 1rem;
    color: white;
    margin: 2rem 0;
    overflow-x: auto;
    padding: 1.25rem;
    white-space: pre-wrap;
  }

  .bilacert-article code {
    overflow-wrap: break-word;
    white-space: pre-wrap;
  }

  .bilacert-article table {
    display: block;
    margin: 2rem 0;
    max-width: 100%;
    overflow-x: auto;
    width: 100%;
  }

  .bilacert-article .ql-align-center {
    text-align: center;
  }

  .bilacert-article .ql-align-right {
    text-align: right;
  }

  .bilacert-article .ql-align-justify {
    text-align: justify;
  }

  .bilacert-article .ql-size-small {
    font-size: 0.875em;
  }

  .bilacert-article .ql-size-large {
    font-size: 1.25em;
  }

  .bilacert-article .ql-size-huge {
    font-size: 1.5em;
  }

  @media (min-width: 768px) {
    .bilacert-article {
      font-size: 1.125rem;
    }
  }
`;

function normalizeArticleHtml(html: string | null | undefined) {
  if (!html) return '<p class="text-slate-400 italic">No content to display yet...</p>';

  return html
    .replace(/<br\s*\/?>(\s*)/gi, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/([A-Za-z])[-‐‑‒–—]\s+([A-Za-z])/g, "$1$2")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function InfoItem({
  label,
  value,
}: {
  label: string;
  value: string | number | null | undefined;
}) {
  if (value === null || value === undefined || value === "") return null;

  return (
    <div>
      <h4 className="text-sm font-medium text-muted-foreground">{label}</h4>
      <p className="mt-1 text-sm text-card-foreground">{value}</p>
    </div>
  );
}

function MetricCard({
  title,
  value,
  description,
  Icon,
}: {
  title: string;
  value: string | number;
  description: string;
  Icon: typeof Eye;
}) {
  return (
    <Card className="border-0 shadow-md shadow-black/5">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold">{value}</p>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

export default function BlogDetails({ blog }: BlogDetailsProps) {
  const router = useRouter();
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  if (!blog) return null;

  const handleDelete = () => {
    setIsDeleteDialogOpen(true);
  };

  const onDeleted = () => {
    setIsDeleteDialogOpen(false);
    router.push("/admin/blogs");
    router.refresh();
  };

  const handleCloseDialog = () => {
    setIsDeleteDialogOpen(false);
  };

  const publishedDate = blog.publishedAt
    ? format(new Date(blog.publishedAt), "PPpp")
    : "Not published yet";
  const createdDate = format(new Date(blog.createdAt), "PPpp");
  const updatedDate = blog.updatedAt
    ? format(new Date(blog.updatedAt), "PPpp")
    : "Not updated yet";
  const tags = blog.tags
    ? blog.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean)
    : [];

  return (
    <>
      <style>{bilacertArticleDetailsStyles}</style>
      <div className="space-y-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Button variant="outline" asChild>
            <Link href="/admin/blogs">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blogs
            </Link>
          </Button>
          <div className="flex gap-2">
            <Button asChild>
              <Link href={`/admin/blogs/${blog.id}/edit`}>
                <Edit className="mr-2 h-4 w-4" /> Edit
              </Link>
            </Button>
            <Button variant="destructive" onClick={handleDelete}>
              <Trash2 className="mr-2 h-4 w-4" /> Delete
            </Button>
          </div>
        </div>

        <Card className="overflow-hidden shadow-xl shadow-black/5">
          <CardHeader className="bg-muted/30">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <Badge variant={blog.published ? "default" : "secondary"}>
                    {blog.published ? "Published" : "Draft"}
                  </Badge>
                  <Badge variant={blog.featured ? "default" : "secondary"}>
                    {blog.featured ? "Featured" : "Not Featured"}
                  </Badge>
                  {blog.category && <Badge variant="outline">{blog.category}</Badge>}
                </div>
                <CardTitle className="max-w-4xl text-3xl leading-tight">
                  {blog.title}
                </CardTitle>
                {blog.excerpt && (
                  <CardDescription className="max-w-3xl text-base leading-relaxed">
                    {blog.excerpt}
                  </CardDescription>
                )}
              </div>
              <div className="rounded-2xl bg-background px-5 py-4 text-right shadow-sm shadow-black/5">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Views
                </p>
                <p className="text-2xl font-bold text-primary">
                  {(blog.viewsCount ?? 0).toLocaleString()}
                </p>
              </div>
            </div>
          </CardHeader>
        </Card>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <MetricCard
            title="Views"
            value={(blog.viewsCount ?? 0).toLocaleString()}
            description="Recorded public reads"
            Icon={Eye}
          />
          <MetricCard
            title="Read Time"
            value={blog.readTime || "Not set"}
            description="Estimated article length"
            Icon={Clock}
          />
          <MetricCard
            title="Author"
            value={blog.authorName || "Not set"}
            description="Public byline"
            Icon={User}
          />
          <MetricCard
            title="Tags"
            value={tags.length}
            description="Search and topic labels"
            Icon={Tags}
          />
        </div>

        {(blog.featuredImage || blog.thumbnail) && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {blog.featuredImage && (
              <Card className="overflow-hidden border-0 shadow-xl shadow-black/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <ImageIcon className="h-5 w-5" />
                    Featured Image
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-muted shadow-md shadow-black/10">
                    <Image
                      src={blog.featuredImage}
                      alt="Featured Image"
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            )}
            {blog.thumbnail && (
              <Card className="overflow-hidden border-0 shadow-xl shadow-black/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <ImageIcon className="h-5 w-5" />
                    Thumbnail
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-muted shadow-md shadow-black/10">
                    <Image
                      src={blog.thumbnail}
                      alt="Thumbnail"
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        )}

        <Card className="overflow-hidden shadow-xl shadow-black/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <FileText className="h-5 w-5" />
              Blog Details
            </CardTitle>
            <CardDescription>
              Publishing, search, and editorial metadata for this blog post.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-5 rounded-2xl bg-muted/20 p-5 shadow-sm shadow-black/5">
                <InfoItem label="Slug" value={blog.slug} />
                <InfoItem label="Category" value={blog.category} />
                <InfoItem label="Author" value={blog.authorName} />
                <InfoItem label="Read Time" value={blog.readTime} />
                <InfoItem label="Published At" value={publishedDate} />
                <InfoItem label="Created At" value={createdDate} />
                <InfoItem label="Updated At" value={updatedDate} />
              </div>
              <div className="space-y-5 rounded-2xl bg-muted/20 p-5 shadow-sm shadow-black/5">
                <InfoItem label="SEO Title" value={blog.seoTitle} />
                <InfoItem label="SEO Description" value={blog.seoDescription} />
                <InfoItem label="SEO Keywords" value={blog.seoKeywords} />
                {tags.length > 0 && (
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">
                      Tags
                    </h4>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden shadow-xl shadow-black/5">
          <CardHeader>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <CardTitle className="text-lg">Content Preview</CardTitle>
                <CardDescription>
                  Public article content rendered with the Bilacert article style.
                </CardDescription>
              </div>
              <Button asChild>
                <Link href={`/admin/blogs/${blog.id}/edit`}>
                  <Edit className="mr-2 h-4 w-4" /> Edit Content
                </Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <article
              className="bilacert-article"
              dangerouslySetInnerHTML={{
                __html: normalizeArticleHtml(blog.content),
              }}
            />
          </CardContent>
        </Card>
      </div>

      {isDeleteDialogOpen && (
        <DeleteBlogDialog
          isOpen={isDeleteDialogOpen}
          onClose={handleCloseDialog}
          blog={blog}
          onDeleted={onDeleted}
        />
      )}
    </>
  );
}
