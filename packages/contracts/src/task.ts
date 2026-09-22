import { z } from "zod";

export const taskStatusSchema = z.enum([
  "pending",
  "in_progress",
  "completed",
  "cancelled",
]);

export type TaskStatus = z.infer<typeof taskStatusSchema>;

export const taskPrioritySchema = z.enum(["low", "normal", "high", "urgent"]);

export type TaskPriority = z.infer<typeof taskPrioritySchema>;

export const taskSchema = z.object({
  id: z.string(),
  title: z.string().min(1, "Title is required"),
  description: z.string().nullable(),
  status: taskStatusSchema,
  priority: taskPrioritySchema,
  category: z.string().nullable(),
  assignedTo: z.string().nullable(),
  dueAt: z.string().nullable(),
  serviceId: z.string().nullable(),
  submissionId: z.string().nullable(),
  serviceTitle: z.string().nullable().optional(),
  assigneeName: z.string().nullable().optional(),
  submissionFullName: z.string().nullable().optional(),
  createdAt: z.string().nullable(),
  updatedAt: z.string().nullable(),
  completedAt: z.string().nullable(),
});

export type TaskType = z.infer<typeof taskSchema>;

export const taskInputSchema = taskSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  completedAt: true,
  serviceTitle: true,
  assigneeName: true,
  submissionFullName: true,
});

export type TaskInputType = z.infer<typeof taskInputSchema>;

export const taskUpdateInputSchema = taskInputSchema.partial().extend({
  completedAt: z.string().nullable().optional(),
});

export type TaskUpdateInputType = z.infer<typeof taskUpdateInputSchema>;
