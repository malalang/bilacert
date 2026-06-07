import { format } from "date-fns";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Facebook,
  Folder,
  Linkedin,
  Tag,
  Twitter,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RelatedPosts, StickyShare, TableOfContents } from "@/components/blog";
import {
  getAllPublishedBlogSlugs,
  getBlogPostBySlug,
  getBlogPostsByCategory,

} from "@bilacert/supabase";
import type { Metadata } from "next";
import { ViewTracker } from "@/components/blog/view";

export const revalidate = 0;

export async function generateStaticParams() {
  const slugs = await getAllPublishedBlogSlugs();
  return slugs.map((item) => ({ slug: item.slug }));
}

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found - Bilacert",
    };
  }

  return {
    title: post.seo_title || `${post.title} - Bilacert`,
    description: post.seo_description || post.excerpt,
    keywords: post.seo_keywords || [
      post.title.toLowerCase(),
      ...(post.category?.split(", ").map((c: string) => c.toLowerCase()) || []),
      "blog",
      "compliance",
      "South Africa",
    ],
    openGraph: {
      title: post.seo_title || post.title,
      description: post.seo_description || post.excerpt,
      url: `https://bilacert.co.za/blog/${slug}`,
      type: "article",
      images: post.featured_image ? [{ url: post.featured_image }] : [],
    },
    alternates: {
      canonical: `https://bilacert.co.za/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = post.category
    ? await getBlogPostsByCategory(post.category, 3)
    : [];

  return (
    <div className="min-h-screen">
      <ViewTracker slug={slug} />
      <StickyShare />
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/blog"
            className="inline-flex items-center text-primary hover:text-primary-light transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>

      <section className="py-12 bg-secondary-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {post.category && (
              <div className="inline-block bg-accent text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                {post.category}
              </div>
            )}
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              {post.title}
            </h1>
            {post.excerpt && (
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                {post.excerpt}
              </p>
            )}
            <div className="flex items-center justify-center space-x-6 text-gray-600">
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span>{post.author_name}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>
                  {post.created_at && format(new Date(post.created_at), "PP")}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>{post.read_time}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {post.featured_image && (
        <div className="relative h-64 md:h-96 max-w-5xl mx-auto my-8 rounded-lg overflow-hidden">
          <Image
            src={post.featured_image}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-row-reverse">
          <div className="w-1/4 pl-8 sticky top-24 self-start">
            <TableOfContents content={post.content || ""} />
          </div>
          <div className="w-3/4">

            <div className="mt-6 border-t pt-6 max-w-[256] sm:max-w-lg  md:max-w-xl lg:max-w-3xl mx-auto">

              <article
                className="prose prose-slate prose-indigo text-sm
                                       break-words overflow-wrap-anywhere
                                       prose-headings:font-bold prose-headings:tracking-tight
                                       prose-a:text-indigo-600 prose-img:rounded-2xl prose-img:shadow-lg
                                       [&_iframe]:w-full [&_iframe]:aspect-video [&_iframe]:rounded-xl 
          [&>h1]:text-3xl [&>h1]:font-bold [&>h1]:mb-4 
          [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mb-3 
          [&>h3]:text-xl [&>h3]:font-bold [&>h3]:mb-2 
          [&>p]:mb-4 [&>p]:leading-relaxed [&>p]:text-slate-700
          [&>ul]:list-disc [&>ul]:ml-6 [&>ul]:my-4
          [&>img]:rounded-lg"
                dangerouslySetInnerHTML={{
                  __html:
                    post.content ||
                    '<p class="text-slate-400 italic">No content to display yet...</p>',
                }}
              />
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8 lg:p-12 mt-8">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Folder className="h-5 w-5 text-gray-600" />
                  <span className="text-gray-600">{post.category}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Tag className="h-5 w-5 text-gray-600" />
                  {/* {(post.tags || []).map((tag: string) => (
                                <span key={tag} className="text-gray-600">{tag}</span>
                            ))} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 md:py-12 bg-secondary-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Reduced padding on mobile (p-5) and increased it on larger screens (md:p-8) */}
          <div className="bg-white rounded-xl shadow-sm p-5 md:p-8 text-center">
            <h3 className="text-xl md:text-2xl font-bold text-primary mb-4">
              Found this helpful?
            </h3>

            {/* Changed to a vertical grid on mobile (grid grid-cols-1 gap-3) 
        and switched back to a flex row on medium screens (md:flex md:space-x-4)
      */}
            <div className="grid grid-cols-1 gap-3 md:flex md:justify-center md:space-x-4 md:gap-0 mb-8">
              <button
                type="button"
                className="flex items-center justify-center space-x-2 bg-blue-400 text-white px-4 py-2.5 rounded-lg hover:bg-blue-500 w-full md:w-auto"
              >
                <Twitter className="h-5 w-5" />
                <span>Twitter</span>
              </button>
              <button
                type="button"
                className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-4 py-2.5 rounded-lg hover:bg-blue-700 w-full md:w-auto"
              >
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn</span>
              </button>
              <button
                type="button"
                className="flex items-center justify-center space-x-2 bg-blue-800 text-white px-4 py-2.5 rounded-lg hover:bg-blue-900 w-full md:w-auto"
              >
                <Facebook className="h-5 w-5" />
                <span>Facebook</span>
              </button>
            </div>

            <div className="border-t pt-8">
              {/* Added w-full on mobile and md:w-auto to make the CTA thumb-friendly */}
              <Link
                href="/contact"
                className="bg-primary text-white px-6 py-3 rounded-lg font-semibold inline-block w-full md:w-auto text-center"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {relatedPosts.length > 0 && <RelatedPosts posts={relatedPosts} />}
    </div>
  );
}
