"use server";

import type {
  TaskInputType,
  TaskStatus,
  TaskUpdateInputType,
} from "@bilacert/contracts/task";
import type {
  TaskTodoInputType,
  TaskTodoType,
  TaskTodoUpdateInputType,
} from "@bilacert/contracts/taskTodo";
import { requireAdminUser } from "../auth";

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

export async function createTask(data: TaskInputType) {
  const supabase = (await requireAdminUser()) as unknown as MutationTaskClient;
  const { data: task, error } = await supabase
    .from("tasks")
    .insert(toDbWrite(data))
    .select()
    .single();

  if (error) throw new Error(error.message);
  return task;
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
  return task;
}

export async function deleteTask(id: string) {
  const supabase = (await requireAdminUser()) as unknown as MutationTaskClient;
  const { error } = await supabase.from("tasks").delete().eq("id", id);

  if (error) throw new Error(error.message);
}

// --- TASK TODO MUTATIONS ---
// The applied remote `task_todos` table uses camelCase column names.

interface TaskTodoMutationClient {
  from: (table: string) => {
    insert: (values: Record<string, unknown>) => {
      select: () => {
        single: () => Promise<{
          data: TaskTodoType | null;
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
            data: TaskTodoType | null;
            error: { message: string } | null;
          }>;
        };
      };
    };
    delete: () => {
      eq: (
        column: string,
        value: string,
      ) => Promise<{ error: { message: string } | null }>;
    };
  };
}

export async function createTaskTodo(taskId: string, data: TaskTodoInputType) {
  const supabase =
    (await requireAdminUser()) as unknown as TaskTodoMutationClient;
  const { data: todo, error } = await supabase
    .from("task_todos")
    .insert({
      taskId,
      title: data.title,
      done: data.done,
    })
    .select()
    .single();

  if (error) throw new Error(error.message);
  if (!todo) throw new Error("Checklist item not found");
  return todo;
}

export async function updateTaskTodo(
  id: string,
  data: TaskTodoUpdateInputType,
) {
  const supabase =
    (await requireAdminUser()) as unknown as TaskTodoMutationClient;
  const write: Record<string, unknown> = {
    updatedAt: new Date().toISOString(),
  };
  if (data.title !== undefined) write.title = data.title;
  if (data.done !== undefined) write.done = data.done;

  const { data: todo, error } = await supabase
    .from("task_todos")
    .update(write)
    .eq("id", id)
    .select()
    .single();

  if (error) throw new Error(error.message);
  if (!todo) throw new Error("Checklist item not found");
  return todo;
}

export async function deleteTaskTodo(id: string) {
  const supabase =
    (await requireAdminUser()) as unknown as TaskTodoMutationClient;
  const { error } = await supabase.from("task_todos").delete().eq("id", id);

  if (error) throw new Error(error.message);
}
