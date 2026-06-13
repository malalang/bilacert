-- Bilacert database rename plan
--
-- Purpose:
-- Track the planned snake_case -> camelCase database column migration for Bilacert.
--
-- IMPORTANT:
-- This file is a migration plan, not an automatically safe production migration.
-- Review every statement before running it against a live database.
-- After applying these renames, regenerate Supabase types with:
--
--   pnpm supabase:types
--
-- Then update all application code, queries, mutations, schemas, forms, and domain types
-- to use the new camelCase column names.
--
-- Recommended workflow:
-- 1. Apply these renames in a development Supabase project first.
-- 2. Regenerate packages/supabase/src/supabaseType.ts.
-- 3. Update all application code from snake_case to camelCase.
-- 4. Run pnpm lint:fix and pnpm lint.
-- 5. Deploy to Vercel and inspect deployment logs.
-- 6. Only then apply to production.

BEGIN;

-- public.users
ALTER TABLE public.users RENAME COLUMN first_name TO firstName;
ALTER TABLE public.users RENAME COLUMN last_name TO lastName;
ALTER TABLE public.users RENAME COLUMN profile_image TO profileImage;
ALTER TABLE public.users RENAME COLUMN created_by TO createdBy;
ALTER TABLE public.users RENAME COLUMN updated_by TO updatedBy;
ALTER TABLE public.users RENAME COLUMN is_active TO isActive;
ALTER TABLE public.users RENAME COLUMN created_at TO createdAt;
ALTER TABLE public.users RENAME COLUMN updated_at TO updatedAt;

-- public.form_submissions
ALTER TABLE public.form_submissions RENAME COLUMN form_type TO formType;
ALTER TABLE public.form_submissions RENAME COLUMN service_id TO serviceId;
ALTER TABLE public.form_submissions RENAME COLUMN service_name TO serviceName;
ALTER TABLE public.form_submissions RENAME COLUMN full_name TO fullName;
ALTER TABLE public.form_submissions RENAME COLUMN internal_notes TO internalNotes;
ALTER TABLE public.form_submissions RENAME COLUMN assigned_to TO assignedTo;
ALTER TABLE public.form_submissions RENAME COLUMN completed_at TO completedAt;
ALTER TABLE public.form_submissions RENAME COLUMN created_at TO createdAt;
ALTER TABLE public.form_submissions RENAME COLUMN updated_at TO updatedAt;

-- public.contacts
ALTER TABLE public.contacts RENAME COLUMN submitted_at TO submittedAt;

-- public.services
ALTER TABLE public.services RENAME COLUMN updated_at TO updatedAt;
ALTER TABLE public.services RENAME COLUMN short_description TO shortDescription;
ALTER TABLE public.services RENAME COLUMN order_index TO orderIndex;
ALTER TABLE public.services RENAME COLUMN processing_time TO processingTime;
ALTER TABLE public.services RENAME COLUMN seo_title TO seoTitle;
ALTER TABLE public.services RENAME COLUMN seo_description TO seoDescription;
ALTER TABLE public.services RENAME COLUMN seo_keywords TO seoKeywords;
ALTER TABLE public.services RENAME COLUMN pricing_plans TO pricingPlans;
ALTER TABLE public.services RENAME COLUMN process_steps TO processSteps;
ALTER TABLE public.services RENAME COLUMN success_story TO successStory;
ALTER TABLE public.services RENAME COLUMN created_at TO createdAt;

-- public.testimonials
ALTER TABLE public.testimonials RENAME COLUMN post_url TO postUrl;
ALTER TABLE public.testimonials RENAME COLUMN created_at TO createdAt;

-- public.blog_posts
ALTER TABLE public.blog_posts RENAME COLUMN read_time TO readTime;
ALTER TABLE public.blog_posts RENAME COLUMN seo_title TO seoTitle;
ALTER TABLE public.blog_posts RENAME COLUMN seo_description TO seoDescription;
ALTER TABLE public.blog_posts RENAME COLUMN seo_keywords TO seoKeywords;
ALTER TABLE public.blog_posts RENAME COLUMN featured_image TO featuredImage;
ALTER TABLE public.blog_posts RENAME COLUMN published_at TO publishedAt;
ALTER TABLE public.blog_posts RENAME COLUMN author_id TO authorId;
ALTER TABLE public.blog_posts RENAME COLUMN author_name TO authorName;
ALTER TABLE public.blog_posts RENAME COLUMN views_count TO viewsCount;
ALTER TABLE public.blog_posts RENAME COLUMN created_at TO createdAt;
ALTER TABLE public.blog_posts RENAME COLUMN updated_at TO updatedAt;

COMMIT;
