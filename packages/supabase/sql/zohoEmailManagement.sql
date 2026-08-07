-- Bilacert Admin: Zoho Mail email-management schema
--
-- This is a reviewable source SQL file, not a timestamped migration. Promote it
-- with `supabase migration new create_zoho_email_management`, copy this SQL into
-- the generated migration, run `supabase db reset`, and then regenerate
-- packages/supabase/src/supabaseType.ts.
--
-- Zoho OAuth scopes expected by the server integration:
--   ZohoMail.accounts.READ
--   ZohoMail.folders.ALL
--   ZohoMail.tags.ALL
--   ZohoMail.messages.ALL
--
-- Security model:
--   - OAuth access tokens, refresh tokens, client IDs, and client secrets are
--     server-only environment secrets and must never be stored in these tables.
--   - Email data is available only to the service_role/secret-key server client.
--   - Every admin action must authenticate the Supabase user and verify that the
--     user is active and authorized before using the server client.

begin;

set local lock_timeout = '5s';
set local statement_timeout = '120s';

create schema if not exists private;
revoke all on schema private from public;

create or replace function private.set_email_updated_at()
returns trigger
language plpgsql
security invoker
set search_path = ''
as $$
begin
  new."updatedAt" = now();
  return new;
end;
$$;

revoke all on function private.set_email_updated_at() from public, anon, authenticated;
grant usage on schema private to service_role;
grant execute on function private.set_email_updated_at() to service_role;

create table public."emailAccounts" (
  "id" uuid primary key default gen_random_uuid(),
  "zohoAccountId" text not null,
  "zohoUserId" text,
  "primaryEmailAddress" text not null,
  "displayName" text,
  "accountName" text,
  "timeZone" text,
  "apiBaseUrl" text not null default 'https://mail.zoho.com',
  "mailboxStatus" text,
  "status" text not null default 'pending',
  "isEnabled" boolean not null default true,
  "lastSyncedAt" timestamptz,
  "lastSuccessfulSyncAt" timestamptz,
  "providerData" jsonb not null default '{}'::jsonb,
  "createdBy" uuid references public.users ("id") on delete set null,
  "updatedBy" uuid references public.users ("id") on delete set null,
  "createdAt" timestamptz not null default now(),
  "updatedAt" timestamptz not null default now(),
  constraint email_accounts_status_check check (
    "status" in ('pending', 'active', 'paused', 'reauthorizationRequired', 'error')
  ),
  constraint email_accounts_api_base_url_check check ("apiBaseUrl" ~ '^https://'),
  constraint email_accounts_provider_data_object_check check (
    jsonb_typeof("providerData") = 'object'
  ),
  constraint email_accounts_zoho_account_unique unique ("apiBaseUrl", "zohoAccountId")
);

comment on table public."emailAccounts" is
  'Zoho mailbox metadata only. OAuth credentials remain in server-only environment secrets.';

create unique index email_accounts_primary_email_unique_idx
  on public."emailAccounts" (lower("primaryEmailAddress"));
create index email_accounts_created_by_idx
  on public."emailAccounts" ("createdBy")
  where "createdBy" is not null;
create index email_accounts_updated_by_idx
  on public."emailAccounts" ("updatedBy")
  where "updatedBy" is not null;
create index email_accounts_active_sync_idx
  on public."emailAccounts" ("lastSuccessfulSyncAt")
  where "status" = 'active' and "isEnabled";

create table public."emailIdentities" (
  "id" uuid primary key default gen_random_uuid(),
  "accountId" uuid not null references public."emailAccounts" ("id") on delete cascade,
  "zohoSendMailId" text,
  "emailAddress" text not null,
  "displayName" text,
  "isPrimary" boolean not null default false,
  "isDefault" boolean not null default false,
  "isAlias" boolean not null default false,
  "isConfirmed" boolean not null default false,
  "isEnabled" boolean not null default true,
  "providerData" jsonb not null default '{}'::jsonb,
  "createdAt" timestamptz not null default now(),
  "updatedAt" timestamptz not null default now(),
  constraint email_identities_provider_data_object_check check (
    jsonb_typeof("providerData") = 'object'
  )
);

comment on table public."emailIdentities" is
  'Zoho send-mail identities and aliases that are valid From addresses for a mailbox.';

create unique index email_identities_account_address_unique_idx
  on public."emailIdentities" ("accountId", lower("emailAddress"));
