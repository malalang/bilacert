"use client";

import type { BlogRowType as BlogType } from "@bilacert/contracts/blog";
import { format, isValid, parseISO } from "date-fns";
import {
  Calendar,
  Eye,
  FileText,
  Filter,
  MoreHorizontal,
  Newspaper,
  PlusCircle,
  Search,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import AnalysesHeader from "@/components/admin/AnalysesHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useBlogs } from "@/lib/hooks/useBlogs";
import DeleteBlogDialog from "./DeleteBlogDialog";

const safeFormatDate = (
  date: string | Date | undefined,
  dateFormat = "PP",
  fallback = "Invalid date",
) => {
  if (!date) return fallback;
  const d = typeof date === "string" ? parseISO(date) : date;
  return isValid(d) ? format(d, dateFormat) : fallback;
};

function BlogsAnalysis({ blogs }: { blogs: BlogType[] }) {
  const publishedBlogs = blogs.filter((blog) => blog.published);
  const featuredBlogs = blogs.filter((blog) => blog.featured);
  const totalViews = blogs.reduce(
    (sum, blog) => sum + (blog.viewsCount ?? 0),
    0,
  );
  const topBlogs = [...blogs]
    .sort((a, b) => (b.viewsCount ?? 0) - (a.viewsCount ?? 0))
    .slice(0, 5);
  const categoryCounts = blogs.reduce<Map<string, number>>((counts, blog) => {
    const category = blog.category || "Uncategorized";
    counts.set(category, (counts.get(category) ?? 0) + 1);
    return counts;
  }, new Map());
  const topCategories = [...categoryCounts.entries()]
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5);

  return (
    <div className="space-y-4">
      <AnalysesHeader
        items={[
{
      title: "Total Blogs",
      value: blogs.length,
      description: `${publishedBlogs.length.toLocaleString()} published`,
      icon: <Newspaper className="h-4 w-4 text-muted-foreground" />,
      href: "/blogs",
    },
    {
      title: "Published Blogs",
      value: publishedBlogs.length,
      description: "Visible publicly",
      icon: <FileText className="h-4 w-4 text-muted-foreground" />,
      href: "/blogs",
    },
    {
      title: "Blog Views",
      value: totalViews,
      description: "Across all posts",
      icon: <Eye className="h-4 w-4 text-muted-foreground" />,
      href: "/blogs",
    },
    {
      title: "Featured Blogs",
      value: featuredBlogs.length,
      description: "Promoted content",
      icon: <Sparkles className="h-4 w-4 text-muted-foreground" />,
      href: "/blogs",
    },
        ]}
      />

      <div className="grid gap-4 lg:grid-cols-[2fr_1fr]">
        <Card >
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              Blog Performance
            </CardTitle>
            <CardDescription>
              Top posts ranked by recorded public views.
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
                        href={`/blogs/${blog.id}`}
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
                        {blog.featured && (
                          <Badge variant="outline">Featured</Badge>
                        )}
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
                No blog performance data yet.
              </p>
            )}
          </CardContent>
        </Card>

        <Card >
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              Category Coverage
            </CardTitle>
            <CardDescription>Most-used blog categories.</CardDescription>
          </CardHeader>
          <CardContent>
            {topCategories.length > 0 ? (
              <div className="space-y-3">
                {topCategories.map(([category, count]) => (
                  <div
                    key={category}
                    className="flex items-center justify-between rounded-xl bg-muted/40 px-4 py-3 text-sm"
                  >
                    <span className="font-medium">{category}</span>
                    <Badge variant="secondary">{count}</Badge>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">
                No categories assigned yet.
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

const BlogCard = ({
  blog,
  onEdit,
  onDelete,
}: {
  blog: BlogType;
  onEdit: (blog: BlogType) => void;
  onDelete: (blog: BlogType) => void;
}) => {
  const router = useRouter();
  return (
    <Card
      key={blog.id}
      className="group flex flex-col overflow-hidden"
    >
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <Image
            src={
              blog.featuredImage ||
              `https://picsum.photos/seed/${blog.id}/600/400`
            }
            alt={blog.title}
            fill
            sizes="(max-width: 1024px) 100vw, 33vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute right-4 top-4 flex flex-wrap justify-end gap-2">
            {blog.featured ? <Badge variant="outline">Featured</Badge> : null}
            <Badge variant={blog.published ? "default" : "secondary"}>
              {blog.published ? "Published" : "Draft"}
            </Badge>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col">
        <CardTitle className="mb-1">
          <Link
            href={`/blogs/${blog.id}`}
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card"
          >
            {blog.title}
          </Link>
        </CardTitle>
        <CardDescription className="line-clamp-3">
          {blog.excerpt}
        </CardDescription>
      </CardContent>

      <CardFooter className="mt-auto justify-between gap-3 border-t text-xs text-muted-foreground">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          {blog.category ? (
            <span className="font-medium">{blog.category}</span>
          ) : null}
          <div className="flex items-center gap-1.5">
            <Eye className="h-4 w-4" aria-hidden="true" />
            <span>{(blog.viewsCount ?? 0).toLocaleString()} views</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4" aria-hidden="true" />
            <span>{safeFormatDate(blog.createdAt, "PP")}</span>
          </div>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0">
              <span className="sr-only">Actions for {blog.title}</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={(e) => {
                e.preventDefault();
                router.push(`/blogs/${blog.id}`);
              }}
            >
              View
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={(e) => {
                e.preventDefault();
                onEdit(blog);
              }}
            >
              Edit
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="text-destructive focus:bg-destructive/10 focus:text-destructive"
              onClick={(e) => {
                e.preventDefault();
                onDelete(blog);
              }}
            >
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardFooter>
    </Card>
  );
};

export default function BlogsClient() {
  const { data: blogs, loading, error, refresh } = useBlogs();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [statusTab, setStatusTab] = useState("all");
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState<BlogType | null>(null);

  const categories = useMemo(() => {
    const cats = new Set<string>();
    blogs.forEach((blog) => {
      if (blog.category) cats.add(blog.category);
    });
    return Array.from(cats).sort();
  }, [blogs]);

  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesSearch =
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (blog.excerpt?.toLowerCase().includes(searchQuery.toLowerCase()) ??
          false);
      const matchesCategory =
        categoryFilter === "all" || blog.category === categoryFilter;
      const matchesStatus =
        statusTab === "all" ||
        (statusTab === "published" && blog.published) ||
        (statusTab === "draft" && !blog.published);
      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [blogs, searchQuery, categoryFilter, statusTab]);

  const handleEdit = (blog: BlogType) => {
    router.push(`/blogs/${blog.id}/edit`);
  };

  const handleDelete = (blog: BlogType) => {
    setSelectedBlog(blog);
    setIsDeleteDialogOpen(true);
  };

  const onDeleted = () => {
    setIsDeleteDialogOpen(false);
    setSelectedBlog(null);
    refresh();
  };

  if (error) {
    return (
      <div className="text-destructive p-4 border border-destructive/20 rounded-lg bg-destructive/10">
        Error loading blogs: {error.message}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Blogs</h1>
          <p className="text-muted-foreground">
            Manage your blog posts and content.
          </p>
        </div>
        <Button asChild>
          <Link href="/blogs/new">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Post
          </Link>
        </Button>
      </div>

      <BlogsAnalysis blogs={blogs} />

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b pb-4">
        <Tabs
          defaultValue="all"
          className="w-full sm:w-auto"
          onValueChange={setStatusTab}
        >
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="published">Published</TabsTrigger>
            <TabsTrigger value="draft">Drafts</TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="flex items-center gap-2">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search blogs..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-[180px]">
              <Filter className="mr-2 h-4 w-4 text-muted-foreground" />
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-[400px] w-full animate-pulse rounded-xl bg-muted"
            ></div>
          ))}
        </div>
      ) : filteredBlogs.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed py-24 text-center">
          <div className="rounded-full bg-muted p-6 mb-4">
            <Search className="h-10 w-10 text-muted-foreground" />
          </div>
          <h3 className="text-xl font-semibold">No blogs found</h3>
          <p className="text-muted-foreground max-w-xs mx-auto mt-2">
            No blogs match the current filters.
          </p>
          {(searchQuery || categoryFilter !== "all" || statusTab !== "all") && (
            <Button
              variant="outline"
              className="mt-6"
              onClick={() => {
                setSearchQuery("");
                setCategoryFilter("all");
                setStatusTab("all");
              }}
            >
              Clear all filters
            </Button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredBlogs.map((blog) => (
            <BlogCard
              key={blog.id}
              blog={blog}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}

      {isDeleteDialogOpen && (
        <DeleteBlogDialog
          isOpen={isDeleteDialogOpen}
          onClose={() => setIsDeleteDialogOpen(false)}
          onDeleted={onDeleted}
          blog={selectedBlog}
        />
      )}
    </div>
  );
}
