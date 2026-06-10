"use client";

import { type BlogPost, useBlogs } from "@bilacert/supabase";
import { format, isValid, parseISO } from "date-fns";
import {
  Calendar,
  Filter,
  MoreHorizontal,
  PlusCircle,
  Search,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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

const BlogCard = ({
  blog,
  onEdit,
  onDelete,
}: {
  blog: BlogPost;
  onEdit: (blog: BlogPost) => void;
  onDelete: (blog: BlogPost) => void;
}) => {
  const router = useRouter();
  return (
    <div
      key={blog.id}
      className="group relative flex flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg border"
    >
      <Link
        href={`/admin/blogs/${blog.id}`}
        className="absolute inset-0 z-10"
        aria-label={`View ${blog.title}`}
      >
        <span className="sr-only">View Details</span>
      </Link>
      <div className="absolute top-4 right-4 z-20">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full bg-background/60 backdrop-blur-sm hover:bg-background"
              onClick={(e) => e.preventDefault()}
            >
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={(e) => {
                e.preventDefault();
                router.push(`/admin/blogs/${blog.id}`);
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
      </div>

      <div className="relative h-48 w-full">
        <Image
          src={
            blog.featured_image ||
            `https://picsum.photos/seed/${blog.id}/600/400`
          }
          alt={blog.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-4 left-4">
          {blog.category && <Badge variant="secondary">{blog.category}</Badge>}
        </div>
      </div>

      <div className="flex flex-col flex-grow p-6">
        <h3 className="mb-2 text-xl font-semibold text-primary line-clamp-2">
          {blog.title}
        </h3>
        <p className="mb-4 text-sm text-muted-foreground line-clamp-3 flex-grow">
          {blog.excerpt}
        </p>
        <div className="mt-auto flex items-center justify-between text-xs text-muted-foreground">
          <Badge variant={blog.published ? "default" : "outline"}>
            {blog.published ? "Published" : "Draft"}
          </Badge>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{safeFormatDate(blog.created_at, "PP")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function BlogsClient() {
  const { data: blogs, loading, error, refresh } = useBlogs();
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [statusTab, setStatusTab] = useState("all");

  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);

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

  const handleEdit = (blog: BlogPost) => {
    router.push(`/admin/blogs/${blog.id}/edit`);
  };

  const handleDelete = (blog: BlogPost) => {
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
          <Link href="/admin/blogs/new">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Post
          </Link>
        </Button>
      </div>

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
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
            We couldn't find any blogs matching your current filters. Try
            adjusting your search or category.
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
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
