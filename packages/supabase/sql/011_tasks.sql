-- Task management dashboard table.
-- Idempotent: safe to re-run (Supabase SQL editor) — no 42P07 on re-run.
-- The applied remote table uses camelCase column names, matching the bilacert
-- schema convention; the app's Queries/Mutations read/write it directly
-- (packages/supabase/src/Queries/tasks.ts, Mutations/tasks.ts). After applying,
-- regenerate database types so the table joins `supabaseType.ts`:
--   pnpm gen:types
create table if not exists public.tasks (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  status text not null default 'pending',
  priority text not null default 'normal',
  category text,
  "assignedTo" uuid references public.users (id) on delete set null,
  "dueAt" timestamptz,
  "serviceId" uuid references public.services (id) on delete set null,
  "submissionId" uuid references public.form_submissions (id) on delete set null,
  "createdAt" timestamptz not null default now(),
  "updatedAt" timestamptz not null default now(),
  "completedAt" timestamptz
);

-- Self-heal partial or legacy states so re-runs converge on the camelCase
-- schema (create table if not exists alone skips already-existing tables).
alter table public.tasks add column if not exists title text;
alter table public.tasks add column if not exists description text;
alter table public.tasks add column if not exists status text not null default 'pending';
alter table public.tasks add column if not exists priority text not null default 'normal';
alter table public.tasks add column if not exists category text;
alter table public.tasks add column if not exists "assignedTo" uuid;
alter table public.tasks add column if not exists "dueAt" timestamptz;
alter table public.tasks add column if not exists "serviceId" uuid;
alter table public.tasks add column if not exists "submissionId" uuid;
alter table public.tasks add column if not exists "createdAt" timestamptz not null default now();
alter table public.tasks add column if not exists "updatedAt" timestamptz not null default now();
alter table public.tasks add column if not exists "completedAt" timestamptz;

create index if not exists tasks_status_idx on public.tasks (status);
create index if not exists tasks_priority_idx on public.tasks (priority);
create index if not exists tasks_createdat_idx on public.tasks ("createdAt" desc);
create index if not exists tasks_assignedto_idx on public.tasks ("assignedTo");
create index if not exists tasks_serviceid_idx on public.tasks ("serviceId");
create index if not exists tasks_submissionid_idx on public.tasks ("submissionId");

alter table public.tasks enable row level security;

drop policy if exists "Tasks readable by authenticated users" on public.tasks;
create policy "Tasks readable by authenticated users"
on public.tasks for select
to authenticated
using (true);

drop policy if exists "Tasks writable by authenticated users" on public.tasks;
create policy "Tasks writable by authenticated users"
on public.tasks for all
to authenticated
using (true)
with check (true);