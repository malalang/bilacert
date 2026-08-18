-- Public table definitions cloned from the live Bilacert Supabase project.

create table public.blog_posts (
  id varchar(255) not null,
  title varchar(255) not null,
  slug varchar(255) not null,
  excerpt text,
  content text not null,
  category varchar(100),
  tags varchar(500),
  "readTime" varchar(50),
  "seoTitle" varchar(255),
  "seoDescription" varchar(500),
  "seoKeywords" varchar(500),
  "featuredImage" varchar(500),
  thumbnail varchar(500),
  published boolean default false,
  "publishedAt" timestamp without time zone,
  featured boolean default false,
  "authorId" uuid,
  "authorName" varchar(255),
  "viewsCount" integer default 0,
  "createdAt" timestamp without time zone default now(),
  "updatedAt" timestamp without time zone default now()
);

create table public.contacts (
  id uuid not null default gen_random_uuid(),
  email text not null,
  name text,
  phone text,
  service text,
  message text,
  "submittedAt" timestamptz not null default now()
);

create table public.users (
  id uuid not null,
  email varchar(255) not null,
  "firstName" varchar(255),
  "lastName" varchar(255),
  role varchar(50) not null default 'user',
  phone varchar(20),
  company varchar(255),
  "profileImage" varchar(500),
  bio text,
  "isActive" boolean default true,
  "createdAt" timestamp without time zone default now(),
  "updatedAt" timestamp without time zone default now(),
  "createdBy" uuid,
  "updatedBy" uuid
);

create table public.services (
  id uuid not null default gen_random_uuid(),
  title text not null,
  slug text not null,
  href text not null,
  category text,
  description text,
  "shortDescription" text,
  icon text,
  "orderIndex" integer,
  content text,
  features text[],
  requirements text[],
  includes text[],
  published boolean default true,
  featured boolean default false,
  "createdAt" timestamptz default now(),
  "processingTime" text,
  pricing numeric,
  image text,
  thumbnail text,
  "seoTitle" text,
  "seoDescription" text,
  "seoKeywords" text,
  "pricingPlans" jsonb,
  "processSteps" jsonb,
  "successStory" jsonb,
  "updatedAt" timestamptz
);

create table public.testimonials (
  id uuid not null default gen_random_uuid(),
  "postUrl" text not null,
  "createdAt" timestamptz default now()
);

create table public.form_submissions (
  id uuid not null default gen_random_uuid(),
  "formType" varchar(50) not null,
  status varchar(50) not null default 'pending',
  "serviceId" uuid,
  "serviceName" varchar(255),
  "fullName" varchar(255) not null,
  email varchar(255) not null,
  phone varchar(20),
  company varchar(255),
  industry varchar(100),
  details jsonb,
  "internalNotes" text,
  "assignedTo" uuid,
  "createdAt" timestamp without time zone default now(),
  "updatedAt" timestamp without time zone default now(),
  "completedAt" timestamp without time zone
);

create table public."emailAccounts" (
  id uuid not null default gen_random_uuid(),
  "zohoAccountId" text not null,
  "zohoUserId" text,
  "primaryEmailAddress" text not null,
  "displayName" text,
  "accountName" text,
  "timeZone" text,
  "apiBaseUrl" text not null default 'https://mail.zoho.com',
  "mailboxStatus" text,
  status text not null default 'pending',
  "isEnabled" boolean not null default true,
  "lastSyncedAt" timestamptz,
  "lastSuccessfulSyncAt" timestamptz,
  "providerData" jsonb not null default '{}',
  "createdBy" uuid,
  "updatedBy" uuid,
  "createdAt" timestamptz not null default now(),
  "updatedAt" timestamptz not null default now()
);

