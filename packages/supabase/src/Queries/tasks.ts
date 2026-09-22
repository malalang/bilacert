import type { TaskType } from "@bilacert/contracts/task";
import type { TaskTodoType } from "@bilacert/contracts/taskTodo";
import { createSupabaseServerClient } from "../server";

export interface TaskOption {
  id: string;
  label: string;
}

interface TaskDbRow {
  id: string;
  title: string;
  description: string | null;
  status: string;
  priority: string;
  category: string | null;
  assignedTo: string | null;
  dueAt: string | null;
  serviceId: string | null;
  submissionId: string | null;
  createdAt: string | null;
  updatedAt: string | null;
  completedAt: string | null;
  services: { title: string } | null;
  users: {
    firstName: string | null;
    lastName: string | null;
    email: string | null;
  } | null;
  form_submissions: { fullName: string | null } | null;
}

interface TaskTodoDbRow {
  id: string;
  taskId: string;
  title: string;
  done: boolean;
  createdAt: string | null;
  updatedAt: string | null;
}

type TaskQueryClient = {
  from: (table: string) => {
    select: (query: string) => {
      order: (
        column: string,
        options: { ascending: boolean },
      ) => Promise<{
        data: TaskDbRow[] | null;
        error: { message: string } | null;
      }>;
    };
  };
};

type SelectOrderClient<T> = {
  from: (table: string) => {
    select: (query: string) => {
      order: (
        column: string,
        options: { ascending: boolean },
      ) => Promise<{ data: T[] | null; error: { message: string } | null }>;
    };
  };
};

type SelectEqOrderClient<T> = {
  from: (table: string) => {
    select: (query: string) => {
      eq: (
        column: string,
        value: boolean,
      ) => {
        order: (
          column: string,
          options: { ascending: boolean },
        ) => Promise<{ data: T[] | null; error: { message: string } | null }>;
      };
    };
  };
};

type SelectOrderLimitClient<T> = {
  from: (table: string) => {
    select: (query: string) => {
      order: (
        column: string,
        options: { ascending: boolean },
      ) => {
        limit: (count: number) => Promise<{
          data: T[] | null;
          error: { message: string } | null;
        }>;
      };
    };
  };
};

interface AssignableUserDbRow {
  id: string;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
}

interface SubmissionOptionDbRow {
  id: string;
  fullName: string | null;
  email: string | null;
}

function mapTaskRow(row: TaskDbRow): Omit<TaskType, "todos"> {
  return {
    id: row.id,
    title: row.title,
    description: row.description,
    status: row.status as TaskType["status"],
    priority: row.priority as TaskType["priority"],
    category: row.category,
    assignedTo: row.assignedTo,
    dueAt: row.dueAt,
    serviceId: row.serviceId,
    submissionId: row.submissionId,
    serviceTitle: row.services?.title ?? null,
    assigneeName: row.users
      ? [row.users.firstName, row.users.lastName].filter(Boolean).join(" ") ||
        row.users.email
      : null,
    submissionFullName: row.form_submissions?.fullName ?? null,
    createdAt: row.createdAt,
    updatedAt: row.updatedAt,
    completedAt: row.completedAt,
  };
}

function mapTaskTodoRow(row: TaskTodoDbRow): TaskTodoType {
  return {
    id: row.id,
    taskId: row.taskId,
    title: row.title,
    done: row.done,
    createdAt: row.createdAt,
    updatedAt: row.updatedAt,
  };
}

export async function getTaskTodos(): Promise<TaskTodoType[]> {
  const supabase =
    createSupabaseAdminClient() as unknown as SelectOrderClient<TaskTodoDbRow>;
  const { data, error } = await supabase
    .from("task_todos")
    .select("id, taskId, title, done, createdAt, updatedAt")
    .order("createdAt", { ascending: true });

  if (error) throw new Error(error.message);
  return (data ?? []).map(mapTaskTodoRow);
}

export async function getTasks(): Promise<TaskType[]> {
  const supabase = createSupabaseAdminClient() as unknown as TaskQueryClient;
  const { data, error } = await supabase
    .from("tasks")
    .select(
      "*, services(title), users(firstName, lastName, email), form_submissions(fullName)",
    )
    .order("createdAt", { ascending: false });

  if (error) throw new Error(error.message);

  const todosByTask = new Map<string, TaskTodoType[]>();
  try {
    const todos = await getTaskTodos();
    for (const todo of todos) {
      const list = todosByTask.get(todo.taskId) ?? [];
      list.push(todo);
      todosByTask.set(todo.taskId, list);
    }
  } catch {
    // task_todos table not applied yet — tasks still load with empty checklists.
  }

  return (data ?? []).map((row) => ({
    ...mapTaskRow(row),
    todos: todosByTask.get(row.id) ?? [],
  }));
}

export async function getAssignableUsers(): Promise<TaskOption[]> {
  const supabase =
    createSupabaseAdminClient() as unknown as SelectEqOrderClient<AssignableUserDbRow>;
  const { data, error } = await supabase
    .from("users")
    .select("id, firstName, lastName, email")
    .eq("isActive", true)
    .order("firstName", { ascending: true });

  if (error) {
    console.error("Error fetching assignable users:", error);
    return [];
  }
  return (data ?? []).map((user) => ({
    id: user.id,
    label:
      [user.firstName, user.lastName].filter(Boolean).join(" ") ||
      user.email ||
      user.id,
  }));
}

export async function getSubmissionOptions(): Promise<TaskOption[]> {
  const supabase =
    createSupabaseAdminClient() as unknown as SelectOrderLimitClient<SubmissionOptionDbRow>;
  const { data, error } = await supabase
    .from("form_submissions")
    .select("id, fullName, email")
    .order("createdAt", { ascending: false })
    .limit(100);

  if (error) {
    console.error("Error fetching submission options:", error);
    return [];
  }
  return (data ?? []).map((submission) => ({
    id: submission.id,
    label: submission.fullName || submission.email || submission.id,
  }));
}
