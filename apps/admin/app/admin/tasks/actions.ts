"use server";

import type { ActionResult } from "@bilacert/contracts/actionResult";
import {
  type TaskStatus,
  taskInputSchema,
  taskUpdateInputSchema,
} from "@bilacert/contracts/task";
import type { TaskTodoType } from "@bilacert/contracts/taskTodo";
import {
  taskTodoInputSchema,
  taskTodoUpdateInputSchema,
} from "@bilacert/contracts/taskTodo";
import {
  createTask,
  createTaskTodo,
  deleteTask,
  deleteTaskTodo,
  updateTask,
  updateTaskTodo,
} from "@bilacert/supabase/Mutations/tasks";
import { revalidatePath } from "next/cache";

function errorMessage(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}

export async function createTaskAction(data: unknown): Promise<ActionResult> {
  const parsed = taskInputSchema.safeParse(data);
  if (!parsed.success) {
    return { ok: false, error: parsed.error.message };
  }

  try {
    await createTask(parsed.data);
  } catch (error) {
    return { ok: false, error: `Database error: ${errorMessage(error)}` };
  }

  revalidatePath("/admin/tasks");
  return { ok: true, message: "Task created successfully" };
}

export async function updateTaskAction(
  id: string,
  data: unknown,
): Promise<ActionResult> {
  const parsed = taskUpdateInputSchema.safeParse(data);
  if (!parsed.success) {
    return { ok: false, error: parsed.error.message };
  }

  const updateData = parsed.data;
  if (updateData.status === "completed") {
    updateData.completedAt = new Date().toISOString();
  } else if (updateData.status) {
    updateData.completedAt = null;
  }

  try {
    await updateTask(id, updateData);
  } catch (error) {
    return { ok: false, error: `Database error: ${errorMessage(error)}` };
  }

  revalidatePath("/admin/tasks");
  return { ok: true, message: "Task updated successfully" };
}

export async function setTaskStatusAction(
  id: string,
  status: TaskStatus,
): Promise<ActionResult> {
  return updateTaskAction(id, { status });
}

export async function deleteTaskAction(id: string): Promise<ActionResult> {
  try {
    await deleteTask(id);
  } catch (error) {
    return { ok: false, error: `Database error: ${errorMessage(error)}` };
  }

  revalidatePath("/admin/tasks");
  return { ok: true, message: "Task deleted successfully" };
}

// --- TASK TODO ACTIONS ---

export async function createTaskTodoAction(
  taskId: string,
  data: unknown,
): Promise<ActionResult<TaskTodoType>> {
  const parsed = taskTodoInputSchema.safeParse(data);
  if (!parsed.success) {
    return { ok: false, error: parsed.error.message };
  }

  try {
    const data = await createTaskTodo(taskId, parsed.data);
    revalidatePath("/admin/tasks");
    return { ok: true, message: "Checklist item created", data };
  } catch (error) {
    return { ok: false, error: `Database error: ${errorMessage(error)}` };
  }
}

export async function updateTaskTodoAction(
  id: string,
  data: unknown,
): Promise<ActionResult<TaskTodoType>> {
  const parsed = taskTodoUpdateInputSchema.safeParse(data);
  if (!parsed.success) {
    return { ok: false, error: parsed.error.message };
  }

  try {
    const data = await updateTaskTodo(id, parsed.data);
    revalidatePath("/admin/tasks");
    return { ok: true, message: "Checklist item updated", data };
  } catch (error) {
    return { ok: false, error: `Database error: ${errorMessage(error)}` };
  }
}

export async function deleteTaskTodoAction(id: string): Promise<ActionResult> {
  try {
    await deleteTaskTodo(id);
  } catch (error) {
    return { ok: false, error: `Database error: ${errorMessage(error)}` };
  }

  revalidatePath("/admin/tasks");
  return { ok: true, message: "Checklist item removed" };
}