create table public."emailIdentities" (
  id uuid not null default gen_random_uuid(),
  "accountId" uuid not null,
  "zohoSendMailId" text,
  "emailAddress" text not null,
  "displayName" text,
  "isPrimary" boolean not null default false,
  "isDefault" boolean not null default false,
  "isAlias" boolean not null default false,
  "isConfirmed" boolean not null default false,
  "isEnabled" boolean not null default true,
  "providerData" jsonb not null default '{}',
  "createdAt" timestamptz not null default now(),
  "updatedAt" timestamptz not null default now()
);

create table public."emailFolders" (
  id uuid not null default gen_random_uuid(),
  "accountId" uuid not null,
  "zohoFolderId" text not null,
  "previousZohoFolderId" text,
  name text not null,
  path text not null,
  "folderType" text not null,
  "isArchived" boolean not null default false,
  "imapAccess" boolean,
  "messageCount" integer not null default 0,
  "unreadCount" integer not null default 0,
  "isActive" boolean not null default true,
  "lastSyncedAt" timestamptz,
  "providerData" jsonb not null default '{}',
  "createdAt" timestamptz not null default now(),
  "updatedAt" timestamptz not null default now()
);

create table public."emailLabels" (
  id uuid not null default gen_random_uuid(),
  "accountId" uuid not null,
  "zohoLabelId" text not null,
  "displayName" text not null,
  color text,
  sequence integer,
  "isActive" boolean not null default true,
  "providerData" jsonb not null default '{}',
  "createdAt" timestamptz not null default now(),
  "updatedAt" timestamptz not null default now()
);

create table public."emailThreads" (
  id uuid not null default gen_random_uuid(),
  "accountId" uuid not null,
  "zohoThreadId" text not null,
  subject text not null default '',
  snippet text,
  participants jsonb not null default '[]',
  "messageCount" integer not null default 0,
  "unreadCount" integer not null default 0,
  "hasAttachments" boolean not null default false,
  "firstMessageAt" timestamptz,
  "lastMessageAt" timestamptz,
  "lastSyncedAt" timestamptz,
  "providerData" jsonb not null default '{}',
  "createdAt" timestamptz not null default now(),
  "updatedAt" timestamptz not null default now()
);

create table public."emailMessages" (
  id uuid not null default gen_random_uuid(),
  "accountId" uuid not null,
  "folderId" uuid,
  "threadId" uuid,
  "zohoMessageId" text not null,
  "internetMessageId" text,
  "inReplyTo" text,
  "referencesHeader" text,
  direction text not null default 'unknown',
  "senderName" text,
  "fromAddress" text,
  "replyToAddress" text,
  subject text not null default '',
  snippet text,
  "htmlContent" text,
  "textContent" text,
  "mailFormat" text,
  "sentAt" timestamptz,
  "receivedAt" timestamptz,
  priority smallint,
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
  "providerData" jsonb not null default '{}',
  "searchVector" tsvector default (((setweight(to_tsvector('simple', coalesce(subject, '')), 'A') || setweight(to_tsvector('simple', coalesce("fromAddress", '')), 'B')) || setweight(to_tsvector('simple', coalesce(snippet, '')), 'C')) || setweight(to_tsvector('simple', coalesce("textContent", '')), 'D')),
  "createdAt" timestamptz not null default now(),
  "updatedAt" timestamptz not null default now()
);

create table public."emailRecipients" (
  id uuid not null default gen_random_uuid(),
  "messageId" uuid not null,
  "recipientType" text not null,
  "emailAddress" text not null,
  "displayName" text,
  "sortOrder" integer not null default 0,
  "createdAt" timestamptz not null default now()
);

create table public."emailAttachments" (
  id uuid not null default gen_random_uuid(),
  "messageId" uuid not null,
  "zohoAttachmentId" text not null,
  "fileName" text not null,
  "mimeType" text,
  "sizeInBytes" bigint not null default 0,
  "contentId" text,
  disposition text,
  "isInline" boolean not null default false,
  "storageBucket" text,
  "storagePath" text,
  "checksumSha256" text,
  "downloadedAt" timestamptz,
  "providerData" jsonb not null default '{}',
  "createdAt" timestamptz not null default now(),
  "updatedAt" timestamptz not null default now()
);

