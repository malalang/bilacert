"use client";

import type { ServiceRowType } from "@bilacert/contracts/service";
import type {
  TaskPriority,
  TaskStatus,
  TaskType,
} from "@bilacert/contracts/task";
import type { TaskTodoType } from "@bilacert/contracts/taskTodo";
import { cn } from "@bilacert/shared/cn";
import {
  AlertTriangle,
  Briefcase,
  Calendar,
  CheckCircle2,
  ClipboardList,
  Clock,
  ListChecks,
  Loader2,
  Pencil,
  Plus,
  Search,
  Trash2,
  User,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  createTaskAction,
  createTaskTodoAction,
  deleteTaskAction,
  deleteTaskTodoAction,
  setTaskStatusAction,
  updateTaskAction,
  updateTaskTodoAction,
} from "./actions";

const STATUS_META: Record<TaskStatus, { label: string; className: string }> = {
  pending: { label: "Pending", className: "bg-amber-100 text-amber-800" },
  in_progress: { label: "In Progress", className: "bg-blue-100 text-blue-800" },
  completed: {
    label: "Completed",
    className: "bg-emerald-100 text-emerald-800",
  },
  cancelled: { label: "Cancelled", className: "bg-zinc-200 text-zinc-600" },
};

const PRIORITY_META: Record<
  TaskPriority,
  { label: string; className: string }
> = {
  low: { label: "Low", className: "bg-muted text-muted-foreground" },
  normal: { label: "Normal", className: "bg-slate-100 text-slate-700" },
  high: { label: "High", className: "bg-orange-100 text-orange-700" },
  urgent: { label: "Urgent", className: "bg-red-100 text-red-700" },
};

const STATUS_TABS = [
  { value: "all", label: "All" },
  ...Object.entries(STATUS_META).map(([value, meta]) => ({
    value,
    label: meta.label,
  })),
] as const;

interface OptionItem {
  id: string;
  label: string;
}

interface TaskFormState {
  title: string;
  description: string;
  category: string;
  priority: TaskPriority;
  status: TaskStatus;
  assignedTo: string;
  dueAt: string;
  serviceId: string;
  submissionId: string;
}

interface TasksClientProps {
  initialTasks: TaskType[];
  services: ServiceRowType[];
  users: OptionItem[];
  submissions: OptionItem[];
  loadError?: string | null;
}

function toLocalInput(iso: string | null): string {
  if (!iso) return "";
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(
    date.getDate(),
  )}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

function fromLocalInput(value: string): string | null {
  if (!value) return null;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date.toISOString();
}

