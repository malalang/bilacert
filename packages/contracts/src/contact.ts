import { z } from "zod";

export const contactSchema = z.object({
  id: z.string(),
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().optional(),
  submittedAt: z.string(),
});

export const contactInputSchema = contactSchema.pick({
  name: true,
  email: true,
  phone: true,
  service: true,
  message: true,
});

export type ContactType = z.infer<typeof contactSchema>;
export type ContactInput = z.infer<typeof contactInputSchema>;