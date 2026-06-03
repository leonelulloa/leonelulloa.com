# Migrate leonelulloa.com to Vercel + de-server the codebase

**Date:** 2026-06-03
**Author:** Leonel Ulloa (with Claude)
**Status:** Approved — ready for implementation

## Context

Leo is shutting down both Hetzner servers (cost reduction). Server 1 hosted the
website + n8n + Remotion + Browserless + Coolify; Server 2 hosted Postiz +
Temporal + Elasticsearch + Redis. **Scope decision: website only.** The entire
automation pipeline (27 n8n workflows, Remotion renderer, Postiz) is accepted to
go dark. This spec covers moving the public website to Vercel and removing the
code that depends on the now-dead servers.

## Key facts

- Website is Next.js 16, self-contained, already a GitHub repo
  (`github.com/leonelulloa/leonelulloa.com`, branch `master`).
- Only runtime dependencies are managed services that survive the shutdown:
  **Supabase** (project `ccoqtxilagssjtgnwqff` — its own, separate from the
  pipeline's `cfcifejvrztahhwhuocu`) and **Resend** (email).
- No website feature *requires* the Hetzner boxes. Two features *monitor* them
  and will misbehave once they're gone.

## Decisions

1. **Scope:** website only; pipeline goes dark.
2. **Monitoring code:** remove entirely.
3. **Portfolio pipeline case study:** convert to an honest case study (past
   tense, static snapshot, no dead links) — keep it as portfolio proof.
4. **Deploy:** Vercel via GitHub integration (auto-deploy on push), then DNS
   cutover on Cloudflare. Branch → preview deploy → verify → merge to master →
   production → cut DNS → shut down servers.

## Code changes

### Bucket A — delete (server monitoring)

| File | Action |
|---|---|
| `src/app/status/page.tsx` + `src/app/status/StatusClient.tsx` | Delete folder |
| `src/app/api/health/route.ts` | Delete |
| `src/app/api/health/monitor/route.ts` | Delete |
| `src/app/api/telegram/route.ts` | Delete |
| `src/app/api/infrastructure/route.ts` | Delete |
| `src/middleware.ts` | Remove the `pathname.startsWith("/status")` skip |
| `next.config.ts` | Remove `output: "standalone"` (Docker-only) |

### Bucket B — reframe to honest case study

- `src/app/portfolio/pipeline/page.tsx`:
  - Hero subtitle "… · Live · Running Daily" → builder/past framing.
  - "This data is live from the actual servers." → production-snapshot wording.
  - Remove the `/status` link button.
  - Replace the "Verify It Yourself" dead-endpoint links (`/api/health`,
    `/api/infrastructure`, `/status`) — keep the real proof screenshots already
    on the page.
- `src/app/portfolio/pipeline/InfraDashboard.tsx`: replace the live
  `fetch("/api/infrastructure")` with a **static snapshot** rendering the same
  final numbers (servers, containers, $43/mo, counts), same visual design, no
  network call. "LIVE" badge → "Production snapshot".
- `src/app/portfolio/page.tsx`: "live · running daily" badge → past tense.
- `src/app/resume/page.tsx`: "(live, running daily)" → "(built & operated)".

### Bucket C — no change

Tech-keyword mentions (n8n/Remotion/etc. as skills) in `photoai/page.tsx`,
`TechMarquee.tsx`, `PipelineVisual.tsx`, `terms/page.tsx`, `prompts.ts`,
`responsive.css` stay — they remain true.

## Deployment + DNS runbook

1. Make code changes on a branch, push → Vercel builds a **preview** deploy.
2. Set Production env vars in Vercel: `NEXT_PUBLIC_SUPABASE_URL`,
   `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`,
   `RESEND_API_KEY`, `ADMIN_SECRET`, `EMAIL_FROM`, `SITE_URL`.
   **Drop** obsolete: `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`, `CRON_SECRET`,
   `N8N_HEALTH_URL`, `POSTIZ_HEALTH_URL`.
3. Verify on the `*.vercel.app` preview URL.
4. Merge to `master` → production deploy.
5. Add custom domain `leonelulloa.com` in Vercel; set the A/CNAME it provides on
   Cloudflare. Delete dead `n8n.` and `postiz.` DNS records.
6. Verify production on the real domain. **Then** shut down the servers.

## Verification

- `npm run build` passes after deletions (catches dangling imports/links).
- `npm run test` (vitest) passes; confirm no test references deleted routes.
- Smoke test on preview URL: newsletter signup, ebook download, prompt unlock,
  `/en` + `/es` redirect, reframed portfolio pages.

## Out of scope

- Migrating any automation (n8n/Remotion/Postiz) — explicitly abandoned.
- Changes to Supabase or Resend.