function fmtDate(iso: string | null | undefined): string {
  if (!iso) return "—";
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "—";
  return date.toLocaleDateString("en-ZA", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function emptyForm(): TaskFormState {
  return {
    title: "",
    description: "",
    category: "",
    priority: "normal",
    status: "pending",
    assignedTo: "",
    dueAt: "",
    serviceId: "",
    submissionId: "",
  };
}

function TodoSection({
  task,
  onTodosChange,
}: {
  task: TaskType;
  onTodosChange: (todos: TaskTodoType[]) => void;
}) {
  const { toast } = useToast();
  const [draft, setDraft] = useState("");
  const [busyId, setBusyId] = useState<string | null>(null);
  const todos = task.todos ?? [];
  const doneCount = todos.filter((todo) => todo.done).length;

  const handleAdd = async (event: React.FormEvent) => {
    event.preventDefault();
    const title = draft.trim();
    if (!title) return;
    const result = await createTaskTodoAction(task.id, { title });
    if (!result.ok) {
      toast({
        variant: "destructive",
        title: "Failed to add checklist item",
        description: result.error,
      });
      return;
    }
    setDraft("");
    if (result.data) onTodosChange([...todos, result.data]);
  };

  const handleToggle = async (todo: TaskTodoType) => {
    setBusyId(todo.id);
    try {
      const result = await updateTaskTodoAction(todo.id, { done: !todo.done });
      if (!result.ok) {
        toast({
          variant: "destructive",
          title: "Failed to update checklist item",
          description: result.error,
        });
        return;
      }
      if (result.data) {
        const updated = result.data;
        onTodosChange(todos.map((t) => (t.id === todo.id ? updated : t)));
      }
    } finally {
      setBusyId(null);
    }
  };

  const handleDelete = async (todo: TaskTodoType) => {
    setBusyId(todo.id);
    try {
      const result = await deleteTaskTodoAction(todo.id);
      if (!result.ok) {
        toast({
          variant: "destructive",
          title: "Failed to remove checklist item",
          description: result.error,
        });
        return;
      }
      onTodosChange(todos.filter((t) => t.id !== todo.id));
    } finally {
      setBusyId(null);
    }
  };

  return (
    <div className="mt-4 border-t pt-4">
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
          <ListChecks className="h-3.5 w-3.5" />
          Checklist
        </span>
        <span className="text-xs font-medium text-muted-foreground">
          {doneCount}/{todos.length}
        </span>
      </div>
      {todos.length > 0 && (
        <ul className="mt-2.5 space-y-1.5">
          {todos.map((todo) => (
            <li key={todo.id} className="group flex items-center gap-2">
              <Checkbox
                id={`todo-${todo.id}`}
                checked={todo.done}
                disabled={busyId === todo.id}
                onCheckedChange={() => handleToggle(todo)}
              />
              <label
                htmlFor={`todo-${todo.id}`}
                className={cn(
                  "flex-1 cursor-pointer select-none text-sm",
                  todo.done && "text-muted-foreground line-through",
                )}
              >
                {todo.title}
              </label>
              <Button
                size="sm"
                variant="ghost"
                className="h-7 w-7 p-0 text-muted-foreground opacity-0 group-hover:opacity-100 focus:opacity-100 hover:text-destructive hover:bg-destructive/10"
                onClick={() => handleDelete(todo)}
                title="Remove checklist item"
              >
                <Trash2 className="h-3.5 w-3.5" />
              </Button>
            </li>
          ))}
        </ul>
      )}
      <form onSubmit={handleAdd} className="mt-2 flex items-center gap-2">
        <Input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="Add a checklist item..."
          className="h-8 text-sm"
        />
        <Button
          type="submit"
          size="sm"
          className="h-8 w-8 p-0"
          disabled={!draft.trim() || busyId !== null}
          title="Add checklist item"
        >
          <Plus className="h-3.5 w-3.5" />
        </Button>
      </form>
    </div>
  );
}

export default function TasksClient({
  initialTasks,
  services,
  users,
  submissions,
  loadError,
}: TasksClientProps) {
  const router = useRouter();
  const { toast } = useToast();
  const [tasks, setTasks] = useState<TaskType[]>(initialTasks);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [sheetOpen, setSheetOpen] = useState(false);
  const [editing, setEditing] = useState<TaskType | null>(null);
  const [form, setForm] = useState<TaskFormState>(emptyForm());
  const [submitting, setSubmitting] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<TaskType | null>(null);
  const [deleting, setDeleting] = useState(false);

  const pendingCount = tasks.filter((t) => t.status === "pending").length;
  const inProgressCount = tasks.filter(
    (t) => t.status === "in_progress",
  ).length;
  const completedCount = tasks.filter((t) => t.status === "completed").length;

  const filteredTasks = tasks.filter((t) => {
    const matchesStatus = statusFilter === "all" || t.status === statusFilter;
    if (!matchesStatus) return false;
    const s = search.toLowerCase();
    return (
      t.title.toLowerCase().includes(s) ||
      (t.description ?? "").toLowerCase().includes(s) ||
      (t.category ?? "").toLowerCase().includes(s) ||
      (t.assigneeName ?? "").toLowerCase().includes(s) ||
      (t.serviceTitle ?? "").toLowerCase().includes(s)
    );
  });

  const updateField = <K extends keyof TaskFormState>(
    key: K,
    value: TaskFormState[K],
  ) => setForm((prev) => ({ ...prev, [key]: value }));

  const openCreate = () => {
    setEditing(null);
    setForm(emptyForm());
    setSheetOpen(true);
  };

  const openEdit = (task: TaskType) => {
    setEditing(task);
    setForm({
      title: task.title,
      description: task.description ?? "",
      category: task.category ?? "",
      priority: task.priority,
      status: task.status,
      assignedTo: task.assignedTo ?? "",
      dueAt: toLocalInput(task.dueAt),
      serviceId: task.serviceId ?? "",
      submissionId: task.submissionId ?? "",
    });
    setSheetOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title.trim()) {
      toast({
        variant: "destructive",
        title: "Task title is required",
      });
      return;
    }

    setSubmitting(true);
    try {
      const payload = {
        title: form.title.trim(),
        description: form.description.trim() || null,
        category: form.category.trim() || null,
        priority: form.priority,
        status: form.status,
        assignedTo: form.assignedTo || null,
        dueAt: fromLocalInput(form.dueAt),
        serviceId: form.serviceId || null,
        submissionId: form.submissionId || null,
      };

      const result = editing
        ? await updateTaskAction(editing.id, payload)
        : await createTaskAction(payload);

      if (!result.ok) {
        toast({
          variant: "destructive",
          title: "Failed to save task",
          description: result.error,
        });
        return;
      }

      toast({
        title: editing ? "Task updated" : "Task created",
        description: result.message,
      });
      setSheetOpen(false);
      router.refresh();
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      toast({
        variant: "destructive",
        title: "Unexpected error",
        description: message || "Unknown error",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleStatusChange = async (task: TaskType, status: TaskStatus) => {
    try {
      const result = await setTaskStatusAction(task.id, status);
      if (!result.ok) {
        toast({
          variant: "destructive",
          title: "Failed to update task",
          description: result.error,
        });
        return;
      }
      setTasks((prev) =>
        prev.map((t) =>
          t.id === task.id
            ? {
                ...t,
                status,
                completedAt:
                  status === "completed" ? new Date().toISOString() : null,
              }
            : t,
        ),
      );
      toast({ title: "Task updated" });
    } catch {
      toast({
        variant: "destructive",
        title: "Failed to update task",
      });
    }
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;
    setDeleting(true);
    try {
      const result = await deleteTaskAction(deleteTarget.id);
      if (!result.ok) {
        toast({
          variant: "destructive",
          title: "Failed to delete task",
          description: result.error,
        });
        return;
      }
      setTasks((prev) => prev.filter((t) => t.id !== deleteTarget.id));
      toast({ title: "Task deleted", description: result.message });
      setDeleteTarget(null);
    } catch {
      toast({
        variant: "destructive",
        title: "Failed to delete task",
      });
    } finally {
      setDeleting(false);
    }
  };

  const nextStatus = (
    task: TaskType,
  ): { status: TaskStatus; label: string } => {
    if (task.status === "pending")
      return { status: "in_progress", label: "Start" };
    if (task.status === "in_progress")
      return { status: "completed", label: "Complete" };
    return { status: "pending", label: "Reopen" };
  };

  const statCards = [
    { label: "Total Tasks", value: tasks.length, icon: ClipboardList },
    { label: "Pending", value: pendingCount, icon: Clock },
    { label: "In Progress", value: inProgressCount, icon: Loader2 },
    { label: "Completed", value: completedCount, icon: CheckCircle2 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Task Management</h1>
          <p className="text-muted-foreground">
            Plan, assign and track internal work for Bilacert.
          </p>
        </div>
        <Button className="gap-2 font-bold" onClick={openCreate}>
          <Plus className="h-4 w-4" />
          New Task
        </Button>
      </div>

      {loadError && (
        <Card className="border-destructive/50 bg-destructive/5">
          <CardContent className="flex items-start gap-3 py-4">
            <AlertTriangle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
            <div className="text-sm">
              <p className="font-semibold text-destructive">
                Could not load tasks
              </p>
              <p className="text-muted-foreground">{loadError}</p>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {statCards.map(({ label, value, icon: Icon }) => (
          <Card key={label}>
            <CardContent className="flex items-center gap-4 py-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-2xl font-bold leading-none">{value}</div>
                <div className="mt-1 text-xs font-medium text-muted-foreground">
                  {label}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <Tabs value={statusFilter} onValueChange={setStatusFilter}>
          <TabsList className="flex-wrap h-auto">
            {STATUS_TABS.map((tab) => (
              <TabsTrigger key={tab.value} value={tab.value} className="h-9">
                {tab.label}
                {tab.value !== "all" && (
                  <span className="ml-1.5 text-xs text-muted-foreground">
                    {tasks.filter((t) => t.status === tab.value).length}
                  </span>
                )}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search tasks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
      </div>

      {filteredTasks.length === 0 ? (
        <Card className="border-dashed py-12">
          <CardContent className="flex flex-col items-center justify-center text-center">
            <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mb-4">
              <ClipboardList className="h-8 w-8 text-muted-foreground/50" />
            </div>
            <h3 className="text-lg font-semibold">
              {tasks.length === 0 ? "No tasks yet" : "No tasks found"}
            </h3>
            <p className="text-sm text-muted-foreground max-w-xs mt-2">
              {tasks.length === 0
                ? "Create a task to start tracking the work that needs to get done."
                : "Try adjusting your search or status filter."}
            </p>
            {tasks.length === 0 && (
              <Button className="mt-4" onClick={openCreate}>
                <Plus className="h-4 w-4 mr-2" />
                New Task
              </Button>
            )}
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {filteredTasks.map((task) => {
            const statusMeta = STATUS_META[task.status];
            const priorityMeta = PRIORITY_META[task.priority];
            const next = nextStatus(task);
            return (
              <Card key={task.id} className="group overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col gap-4 p-6">
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                      <div className="min-w-0 space-y-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-bold text-lg leading-none">
                            {task.title}
                          </h3>
                          <Badge className={statusMeta.className}>
                            {statusMeta.label}
                          </Badge>
                          <Badge className={priorityMeta.className}>
                            {priorityMeta.label}
                          </Badge>
                          {task.category && (
                            <Badge variant="outline">{task.category}</Badge>
                          )}
                        </div>
                        {task.description && (
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {task.description}
                          </p>
                        )}
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-1 text-xs text-muted-foreground font-medium">
                          {task.dueAt && (
                            <span className="flex items-center gap-1.5">
                              <Calendar className="h-3.5 w-3.5" />
                              Due {fmtDate(task.dueAt)}
                            </span>
                          )}
                          {task.assigneeName && (
                            <span className="flex items-center gap-1.5">
                              <User className="h-3.5 w-3.5" />
                              {task.assigneeName}
                            </span>
                          )}
                          {task.serviceTitle && (
                            <span className="flex items-center gap-1.5">
                              <Briefcase className="h-3.5 w-3.5" />
                              {task.serviceTitle}
                            </span>
                          )}
                          {task.submissionFullName && (
                            <span className="flex items-center gap-1.5">
                              <ClipboardList className="h-3.5 w-3.5" />
                              {task.submissionFullName}
                            </span>
                          )}
                          <span className="ml-auto text-muted-foreground/70">
                            Created {fmtDate(task.createdAt)}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        {task.status !== "completed" &&
                          task.status !== "cancelled" && (
                            <Button
                              size="sm"
                              variant="outline"
                              className="font-semibold"
                              onClick={() =>
                                handleStatusChange(task, next.status)
                              }
                            >
                              {next.label}
                            </Button>
                          )}
                        {task.status === "completed" ||
                        task.status === "cancelled" ? (
                          <Button
                            size="sm"
                            variant="outline"
                            className="font-semibold"
                            onClick={() => handleStatusChange(task, "pending")}
                          >
                            Reopen
                          </Button>
                        ) : null}
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-muted-foreground"
                          onClick={() => openEdit(task)}
                          title="Edit task"
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                          onClick={() => setDeleteTarget(task)}
                          title="Delete task"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <TodoSection
                      task={task}
                      onTodosChange={(todos) =>
                        setTasks((prev) =>
                          prev.map((t) =>
                            t.id === task.id ? { ...t, todos } : t,
                          ),
                        )
                      }
                    />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}

      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetContent className="sm:max-w-lg overflow-y-auto">
          <form onSubmit={handleSubmit}>
            <SheetHeader className="mb-6">
              <SheetTitle>{editing ? "Edit Task" : "New Task"}</SheetTitle>
              <SheetDescription>
                {editing
                  ? "Update the details of this task."
                  : "Add a task to the queue for the team to pick up."}
              </SheetDescription>
            </SheetHeader>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">
                  Title <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="title"
                  value={form.title}
                  onChange={(e) => updateField("title", e.target.value)}
                  placeholder="e.g. Deploy monthly website maintenance"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="priority">Priority</Label>
                  <Select
                    value={form.priority}
                    onValueChange={(v) =>
                      updateField("priority", v as TaskPriority)
                    }
                  >
                    <SelectTrigger id="priority">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(PRIORITY_META).map(([value, meta]) => (
                        <SelectItem key={value} value={value}>
                          {meta.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="status">Status</Label>
                  <Select
                    value={form.status}
                    onValueChange={(v) =>
                      updateField("status", v as TaskStatus)
                    }
                  >
                    <SelectTrigger id="status">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(STATUS_META).map(([value, meta]) => (
                        <SelectItem key={value} value={value}>
                          {meta.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Input
                    id="category"
                    value={form.category}
                    onChange={(e) => updateField("category", e.target.value)}
                    placeholder="e.g. Website, Domain, Social"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="assignedTo">Assigned To</Label>
                  <Select
                    value={form.assignedTo}
                    onValueChange={(v) => updateField("assignedTo", v)}
                  >
                    <SelectTrigger id="assignedTo">
                      <SelectValue placeholder="Unassigned" />
                    </SelectTrigger>
                    <SelectContent>
                      {users.map((user) => (
                        <SelectItem key={user.id} value={user.id}>
                          {user.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="dueAt">Due Date</Label>
                <Input
                  id="dueAt"
                  type="datetime-local"
                  value={form.dueAt}
                  onChange={(e) => updateField("dueAt", e.target.value)}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="serviceId">Service</Label>
                  <Select
                    value={form.serviceId}
                    onValueChange={(v) => updateField("serviceId", v)}
                  >
                    <SelectTrigger id="serviceId">
                      <SelectValue placeholder="No service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service.id} value={service.id}>
                          {service.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="submissionId">Submission</Label>
                  <Select
                    value={form.submissionId}
                    onValueChange={(v) => updateField("submissionId", v)}
                  >
                    <SelectTrigger id="submissionId">
                      <SelectValue placeholder="No submission" />
                    </SelectTrigger>
                    <SelectContent>
                      {submissions.map((submission) => (
                        <SelectItem
                          key={submission.id}
                          value={submission.id}
                          className="truncate"
                        >
                          {submission.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={form.description}
                  onChange={(e) => updateField("description", e.target.value)}
                  rows={3}
                  placeholder="Anything the team needs to know..."
                />
              </div>
            </div>

            <SheetFooter className="mt-6">
              <Button
                type="button"
                variant="outline"
                onClick={() => setSheetOpen(false)}
                disabled={submitting}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={submitting}>
                {submitting ? (
                  <Loader2 className="animate-spin h-4 w-4 mr-2" />
                ) : (
                  <Plus className="h-4 w-4 mr-2" />
                )}
                {submitting
                  ? "Saving..."
                  : editing
                    ? "Save Changes"
                    : "Create Task"}
              </Button>
            </SheetFooter>
          </form>
        </SheetContent>
      </Sheet>

      <AlertDialog
        open={deleteTarget !== null}
        onOpenChange={(open) => {
          if (!open) setDeleteTarget(null);
        }}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete task</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete "{deleteTarget?.title}"? This
              cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={deleting}>Cancel</AlertDialogCancel>
            <Button
              variant="destructive"
              onClick={handleDelete}
              disabled={deleting}
            >
              {deleting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
