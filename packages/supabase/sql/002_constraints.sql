-- Constraints, foreign keys, checks and unique keys cloned from the live schema.

alter table public.blog_posts add constraint blog_posts_pkey primary key (id);
alter table public.blog_posts add constraint blog_posts_id_key unique (id);
alter table public.blog_posts add constraint blog_posts_slug_key unique (slug);
alter table public.blog_posts add constraint blog_posts_author_id_fkey foreign key ("authorId") references public.users(id);
alter table public.blog_posts add constraint title_not_empty check (length(title::text) > 0);
alter table public.blog_posts add constraint slug_not_empty check (length(slug::text) > 0);
alter table public.blog_posts add constraint content_not_empty check (length(content) > 0);

alter table public.contacts add constraint contacts_pkey primary key (id);

alter table public.users add constraint users_pkey primary key (id);
alter table public.users add constraint users_email_key unique (email);
alter table public.users add constraint users_id_fkey foreign key (id) references auth.users(id) on delete cascade;
alter table public.users add constraint users_created_by_fkey foreign key ("createdBy") references public.users(id);
alter table public.users add constraint users_updated_by_fkey foreign key ("updatedBy") references public.users(id);
alter table public.users add constraint users_role_check check (role::text = any (array['admin','editor','user']::text[]));

alter table public.services add constraint services_pkey primary key (id);
alter table public.services add constraint services_slug_key unique (slug);

alter table public.testimonials add constraint testimonials_pkey primary key (id);

alter table public.form_submissions add constraint form_submissions_pkey primary key (id);
alter table public.form_submissions add constraint form_submissions_assigned_to_fkey foreign key ("assignedTo") references public.users(id);
alter table public.form_submissions add constraint form_submissions_form_type_check check ("formType"::text = any (array['service-inquiry','contact','class-ecs-ecns','icasa-type-approvals','license-exemptions','nrcs-loa','radio-dealer','ski-boat-vhf']::text[]));
alter table public.form_submissions add constraint form_submissions_status_check check (status::text = any (array['pending','in-progress','completed','rejected','archived']::text[]));
alter table public.form_submissions add constraint email_valid check (email::text ~ '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Z|a-z]{2,}$'::text);
alter table public.form_submissions add constraint name_not_empty check (length("fullName"::text) > 0);

alter table public."emailAccounts" add constraint "emailAccounts_pkey" primary key (id);
alter table public."emailAccounts" add constraint emailAccounts_createdBy_fkey foreign key ("createdBy") references public.users(id) on delete set null;
alter table public."emailAccounts" add constraint emailAccounts_updatedBy_fkey foreign key ("updatedBy") references public.users(id) on delete set null;
alter table public."emailAccounts" add constraint email_accounts_api_base_url_check check ("apiBaseUrl" ~ '^https://'::text);
alter table public."emailAccounts" add constraint email_accounts_provider_data_object_check check (jsonb_typeof("providerData") = 'object'::text);
alter table public."emailAccounts" add constraint email_accounts_status_check check (status = any (array['pending','active','paused','reauthorizationRequired','error']::text[]));
alter table public."emailAccounts" add constraint email_accounts_zoho_account_unique unique ("apiBaseUrl", "zohoAccountId");

alter table public."emailIdentities" add constraint "emailIdentities_pkey" primary key (id);
alter table public."emailIdentities" add constraint "emailIdentities_accountId_fkey" foreign key ("accountId") references public."emailAccounts"(id) on delete cascade;
alter table public."emailIdentities" add constraint email_identities_provider_data_object_check check (jsonb_typeof("providerData") = 'object'::text);

alter table public."emailFolders" add constraint "emailFolders_pkey" primary key (id);
alter table public."emailFolders" add constraint "emailFolders_accountId_fkey" foreign key ("accountId") references public."emailAccounts"(id) on delete cascade;
alter table public."emailFolders" add constraint email_folders_counts_check check ("messageCount" >= 0 and "unreadCount" >= 0 and "unreadCount" <= "messageCount");
alter table public."emailFolders" add constraint email_folders_path_unique unique ("accountId", path);
alter table public."emailFolders" add constraint email_folders_provider_data_object_check check (jsonb_typeof("providerData") = 'object'::text);
alter table public."emailFolders" add constraint email_folders_zoho_folder_unique unique ("accountId", "zohoFolderId");

alter table public."emailLabels" add constraint "emailLabels_pkey" primary key (id);
alter table public."emailLabels" add constraint "emailLabels_accountId_fkey" foreign key ("accountId") references public."emailAccounts"(id) on delete cascade;
alter table public."emailLabels" add constraint email_labels_color_check check (color is null or color ~ '^#[0-9A-Fa-f]{6}$'::text);
alter table public."emailLabels" add constraint email_labels_provider_data_object_check check (jsonb_typeof("providerData") = 'object'::text);
alter table public."emailLabels" add constraint email_labels_zoho_label_unique unique ("accountId", "zohoLabelId");

