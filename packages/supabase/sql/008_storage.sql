-- Storage buckets cloned from the live Bilacert Supabase project.
-- Bucket policies are intentionally reproduced exactly as currently configured.

insert into storage.buckets (id, name, public)
values
  ('blogs', 'blogs', true),
  ('services', 'services', true)
on conflict (id) do nothing;

create policy "Public read access for blog images"
on storage.objects
as permissive
for select
to public
using (bucket_id = 'blogs');

create policy "Public read access for service images"
on storage.objects
as permissive
for select
to public
using (bucket_id = 'services');

create policy "Authenticated users can upload blog images"
on storage.objects
as permissive
for insert
to public
with check (bucket_id = 'blogs');

create policy "Authenticated users can upload service images"
on storage.objects
as permissive
for insert
to public
with check (bucket_id = 'services');

create policy "Authenticated users can update blog images"
on storage.objects
as permissive
for update
to public
using (bucket_id = 'blogs');

create policy "Authenticated users can update service images"
on storage.objects
as permissive
for update
to public
using (bucket_id = 'services');

create policy "Authenticated users can delete blog images"
on storage.objects
as permissive
for delete
to public
using (bucket_id = 'blogs');

create policy "Authenticated users can delete service images"
on storage.objects
as permissive
for delete
to public
using (bucket_id = 'services');
