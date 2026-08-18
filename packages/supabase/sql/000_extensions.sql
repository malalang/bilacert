-- Bilacert Supabase schema snapshot
-- Generated from Supabase project zpgxnohxizcmuwbosapx on 2026-08-18.

create extension if not exists pgcrypto with schema extensions;
create extension if not exists pg_trgm with schema extensions;
create extension if not exists vector with schema extensions;

create schema if not exists private;
