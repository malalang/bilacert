import { z } from "zod";

export const blogSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(1, "Title is required"),
  slug: z.string().min(1, "Slug is required"),
  authorName: z.string().optional(),
  readTime: z.string().optional(),
  category: z.string().optional(),
  tags: z.string().optional(),
  excerpt: z.string().optional(),
  content: z.string().min(1, "Content is required."),
  published: z.boolean(),
  featuredImage: z
    .string()
    .url({ message: "Please enter a valid URL." })
    .optional()
    .or(z.literal("")),
  thumbnail: z
    .string()
    .url({ message: "Please enter a valid URL." })
    .optional()
    .or(z.literal("")),
  featured: z.boolean(),
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional(),
  seoKeywords: z.string().optional(),
});

export type BlogFormValues = z.infer<typeof blogSchema>;
export type BlogContract = BlogFormValues;