create unique index email_identities_zoho_send_mail_unique_idx
  on public."emailIdentities" ("accountId", "zohoSendMailId")
  where "zohoSendMailId" is not null;
create unique index email_identities_one_default_idx
  on public."emailIdentities" ("accountId")
  where "isDefault" and "isEnabled";
create index email_identities_enabled_idx
  on public."emailIdentities" ("accountId", "isDefault" desc)
  where "isEnabled";

create table public."emailFolders" (
  "id" uuid primary key default gen_random_uuid(),
  "accountId" uuid not null references public."emailAccounts" ("id") on delete cascade,
  "zohoFolderId" text not null,
  "previousZohoFolderId" text,
  "name" text not null,
  "path" text not null,
  "folderType" text not null,
  "isArchived" boolean not null default false,
  "imapAccess" boolean,
  "messageCount" integer not null default 0,
  "unreadCount" integer not null default 0,
  "isActive" boolean not null default true,
  "lastSyncedAt" timestamptz,
  "providerData" jsonb not null default '{}'::jsonb,
  "createdAt" timestamptz not null default now(),
  "updatedAt" timestamptz not null default now(),
  constraint email_folders_counts_check check (
    "messageCount" >= 0 and "unreadCount" >= 0 and "unreadCount" <= "messageCount"
  ),
  constraint email_folders_provider_data_object_check check (
    jsonb_typeof("providerData") = 'object'
  ),
  constraint email_folders_zoho_folder_unique unique ("accountId", "zohoFolderId"),
  constraint email_folders_path_unique unique ("accountId", "path")
);

comment on table public."emailFolders" is
  'Account-scoped Zoho folder metadata, including system folders such as Inbox, Drafts, Sent, Spam, and Trash.';

create index email_folders_account_type_idx
  on public."emailFolders" ("accountId", "folderType");
create index email_folders_active_idx
  on public."emailFolders" ("accountId", "name")
  where "isActive";

create table public."emailLabels" (
  "id" uuid primary key default gen_random_uuid(),
  "accountId" uuid not null references public."emailAccounts" ("id") on delete cascade,
  "zohoLabelId" text not null,
  "displayName" text not null,
  "color" text,
  "sequence" integer,
  "isActive" boolean not null default true,
  "providerData" jsonb not null default '{}'::jsonb,
  "createdAt" timestamptz not null default now(),
  "updatedAt" timestamptz not null default now(),
  constraint email_labels_color_check check (
    "color" is null or "color" ~ '^#[0-9A-Fa-f]{6}$'
  ),
  constraint email_labels_provider_data_object_check check (
    jsonb_typeof("providerData") = 'object'
  ),
  constraint email_labels_zoho_label_unique unique ("accountId", "zohoLabelId")
);

comment on table public."emailLabels" is
  'Zoho Mail labels/tags synchronized for an email account.';

create unique index email_labels_account_name_unique_idx
  on public."emailLabels" ("accountId", lower("displayName"));
create index email_labels_active_sequence_idx
  on public."emailLabels" ("accountId", "sequence")
  where "isActive";

create table public."emailThreads" (
  "id" uuid primary key default gen_random_uuid(),
  "accountId" uuid not null references public."emailAccounts" ("id") on delete cascade,
  "zohoThreadId" text not null,
  "subject" text not null default '',
  "snippet" text,
  "participants" jsonb not null default '[]'::jsonb,
  "messageCount" integer not null default 0,
  "unreadCount" integer not null default 0,
  "hasAttachments" boolean not null default false,
  "firstMessageAt" timestamptz,
  "lastMessageAt" timestamptz,
  "lastSyncedAt" timestamptz,
  "providerData" jsonb not null default '{}'::jsonb,
  "createdAt" timestamptz not null default now(),
  "updatedAt" timestamptz not null default now(),
  constraint email_threads_counts_check check (
    "messageCount" >= 0 and "unreadCount" >= 0 and "unreadCount" <= "messageCount"
  ),
  constraint email_threads_participants_array_check check (
    jsonb_typeof("participants") = 'array'
  ),
  constraint email_threads_provider_data_object_check check (
    jsonb_typeof("providerData") = 'object'
  ),
  constraint email_threads_dates_check check (
    "firstMessageAt" is null
    or "lastMessageAt" is null
    or "firstMessageAt" <= "lastMessageAt"
  ),
  constraint email_threads_zoho_thread_unique unique ("accountId", "zohoThreadId")
);

