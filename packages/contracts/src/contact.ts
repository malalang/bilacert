import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;

export interface ContactType {
  id: string;
  name?: string;
  email: string;
  phone?: string;
  service?: string;
  message?: string;
  submittedAt: string;
}
