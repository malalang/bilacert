-- Indexes cloned from the live Bilacert Supabase project.

create unique index blog_posts_id_key on public.blog_posts using btree (id);
create unique index blog_posts_pkey on public.blog_posts using btree (id);
create unique index blog_posts_slug_key on public.blog_posts using btree (slug);
create index idx_blog_author on public.blog_posts using btree ("authorId");
create index idx_blog_category on public.blog_posts using btree (category);
create index idx_blog_created_at on public.blog_posts using btree ("createdAt" desc);
create index idx_blog_featured on public.blog_posts using btree (featured);
create index idx_blog_published on public.blog_posts using btree (published);
create index idx_blog_published_at on public.blog_posts using btree ("publishedAt" desc nulls last);
create index idx_blog_slug on public.blog_posts using btree (slug);

create unique index contacts_pkey on public.contacts using btree (id);

create unique index users_pkey on public.users using btree (id);
create unique index users_email_key on public.users using btree (email);
create index idx_users_active on public.users using btree ("isActive");
create index idx_users_email on public.users using btree (email);
create index idx_users_role on public.users using btree (role);

create unique index services_pkey on public.services using btree (id);
create unique index services_slug_key on public.services using btree (slug);
create unique index testimonials_pkey on public.testimonials using btree (id);
create unique index form_submissions_pkey on public.form_submissions using btree (id);
create index idx_submissions_assigned on public.form_submissions using btree ("assignedTo");
create index idx_submissions_created_at on public.form_submissions using btree ("createdAt" desc);
create index idx_submissions_email on public.form_submissions using btree (email);
create index idx_submissions_form_type on public.form_submissions using btree ("formType");
create index idx_submissions_service_id on public.form_submissions using btree ("serviceId");
create index idx_submissions_status on public.form_submissions using btree (status);

create unique index "emailAccounts_pkey" on public."emailAccounts" using btree (id);
create index email_accounts_active_sync_idx on public."emailAccounts" using btree ("lastSuccessfulSyncAt") where status = 'active' and "isEnabled";
create index email_accounts_created_by_idx on public."emailAccounts" using btree ("createdBy") where "createdBy" is not null;
create unique index email_accounts_primary_email_unique_idx on public."emailAccounts" using btree (lower("primaryEmailAddress"));
create index email_accounts_updated_by_idx on public."emailAccounts" using btree ("updatedBy") where "updatedBy" is not null;
create unique index email_accounts_zoho_account_unique on public."emailAccounts" using btree ("apiBaseUrl", "zohoAccountId");

create unique index "emailIdentities_pkey" on public."emailIdentities" using btree (id);
create unique index email_identities_account_address_unique_idx on public."emailIdentities" using btree ("accountId", lower("emailAddress"));
create index email_identities_enabled_idx on public."emailIdentities" using btree ("accountId", "isDefault" desc) where "isEnabled";
create unique index email_identities_one_default_idx on public."emailIdentities" using btree ("accountId") where "isDefault" and "isEnabled";
create unique index email_identities_zoho_send_mail_unique_idx on public."emailIdentities" using btree ("accountId", "zohoSendMailId") where "zohoSendMailId" is not null;

create unique index "emailFolders_pkey" on public."emailFolders" using btree (id);
create index email_folders_account_type_idx on public."emailFolders" using btree ("accountId", "folderType");
create index email_folders_active_idx on public."emailFolders" using btree ("accountId", name) where "isActive";
create unique index email_folders_path_unique on public."emailFolders" using btree ("accountId", path);
create unique index email_folders_zoho_folder_unique on public."emailFolders" using btree ("accountId", "zohoFolderId");

create unique index "emailLabels_pkey" on public."emailLabels" using btree (id);
create unique index email_labels_account_name_unique_idx on public."emailLabels" using btree ("accountId", lower("displayName"));
create index email_labels_active_sequence_idx on public."emailLabels" using btree ("accountId", sequence) where "isActive";
create unique index email_labels_zoho_label_unique on public."emailLabels" using btree ("accountId", "zohoLabelId");

create unique index "emailThreads_pkey" on public."emailThreads" using btree (id);
create index email_threads_account_latest_idx on public."emailThreads" using btree ("accountId", "lastMessageAt" desc nulls last);
create index email_threads_account_unread_idx on public."emailThreads" using btree ("accountId", "lastMessageAt" desc nulls last) where "unreadCount" > 0;
create unique index email_threads_zoho_thread_unique on public."emailThreads" using btree ("accountId", "zohoThreadId");

