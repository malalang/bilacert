import { format } from "date-fns";
import { Calendar, Clock, Folder, User } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import { StickyShare } from "@/components/blog/StickyShare";
import { ViewTracker } from "@/components/blog/view";
import {
  getCachedBlogBySlug,
  getCachedBlogPostsByCategory,
  getCachedPublishedBlogSlugs,
} from "../../_lib/cached-public-data";

export async function generateStaticParams() {
  const slugs = await getCachedPublishedBlogSlugs();
  return slugs.map((item) => ({ slug: item.slug }));
}

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

function normalizeArticleHtml(html: string | null | undefined) {
  if (!html) return '<p class="text-slate-400 italic">No content to display yet...</p>';

  return html
    .replace(/<br\s*\/?>(\s*)/gi, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/([A-Za-z])[-‐‑‒–—]\s+([A-Za-z])/g, "$1$2")
    .replace(/\s{2,}/g, " ")
    .trim();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getCachedBlogBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found - Bilacert",
    };
  }

  return {
    title: post.seoTitle || `${post.title} - Bilacert`,
    description: post.seoDescription || post.excerpt,
    keywords: post.seoKeywords || [
      post.title.toLowerCase(),
      ...(post.category?.split(", ").map((c: string) => c.toLowerCase()) || []),
      "blog",
      "compliance",
      "South Africa",
    ],
    openGraph: {
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.excerpt,
      url: `https://bilacert.co.za/blog/${slug}`,
      type: "article",
      images: post.featuredImage ? [{ url: post.featuredImage }] : [],
    },
    alternates: {
      canonical: `https://bilacert.co.za/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getCachedBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = post.category
    ? await getCachedBlogPostsByCategory(post.category, 3)
    : [];
  const publishedDate = post.createdAt
    ? format(new Date(post.createdAt), "PP")
    : "Published insight";
  const authorName = post.authorName || "Bilacert Team";

  return (
    <div className="min-h-screen bg-white">
      <ViewTracker slug={slug} />
      <StickyShare />

      <section className="bg-secondary-gray py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {post.category && (
            <p className="mb-4 text-sm font-bold uppercase tracking-wider text-accent">
              {post.category}
            </p>
          )}
          <h1 className="mb-6 max-w-4xl text-3xl font-extrabold leading-tight tracking-tight text-primary md:text-5xl">
            {post.title}
          </h1>
          {post.excerpt && (
            <p className="mb-8 max-w-3xl text-lg leading-relaxed text-gray-600 md:text-xl">
              {post.excerpt}
            </p>
          )}
          <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-gray-600">
            <span className="inline-flex items-center gap-2">
              <User className="h-4 w-4 text-accent" />
              {authorName}
            </span>
            <span className="inline-flex items-center gap-2">
              <Calendar className="h-4 w-4 text-accent" />
              {publishedDate}
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4 text-accent" />
              {post.readTime || "Quick read"}
            </span>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <article
            className="bilacert-article"
            dangerouslySetInnerHTML={{
              __html: normalizeArticleHtml(post.content),
            }}
          />

          {post.category && (
            <div className="mt-10 rounded-xl bg-white p-6 shadow-sm shadow-black/5">
              <div className="flex items-center gap-2 text-gray-600">
                <Folder className="h-5 w-5" />
                <span>{post.category}</span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 md:py-12 bg-secondary-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm p-5 md:p-8 text-center">
            <h3 className="text-xl md:text-2xl font-bold text-primary mb-4">
              Found this helpful?
            </h3>

            <div className="grid grid-cols-1 gap-3 md:flex md:justify-center md:space-x-4 md:gap-0 mb-8">
              <button
                type="button"
                className="flex items-center justify-center space-x-2 bg-blue-400 text-white px-4 py-2.5 rounded-lg hover:bg-blue-500 w-full md:w-auto"
              >
                <FaTwitter className="h-5 w-5" />
                <span>Twitter</span>
              </button>
              <button
                type="button"
                className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-4 py-2.5 rounded-lg hover:bg-blue-700 w-full md:w-auto"
              >
                <FaLinkedin className="h-5 w-5" />
                <span>LinkedIn</span>
              </button>
              <button
                type="button"
                className="flex items-center justify-center space-x-2 bg-blue-800 text-white px-4 py-2.5 rounded-lg hover:bg-blue-900 w-full md:w-auto"
              >
                <FaFacebook className="h-5 w-5" />
                <span>Facebook</span>
              </button>
            </div>

            <div className="border-t pt-8">
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
