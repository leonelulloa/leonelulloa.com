# leonelulloa.com

Personal brand website for Leonel Ulloa — AI, Marketing & Business.

Built with Next.js 16, TypeScript, Tailwind CSS v4. Bilingual EN/ES with smart social links.

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — it will redirect to `/en` or `/es` based on your browser language.

## Environment Variables

Copy `.env.example` to `.env.local` and fill in your Supabase credentials:

```bash
cp .env.example .env.local
```

Required variables:

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon/public key |

## Supabase Setup

Run the SQL migration in your Supabase SQL Editor:

```
supabase/migrations/001_newsletter_signups.sql
```

This creates the `newsletter_signups` table for the newsletter form.

## Deploy to Cloudflare Pages

1. Connect the GitHub repo to Cloudflare Pages
2. Build settings:
   - **Framework preset:** Next.js
   - **Build command:** `npm run build`
   - **Output directory:** `.next`
3. Add environment variables in Cloudflare Pages settings:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Project Structure

```
src/
  app/
    [lang]/          # Bilingual routing (/en, /es)
      layout.tsx     # Per-language layout + SEO metadata
      page.tsx       # Homepage
    api/newsletter/  # Newsletter signup API
    globals.css      # All styling
    robots.ts        # robots.txt
    sitemap.ts       # sitemap.xml
  components/        # UI components
  config/
    copy.ts          # All bilingual copy
    social.ts        # Social links (language-aware)
  lib/
    supabase.ts      # Supabase client
  middleware.ts      # Language detection + redirect
supabase/
  migrations/        # SQL migrations
```