create unique index "emailMessages_pkey" on public."emailMessages" using btree (id);
create index email_messages_account_received_idx on public."emailMessages" using btree ("accountId", "receivedAt" desc nulls last);
create index email_messages_flagged_idx on public."emailMessages" using btree ("accountId", "receivedAt" desc nulls last) where "flagType" <> 'flag_not_set' and not "isDeleted";
create index email_messages_folder_received_idx on public."emailMessages" using btree ("folderId", "receivedAt" desc nulls last);
create index email_messages_internet_id_idx on public."emailMessages" using btree ("accountId", "internetMessageId") where "internetMessageId" is not null;
create index email_messages_search_idx on public."emailMessages" using gin ("searchVector");
create index email_messages_thread_received_idx on public."emailMessages" using btree ("threadId", "receivedAt") where "threadId" is not null;
create index email_messages_unread_idx on public."emailMessages" using btree ("folderId", "receivedAt" desc nulls last) where not "isRead" and not "isDeleted";
create unique index email_messages_zoho_message_unique on public."emailMessages" using btree ("accountId", "zohoMessageId");

create unique index "emailRecipients_pkey" on public."emailRecipients" using btree (id);
create index email_recipients_address_idx on public."emailRecipients" using btree (lower("emailAddress"));
create index email_recipients_message_idx on public."emailRecipients" using btree ("messageId", "recipientType", "sortOrder");

create unique index "emailAttachments_pkey" on public."emailAttachments" using btree (id);
create index email_attachments_message_idx on public."emailAttachments" using btree ("messageId", "isInline");
create index email_attachments_storage_idx on public."emailAttachments" using btree ("storageBucket", "storagePath") where "storagePath" is not null;
create unique index email_attachments_zoho_attachment_unique on public."emailAttachments" using btree ("messageId", "zohoAttachmentId");

create unique index "emailMessageLabels_pkey" on public."emailMessageLabels" using btree ("messageId", "labelId");
create index email_message_labels_label_idx on public."emailMessageLabels" using btree ("labelId", "messageId");

create unique index "emailDrafts_pkey" on public."emailDrafts" using btree (id);
create index email_drafts_account_status_idx on public."emailDrafts" using btree ("accountId", status, "updatedAt" desc);
create index email_drafts_created_by_idx on public."emailDrafts" using btree ("createdBy", "updatedAt" desc) where "createdBy" is not null;
create index email_drafts_forward_of_idx on public."emailDrafts" using btree ("forwardOfMessageId") where "forwardOfMessageId" is not null;
create index email_drafts_reply_to_idx on public."emailDrafts" using btree ("replyToMessageId") where "replyToMessageId" is not null;
create unique index email_drafts_zoho_message_unique_idx on public."emailDrafts" using btree ("accountId", "zohoMessageId") where "zohoMessageId" is not null;

create unique index "emailSyncStates_pkey" on public."emailSyncStates" using btree (id);
create index email_sync_states_due_idx on public."emailSyncStates" using btree ("nextSyncAt", "updatedAt") where status = any (array['idle','failed']::text[]);
create index email_sync_states_folder_idx on public."emailSyncStates" using btree ("folderId") where "folderId" is not null;
create unique index email_sync_states_scope_unique on public."emailSyncStates" using btree ("accountId", "resourceType", "scopeKey");

create unique index "emailSyncRuns_pkey" on public."emailSyncRuns" using btree (id);
create index email_sync_runs_account_started_idx on public."emailSyncRuns" using btree ("accountId", "startedAt" desc);
create index email_sync_runs_failures_idx on public."emailSyncRuns" using btree ("startedAt" desc) where status = any (array['partial','failed']::text[]);
create index email_sync_runs_state_started_idx on public."emailSyncRuns" using btree ("syncStateId", "startedAt" desc) where "syncStateId" is not null;

create unique index "emailOperations_pkey" on public."emailOperations" using btree (id);
create index email_operations_account_idx on public."emailOperations" using btree ("accountId", "createdAt" desc);
create index email_operations_actor_idx on public."emailOperations" using btree ("actorId", "createdAt" desc) where "actorId" is not null;
create unique index email_operations_idempotency_unique on public."emailOperations" using btree ("idempotencyKey");
create index email_operations_pending_idx on public."emailOperations" using btree ("scheduledAt", "createdAt") where status = 'pending';
create index email_operations_target_idx on public."emailOperations" using btree ("accountId", "targetType", "targetZohoId") where "targetZohoId" is not null;

create unique index "emailAuditEvents_pkey" on public."emailAuditEvents" using btree (id);
create index email_audit_events_account_created_idx on public."emailAuditEvents" using btree ("accountId", "createdAt" desc);
create index email_audit_events_actor_created_idx on public."emailAuditEvents" using btree ("actorId", "createdAt" desc) where "actorId" is not null;
create index email_audit_events_entity_idx on public."emailAuditEvents" using btree ("entityType", "entityId", "createdAt" desc) where "entityId" is not null;
