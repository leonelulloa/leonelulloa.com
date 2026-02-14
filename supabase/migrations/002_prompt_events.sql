-- Prompt analytics events table
-- Run this in your Supabase SQL Editor

CREATE TABLE IF NOT EXISTS prompt_events (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at timestamptz DEFAULT now() NOT NULL,
  event text NOT NULL,
  prompt_id text NOT NULL,
  lang text NOT NULL DEFAULT 'en',
  source text
);

-- Index for faster analytics queries
CREATE INDEX IF NOT EXISTS idx_prompt_events_prompt_id ON prompt_events (prompt_id);
CREATE INDEX IF NOT EXISTS idx_prompt_events_event ON prompt_events (event);

-- Enable Row Level Security
ALTER TABLE prompt_events ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anonymous inserts (for tracking from the client)
CREATE POLICY "Allow public inserts" ON prompt_events
  FOR INSERT
  WITH CHECK (true);
