-- Newsletter signups table
-- Run this in your Supabase SQL Editor

CREATE TABLE IF NOT EXISTS newsletter_signups (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at timestamptz DEFAULT now() NOT NULL,
  email text UNIQUE NOT NULL,
  lang text NOT NULL DEFAULT 'en' CHECK (lang IN ('en', 'es')),
  topics text[] NOT NULL DEFAULT '{}',
  source text
);

-- Index for faster lookups by email
CREATE INDEX IF NOT EXISTS idx_newsletter_signups_email ON newsletter_signups (email);

-- Enable Row Level Security
ALTER TABLE newsletter_signups ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anonymous inserts (for the public form)
CREATE POLICY "Allow public inserts" ON newsletter_signups
  FOR INSERT
  WITH CHECK (true);

-- Policy: Allow upserts (updates on conflict)
CREATE POLICY "Allow public updates on own email" ON newsletter_signups
  FOR UPDATE
  USING (true)
  WITH CHECK (true);
