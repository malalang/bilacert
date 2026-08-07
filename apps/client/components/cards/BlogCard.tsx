import type { BlogPost } from "@bilacert/shared/types";
import { ArrowRight, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl bg-white shadow-sm shadow-black/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/10">
      <Link
        href={`/blog/${post.slug}`}
        className="absolute inset-0 z-10"
        aria-label={`View ${post.title}`}
      >
        <span className="sr-only">View Details</span>
      </Link>

      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={
            post.featuredImage || `https://picsum.photos/seed/${post.id}/600/400`
          }
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-4 left-4">
          {post.category && (
            <Badge className="bg-accent text-white border-none shadow-sm hover:bg-accent-light">
              {post.category}
            </Badge>
          )}
        </div>
      </div>

      <div className="flex flex-grow flex-col p-6">
        <h3 className="mb-2 line-clamp-2 text-xl font-bold text-primary transition-colors duration-200 group-hover:text-accent">
          {post.title}
        </h3>
        {post.excerpt && (
          <p className="mb-4 line-clamp-3 flex-grow text-sm leading-relaxed text-gray-600">
            {post.excerpt}
          </p>
        )}

        <div className="mt-auto flex items-center justify-between border-t border-gray-50 pt-4 text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <Calendar className="h-3.5 w-3.5 text-accent" />
            <span>
              {new Date(post.createdAt).toLocaleDateString("en-ZA", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>
          <div className="flex items-center gap-1 font-bold text-accent transition-all duration-300 group-hover:gap-1.5">
            <span>Read More</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </div>
        </div>
      </div>
    </div>
  );
}