comment on table public."emailThreads" is
  'Local conversation summaries keyed by the Zoho threadId returned by message-list APIs.';

create index email_threads_account_latest_idx
  on public."emailThreads" ("accountId", "lastMessageAt" desc nulls last);
create index email_threads_account_unread_idx
  on public."emailThreads" ("accountId", "lastMessageAt" desc nulls last)
  where "unreadCount" > 0;

create table public."emailMessages" (
  "id" uuid primary key default gen_random_uuid(),
  "accountId" uuid not null references public."emailAccounts" ("id") on delete cascade,
  "folderId" uuid references public."emailFolders" ("id") on delete set null,
  "threadId" uuid references public."emailThreads" ("id") on delete set null,
  "zohoMessageId" text not null,
  "internetMessageId" text,
  "inReplyTo" text,
  "referencesHeader" text,
  "direction" text not null default 'unknown',
  "senderName" text,
  "fromAddress" text,
  "replyToAddress" text,
  "subject" text not null default '',
  "snippet" text,
  "htmlContent" text,
  "textContent" text,
  "mailFormat" text,
  "sentAt" timestamptz,
  "receivedAt" timestamptz,
  "priority" smallint,
  "flagType" text not null default 'flag_not_set',
  "isRead" boolean not null default false,
  "isResponded" boolean not null default false,
  "hasInlineContent" boolean not null default false,
  "hasAttachments" boolean not null default false,
  "attachmentCount" integer not null default 0,
  "sizeInBytes" bigint,
  "isArchived" boolean not null default false,
  "isTrashed" boolean not null default false,
  "isSpam" boolean not null default false,
  "isDeleted" boolean not null default false,
  "providerDeletedAt" timestamptz,
  "contentSyncedAt" timestamptz,
  "lastSyncedAt" timestamptz,
  "providerData" jsonb not null default '{}'::jsonb,
  "searchVector" tsvector generated always as (
    setweight(to_tsvector('simple'::regconfig, coalesce("subject", '')), 'A') ||
    setweight(to_tsvector('simple'::regconfig, coalesce("fromAddress", '')), 'B') ||
    setweight(to_tsvector('simple'::regconfig, coalesce("snippet", '')), 'C') ||
    setweight(to_tsvector('simple'::regconfig, coalesce("textContent", '')), 'D')
  ) stored,
  "createdAt" timestamptz not null default now(),
  "updatedAt" timestamptz not null default now(),
  constraint email_messages_direction_check check (
    "direction" in ('inbound', 'outbound', 'draft', 'unknown')
  ),
  constraint email_messages_mail_format_check check (
    "mailFormat" is null or "mailFormat" in ('html', 'plaintext')
  ),
  constraint email_messages_counts_check check (
    "attachmentCount" >= 0
    and ("sizeInBytes" is null or "sizeInBytes" >= 0)
    and ("priority" is null or "priority" >= 0)
  ),
  constraint email_messages_provider_data_object_check check (
    jsonb_typeof("providerData") = 'object'
  ),
  constraint email_messages_zoho_message_unique unique ("accountId", "zohoMessageId")
);

comment on table public."emailMessages" is
  'Zoho message metadata and optionally synchronized content. Sanitize htmlContent before rendering it in the admin UI.';

create index email_messages_account_received_idx
  on public."emailMessages" ("accountId", "receivedAt" desc nulls last);
create index email_messages_folder_received_idx
  on public."emailMessages" ("folderId", "receivedAt" desc nulls last);
create index email_messages_thread_received_idx
  on public."emailMessages" ("threadId", "receivedAt" asc nulls last)
  where "threadId" is not null;
create index email_messages_internet_id_idx
  on public."emailMessages" ("accountId", "internetMessageId")
  where "internetMessageId" is not null;
create index email_messages_unread_idx
  on public."emailMessages" ("folderId", "receivedAt" desc nulls last)
  where not "isRead" and not "isDeleted";
create index email_messages_flagged_idx
  on public."emailMessages" ("accountId", "receivedAt" desc nulls last)
  where "flagType" <> 'flag_not_set' and not "isDeleted";
create index email_messages_search_idx
  on public."emailMessages" using gin ("searchVector");