alter table public."emailThreads" add constraint "emailThreads_pkey" primary key (id);
alter table public."emailThreads" add constraint "emailThreads_accountId_fkey" foreign key ("accountId") references public."emailAccounts"(id) on delete cascade;
alter table public."emailThreads" add constraint email_threads_counts_check check ("messageCount" >= 0 and "unreadCount" >= 0 and "unreadCount" <= "messageCount");
alter table public."emailThreads" add constraint email_threads_dates_check check ("firstMessageAt" is null or "lastMessageAt" is null or "firstMessageAt" <= "lastMessageAt");
alter table public."emailThreads" add constraint email_threads_participants_array_check check (jsonb_typeof(participants) = 'array'::text);
alter table public."emailThreads" add constraint email_threads_provider_data_object_check check (jsonb_typeof("providerData") = 'object'::text);
alter table public."emailThreads" add constraint email_threads_zoho_thread_unique unique ("accountId", "zohoThreadId");

alter table public."emailMessages" add constraint "emailMessages_pkey" primary key (id);
alter table public."emailMessages" add constraint "emailMessages_accountId_fkey" foreign key ("accountId") references public."emailAccounts"(id) on delete cascade;
alter table public."emailMessages" add constraint "emailMessages_folderId_fkey" foreign key ("folderId") references public."emailFolders"(id) on delete set null;
alter table public."emailMessages" add constraint "emailMessages_threadId_fkey" foreign key ("threadId") references public."emailThreads"(id) on delete set null;
alter table public."emailMessages" add constraint email_messages_counts_check check ("attachmentCount" >= 0 and ("sizeInBytes" is null or "sizeInBytes" >= 0) and (priority is null or priority >= 0));
alter table public."emailMessages" add constraint email_messages_direction_check check (direction = any (array['inbound','outbound','draft','unknown']::text[]));
alter table public."emailMessages" add constraint email_messages_mail_format_check check ("mailFormat" is null or "mailFormat" = any (array['html','plaintext']::text[]));
alter table public."emailMessages" add constraint email_messages_provider_data_object_check check (jsonb_typeof("providerData") = 'object'::text);
alter table public."emailMessages" add constraint email_messages_zoho_message_unique unique ("accountId", "zohoMessageId");

alter table public."emailRecipients" add constraint "emailRecipients_pkey" primary key (id);
alter table public."emailRecipients" add constraint "emailRecipients_messageId_fkey" foreign key ("messageId") references public."emailMessages"(id) on delete cascade;
alter table public."emailRecipients" add constraint email_recipients_sort_order_check check ("sortOrder" >= 0);
alter table public."emailRecipients" add constraint email_recipients_type_check check ("recipientType" = any (array['to','cc','bcc','replyTo']::text[]));

alter table public."emailAttachments" add constraint "emailAttachments_pkey" primary key (id);
alter table public."emailAttachments" add constraint "emailAttachments_messageId_fkey" foreign key ("messageId") references public."emailMessages"(id) on delete cascade;
alter table public."emailAttachments" add constraint email_attachments_checksum_check check ("checksumSha256" is null or "checksumSha256" ~ '^[0-9A-Fa-f]{64}$'::text);
alter table public."emailAttachments" add constraint email_attachments_disposition_check check (disposition is null or disposition = any (array['attachment','inline']::text[]));
alter table public."emailAttachments" add constraint email_attachments_provider_data_object_check check (jsonb_typeof("providerData") = 'object'::text);
alter table public."emailAttachments" add constraint email_attachments_size_check check ("sizeInBytes" >= 0);
alter table public."emailAttachments" add constraint email_attachments_zoho_attachment_unique unique ("messageId", "zohoAttachmentId");

alter table public."emailMessageLabels" add constraint "emailMessageLabels_pkey" primary key ("messageId", "labelId");
alter table public."emailMessageLabels" add constraint "emailMessageLabels_messageId_fkey" foreign key ("messageId") references public."emailMessages"(id) on delete cascade;
alter table public."emailMessageLabels" add constraint "emailMessageLabels_labelId_fkey" foreign key ("labelId") references public."emailLabels"(id) on delete cascade;

alter table public."emailDrafts" add constraint "emailDrafts_pkey" primary key (id);
alter table public."emailDrafts" add constraint "emailDrafts_accountId_fkey" foreign key ("accountId") references public."emailAccounts"(id) on delete cascade;
alter table public."emailDrafts" add constraint "emailDrafts_createdBy_fkey" foreign key ("createdBy") references public.users(id) on delete set null;
alter table public."emailDrafts" add constraint "emailDrafts_replyToMessageId_fkey" foreign key ("replyToMessageId") references public."emailMessages"(id) on delete set null;
alter table public."emailDrafts" add constraint "emailDrafts_forwardOfMessageId_fkey" foreign key ("forwardOfMessageId") references public."emailMessages"(id) on delete set null;
alter table public."emailDrafts" add constraint email_drafts_to_recipients_array_check check (jsonb_typeof("toRecipients") = 'array'::text);
alter table public."emailDrafts" add constraint email_drafts_cc_recipients_array_check check (jsonb_typeof("ccRecipients") = 'array'::text);
alter table public."emailDrafts" add constraint email_drafts_bcc_recipients_array_check check (jsonb_typeof("bccRecipients") = 'array'::text);
alter table public."emailDrafts" add constraint email_drafts_mail_format_check check ("mailFormat" = any (array['html','plaintext']::text[]));
alter table public."emailDrafts" add constraint email_drafts_provider_data_object_check check (jsonb_typeof("providerData") = 'object'::text);
alter table public."emailDrafts" add constraint email_drafts_status_check check (status = any (array['local','syncing','saved','scheduled','sending','sent','failed','discarded']::text[]));

