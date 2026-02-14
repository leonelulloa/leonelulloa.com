-- Add name column to newsletter_signups for ebook download lead capture
-- Nullable so existing rows and routes that don't collect name are unaffected
ALTER TABLE newsletter_signups ADD COLUMN IF NOT EXISTS name text DEFAULT NULL;
