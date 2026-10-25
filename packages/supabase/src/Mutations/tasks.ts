"use server";

import type {
  TaskInputType,
  TaskUpdateInputType,
} from "@bilacert/contracts/task";
import type {
  TaskTodoInputType,
  TaskTodoUpdateInputType,
} from "@bilacert/contracts/taskTodo";
import { requireAdminUser } from "../auth";
import type { Database } from "../supabaseType";

type TaskInsert = Database["public"]["Tables"]["tasks"]["Insert"];
type TaskUpdate = Database["public"]["Tables"]["tasks"]["Update"];
type TaskRow = Database["public"]["Tables"]["tasks"]["Row"];

type TaskTodoInsert = Database["public"]["Tables"]["task_todos"]["Insert"];
type TaskTodoUpdate = Database["public"]["Tables"]["task_todos"]["Update"];
type TaskTodoRow = Database["public"]["Tables"]["task_todos"]["Row"];

function toDbInsert(data: TaskInputType): TaskInsert {
  return {
    title: data.title,
    description: data.description,
    status: data.status,
    priority: data.priority,
    category: data.category,
    assignedTo: data.assignedTo,
    dueAt: data.dueAt,
    serviceId: data.serviceId,
    submissionId: data.submissionId,
  };
}

function toDbUpdate(data: TaskUpdateInputType): TaskUpdate {
  const write: TaskUpdate = {};
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

export async function createTask(data: TaskInputType): Promise<TaskRow> {
  const supabase = await requireAdminUser();
  const { data: task, error } = await supabase
    .from("tasks")
    .insert(toDbInsert(data))
    .select()
    .single();

  if (error) throw new Error(error.message);
  if (!task) throw new Error("Task not created");
  return task;
}

export async function updateTask(
  id: string,
  data: TaskUpdateInputType,
): Promise<TaskRow> {
  const supabase = await requireAdminUser();
  const { data: task, error } = await supabase
    .from("tasks")
    .update({ ...toDbUpdate(data), updatedAt: new Date().toISOString() })
    .eq("id", id)
    .select()
    .single();

  if (error) throw new Error(error.message);
  if (!task) throw new Error("Task not found");
  return task;
}

export async function deleteTask(id: string): Promise<void> {
  const supabase = await requireAdminUser();
  const { error } = await supabase.from("tasks").delete().eq("id", id);

  if (error) throw new Error(error.message);
}

// --- TASK TODO MUTATIONS ---
// The applied remote `task_todos` table uses camelCase column names.

export async function createTaskTodo(
  taskId: string,
  data: TaskTodoInputType,
): Promise<TaskTodoRow> {
  const supabase = await requireAdminUser();
  const { data: todo, error } = await supabase
    .from("task_todos")
    .insert({
      taskId,
      title: data.title,
      done: data.done ?? false,
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
): Promise<TaskTodoRow> {
  const supabase = await requireAdminUser();
  const write: TaskTodoUpdate = {
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

export async function deleteTaskTodo(id: string): Promise<void> {
  const supabase = await requireAdminUser();
  const { error } = await supabase.from("task_todos").delete().eq("id", id);

  if (error) throw new Error(error.message);
}
