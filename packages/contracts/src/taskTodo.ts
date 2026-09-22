import { z } from "zod";

export const taskTodoSchema = z.object({
  id: z.string(),
  taskId: z.string(),
  title: z.string().min(1, "Checklist item title is required"),
  done: z.boolean().default(false),
  createdAt: z.string().nullable(),
  updatedAt: z.string().nullable(),
});

export type TaskTodoType = z.infer<typeof taskTodoSchema>;

export const taskTodoInputSchema = taskTodoSchema.omit({
  id: true,
  taskId: true,
  createdAt: true,
  updatedAt: true,
});

export type TaskTodoInputType = z.infer<typeof taskTodoInputSchema>;

export const taskTodoUpdateInputSchema = z.object({
  title: z.string().min(1, "Checklist item title is required").optional(),
  done: z.boolean().optional(),
});

export type TaskTodoUpdateInputType = z.infer<typeof taskTodoUpdateInputSchema>;
