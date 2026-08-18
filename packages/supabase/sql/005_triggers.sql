-- Triggers cloned from the live Bilacert Supabase project.

create trigger email_accounts_set_updated_at
before update on public."emailAccounts"
for each row execute function private.set_email_updated_at();

create trigger email_attachments_set_updated_at
before update on public."emailAttachments"
for each row execute function private.set_email_updated_at();

create trigger email_drafts_set_updated_at
before update on public."emailDrafts"
for each row execute function private.set_email_updated_at();

create trigger email_folders_set_updated_at
before update on public."emailFolders"
for each row execute function private.set_email_updated_at();

create trigger email_identities_set_updated_at
before update on public."emailIdentities"
for each row execute function private.set_email_updated_at();

create trigger email_labels_set_updated_at
before update on public."emailLabels"
for each row execute function private.set_email_updated_at();

create trigger email_messages_set_updated_at
before update on public."emailMessages"
for each row execute function private.set_email_updated_at();

create trigger email_operations_set_updated_at
before update on public."emailOperations"
for each row execute function private.set_email_updated_at();

create trigger email_sync_states_set_updated_at
before update on public."emailSyncStates"
for each row execute function private.set_email_updated_at();

create trigger email_threads_set_updated_at
before update on public."emailThreads"
for each row execute function private.set_email_updated_at();
