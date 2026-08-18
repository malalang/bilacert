-- Functions cloned from the live Bilacert Supabase project.

create or replace function private.set_email_updated_at()
returns trigger
language plpgsql
set search_path to ''
as $$
begin
  new."updatedAt" = now();
  return new;
end;
$$;

create or replace function public.increment_views(post_slug text)
returns void
language plpgsql
security definer
as $$
begin
  update public.blog_posts
  set views_count = coalesce(views_count, 0) + 1
  where slug = post_slug;
end;
$$;
