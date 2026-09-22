-- Task checklist items (per-task todo list).
-- Idempotent: safe to re-run (Supabase SQL editor) — no 42P07 on re-run.
-- The applied remote table uses camelCase column names, matching the bilacert
-- schema convention; the app's Queries/Mutations read/write it directly
-- (packages/supabase/src/Queries/tasks.ts, Mutations/tasks.ts). After applying,
-- regenerate database types so the table joins `supabaseType.ts`:
--   pnpm gen:types
create table if not exists public.task_todos (
  id uuid primary key default gen_random_uuid(),
  "taskId" uuid not null references public.tasks (id) on delete cascade,
  title text not null,
  done boolean not null default false,
  "createdAt" timestamptz not null default now(),
  "updatedAt" timestamptz not null default now()
);

-- Self-heal partial or legacy states so re-runs converge on the camelCase
-- schema (create table if not exists alone skips already-existing tables).
alter table public.task_todos add column if not exists "taskId" uuid;
alter table public.task_todos add column if not exists title text;
alter table public.task_todos add column if not exists done boolean not null default false;
alter table public.task_todos add column if not exists "createdAt" timestamptz not null default now();
alter table public.task_todos add column if not exists "updatedAt" timestamptz not null default now();

create index if not exists task_todos_taskid_idx on public.task_todos ("taskId");
create index if not exists task_todos_done_idx on public.task_todos (done);

alter table public.task_todos enable row level security;

drop policy if exists "Task todos readable by authenticated users" on public.task_todos;
create policy "Task todos readable by authenticated users"
on public.task_todos for select
to authenticated
using (true);

drop policy if exists "Task todos writable by authenticated users" on public.task_todos;
create policy "Task todos writable by authenticated users"
on public.task_todos for all
to authenticated
using (true)
with check (true);