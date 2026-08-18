-- RLS state cloned from the live Bilacert Supabase project.
-- Policies are defined separately in 007_policies.sql.

alter table public.blog_posts enable row level security;
alter table public.contacts enable row level security;
alter table public."emailAccounts" enable row level security;
alter table public."emailAccounts" force row level security;
alter table public."emailIdentities" enable row level security;
alter table public."emailIdentities" force row level security;
alter table public."emailFolders" enable row level security;
alter table public."emailFolders" force row level security;
alter table public."emailLabels" enable row level security;
alter table public."emailLabels" force row level security;
alter table public."emailThreads" enable row level security;
alter table public."emailThreads" force row level security;
alter table public."emailMessages" enable row level security;
alter table public."emailMessages" force row level security;
alter table public."emailRecipients" enable row level security;
alter table public."emailRecipients" force row level security;
alter table public."emailAttachments" enable row level security;
alter table public."emailAttachments" force row level security;
alter table public."emailMessageLabels" enable row level security;
alter table public."emailMessageLabels" force row level security;
alter table public."emailDrafts" enable row level security;
alter table public."emailDrafts" force row level security;
alter table public."emailSyncStates" enable row level security;
alter table public."emailSyncStates" force row level security;
alter table public."emailSyncRuns" enable row level security;
alter table public."emailSyncRuns" force row level security;
alter table public."emailOperations" enable row level security;
alter table public."emailOperations" force row level security;
alter table public."emailAuditEvents" enable row level security;
alter table public."emailAuditEvents" force row level security;
alter table public.testimonials enable row level security;
alter table public.users enable row level security;

-- Intentionally preserved from production:
-- public.form_submissions and public.services have RLS disabled.