create table public."emailRecipients" (
  "id" uuid primary key default gen_random_uuid(),
  "messageId" uuid not null references public."emailMessages" ("id") on delete cascade,
  "recipientType" text not null,
  "emailAddress" text not null,
  "displayName" text,
  "sortOrder" integer not null default 0,
  "createdAt" timestamptz not null default now(),
  constraint email_recipients_type_check check (
    "recipientType" in ('to', 'cc', 'bcc', 'replyTo')
  ),
  constraint email_recipients_sort_order_check check ("sortOrder" >= 0)
);

comment on table public."emailRecipients" is
  'Normalized To, Cc, Bcc, and Reply-To recipients for message filtering and contact suggestions.';

create index email_recipients_message_idx
  on public."emailRecipients" ("messageId", "recipientType", "sortOrder");
create index email_recipients_address_idx
  on public."emailRecipients" (lower("emailAddress"));

create table public."emailMessageLabels" (
  "messageId" uuid not null references public."emailMessages" ("id") on delete cascade,
  "labelId" uuid not null references public."emailLabels" ("id") on delete cascade,
  "createdAt" timestamptz not null default now(),
  primary key ("messageId", "labelId")
);

comment on table public."emailMessageLabels" is
  'Many-to-many relationship between synchronized messages and Zoho labels.';

create index email_message_labels_label_idx
  on public."emailMessageLabels" ("labelId", "messageId");

create table public."emailAttachments" (
  "id" uuid primary key default gen_random_uuid(),
  "messageId" uuid not null references public."emailMessages" ("id") on delete cascade,
  "zohoAttachmentId" text not null,
  "fileName" text not null,
  "mimeType" text,
  "sizeInBytes" bigint not null default 0,
  "contentId" text,
  "disposition" text,
  "isInline" boolean not null default false,
  "storageBucket" text,
  "storagePath" text,
  "checksumSha256" text,
  "downloadedAt" timestamptz,
  "providerData" jsonb not null default '{}'::jsonb,
  "createdAt" timestamptz not null default now(),
  "updatedAt" timestamptz not null default now(),
  constraint email_attachments_size_check check ("sizeInBytes" >= 0),
  constraint email_attachments_disposition_check check (
    "disposition" is null or "disposition" in ('attachment', 'inline')
  ),
  constraint email_attachments_checksum_check check (
    "checksumSha256" is null or "checksumSha256" ~ '^[0-9A-Fa-f]{64}$'
  ),
  constraint email_attachments_provider_data_object_check check (
    jsonb_typeof("providerData") = 'object'
  ),
  constraint email_attachments_zoho_attachment_unique unique (
    "messageId",
    "zohoAttachmentId"
  )
);

comment on table public."emailAttachments" is
  'Attachment metadata and optional private Supabase Storage location; binary content is not stored in Postgres.';

create index email_attachments_message_idx
  on public."emailAttachments" ("messageId", "isInline");
create index email_attachments_storage_idx
  on public."emailAttachments" ("storageBucket", "storagePath")
  where "storagePath" is not null;

create table public."emailDrafts" (
  "id" uuid primary key default gen_random_uuid(),
  "accountId" uuid not null references public."emailAccounts" ("id") on delete cascade,
  "zohoMessageId" text,
  "createdBy" uuid references public.users ("id") on delete set null,
  "fromAddress" text not null,
  "toRecipients" jsonb not null default '[]'::jsonb,
  "ccRecipients" jsonb not null default '[]'::jsonb,
  "bccRecipients" jsonb not null default '[]'::jsonb,
  "subject" text not null default '',
  "htmlContent" text,
  "textContent" text,
  "mailFormat" text not null default 'html',
  "askReceipt" boolean not null default false,
  "inReplyTo" text,
  "referencesHeader" text,
  "replyToMessageId" uuid references public."emailMessages" ("id") on delete set null,
  "forwardOfMessageId" uuid references public."emailMessages" ("id") on delete set null,
  "status" text not null default 'local',
  "scheduledAt" timestamptz,
  "lastAutosavedAt" timestamptz not null default now(),
  "lastError" text,
  "providerData" jsonb not null default '{}'::jsonb,
  "createdAt" timestamptz not null default now(),
  "updatedAt" timestamptz not null default now(),
  constraint email_drafts_mail_format_check check (
    "mailFormat" in ('html', 'plaintext')
  ),
  constraint email_drafts_status_check check (
    "status" in ('local', 'syncing', 'saved', 'scheduled', 'sending', 'sent', 'failed', 'discarded')
  ),
  constraint email_drafts_to_recipients_array_check check (
    jsonb_typeof("toRecipients") = 'array'
  ),
  constraint email_drafts_cc_recipients_array_check check (
    jsonb_typeof("ccRecipients") = 'array'
  ),
  constraint email_drafts_bcc_recipients_array_check check (
    jsonb_typeof("bccRecipients") = 'array'
  ),
  constraint email_drafts_provider_data_object_check check (
    jsonb_typeof("providerData") = 'object'
  )
);