alter table public."emailSyncStates" add constraint "emailSyncStates_pkey" primary key (id);
alter table public."emailSyncStates" add constraint "emailSyncStates_accountId_fkey" foreign key ("accountId") references public."emailAccounts"(id) on delete cascade;
alter table public."emailSyncStates" add constraint "emailSyncStates_folderId_fkey" foreign key ("folderId") references public."emailFolders"(id) on delete cascade;
alter table public."emailSyncStates" add constraint email_sync_states_checkpoint_object_check check (jsonb_typeof(checkpoint) = 'object'::text);
alter table public."emailSyncStates" add constraint email_sync_states_pagination_check check ("nextStart" >= 1 and "pageSize" >= 1 and "pageSize" <= 200);
alter table public."emailSyncStates" add constraint email_sync_states_resource_type_check check ("resourceType" = any (array['accountMetadata','identities','folders','labels','messages']::text[]));
alter table public."emailSyncStates" add constraint email_sync_states_scope_unique unique ("accountId", "resourceType", "scopeKey");
alter table public."emailSyncStates" add constraint email_sync_states_status_check check (status = any (array['idle','running','paused','failed']::text[]));

alter table public."emailSyncRuns" add constraint "emailSyncRuns_pkey" primary key (id);
alter table public."emailSyncRuns" add constraint "emailSyncRuns_accountId_fkey" foreign key ("accountId") references public."emailAccounts"(id) on delete cascade;
alter table public."emailSyncRuns" add constraint "emailSyncRuns_syncStateId_fkey" foreign key ("syncStateId") references public."emailSyncStates"(id) on delete set null;
alter table public."emailSyncRuns" add constraint email_sync_runs_counts_check check ("fetchedCount" >= 0 and "createdCount" >= 0 and "updatedCount" >= 0 and "deletedCount" >= 0 and "errorCount" >= 0);
alter table public."emailSyncRuns" add constraint email_sync_runs_dates_check check ("finishedAt" is null or "finishedAt" >= "startedAt");
alter table public."emailSyncRuns" add constraint email_sync_runs_error_details_object_check check (jsonb_typeof("errorDetails") = 'object'::text);
alter table public."emailSyncRuns" add constraint email_sync_runs_metadata_object_check check (jsonb_typeof(metadata) = 'object'::text);
alter table public."emailSyncRuns" add constraint email_sync_runs_status_check check (status = any (array['running','succeeded','partial','failed','cancelled']::text[]));

alter table public."emailOperations" add constraint "emailOperations_pkey" primary key (id);
alter table public."emailOperations" add constraint "emailOperations_accountId_fkey" foreign key ("accountId") references public."emailAccounts"(id) on delete cascade;
alter table public."emailOperations" add constraint "emailOperations_actorId_fkey" foreign key ("actorId") references public.users(id) on delete set null;
alter table public."emailOperations" add constraint email_operations_attempts_check check (attempts >= 0 and "maxAttempts" > 0 and attempts <= "maxAttempts");
alter table public."emailOperations" add constraint email_operations_idempotency_unique unique ("idempotencyKey");
alter table public."emailOperations" add constraint email_operations_payload_object_check check (jsonb_typeof(payload) = 'object'::text);
alter table public."emailOperations" add constraint email_operations_status_check check (status = any (array['pending','processing','succeeded','failed','cancelled']::text[]));
alter table public."emailOperations" add constraint email_operations_target_type_check check ("targetType" is null or "targetType" = any (array['account','message','thread','draft','attachment']::text[]));
alter table public."emailOperations" add constraint email_operations_type_check check ("operationType" = any (array['send','saveDraft','reply','forward','markRead','markUnread','move','flag','unflag','addLabel','removeLabel','archive','unarchive','markSpam','markNotSpam','delete','downloadAttachment']::text[]));
alter table public."emailOperations" add constraint email_operations_zoho_response_object_check check (jsonb_typeof("zohoResponse") = 'object'::text);

alter table public."emailAuditEvents" add constraint "emailAuditEvents_pkey" primary key (id);
alter table public."emailAuditEvents" add constraint "emailAuditEvents_accountId_fkey" foreign key ("accountId") references public."emailAccounts"(id) on delete restrict;
alter table public."emailAuditEvents" add constraint "emailAuditEvents_actorId_fkey" foreign key ("actorId") references public.users(id) on delete set null;
alter table public."emailAuditEvents" add constraint email_audit_events_metadata_object_check check (jsonb_typeof(metadata) = 'object'::text);
