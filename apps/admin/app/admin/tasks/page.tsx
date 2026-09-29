import type { ServiceRowType } from "@bilacert/contracts/service";
import type { TaskType } from "@bilacert/contracts/task";
import { getPublishedServices } from "@bilacert/supabase/Queries/services";
import {
  getAssignableUsers,
  getSubmissionOptions,
  getTasks,
  type TaskOption,
} from "@bilacert/supabase/Queries/tasks";
import type { Viewport } from "next";
import TasksClient from "./TasksClient";

export const metadata = {
  title: "Task Management | Bilacert Admin Pro",
  description: "Plan, assign and track internal work.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1f2937" },
  ],
};
export default async function AdminTasksPage() {
  let tasks: TaskType[] = [];
  let services: ServiceRowType[] = [];
  let users: TaskOption[] = [];
  let submissions: TaskOption[] = [];
  let loadError: string | null = null;

  try {
    [tasks, services, users, submissions] = await Promise.all([
      getTasks(),
      getPublishedServices(),
      getAssignableUsers(),
      getSubmissionOptions(),
    ]);
  } catch (error) {
    loadError = error instanceof Error ? error.message : String(error);
  }

  return (
    <TasksClient
      initialTasks={tasks}
      services={services}
      users={users}
      submissions={submissions}
      loadError={loadError}
    />
  );
}