comment on table public."emailDrafts" is
  'Local compose/autosave state, including reply headers required by the Zoho save-draft API.';

create unique index email_drafts_zoho_message_unique_idx
  on public."emailDrafts" ("accountId", "zohoMessageId")
  where "zohoMessageId" is not null;
create index email_drafts_account_status_idx
  on public."emailDrafts" ("accountId", "status", "updatedAt" desc);
create index email_drafts_created_by_idx
  on public."emailDrafts" ("createdBy", "updatedAt" desc)
  where "createdBy" is not null;
create index email_drafts_reply_to_idx
  on public."emailDrafts" ("replyToMessageId")
  where "replyToMessageId" is not null;
create index email_drafts_forward_of_idx
  on public."emailDrafts" ("forwardOfMessageId")
  where "forwardOfMessageId" is not null;

create table public."emailSyncStates" (
  "id" uuid primary key default gen_random_uuid(),
  "accountId" uuid not null references public."emailAccounts" ("id") on delete cascade,
  "folderId" uuid references public."emailFolders" ("id") on delete cascade,
  "resourceType" text not null,
  "scopeKey" text not null,
  "status" text not null default 'idle',
  "nextStart" integer not null default 1,
  "pageSize" integer not null default 200,
  "lastReceivedAt" timestamptz,
  "checkpoint" jsonb not null default '{}'::jsonb,
  "lastAttemptAt" timestamptz,
  "lastSuccessAt" timestamptz,
  "nextSyncAt" timestamptz,
  "lastError" text,
  "lockedAt" timestamptz,
  "lockedBy" text,
  "createdAt" timestamptz not null default now(),
  "updatedAt" timestamptz not null default now(),
  constraint email_sync_states_resource_type_check check (
    "resourceType" in ('accountMetadata', 'identities', 'folders', 'labels', 'messages')
  ),
  constraint email_sync_states_status_check check (
    "status" in ('idle', 'running', 'paused', 'failed')
  ),
  constraint email_sync_states_pagination_check check (
    "nextStart" >= 1 and "pageSize" between 1 and 200
  ),
  constraint email_sync_states_checkpoint_object_check check (
    jsonb_typeof("checkpoint") = 'object'
  ),
  constraint email_sync_states_scope_unique unique (
    "accountId",
    "resourceType",
    "scopeKey"
  )
);

comment on table public."emailSyncStates" is
  'Polling checkpoints for Zoho account resources. Message sync uses start/limit pagination and provider-ID upserts.';

create index email_sync_states_folder_idx
  on public."emailSyncStates" ("folderId")
  where "folderId" is not null;
create index email_sync_states_due_idx
  on public."emailSyncStates" ("nextSyncAt", "updatedAt")
  where "status" in ('idle', 'failed');

create table public."emailSyncRuns" (
  "id" uuid primary key default gen_random_uuid(),
  "accountId" uuid not null references public."emailAccounts" ("id") on delete cascade,
  "syncStateId" uuid references public."emailSyncStates" ("id") on delete set null,
  "syncType" text not null,
  "status" text not null default 'running',
  "fetchedCount" integer not null default 0,
  "createdCount" integer not null default 0,
  "updatedCount" integer not null default 0,
  "deletedCount" integer not null default 0,
  "errorCount" integer not null default 0,
  "startedAt" timestamptz not null default now(),
  "finishedAt" timestamptz,
  "errorMessage" text,
  "errorDetails" jsonb not null default '{}'::jsonb,
  "metadata" jsonb not null default '{}'::jsonb,
  "createdAt" timestamptz not null default now(),
  constraint email_sync_runs_status_check check (
    "status" in ('running', 'succeeded', 'partial', 'failed', 'cancelled')
  ),
  constraint email_sync_runs_counts_check check (
    "fetchedCount" >= 0
    and "createdCount" >= 0
    and "updatedCount" >= 0
    and "deletedCount" >= 0
    and "errorCount" >= 0
  ),
  constraint email_sync_runs_dates_check check (
    "finishedAt" is null or "finishedAt" >= "startedAt"
  ),
  constraint email_sync_runs_error_details_object_check check (
    jsonb_typeof("errorDetails") = 'object'
  ),
  constraint email_sync_runs_metadata_object_check check (
    jsonb_typeof("metadata") = 'object'
  )
);

