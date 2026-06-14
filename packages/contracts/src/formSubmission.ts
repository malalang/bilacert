import { z } from "zod";

export const submissionStatuses = [
  "pending",
  "in-progress",
  "completed",
  "rejected",
  "archived",
] as const;

export const submissionStatusSchema = z.enum(submissionStatuses);

export type SubmissionStatus = z.infer<typeof submissionStatusSchema>;

export const formTypes = [
  "service-inquiry",
  "contact",
  "class-ecs-ecns",
  "icasa-type-approvals",
  "license-exemptions",
  "nrcs-loa",
  "radio-dealer",
  "ski-boat-vhf",
] as const;

export const formTypeSchema = z.enum(formTypes);

export type FormType = z.infer<typeof formTypeSchema>;

export const submissionSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email(),
  phone: z.string().optional(),
  company: z.string().optional(),
  industry: z.string().optional(),
  serviceName: z.string().optional(),
  status: submissionStatusSchema,
  details: z
    .string()
    .optional()
    .refine(
      (val) => {
        if (!val || val.trim() === "") return true;
        try {
          JSON.parse(val);
          return true;
        } catch (_e) {
          return false;
        }
      },
      { message: "Details must be a valid JSON object." },
    ),
  notes: z.string().optional(),
  contactOwner: z.string().optional(),
});

export type SubmissionFormValues = z.infer<typeof submissionSchema>;

export const formSubmissionPayloadSchema = z.object({
  fullName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  companyName: z.string().optional(),
  serviceType: z.string().optional(),
  formType: formTypeSchema,
  serviceId: z.string().optional(),
  message: z.string().min(1),
  industry: z.string().optional(),
  details: z.record(z.string(), z.unknown()).optional(),
  serviceName: z.string().optional(),
});

export type FormSubmissionPayload = z.infer<typeof formSubmissionPayloadSchema>;
