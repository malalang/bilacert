import { z } from "zod";

export const pricingPlanSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().default(""),
  price: z.string().min(1, "Price is required"),
  features: z.string().default(""),
  popular: z.boolean().default(false),
});

export const processStepSchema = z.object({
  step: z.coerce.string().min(1, "Step number is required"),
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
});

export const successStorySchema = z.object({
  scenario: z.string().optional(),
  challenge: z.string().optional(),
  solution: z.string().optional(),
  result: z.string().optional(),
});

export const serviceSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(1, "Title is required"),
  slug: z.string().min(1, "Slug is required"),
  href: z
    .string()
    .min(1, "URL (href) is required")
    .refine((val) => val.startsWith("/"), {
      message: "Href must start with /",
    }),
  category: z.string().min(1, "Category is required"),
  description: z.string().min(1, "Description is required"),
  shortDescription: z.string().optional(),
  icon: z.string().optional(),
  orderIndex: z.coerce.number().optional(),
  content: z.string().optional(),
  features: z.string().optional(),
  requirements: z.string().optional(),
  includes: z.array(z.string()).default([]),
  published: z.boolean().default(false),
  featured: z.boolean().default(false),
  processingTime: z.string().optional(),
  pricing: z.coerce.number().optional(),
  image: z.string().optional(),
  thumbnail: z.string().optional(),
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional(),
  seoKeywords: z.string().optional(),
  pricingPlans: z.array(pricingPlanSchema).default([]),
  processSteps: z.array(processStepSchema).default([]),
  successStory: successStorySchema.optional(),
});

export type Service = z.infer<typeof serviceSchema>;
export type ServiceFormValues = z.infer<typeof serviceSchema>;
export type PricingPlan = z.infer<typeof pricingPlanSchema>;
export type ProcessStep = z.infer<typeof processStepSchema>;
export type SuccessStory = z.infer<typeof successStorySchema>;
