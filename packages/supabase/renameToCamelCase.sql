-- Bilacert quoted camelCase database rename migration
--
-- Purpose:
-- Rename the current lowercased PostgreSQL column names to true quoted camelCase.
--
-- Why this file exists:
-- PostgreSQL folds unquoted identifiers to lowercase. For example:
--
--   ALTER TABLE public.users RENAME COLUMN first_name TO firstName;
--
-- creates a column named:
--
--   firstname
--
-- not:
--
--   firstName
--
-- To create true camelCase identifiers, the target column name must be quoted:
--
--   ALTER TABLE public.users RENAME COLUMN firstname TO "firstName";
--
-- IMPORTANT:
-- Quoted camelCase database columns require quoted identifiers in raw SQL.
-- Supabase generated types will preserve the quoted camelCase names.
-- Review this migration carefully before running it against production.
--
-- After applying this migration, regenerate Supabase types:
--
--   pnpm supabase:types
--
-- Then update application code, queries, mutations, forms, schemas, and domain types
-- to use the generated camelCase fields consistently.

BEGIN;

-- public.users
ALTER TABLE public.users RENAME COLUMN firstname TO "firstName";
ALTER TABLE public.users RENAME COLUMN lastname TO "lastName";
ALTER TABLE public.users RENAME COLUMN profileimage TO "profileImage";
ALTER TABLE public.users RENAME COLUMN createdby TO "createdBy";
ALTER TABLE public.users RENAME COLUMN updatedby TO "updatedBy";
ALTER TABLE public.users RENAME COLUMN isactive TO "isActive";
ALTER TABLE public.users RENAME COLUMN createdat TO "createdAt";
ALTER TABLE public.users RENAME COLUMN updatedat TO "updatedAt";

-- public.form_submissions
ALTER TABLE public.form_submissions RENAME COLUMN formtype TO "formType";
ALTER TABLE public.form_submissions RENAME COLUMN serviceid TO "serviceId";
ALTER TABLE public.form_submissions RENAME COLUMN servicename TO "serviceName";
ALTER TABLE public.form_submissions RENAME COLUMN fullname TO "fullName";
ALTER TABLE public.form_submissions RENAME COLUMN internalnotes TO "internalNotes";
ALTER TABLE public.form_submissions RENAME COLUMN assignedto TO "assignedTo";
ALTER TABLE public.form_submissions RENAME COLUMN completedat TO "completedAt";
ALTER TABLE public.form_submissions RENAME COLUMN createdat TO "createdAt";
ALTER TABLE public.form_submissions RENAME COLUMN updatedat TO "updatedAt";

-- public.contacts
ALTER TABLE public.contacts RENAME COLUMN submittedat TO "submittedAt";

-- public.services
ALTER TABLE public.services RENAME COLUMN updatedat TO "updatedAt";
ALTER TABLE public.services RENAME COLUMN shortdescription TO "shortDescription";
ALTER TABLE public.services RENAME COLUMN orderindex TO "orderIndex";
ALTER TABLE public.services RENAME COLUMN processingtime TO "processingTime";
ALTER TABLE public.services RENAME COLUMN seotitle TO "seoTitle";
ALTER TABLE public.services RENAME COLUMN seodescription TO "seoDescription";
ALTER TABLE public.services RENAME COLUMN seokeywords TO "seoKeywords";
ALTER TABLE public.services RENAME COLUMN pricingplans TO "pricingPlans";
ALTER TABLE public.services RENAME COLUMN processsteps TO "processSteps";
ALTER TABLE public.services RENAME COLUMN successstory TO "successStory";
ALTER TABLE public.services RENAME COLUMN createdat TO "createdAt";

-- public.testimonials
ALTER TABLE public.testimonials RENAME COLUMN posturl TO "postUrl";
ALTER TABLE public.testimonials RENAME COLUMN createdat TO "createdAt";

-- public.blog_posts
ALTER TABLE public.blog_posts RENAME COLUMN readtime TO "readTime";
ALTER TABLE public.blog_posts RENAME COLUMN seotitle TO "seoTitle";
ALTER TABLE public.blog_posts RENAME COLUMN seodescription TO "seoDescription";
ALTER TABLE public.blog_posts RENAME COLUMN seokeywords TO "seoKeywords";
ALTER TABLE public.blog_posts RENAME COLUMN featuredimage TO "featuredImage";
ALTER TABLE public.blog_posts RENAME COLUMN publishedat TO "publishedAt";
ALTER TABLE public.blog_posts RENAME COLUMN authorid TO "authorId";
ALTER TABLE public.blog_posts RENAME COLUMN authorname TO "authorName";
ALTER TABLE public.blog_posts RENAME COLUMN viewscount TO "viewsCount";
ALTER TABLE public.blog_posts RENAME COLUMN createdat TO "createdAt";
ALTER TABLE public.blog_posts RENAME COLUMN updatedat TO "updatedAt";

COMMIT;
