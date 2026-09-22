"use server";

import type { ActionResult } from "@bilacert/contracts/actionResult";
import {
  type TaskStatus,
  taskInputSchema,
  taskUpdateInputSchema,
} from "@bilacert/contracts/task";
import {
  createTask,
  deleteTask,
  updateTask,
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
