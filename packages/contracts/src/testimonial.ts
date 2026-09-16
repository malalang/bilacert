import { z } from "zod";

export const testimonialSchema = z.object({
  id: z.string().optional(),
  postUrl: z.string().url("Please enter a valid Facebook post URL"),
  createdAt: z.string().optional(),
});

export type TestimonialInput = z.infer<typeof testimonialSchema>;
export type TestimonialType = TestimonialInput & {
  id: string;
  createdAt: string;
};
