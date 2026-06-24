import { format } from "date-fns";
import { Calendar, Clock, Folder, User } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import HeroSection from "@/components/HeroSection";
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
  const heroHighlights = [
    {
      title: authorName,
      description: "Compliance insight author",
      icon: <User className="h-6 w-6 text-white" />,
    },
    {
      title: publishedDate,
      description: "Published date",
      icon: <Calendar className="h-6 w-6 text-white" />,
    },
    {
      title: post.readTime || "Quick read",
      description: "Estimated reading time",
      icon: <Clock className="h-6 w-6 text-white" />,
    },
  ];

  return (
    <div className="min-h-screen">
      <ViewTracker slug={slug} />
      <StickyShare />

      <HeroSection
        imageSrc={post.featuredImage || "/herosetion/Blog.jpg"}
        imageAlt={post.title}
        eyebrow={post.category || "Bilacert Insight"}
        title={post.title}
        description={post.excerpt || "Expert compliance guidance from Bilacert."}
        actions={[
          { label: "Get Free Consultation", href: "/contact" },
          { label: "View All Articles", href: "/blog", variant: "secondary" },
        ]}
        highlights={heroHighlights}
      />

      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <article
            className="prose prose-slate prose-indigo mx-auto max-w-none text-sm
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
