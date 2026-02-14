-- Enrich newsletter_signups for full lead tracking
-- books: array of ebook IDs downloaded (e.g. ["ai-business-starter", "ai-sales-offers-starter"])
-- sources: array of lead sources (e.g. ["homepage", "ebook-download", "prompts"])
-- first_seen / last_seen: lifecycle timestamps

ALTER TABLE newsletter_signups
  ADD COLUMN IF NOT EXISTS books jsonb DEFAULT '[]'::jsonb,
  ADD COLUMN IF NOT EXISTS sources jsonb DEFAULT '[]'::jsonb,
  ADD COLUMN IF NOT EXISTS first_seen timestamptz DEFAULT now(),
  ADD COLUMN IF NOT EXISTS last_seen timestamptz DEFAULT now();