comment on table public."emailSyncRuns" is
  'Append-only observability records for Zoho synchronization attempts.';

create index email_sync_runs_account_started_idx
  on public."emailSyncRuns" ("accountId", "startedAt" desc);
create index email_sync_runs_state_started_idx
  on public."emailSyncRuns" ("syncStateId", "startedAt" desc)
  where "syncStateId" is not null;
create index email_sync_runs_failures_idx
  on public."emailSyncRuns" ("startedAt" desc)
  where "status" in ('partial', 'failed');

create table public."emailOperations" (
  "id" uuid primary key default gen_random_uuid(),
  "accountId" uuid not null references public."emailAccounts" ("id") on delete cascade,
  "actorId" uuid references public.users ("id") on delete set null,
  "operationType" text not null,
  "targetType" text,
  "targetZohoId" text,
  "payload" jsonb not null default '{}'::jsonb,
  "idempotencyKey" text not null default gen_random_uuid()::text,
  "status" text not null default 'pending',
  "attempts" integer not null default 0,
  "maxAttempts" integer not null default 5,
  "scheduledAt" timestamptz not null default now(),
  "lockedAt" timestamptz,
  "lockedBy" text,
  "startedAt" timestamptz,
  "completedAt" timestamptz,
  "zohoResponse" jsonb not null default '{}'::jsonb,
  "lastError" text,
  "createdAt" timestamptz not null default now(),
  "updatedAt" timestamptz not null default now(),
  constraint email_operations_type_check check (
    "operationType" in (
      'send',
      'saveDraft',
      'reply',
      'forward',
      'markRead',
      'markUnread',
      'move',
      'flag',
      'unflag',
      'addLabel',
      'removeLabel',
      'archive',
      'unarchive',
      'markSpam',
      'markNotSpam',
      'delete',
      'downloadAttachment'
    )
  ),
  constraint email_operations_target_type_check check (
    "targetType" is null
    or "targetType" in ('account', 'message', 'thread', 'draft', 'attachment')
  ),
  constraint email_operations_status_check check (
    "status" in ('pending', 'processing', 'succeeded', 'failed', 'cancelled')
  ),
  constraint email_operations_attempts_check check (
    "attempts" >= 0 and "maxAttempts" > 0 and "attempts" <= "maxAttempts"
  ),
  constraint email_operations_payload_object_check check (
    jsonb_typeof("payload") = 'object'
  ),
  constraint email_operations_zoho_response_object_check check (
    jsonb_typeof("zohoResponse") = 'object'
  ),
  constraint email_operations_idempotency_unique unique ("idempotencyKey")
);

comment on table public."emailOperations" is
  'Reliable server-side outbox for Zoho mutations. Workers should claim pending rows with FOR UPDATE SKIP LOCKED.';

create index email_operations_account_idx
  on public."emailOperations" ("accountId", "createdAt" desc);
create index email_operations_actor_idx
  on public."emailOperations" ("actorId", "createdAt" desc)
  where "actorId" is not null;
create index email_operations_pending_idx
  on public."emailOperations" ("scheduledAt", "createdAt")
  where "status" = 'pending';
create index email_operations_target_idx
  on public."emailOperations" ("accountId", "targetType", "targetZohoId")
  where "targetZohoId" is not null;

create table public."emailAuditEvents" (
  "id" uuid primary key default gen_random_uuid(),
  "accountId" uuid not null references public."emailAccounts" ("id") on delete restrict,
  "actorId" uuid references public.users ("id") on delete set null,
  "action" text not null,
  "entityType" text not null,
  "entityId" text,
  "requestId" text,
  "ipAddress" inet,
  "metadata" jsonb not null default '{}'::jsonb,
  "createdAt" timestamptz not null default now(),
  constraint email_audit_events_metadata_object_check check (
    jsonb_typeof("metadata") = 'object'
  )
);

comment on table public."emailAuditEvents" is
  'Append-only audit trail for privileged email reads, writes, exports, downloads, and synchronization actions.';

