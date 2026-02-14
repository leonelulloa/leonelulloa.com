-- Add book column to prompt_events
-- Run this in your Supabase SQL Editor

ALTER TABLE prompt_events ADD COLUMN IF NOT EXISTS book text DEFAULT '';

CREATE INDEX IF NOT EXISTS idx_prompt_events_book ON prompt_events (book);
