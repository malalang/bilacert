"use server";

import type {
  TaskInputType,
  TaskStatus,
  TaskUpdateInputType,
} from "@bilacert/contracts/task";
import { requireAdminUser } from "../auth";
import { CACHE_TAGS, mutationResult } from "../cache";

interface TaskDbRow {
  id: string;
  title: string;
  description: string | null;
  status: TaskStatus;
  priority: string;
  category: string | null;
  assignedTo: string | null;
  dueAt: string | null;
  serviceId: string | null;
  submissionId: string | null;
  createdAt: string | null;
  updatedAt: string | null;
  completedAt: string | null;
}

type MutationTaskClient = {
  from: (table: string) => {
    insert: (values: Record<string, unknown>) => {
      select: () => {
        single: () => Promise<{
          data: TaskDbRow | null;
          error: { message: string } | null;
        }>;
      };
    };
    update: (values: Record<string, unknown>) => {
      eq: (
        column: string,
        value: string,
      ) => {
        select: () => {
          single: () => Promise<{
            data: TaskDbRow | null;
            error: { message: string } | null;
          }>;
        };
      };
    };
    delete: () => {
      eq: (
        column: string,
        value: string,
      ) => Promise<{
        data: unknown;
        error: { message: string } | null;
      }>;
    };
  };
};

function toDbWrite(
  data: Partial<TaskInputType> & { completedAt?: string | null },
) {
  const write: Record<string, unknown> = {};
  if (data.title !== undefined) write.title = data.title;
  if (data.description !== undefined) write.description = data.description;
  if (data.status !== undefined) write.status = data.status;
  if (data.priority !== undefined) write.priority = data.priority;
  if (data.category !== undefined) write.category = data.category;
  if (data.assignedTo !== undefined) write.assignedTo = data.assignedTo;
  if (data.dueAt !== undefined) write.dueAt = data.dueAt;
  if (data.serviceId !== undefined) write.serviceId = data.serviceId;
  if (data.submissionId !== undefined) write.submissionId = data.submissionId;
  if (data.completedAt !== undefined) write.completedAt = data.completedAt;
  return write;
}

const taskRevalidation = {
  tags: [CACHE_TAGS.tasks],
  mode: "immediate" as const,
};

export async function createTask(data: TaskInputType) {
  const supabase = (await requireAdminUser()) as unknown as MutationTaskClient;
  const { data: task, error } = await supabase
    .from("tasks")
    .insert(toDbWrite(data))
    .select()
    .single();

  if (error) throw new Error(error.message);
  return mutationResult(task, taskRevalidation);
}

export async function updateTask(id: string, data: TaskUpdateInputType) {
  const supabase = (await requireAdminUser()) as unknown as MutationTaskClient;
  const { data: task, error } = await supabase
    .from("tasks")
    .update({ ...toDbWrite(data), updatedAt: new Date().toISOString() })
    .eq("id", id)
    .select()
    .single();

  if (error) throw new Error(error.message);
  return mutationResult(task, taskRevalidation);
}

export async function deleteTask(id: string) {
  const supabase = (await requireAdminUser()) as unknown as MutationTaskClient;
  const { error } = await supabase.from("tasks").delete().eq("id", id);

  if (error) throw new Error(error.message);
  return mutationResult(null, taskRevalidation);
}