create index email_audit_events_account_created_idx
  on public."emailAuditEvents" ("accountId", "createdAt" desc);
create index email_audit_events_actor_created_idx
  on public."emailAuditEvents" ("actorId", "createdAt" desc)
  where "actorId" is not null;
create index email_audit_events_entity_idx
  on public."emailAuditEvents" ("entityType", "entityId", "createdAt" desc)
  where "entityId" is not null;

create trigger email_accounts_set_updated_at
before update on public."emailAccounts"
for each row execute function private.set_email_updated_at();

create trigger email_identities_set_updated_at
before update on public."emailIdentities"
for each row execute function private.set_email_updated_at();

create trigger email_folders_set_updated_at
before update on public."emailFolders"
for each row execute function private.set_email_updated_at();

create trigger email_labels_set_updated_at
before update on public."emailLabels"
for each row execute function private.set_email_updated_at();

create trigger email_threads_set_updated_at
before update on public."emailThreads"
for each row execute function private.set_email_updated_at();

create trigger email_messages_set_updated_at
before update on public."emailMessages"
for each row execute function private.set_email_updated_at();

create trigger email_attachments_set_updated_at
before update on public."emailAttachments"
for each row execute function private.set_email_updated_at();

create trigger email_drafts_set_updated_at
before update on public."emailDrafts"
for each row execute function private.set_email_updated_at();

create trigger email_sync_states_set_updated_at
before update on public."emailSyncStates"
for each row execute function private.set_email_updated_at();

create trigger email_operations_set_updated_at
before update on public."emailOperations"
for each row execute function private.set_email_updated_at();

alter table public."emailAccounts" enable row level security;
alter table public."emailIdentities" enable row level security;
alter table public."emailFolders" enable row level security;
alter table public."emailLabels" enable row level security;
alter table public."emailThreads" enable row level security;
alter table public."emailMessages" enable row level security;
alter table public."emailRecipients" enable row level security;
alter table public."emailMessageLabels" enable row level security;
alter table public."emailAttachments" enable row level security;
alter table public."emailDrafts" enable row level security;
alter table public."emailSyncStates" enable row level security;
alter table public."emailSyncRuns" enable row level security;
alter table public."emailOperations" enable row level security;
alter table public."emailAuditEvents" enable row level security;

alter table public."emailAccounts" force row level security;
alter table public."emailIdentities" force row level security;
alter table public."emailFolders" force row level security;
alter table public."emailLabels" force row level security;
alter table public."emailThreads" force row level security;
alter table public."emailMessages" force row level security;
alter table public."emailRecipients" force row level security;
alter table public."emailMessageLabels" force row level security;
alter table public."emailAttachments" force row level security;
alter table public."emailDrafts" force row level security;
alter table public."emailSyncStates" force row level security;
alter table public."emailSyncRuns" force row level security;
alter table public."emailOperations" force row level security;
alter table public."emailAuditEvents" force row level security;

revoke all on table public."emailAccounts" from anon, authenticated;
revoke all on table public."emailIdentities" from anon, authenticated;
revoke all on table public."emailFolders" from anon, authenticated;
revoke all on table public."emailLabels" from anon, authenticated;
revoke all on table public."emailThreads" from anon, authenticated;
revoke all on table public."emailMessages" from anon, authenticated;
revoke all on table public."emailRecipients" from anon, authenticated;
revoke all on table public."emailMessageLabels" from anon, authenticated;
revoke all on table public."emailAttachments" from anon, authenticated;
revoke all on table public."emailDrafts" from anon, authenticated;
revoke all on table public."emailSyncStates" from anon, authenticated;
revoke all on table public."emailSyncRuns" from anon, authenticated;
revoke all on table public."emailOperations" from anon, authenticated;
revoke all on table public."emailAuditEvents" from anon, authenticated;

grant usage on schema public to service_role;
grant select, insert, update, delete on table
  public."emailAccounts",
  public."emailIdentities",
  public."emailFolders",
  public."emailLabels",
  public."emailThreads",
  public."emailMessages",
  public."emailRecipients",
  public."emailMessageLabels",
  public."emailAttachments",
  public."emailDrafts",
  public."emailSyncStates",
  public."emailSyncRuns",
  public."emailOperations"
to service_role;

grant select, insert on table public."emailAuditEvents" to service_role;

commit;
