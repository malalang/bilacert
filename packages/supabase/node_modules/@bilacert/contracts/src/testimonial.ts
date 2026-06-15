import { z } from "zod";

export const testimonialSchema = z.object({
  id: z.string().optional(),
  postUrl: z.string().url("Please enter a valid Facebook post URL"),
  createdAt: z.string().optional(),
});

export type TestimonialContract = z.infer<typeof testimonialSchema>;
