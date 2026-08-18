-- RLS policies cloned from the live Bilacert Supabase project.

create policy "Enable insert for authenticated users only"
on public.blog_posts
as permissive
for insert
to authenticated
with check (true);

create policy "Enable read access for all users"
on public.blog_posts
as permissive
for select
to public
using (true);

create policy public_read_testimonials
on public.testimonials
as permissive
for select
to public
using (true);

create policy users_insert_own
on public.users
as permissive
for insert
to public
with check (auth.uid() = id);

create policy users_select_own
on public.users
as permissive
for select
to public
using (auth.uid() = id);

create policy users_update_own
on public.users
as permissive
for update
using (auth.uid() = id);

-- The live database currently has no policies on contacts, email tables,
-- form_submissions, or services. This file intentionally preserves that
-- exact state rather than inventing authorization rules.
