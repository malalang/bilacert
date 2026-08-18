# Bilacert Supabase SQL

This directory is a schema snapshot reconstructed from the live Bilacert Supabase project:

- Project ref: `zpgxnohxizcmuwbosapx`
- Repository: `malalang/bilacert`
- Snapshot date: 2026-08-18

## Files

| File | Purpose |
| --- | --- |
| `000_extensions.sql` | Verified database extensions and private schema |
| `001_tables.sql` | Public table definitions |
| `002_constraints.sql` | Primary keys, unique keys, checks and foreign keys |
| `003_indexes.sql` | Explicit indexes from `pg_indexes` |
| `004_functions.sql` | Public/private functions used by the schema |
| `005_triggers.sql` | Database triggers |
| `006_rls.sql` | RLS enabled/forced state |
| `007_policies.sql` | Public-schema RLS policies |
| `008_storage.sql` | Storage buckets and storage object policies |
| `009_views.sql` | Public view snapshot |
| `010_seed.sql` | Intentionally empty schema-only seed file |

## Important

This is a **schema clone**, not a production data dump. No user records, submissions, contacts, email contents, credentials, OAuth tokens, or other production data are committed here.

The SQL intentionally preserves the live RLS state. In particular, `form_submissions` and `services` currently have RLS disabled. Before exposing either table through the browser/client API, define and test appropriate policies.

The live project also contains a `public.increment_views(text)` function whose current production body references `views_count`, while the table column is `viewsCount`. That mismatch is preserved in `004_functions.sql` as part of the clone; it should be fixed separately as an application/database bug rather than silently changing the production snapshot.

## Recreating locally

For a clean Supabase database, apply the files in numeric order after the normal Supabase-managed schemas (`auth`, `storage`, etc.) have been initialized. The storage file expects Supabase Storage to be available.

For future changes, prefer normal Supabase migrations under `supabase/migrations` and keep this directory synchronized as a readable SQL source snapshot.