create table public."emailMessageLabels" (
  "messageId" uuid not null,
  "labelId" uuid not null,
  "createdAt" timestamptz not null default now()
);

create table public."emailDrafts" (
  id uuid not null default gen_random_uuid(),
  "accountId" uuid not null,
  "zohoMessageId" text,
  "createdBy" uuid,
  "fromAddress" text not null,
  "toRecipients" jsonb not null default '[]',
  "ccRecipients" jsonb not null default '[]',
  "bccRecipients" jsonb not null default '[]',
  subject text not null default '',
  "htmlContent" text,
  "textContent" text,
  "mailFormat" text not null default 'html',
  "askReceipt" boolean not null default false,
  "inReplyTo" text,
  "referencesHeader" text,
  "replyToMessageId" uuid,
  "forwardOfMessageId" uuid,
  status text not null default 'local',
  "scheduledAt" timestamptz,
  "lastAutosavedAt" timestamptz not null default now(),
  "lastError" text,
  "providerData" jsonb not null default '{}',
  "createdAt" timestamptz not null default now(),
  "updatedAt" timestamptz not null default now()
);

create table public."emailSyncStates" (
  id uuid not null default gen_random_uuid(),
  "accountId" uuid not null,
  "folderId" uuid,
  "resourceType" text not null,
  "scopeKey" text not null,
  status text not null default 'idle',
  "nextStart" integer not null default 1,
  "pageSize" integer not null default 200,
  "lastReceivedAt" timestamptz,
  checkpoint jsonb not null default '{}',
  "lastAttemptAt" timestamptz,
  "lastSuccessAt" timestamptz,
  "nextSyncAt" timestamptz,
  "lastError" text,
  "lockedAt" timestamptz,
  "lockedBy" text,
  "createdAt" timestamptz not null default now(),
  "updatedAt" timestamptz not null default now()
);

create table public."emailSyncRuns" (
  id uuid not null default gen_random_uuid(),
  "accountId" uuid not null,
  "syncStateId" uuid,
  "syncType" text not null,
  status text not null default 'running',
  "fetchedCount" integer not null default 0,
  "createdCount" integer not null default 0,
  "updatedCount" integer not null default 0,
  "deletedCount" integer not null default 0,
  "errorCount" integer not null default 0,
  "startedAt" timestamptz not null default now(),
  "finishedAt" timestamptz,
  "errorMessage" text,
  "errorDetails" jsonb not null default '{}',
  metadata jsonb not null default '{}',
  "createdAt" timestamptz not null default now()
);

create table public."emailOperations" (
  id uuid not null default gen_random_uuid(),
  "accountId" uuid not null,
  "actorId" uuid,
  "operationType" text not null,
  "targetType" text,
  "targetZohoId" text,
  payload jsonb not null default '{}',
  "idempotencyKey" text not null default gen_random_uuid()::text,
  status text not null default 'pending',
  attempts integer not null default 0,
  "maxAttempts" integer not null default 5,
  "scheduledAt" timestamptz not null default now(),
  "lockedAt" timestamptz,
  "lockedBy" text,
  "startedAt" timestamptz,
  "completedAt" timestamptz,
  "zohoResponse" jsonb not null default '{}',
  "lastError" text,
  "createdAt" timestamptz not null default now(),
  "updatedAt" timestamptz not null default now()
);

create table public."emailAuditEvents" (
  id uuid not null default gen_random_uuid(),
  "accountId" uuid not null,
  "actorId" uuid,
  action text not null,
  "entityType" text not null,
  "entityId" text,
  "requestId" text,
  "ipAddress" inet,
  metadata jsonb not null default '{}',
  "createdAt" timestamptz not null default now()
);
