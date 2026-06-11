import type { BlogPost } from "@bilacert/shared/types";
import { getAllPublishedBlogPosts } from "@bilacert/supabase/Queries/blogs";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Stay updated with the latest ICASA and NRCS compliance news, guides, and insights. Expert articles on type approvals, licensing, and regulatory changes in South Africa.",
  keywords: [
    "ICASA compliance blog",
    "NRCS LOA news",
    "compliance articles South Africa",
    "type approval guides",
    "licensing updates",
    "regulatory compliance news",
    "ICASA NRCS insights",
  ],
  openGraph: {
    title: "Blog - ICASA & NRCS Compliance Insights",
    description:
      "Stay updated with the latest ICASA and NRCS compliance news, guides, and insights. Expert articles on type approvals, licensing, and regulatory changes in South Africa.",
    url: "https://bilacert.co.za/blog",
    type: "website",
  },
  alternates: {
    canonical: "https://bilacert.co.za/blog",
  },
};

export const revalidate = 0;

const BlogCard = ({ post }: { post: BlogPost }) => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg border border-gray-100">
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
            post.featured_image ||
            `https://picsum.photos/seed/${post.id}/600/400`
          }
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-4 left-4">
          {post.category && (
            <Badge className="bg-accent hover:bg-accent-light text-white border-none shadow-sm">
              {post.category}
            </Badge>
          )}
        </div>
      </div>

      <div className="flex flex-col flex-grow p-6">
        <h3 className="mb-2 text-xl font-bold text-primary group-hover:text-accent transition-colors duration-200 line-clamp-2">
          {post.title}
        </h3>
        <p className="mb-4 text-sm text-gray-600 line-clamp-3 flex-grow leading-relaxed">
          {post.excerpt}
        </p>

        <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <Calendar className="h-3.5 w-3.5 text-accent" />
            <span>
              {new Date(post.created_at).toLocaleDateString("en-ZA", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>
          <div className="flex items-center gap-1 text-accent font-bold group-hover:gap-1.5 transition-all duration-300">
            <span>Read More</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default async function BlogPage() {
  const categories = [
    "All",
    "ICASA Approvals",
    "NRCS Compliance",
    "Licensing",
    "Telecom Licensing",
    "Business Strategy",
    "Marine Compliance",
  ];

  const blogPosts = await getAllPublishedBlogPosts();

  if (blogPosts.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center py-20 bg-secondary-gray">
        <div className="text-center px-4">
          <h2 className="text-2xl font-bold text-primary mb-2">
            No blog posts found
          </h2>
          <p className="text-gray-600">Check back later for more updates.</p>
        </div>
      </div>
    );
  }

  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative text-white py-20 md:py-24 lg:py-32 overflow-hidden">
        <Image
          src="/herosetion/Blog.jpg"
          alt="Compliance Insights & Updates"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/70 backdrop-blur-[1px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="bg-accent text-white mb-6 px-4 py-1.5 text-xs uppercase tracking-wider font-bold border-none">
              Insights Hub
            </Badge>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Compliance Insights <br className="hidden md:block" /> & Updates
            </h1>
            <p className="text-lg md:text-xl text-gray-100 max-w-2xl leading-relaxed">
              Stay informed with the latest compliance news, regulatory updates,
              and expert insights to keep your business ahead of the curve.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 md:py-20 bg-secondary-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 group">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 sm:h-80 md:h-96 lg:h-full min-h-[300px] overflow-hidden">
                  <Image
                    src={
                      featuredPost.featured_image ||
                      `https://picsum.photos/seed/${featuredPost.id}/600/400`
                    }
                    alt={featuredPost.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent lg:hidden" />
                  <div className="absolute top-6 left-6">
                    <Badge className="bg-accent text-white px-4 py-1.5 border-none shadow-lg">
                      Featured Article
                    </Badge>
                  </div>
                </div>
                <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4 text-accent" />
                      {new Date(featuredPost.created_at).toLocaleDateString(
                        "en-ZA",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        },
                      )}
                    </span>
                    {featuredPost.read_time && (
                      <>
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                        <span className="flex items-center gap-1.5">
                          <Clock className="h-4 w-4 text-accent" />
                          {featuredPost.read_time}
                        </span>
                      </>
                    )}
                  </div>

                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="block group"
                  >
                    <h2 className="text-2xl md:text-4xl font-extrabold text-primary mb-6 leading-tight group-hover:text-accent transition-colors duration-200">
                      {featuredPost.title}
                    </h2>
                  </Link>

                  <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed line-clamp-4">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-6 mt-auto">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <User className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-primary">
                          {featuredPost.author_name || "Bilacert Team"}
                        </p>
                        <p className="text-xs text-gray-500">
                          Compliance Expert
                        </p>
                      </div>
                    </div>

                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className="inline-flex items-center bg-accent text-white px-8 py-3 rounded-full font-bold hover:bg-accent-light transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                    >
                      Read Full Article
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">
                Latest Articles
              </h2>
              <p className="text-lg text-gray-600">
                Expert insights and practical guidance to help you navigate
                South African compliance requirements with ease.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.slice(0, 5).map((category) => (
                <button
                  key={category}
                  type="button"
                  className="px-4 py-2 rounded-full text-xs md:text-sm font-medium border border-gray-200 text-gray-600 hover:border-accent hover:text-accent transition-all whitespace-nowrap"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Posts Grid */}
          {regularPosts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
              {regularPosts.map((post: BlogPost) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
              <p className="text-gray-500">More articles coming soon.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 md:py-28 bg-primary relative overflow-hidden">
        {/* Background Pattern/Overlay */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Badge className="bg-accent/20 text-accent-light border-accent/30 mb-6 px-4 py-1 border shadow-sm">
            Newsletter
          </Badge>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-white leading-tight">
            Stay Ahead of Regulatory Changes
          </h2>
          <p className="text-lg md:text-xl mb-10 text-gray-300 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest compliance insights,
            regulatory updates, and expert guidance delivered straight to your
            inbox.
          </p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
              required
            />
            <button
              type="submit"
              className="bg-accent text-white px-8 py-4 rounded-full font-bold hover:bg-accent-light transition-all duration-300 shadow-lg hover:shadow-accent/20"
            >
              Subscribe Now
            </button>
          </form>
          <p className="mt-6 text-sm text-gray-400">
            Join 500+ businesses receiving our weekly compliance updates.
          </p>
        </div>
      </section>
    </div>
  );
}
