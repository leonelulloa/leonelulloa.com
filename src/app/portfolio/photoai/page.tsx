import type { Metadata } from "next";
import { FadeIn, PulseNode, GlobalStyles } from "../Interactions";

export const metadata: Metadata = {
  title: "PhotoAI Advantage 2.0 — Deep Dive | Leonel Ulloa",
  description: "Admin panel, security architecture, ad generation engine, database, cost engineering.",
  robots: { index: false, follow: false },
};

/* Visual Portfolio — Infographic Style */

const C = {
  bg: "#070a0f",
  card: "rgba(15, 23, 42, 0.5)",
  deep: "rgba(0,0,0,0.3)",
  border: "rgba(255,255,255,0.06)",
  text: "#e2e8f0",
  muted: "#94a3b8",
  dim: "#64748b",
  accent: "#7c5cff",
  accentGlow: "rgba(124,92,255,0.15)",
  teal: "#00d1b2",
  tealGlow: "rgba(0,209,178,0.12)",
  gold: "#fbbf24",
  green: "#22c55e",
  red: "#ef4444",
  blue: "#3b82f6",
  pink: "#ec4899",
  orange: "#f97316",
  mono: '"JetBrains Mono", "Fira Code", Consolas, monospace',
  sans: 'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
} as const;

const CAROUSEL = [
  "https://pub-6d2cb2e1eb2747bbbdfe232e94a7fac5.r2.dev/renders/2026/03/15/c4113aa6-31e1-45a2-9321-e65e74a7441e.png",
  "https://pub-6d2cb2e1eb2747bbbdfe232e94a7fac5.r2.dev/renders/2026/03/15/96931117-f591-4193-bcca-69ade5b3d21d.png",
  "https://pub-6d2cb2e1eb2747bbbdfe232e94a7fac5.r2.dev/renders/2026/03/15/991a6e2c-60a2-46dd-9c10-80c371c91a47.png",
  "https://pub-6d2cb2e1eb2747bbbdfe232e94a7fac5.r2.dev/renders/2026/03/15/9ee88b40-fe99-4093-b8f6-11c7c12fa9e9.png",
  "https://pub-6d2cb2e1eb2747bbbdfe232e94a7fac5.r2.dev/renders/2026/03/15/e288bac0-b8ab-4158-90ee-6fea6769dc19.png",
];

export default function PortfolioPage() {
  return (
    <div style={{ fontFamily: C.sans, color: C.text, background: C.bg, minHeight: "100vh" }}>
      <GlobalStyles />

      {/* ══════════ BREADCRUMB + BACK ══════════ */}
      <div style={{ padding: "16px 5%", borderBottom: `1px solid ${C.border}` }}>
        <a href="/portfolio" style={{ fontSize: 12, fontFamily: C.mono, color: C.muted, textDecoration: "none" }}>
          ← Back to Portfolio
        </a>
      </div>

      {/* ══════════════════════════════════════════════════════════
         PHOTOAI ADVANTAGE 2.0
         ══════════════════════════════════════════════════════════ */}
      <section style={{ padding: "60px 0" }}>
        {/* Section header — full width bar */}
        <div style={{ background: `linear-gradient(90deg, ${C.accent}15, transparent)`, borderTop: `1px solid ${C.accent}30`, borderBottom: `1px solid ${C.accent}30`, padding: "20px 5%", marginBottom: 48, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <h2 style={{ fontSize: 28, fontWeight: 700, margin: 0 }}>📱 PhotoAI Advantage 2.0</h2>
            <p style={{ fontSize: 14, color: C.muted, margin: "4px 0 0" }}>AI-Powered Ad Creation SaaS · Pre-launch</p>
          </div>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            {([["15,915", "files"], ["194", "routes"], ["114", "pages"], ["5", "languages"]] as const).map(([v, l]) => (
              <div key={l} style={{ textAlign: "right" }}>
                <span style={{ fontSize: 20, fontWeight: 700, fontFamily: C.mono, color: C.accent }}>{v}</span>
                <span style={{ fontSize: 11, color: C.muted, marginLeft: 4 }}>{l}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 5%" }}>
          <p style={{ fontSize: 16, color: C.muted, lineHeight: 1.7, margin: "0 0 40px", maxWidth: 800 }}>
            A full-stack AI platform that generates 6 ready-to-publish ad variants from a single product photo in under 60 seconds. No prompt needed — all information comes from the user forms. Our cost: ~$0.15 per generation (6 ads). The user gets editable text placement, colors, sizes, and effects. Agencies charge $200-500 per ad concept.
          </p>

          {/* ── 1. ADMIN PANEL — VISUAL INFOGRAPHIC ── */}
          <FadeIn><div style={{ marginBottom: 64 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
              <span style={{ width: 48, height: 48, borderRadius: "50%", background: `linear-gradient(135deg, ${C.accent}, ${C.pink})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>🏗️</span>
              <div>
                <h3 style={{ fontSize: 22, fontWeight: 700, margin: 0 }}>Admin Control Platform</h3>
                <p style={{ fontSize: 13, fontFamily: C.mono, color: C.muted, margin: 0 }}>67 pages · 93 API routes · built FIRST</p>
              </div>
            </div>

            <p style={{ fontSize: 14, color: C.muted, lineHeight: 1.7, margin: "0 0 24px", maxWidth: 700 }}>
              Built before the user-facing app. The operational backbone where marketing, finance, support, and product teams operate independently — without engineering tickets.
            </p>

            {/* ── DEEP-DIVE: 4 key features with 3-angle reasoning ── */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 24 }}>

              {/* 1. User Management */}
              <div className="hover-lift" style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 16, padding: 20, borderLeft: `4px solid ${C.blue}` }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                  <span style={{ fontSize: 22 }}>👥</span>
                  <h4 style={{ fontSize: 16, fontWeight: 700, margin: 0 }}>User Management</h4>
                </div>
                <p style={{ fontSize: 13, color: C.muted, lineHeight: 1.6, margin: "0 0 14px" }}>
                  Search by 10+ filters, credit operations with reason tracking, full activity history, suspend/reactivate with audit logging, internal notes, VIP segmentation.
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
                  <AngleTag icon="⚙️" label="Dev" color={C.teal}
                    text="No manual DB queries. Safe credit operations without touching SQL. One person operates the whole user base in seconds."
                  />
                  <AngleTag icon="📊" label="Business" color={C.gold}
                    text="See which countries spend most → target marketing budget. See usage vs subscription limit → spot upsell timing (user at 50% mid-month = personalized offer)."
                  />
                  <AngleTag icon="🎯" label="Marketing" color={C.pink}
                    text="Segment users by revenue, country, plan, risk score. Identify VIP accounts for retention campaigns. Spot churn risk before it happens."
                  />
                </div>
              </div>

              {/* 2. Seasonal Themes */}
              <div className="hover-lift" style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 16, padding: 20, borderLeft: `4px solid ${C.red}` }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                  <span style={{ fontSize: 22 }}>🎄</span>
                  <h4 style={{ fontSize: 16, fontWeight: 700, margin: 0 }}>Seasonal Themes</h4>
                </div>
                <p style={{ fontSize: 13, color: C.muted, lineHeight: 1.6, margin: "0 0 14px" }}>
                  Christmas, Valentine&#39;s, Easter, Halloween. 3 decoration levels (colors → particles → animations). Per-page control. Auto-scheduling. Multi-country support — different themes for different markets simultaneously.
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
                  <AngleTag icon="⚙️" label="Dev" color={C.teal}
                    text="Built at the start because retrofitting CSS theming across 70+ pages later costs 10× more. Per-page level control (no decorations on checkout). Set once, runs every year."
                  />
                  <AngleTag icon="📊" label="Business" color={C.gold}
                    text="Different countries celebrate different holidays → Mexico, US, UK can each see their own seasonal theme simultaneously. Multi-market from day 1, not a retrofit."
                  />
                  <AngleTag icon="🎯" label="Marketing" color={C.pink}
                    text="We are a visual platform that generates images. Premium visual feel is not optional — it's mandatory. Users see seasonal themes and think 'they know what they're doing.' Trust → retention → revenue."
                  />
                </div>
              </div>

              {/* 3. Error Monitoring */}
              <div className="hover-lift" style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 16, padding: 20, borderLeft: `4px solid ${C.orange}` }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                  <span style={{ fontSize: 22 }}>🐛</span>
                  <h4 style={{ fontSize: 16, fontWeight: 700, margin: 0 }}>Error Monitoring</h4>
                  <span style={{ fontSize: 10, fontFamily: C.mono, background: `${C.orange}20`, color: C.orange, padding: "2px 8px", borderRadius: 6 }}>built vs. Sentry</span>
                </div>
                <p style={{ fontSize: 13, color: C.muted, lineHeight: 1.6, margin: "0 0 14px" }}>
                  Fingerprint grouping (deduplicate), deploy-aware analysis (&#34;new since last deploy&#34;), flood protection (10 err/min cap), exact file + line failure, payload sanitization.
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
                  <AngleTag icon="⚙️" label="Dev" color={C.teal}
                    text="Exact code location on failure → debug in minutes, not hours. 'New since last deploy' counter catches regressions immediately. Built-in flood protection prevents log explosion."
                  />
                  <AngleTag icon="📊" label="Business" color={C.gold}
                    text="Why not Sentry? $26/mo at scale + external dependency + data leaves your infrastructure. Custom = $0/mo, integrated with our deploy pipeline, we control the data. Build cost < 1 year of Sentry."
                  />
                  <AngleTag icon="🎯" label="Marketing" color={C.pink}
                    text="Every hour of downtime = lost users. Fast debug = less downtime = users never see broken features for long. Reliability builds trust."
                  />
                </div>
              </div>

              {/* 4. Promotion Engine */}
              <div className="hover-lift" style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 16, padding: 20, borderLeft: `4px solid ${C.pink}` }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                  <span style={{ fontSize: 22 }}>🎯</span>
                  <h4 style={{ fontSize: 16, fontWeight: 700, margin: 0 }}>Promotion Engine</h4>
                </div>
                <p style={{ fontSize: 13, color: C.muted, lineHeight: 1.6, margin: "0 0 14px" }}>
                  Full lifecycle (draft → pending → approved → active → expired). Founder approval gate. Bulk coupon generation. Referral programs. ROI tracking per promotion.
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
                  <AngleTag icon="⚙️" label="Dev" color={C.teal}
                    text="Approval workflow prevents unauthorized discounts from hitting production. No one can accidentally give 90% off to everyone. Financial safety built into the architecture."
                  />
                  <AngleTag icon="📊" label="Business" color={C.gold}
                    text="Track ROI per promotion before committing budget. Test regional pricing. Referral programs = viral loop operated from admin UI, not code. Financial governance without meetings."
                  />
                  <AngleTag icon="🎯" label="Marketing" color={C.pink}
                    text="Run campaigns instantly without engineering tickets. A/B test offers per country. Schedule promotions weeks in advance. Marketing team operates independently."
                  />
                </div>
              </div>
            </div>

            {/* ── COMPACT: remaining 6 modules ── */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 10,
              marginBottom: 20,
            }}>
              <AdminCard icon="💰" title="Financial Ops" color={C.green} span={1}
                items={["Revenue: daily/weekly/monthly/yearly", "MRR tracking + budget management", "Per-service profit analysis — know if you're making or losing money on each feature", "CSV/PDF export for accounting"]}
              />
              <AdminCard icon="🏷️" title="Banners" color={C.orange} span={1}
                items={["Target by page/country/plan/language", "Different offers per country simultaneously", "Scheduled with performance tracking", "Real-time in-app messaging without code changes"]}
              />
              <AdminCard icon="🚩" title="Feature Flags" color={C.teal} span={1}
                items={["Gradual rollout 0-100%", "Environment + user targeting", "Kill switch without deployment", "Ship code without releasing it"]}
              />
              <AdminCard icon="🧪" title="A/B Testing" color={C.accent} span={1}
                items={["Experiment creation + variant allocation", "Conversion tracking + results dashboard", "Test pricing before committing"]}
              />
              <AdminCard icon="📋" title="Audit Trail" color={C.dim} span={1}
                items={["Every action: who, what, when, where", "Before/after JSONB snapshots", "Partitioned monthly for performance at scale"]}
              />
              <AdminCard icon="❤️‍🩹" title="System Health" color={C.green} span={1}
                items={["Test all integrations without code", "Background job + AI service health", "Per-provider API cost tracking"]}
              />
            </div>

            <QuoteBlock>
              Every feature has three reasons: a development reason (build it now or pay 10× later), a business reason (revenue, cost, governance), and a marketing reason (retention, trust, conversion). The admin panel is where all three meet.
            </QuoteBlock>
          </div></FadeIn>

          {/* ── 2. SECURITY (moved before ad gen) ── */}
          <FadeIn><div style={{ marginBottom: 64 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
              <span style={{ width: 48, height: 48, borderRadius: "50%", background: `linear-gradient(135deg, ${C.red}, ${C.orange})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>🔒</span>
              <div>
                <h3 style={{ fontSize: 22, fontWeight: 700, margin: 0 }}>Security Architecture</h3>
                <p style={{ fontSize: 13, fontFamily: C.mono, color: C.muted, margin: 0 }}>two separate systems · user vs admin</p>
              </div>
            </div>

            <p style={{ fontSize: 13.5, color: C.muted, lineHeight: 1.7, marginBottom: 20 }}>
              Regular users and admins have <strong style={{ color: C.text }}>completely separate security models</strong>. Users go through Supabase Auth (standard SaaS pattern). Admins go through a custom 5-layer system — because they have service_role access that <strong style={{ color: C.text }}>bypasses all RLS policies</strong> and can see every user&#39;s data.
            </p>

            {/* Two-column comparison */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 24 }}>
              <div className="hover-lift" style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 16, padding: 20, borderTop: `3px solid ${C.teal}` }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                  <span style={{ fontSize: 20 }}>👤</span>
                  <div>
                    <p style={{ fontSize: 15, fontWeight: 700, margin: 0 }}>Regular User</p>
                    <p style={{ fontSize: 11, fontFamily: C.mono, color: C.teal, margin: 0 }}>1 layer · Supabase Auth + RLS</p>
                  </div>
                </div>
                <div style={{ background: C.deep, borderRadius: 10, padding: 14, fontFamily: C.mono, fontSize: 11, lineHeight: 2, marginBottom: 12, color: C.muted }}>
                  <span style={{ color: C.teal }}>User</span> → <span style={{ color: C.blue }}>Supabase Auth (JWT)</span> → <span style={{ color: C.green }}>RLS Policies</span> → <span style={{ color: C.gold }}>Own data only</span>
                </div>
                <ul style={{ margin: 0, paddingLeft: 16, fontSize: 12, lineHeight: 1.8, color: C.muted }}>
                  <li>JWT tokens (short-lived, auto-refreshed)</li>
                  <li>httpOnly secure cookies</li>
                  <li>Middleware session check on every request</li>
                  <li><strong style={{ color: C.green }}>420+ RLS policies</strong> — users see ONLY their own records</li>
                  <li>Standard SaaS pattern for customer data isolation</li>
                </ul>
              </div>
              <div className="hover-lift" style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 16, padding: 20, borderTop: `3px solid ${C.red}` }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                  <span style={{ fontSize: 20 }}>🛡️</span>
                  <div>
                    <p style={{ fontSize: 15, fontWeight: 700, margin: 0 }}>Admin Panel</p>
                    <p style={{ fontSize: 11, fontFamily: C.mono, color: C.red, margin: 0 }}>5 layers · custom security · service_role</p>
                  </div>
                </div>
                <div style={{ background: C.deep, borderRadius: 10, padding: 14, fontFamily: C.mono, fontSize: 11, lineHeight: 2, marginBottom: 12, color: C.muted }}>
                  <span style={{ color: C.blue }}>Auth</span> → <span style={{ color: C.orange }}>IP Check</span> → <span style={{ color: C.accent }}>2FA</span> → <span style={{ color: C.teal }}>Redis Session</span> → <span style={{ color: C.green }}>CSRF</span> → <span style={{ color: C.gold }}>Permission</span> → <span style={{ color: C.red }}>service_role</span>
                </div>
                <ul style={{ margin: 0, paddingLeft: 16, fontSize: 12, lineHeight: 1.8, color: C.muted }}>
                  <li><strong style={{ color: C.text }}>IP Whitelist</strong> — CIDR + wildcard, checked every request (not just login)</li>
                  <li><strong style={{ color: C.text }}>TOTP 2FA</strong> — mandatory, 10 backup codes, lockout after 5 fails</li>
                  <li><strong style={{ color: C.text }}>Redis Sessions</strong> — 30min sliding TTL, revocable instantly</li>
                  <li><strong style={{ color: C.text }}>CSRF</strong> — timing-safe comparison, rotated after every mutation</li>
                  <li><strong style={{ color: C.text }}>68 permissions</strong> across 5 roles + full audit trail</li>
                </ul>
              </div>
            </div>

            <div style={{ background: C.deep, border: `1px solid ${C.border}`, borderRadius: 14, padding: 16, marginBottom: 16 }}>
              <p style={{ fontSize: 12, fontWeight: 700, margin: "0 0 8px" }}>Why two systems?</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, fontSize: 12 }}>
                <div style={{ display: "flex", gap: 8, alignItems: "baseline" }}>
                  <Tag c={C.teal}>User</Tag>
                  <span style={{ color: C.muted }}>Supabase <code style={{ color: C.green }}>authenticated</code> role — RLS enforced, sees own data only</span>
                </div>
                <div style={{ display: "flex", gap: 8, alignItems: "baseline" }}>
                  <Tag c={C.red}>Admin</Tag>
                  <span style={{ color: C.muted }}>Supabase <code style={{ color: C.red }}>service_role</code> — bypasses ALL RLS, sees everything</span>
                </div>
              </div>
              <p style={{ fontSize: 11, color: C.muted, margin: "10px 0 0" }}>
                Admins use service_role because they need to see all user data, manage billing, and operate the platform. That god-mode access is exactly why they need 5 layers of protection instead of 1.
              </p>
            </div>

            <div style={{ background: C.deep, border: `1px solid ${C.border}`, borderRadius: 14, padding: 20, fontFamily: C.mono, fontSize: 12, lineHeight: 2.2 }}>
              <p style={{ fontWeight: 700, margin: "0 0 4px", fontSize: 13, fontFamily: C.sans }}>Admin Request Flow — /admin/* (every single request)</p>
              <span style={{ color: C.blue }}>Edge</span> → cookie? <Tag c={C.red}>✗ redirect</Tag> →
              <span style={{ color: C.accent }}> Auth</span> → admin_users table? <Tag c={C.red}>✗ rejected</Tag> →
              <span style={{ color: C.orange }}> IP</span> → whitelist match? <Tag c={C.red}>✗ session killed</Tag> →
              <span style={{ color: C.accent }}> 2FA</span> → TOTP verified? <Tag c={C.red}>✗ redirect</Tag> →
              <span style={{ color: C.teal }}> Session</span> → Redis valid? →
              <span style={{ color: C.green }}> CSRF</span> → timing-safe match? →
              <span style={{ color: C.gold }}> Permission</span> → role has access? →
              <Tag c={C.green}>✓ execute</Tag> → <span style={{ color: C.gold }}>audit log</span> → response
            </div>
          </div></FadeIn>

          {/* ── 3. AD GENERATION ENGINE — VISUAL PIPELINE ── */}
          <FadeIn><div style={{ marginBottom: 64 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
              <span style={{ width: 48, height: 48, borderRadius: "50%", background: `linear-gradient(135deg, ${C.teal}, ${C.blue})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>🎨</span>
              <div>
                <h3 style={{ fontSize: 22, fontWeight: 700, margin: 0 }}>Ad Generation Engine</h3>
                <p style={{ fontSize: 13, fontFamily: C.mono, color: C.muted, margin: 0 }}>7 steps · 60 seconds · ~$0.15/generation · zero prompts</p>
              </div>
            </div>

            {/* ── USER JOURNEY: 7-step wizard ── */}
            <p style={{ fontSize: 13.5, color: C.muted, lineHeight: 1.7, marginBottom: 16 }}>
              The user never writes a prompt. A 7-step wizard collects everything the AI needs — company identity, product details, campaign goal, creative direction, and platform. Every form field has a purpose in the generation pipeline.
            </p>

            {/* Wizard steps — compact visual */}
            <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
              {([
                ["1", "🏢", "Company", "Brand name, colors, fonts, industry", C.accent],
                ["2", "📦", "Product", "Name, price, benefit, audience, description", C.blue],
                ["3", "📷", "Image", "Product photo(s) — background auto-removed", C.teal],
                ["4", "🎯", "Goal", "Sales/Traffic/Messages + creative style + platform", C.pink],
                ["5", "⚡", "Generate", "AI Director + 2 scenes + 6 variants (auto)", C.gold],
                ["6", "🖼️", "Results", "6 ads with scores, like/dislike, edit, download", C.green],
                ["7", "🌍", "Export", "Multi-language × multi-platform × custom copy", C.orange],
              ] as const).map(([num, icon, label, detail, color]) => (
                <div key={num} className="hover-lift" style={{ flex: "1 1 140px", background: C.card, border: `1px solid ${C.border}`, borderRadius: 12, padding: "12px 14px", borderTop: `2px solid ${color}`, minWidth: 140 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
                    <span style={{ fontSize: 10, fontFamily: C.mono, fontWeight: 700, color, background: `${color}20`, padding: "1px 6px", borderRadius: 4 }}>{num}</span>
                    <span style={{ fontSize: 14 }}>{icon}</span>
                    <span style={{ fontSize: 12, fontWeight: 700 }}>{label}</span>
                  </div>
                  <p style={{ fontSize: 10.5, color: C.muted, margin: 0, lineHeight: 1.5 }}>{detail}</p>
                </div>
              ))}
            </div>

            {/* Data flow summary */}
            <div style={{ background: C.deep, border: `1px solid ${C.border}`, borderRadius: 14, padding: 16, marginBottom: 24, fontSize: 12, color: C.muted, lineHeight: 1.8 }}>
              <p style={{ fontWeight: 700, margin: "0 0 6px", fontSize: 13, color: C.text }}>Every form field has a destination</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px 24px", fontFamily: C.mono, fontSize: 11 }}>
                <span><Tag c={C.accent}>company</Tag> → brand voice, colors, fonts for overlay</span>
                <span><Tag c={C.blue}>product name + benefit</Tag> → core message for all 6 variants</span>
                <span><Tag c={C.teal}>product image</Tag> → sent to AI as visual reference</span>
                <span><Tag c={C.pink}>campaign goal</Tag> → CTA text + neuro color psychology</span>
                <span><Tag c={C.gold}>creative approach</Tag> → scene style direction</span>
                <span><Tag c={C.orange}>platform</Tag> → dimensions + text layout rules</span>
              </div>
            </div>

            {/* Visual pipeline — connected nodes (INTERACTIVE) */}
            <div style={{ position: "relative", padding: "20px 0" }}>
              {/* Animated connecting line */}
              <div className="pipeline-line" style={{ position: "absolute", top: 56, left: 28, right: 28, height: 3, borderRadius: 2, zIndex: 0 }} />

              <div style={{ display: "flex", justifyContent: "space-between", position: "relative", zIndex: 1, gap: 8 }}>
                <PulseNode icon="📸" label="Upload" sub="Product photo" color={C.muted} />
                <PulseNode icon="🧠" label="AI Director" sub="Creative plan" color={C.accent} active />
                <PulseNode icon="🎭" label="2 Scenes" sub="Parallel gen" color={C.blue} />
                <PulseNode icon="📐" label="Spatial AI" sub="Grid analysis" color={C.teal} />
                <PulseNode icon="🎯" label="Template" sub="54 matched" color={C.pink} />
                <PulseNode icon="🎨" label="Neuro Color" sub="Psychology" color={C.orange} />
                <PulseNode icon="✨" label="Render" sub="Satori + CSS" color={C.green} />
                <PulseNode icon="🖼️" label="6 Ads" sub="Ready to publish" color={C.gold} />
              </div>
            </div>

            {/* Pipeline detail cards — 2 col, varied */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 24 }}>
              <PipeCard icon="🧠" title="AI Creative Director" badge="$0.008" color={C.accent}>
                Vision-capable LLM analyzes the product image, generates a complete creative brief, plans 2 scene compositions, and writes 6 ad copy variants — each with a unique persuasion angle (urgency, social proof, emotional, features, value, use-case). One call, complete plan.
              </PipeCard>
              <PipeCard icon="🎭" title="Parallel Image Generation" badge="$0.078" color={C.blue}>
                2 scenes generated simultaneously. 8 visual styles × 20 mood variations = the user never sees the same result twice. Triple fallback chain guarantees output even if primary AI fails.
              </PipeCard>
              <PipeCard icon="📐" title="Spatial Intelligence" badge="proprietary" color={C.teal}>
                Proprietary system that mathematically determines optimal text placement and contrast colors for each generated scene. No guessing, no manual positioning — the algorithm handles it. WCAG-compliant output.
              </PipeCard>
              <PipeCard icon="🎨" title="Neuromarketing Engine" badge="proprietary" color={C.orange}>
                CTA colors are psychologically optimized per campaign goal and harmonized with the scene palette. Sales → warm reds (impulse). Traffic → blues (trust). Messages → greens (conversational).
              </PipeCard>
            </div>

            {/* The key comparison — WIDE */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 80px 1fr", gap: 0, alignItems: "stretch", margin: "24px 0", borderRadius: 20, overflow: "hidden", border: `1px solid ${C.border}` }}>
              <div style={{ background: "rgba(255,255,255,0.02)", padding: 32, textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <p style={{ fontSize: 11, fontFamily: C.mono, color: C.dim, textTransform: "uppercase", letterSpacing: "0.15em", margin: "0 0 12px" }}>industry standard</p>
                <p style={{ fontSize: 56, fontWeight: 800, fontFamily: C.mono, margin: "0 0 12px", color: C.dim, lineHeight: 1 }}>1:1</p>
                <p style={{ fontSize: 14, color: C.muted, margin: 0 }}>1 AI generation = 1 ad<br />New size? Pay again. New language? Pay again.</p>
              </div>
              <div style={{ background: `linear-gradient(180deg, ${C.accent}30, ${C.teal}30)`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: 32, color: C.accent }}>→</span>
              </div>
              <div style={{ background: C.accentGlow, padding: 32, textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center", boxShadow: `inset 0 0 60px ${C.accentGlow}` }}>
                <p style={{ fontSize: 11, fontFamily: C.mono, color: C.accent, textTransform: "uppercase", letterSpacing: "0.15em", margin: "0 0 12px" }}>my architecture</p>
                <p style={{ fontSize: 56, fontWeight: 800, fontFamily: C.mono, margin: "0 0 12px", color: C.accent, lineHeight: 1 }}>2:6</p>
                <p style={{ fontSize: 14, color: C.text, margin: 0 }}>Text as HTML/CSS, separate from images<br />Resize = free. Translate = near-zero. 3× output.</p>
              </div>
            </div>

            <QuoteBlock>
              By rendering text as HTML/CSS separate from AI-generated images, a single generation produces multiple ad variants, any format size, and translation at near-zero cost. One technical choice → three revenue advantages.
            </QuoteBlock>
          </div></FadeIn>

          {/* ── 4. DATABASE ── */}
          <FadeIn><div style={{ marginBottom: 64 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
              <span style={{ width: 48, height: 48, borderRadius: "50%", background: `linear-gradient(135deg, ${C.green}, ${C.teal})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>🗄️</span>
              <div>
                <h3 style={{ fontSize: 22, fontWeight: 700, margin: 0 }}>Database Architecture</h3>
                <p style={{ fontSize: 13, fontFamily: C.mono, color: C.muted, margin: 0 }}>Supabase (PostgreSQL) · 215 tables</p>
              </div>
            </div>

            {/* Stats banner */}
            <div style={{ display: "flex", gap: 24, marginBottom: 20, flexWrap: "wrap" }}>
              {([["215", "Tables", C.accent], ["139", "RPC Functions", C.teal], ["107", "Triggers", C.blue], ["43", "Enums", C.green], ["420+", "RLS Policies", C.gold]] as const).map(([v, l, c]) => (
                <div key={l} style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                  <span style={{ fontSize: 28, fontWeight: 800, fontFamily: C.mono, color: c }}>{v}</span>
                  <span style={{ fontSize: 12, color: C.muted }}>{l}</span>
                </div>
              ))}
            </div>

            {/* DB layers — horizontal layout */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
              {([
                ["👤", "User Data", "Users, companies, products, services. Multi-company support. AI-generated metadata.", C.blue],
                ["🤖", "AI Generation", "Image jobs, orchestrator state, director output, scene compositions, cost tracking per generation.", C.accent],
                ["💳", "Commerce", "Credits ledger (atomic RPCs — no race conditions), Stripe webhooks (idempotent), transaction export.", C.green],
                ["🏗️", "Admin", "12 tables: audit_log (partitioned monthly), sessions, team, permissions, promotions, coupons, banners, themes.", C.pink],
                ["🎨", "Content", "54+ overlay templates with neuro-scores, font pairings, color palettes, quality metrics.", C.orange],
                ["🔒", "Security", "420+ RLS policies, per-table rules, admin via controlled RPCs only, IP whitelist with CIDR.", C.red],
              ] as const).map(([icon, name, desc, color]) => (
                <div key={name} style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: 16, borderLeft: `3px solid ${color}` }}>
                  <p style={{ fontSize: 14, fontWeight: 600, margin: "0 0 6px" }}><span style={{ marginRight: 6 }}>{icon}</span>{name}</p>
                  <p style={{ fontSize: 11, color: C.muted, margin: 0, lineHeight: 1.6 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div></FadeIn>

          {/* ── 5. TECHNOLOGY & COST ── */}
          <FadeIn><div style={{ marginBottom: 48 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
              <span style={{ width: 48, height: 48, borderRadius: "50%", background: `linear-gradient(135deg, ${C.gold}, ${C.orange})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>💡</span>
              <div>
                <h3 style={{ fontSize: 22, fontWeight: 700, margin: 0 }}>Technology Decisions &amp; Cost Engineering</h3>
                <p style={{ fontSize: 13, fontFamily: C.mono, color: C.muted, margin: 0 }}>why this exact stack · cost at scale</p>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 24 }}>
              {([
                ["Why Supabase?", "PostgreSQL relational integrity for 215 tables with FK, joins, transactions. RLS (420+ policies) = security at the DB, not just the app. 139 RPCs as stored procedures. Built-in auth. MongoDB lacks RLS and relational joins. Firebase locks you into Google.", "$0 dev · $25/mo prod", C.accent],
                ["Why Cloudflare R2?", "Zero egress fees. S3 charges $0.09/GB transfer. At 10K users: S3 = $12,150/mo in egress. R2 = ~$4.50/mo. At 1M users: S3 egress = ~$1.2M/year. R2 = $0. This single decision saves 6 figures annually at scale.", "$0 egress forever", C.teal],
                ["Why Upstash Redis?", "Serverless, per-request pricing. Powers: admin sessions, rate limiting (7 configs), CSRF storage, account lockout, feature flag caching. Self-hosted Redis = 24/7 server. Upstash = $0 to start.", "$0 dev · $10/mo prod", C.green],
                ["Why Railway?", "Background removal needs Python + 2GB ML container. Vercel has 50MB limit + 10s timeout. Railway: containerized, sleeps to $0 when idle, wakes on demand. ~$0.002 per image.", "$0 when idle", C.blue],
                ["Why Inngest?", "7 pipeline steps where any can fail. Inngest retries step 4 without re-running 1-3. Concurrency limiting, event-driven, automatic backoff. BullMQ needs self-hosted Redis + persistent worker.", "$0 dev (25K events/mo)", C.orange],
                ["Why Vercel?", "Next.js optimized: zero-config deploy, edge functions, image optimization, ISR. Free tier: 100GB bandwidth + serverless + HTTPS. AWS equivalent requires CloudFront + Lambda@Edge + cert management.", "$0 dev · $20/mo prod", C.pink],
              ] as const).map(([q, a, cost, color]) => (
                <div key={q} style={{ display: "flex", gap: 0, borderRadius: 14, overflow: "hidden", border: `1px solid ${C.border}` }}>
                  <div style={{ width: 4, background: color, flexShrink: 0 }} />
                  <div style={{ flex: 1, padding: "14px 18px", background: C.card }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6 }}>
                      <p style={{ fontSize: 14, fontWeight: 600, margin: 0, color }}>{q}</p>
                      <span style={{ fontSize: 11, fontFamily: C.mono, color: C.teal, background: C.tealGlow, padding: "2px 8px", borderRadius: 6 }}>{cost}</span>
                    </div>
                    <p style={{ fontSize: 12, color: C.muted, margin: 0, lineHeight: 1.6 }}>{a}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Cost comparison table — ALL providers */}
            <div style={{ borderRadius: 14, overflow: "hidden", border: `1px solid ${C.border}`, marginBottom: 20 }}>
              <div style={{ background: C.deep, padding: "14px 20px" }}>
                <p style={{ fontSize: 15, fontWeight: 600, margin: 0 }}>📊 Monthly Infrastructure Cost — Our Stack vs AWS vs Azure vs Google Cloud</p>
                <p style={{ fontSize: 11, color: C.dim, margin: "4px 0 0" }}>We evaluated all three major cloud providers. Estimates based on equivalent services at each scale tier.</p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1fr", background: C.card }}>
                <div style={th}></div>
                <div style={{ ...th, textAlign: "center" }}>10K Users</div>
                <div style={{ ...th, textAlign: "center" }}>100K Users</div>
                <div style={{ ...th, textAlign: "center" }}>1M Users</div>

                <div style={{ ...td, fontWeight: 600 }}>✅ Our Stack</div>
                <div style={{ ...td, textAlign: "center", color: C.green, fontFamily: C.mono, fontWeight: 700 }}>~$75</div>
                <div style={{ ...td, textAlign: "center", color: C.green, fontFamily: C.mono, fontWeight: 700 }}>~$350</div>
                <div style={{ ...td, textAlign: "center", color: C.green, fontFamily: C.mono, fontWeight: 700 }}>~$2,500</div>

                <div style={{ ...td, color: C.muted }}>☁️ AWS <span style={{ fontSize: 10, color: C.dim }}>(EC2 + RDS + S3 + CloudFront + Lambda)</span></div>
                <div style={{ ...td, textAlign: "center", color: C.red, fontFamily: C.mono }}>~$800</div>
                <div style={{ ...td, textAlign: "center", color: C.red, fontFamily: C.mono }}>~$8,000</div>
                <div style={{ ...td, textAlign: "center", color: C.red, fontFamily: C.mono }}>~$95,000</div>

                <div style={{ ...td, color: C.muted }}>🔷 Azure <span style={{ fontSize: 10, color: C.dim }}>(App Service + SQL + Blob + CDN + Functions)</span></div>
                <div style={{ ...td, textAlign: "center", color: C.orange, fontFamily: C.mono }}>~$650</div>
                <div style={{ ...td, textAlign: "center", color: C.orange, fontFamily: C.mono }}>~$6,500</div>
                <div style={{ ...td, textAlign: "center", color: C.orange, fontFamily: C.mono }}>~$78,000</div>

                <div style={{ ...td, color: C.muted }}>🔵 Google Cloud <span style={{ fontSize: 10, color: C.dim }}>(Cloud Run + Cloud SQL + GCS + CDN)</span></div>
                <div style={{ ...td, textAlign: "center", color: C.blue, fontFamily: C.mono }}>~$550</div>
                <div style={{ ...td, textAlign: "center", color: C.blue, fontFamily: C.mono }}>~$5,800</div>
                <div style={{ ...td, textAlign: "center", color: C.blue, fontFamily: C.mono }}>~$72,000</div>

                <div style={{ ...td, fontWeight: 600, borderBottom: "none" }}>💰 Annual Savings vs cheapest cloud</div>
                <div style={{ ...td, textAlign: "center", fontFamily: C.mono, color: C.gold, fontWeight: 700, borderBottom: "none" }}>$5,700</div>
                <div style={{ ...td, textAlign: "center", fontFamily: C.mono, color: C.gold, fontWeight: 700, borderBottom: "none" }}>$65,400</div>
                <div style={{ ...td, textAlign: "center", fontFamily: C.mono, color: C.gold, fontWeight: 700, fontSize: 16, borderBottom: "none" }}>$834K</div>
              </div>
            </div>

            {/* "But what about..." — addressing enterprise concerns */}
            <div style={{ marginBottom: 20 }}>
              <p style={{ fontSize: 15, fontWeight: 700, margin: "0 0 14px" }}>&#34;But what about...&#34; — common enterprise concerns</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                <div className="hover-lift glow-border" style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: 16 }}>
                  <p style={{ fontSize: 13, fontWeight: 700, margin: "0 0 6px", color: C.blue }}>🌍 Multi-Region Deployment</p>
                  <p style={{ fontSize: 12, color: C.muted, lineHeight: 1.6, margin: 0 }}>
                    Vercel deploys to <strong style={{ color: C.text }}>edge locations globally</strong> — USA, Europe, Asia, automatically. Cloudflare R2 serves assets from 300+ PoPs worldwide. Supabase runs in the region closest to your primary market. Users in London, New York, and Tokyo all get sub-100ms responses without configuring anything.
                  </p>
                </div>
                <div className="hover-lift glow-border" style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: 16 }}>
                  <p style={{ fontSize: 13, fontWeight: 700, margin: "0 0 6px", color: C.green }}>💾 Data Backup &amp; Redundancy</p>
                  <p style={{ fontSize: 12, color: C.muted, lineHeight: 1.6, margin: 0 }}>
                    Supabase runs on AWS infrastructure with <strong style={{ color: C.text }}>daily automated backups</strong> and point-in-time recovery (Pro plan). Cloudflare R2 stores data across multiple availability zones — data is never in a single location. Vercel deployments are immutable — every deploy is a snapshot you can roll back to instantly.
                  </p>
                </div>
                <div className="hover-lift glow-border" style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: 16 }}>
                  <p style={{ fontSize: 13, fontWeight: 700, margin: "0 0 6px", color: C.accent }}>🔒 Security at Scale</p>
                  <p style={{ fontSize: 12, color: C.muted, lineHeight: 1.6, margin: 0 }}>
                    Our stack doesn&#39;t compromise on security. 420+ RLS policies enforce data isolation at the database level. Vercel provides DDoS protection and WAF. Cloudflare adds another security layer. Upstash Redis handles rate limiting. The 12-layer admin security is custom-built — more thorough than what most companies implement even on AWS.
                  </p>
                </div>
                <div className="hover-lift glow-border" style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: 16 }}>
                  <p style={{ fontSize: 13, fontWeight: 700, margin: "0 0 6px", color: C.gold }}>📈 Scalability (100 to 10M users)</p>
                  <p style={{ fontSize: 12, color: C.muted, lineHeight: 1.6, margin: 0 }}>
                    Every service in our stack auto-scales: Vercel serverless functions scale to zero and up to millions. Supabase connection pooling handles concurrent users. R2 has no bandwidth limits. Inngest queues handle burst loads. <strong style={{ color: C.text }}>The same stack that costs $0 in dev handles 1M users</strong> — no re-platforming, no migration, no architecture change.
                  </p>
                </div>
              </div>
            </div>

            <QuoteBlock>
              We didn&#39;t pick the cheapest option. We picked the stack that gives us enterprise-grade reliability, global distribution, and security — at startup-grade cost. Every free tier was chosen strategically: the same platforms scale to millions without re-platforming.
            </QuoteBlock>

            {/* ── WHY 5 LANGUAGES ── */}
            <div style={{ marginTop: 28 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <span style={{ width: 44, height: 44, borderRadius: "50%", background: `linear-gradient(135deg, ${C.gold}30, ${C.orange}30)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>🌍</span>
                <div>
                  <h4 style={{ fontSize: 18, fontWeight: 700, margin: 0 }}>Why These 5 Languages</h4>
                  <p style={{ fontSize: 12, fontFamily: C.mono, color: C.dim, margin: 0 }}>market-driven language selection · not random</p>
                </div>
              </div>

              <p style={{ fontSize: 13.5, color: C.muted, lineHeight: 1.7, margin: "0 0 16px" }}>
                Most competitors deploy in English only. We broke that barrier — but not randomly. Each language was chosen based on <strong style={{ color: C.text }}>e-commerce market size</strong>, <strong style={{ color: C.text }}>growth trajectory</strong>, and <strong style={{ color: C.text }}>competitive gap</strong> (how underserved that market is by existing ad tools).
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}>
                {([
                  ["🇬🇧", "English", "$5.5T+", "Global", "Largest e-commerce market. Baseline — every competitor serves this.", C.blue],
                  ["🇪🇸", "Spanish", "$200B+", "Spain, LATAM, US Hispanic", "580M+ speakers. US Hispanic e-commerce alone is $100B+. Most ad tools have poor Spanish support — we serve this natively.", C.orange],
                  ["🇧🇷", "Portuguese", "$180B+", "Brazil, Portugal", "Brazil is the largest e-commerce market in LATAM. 260M+ speakers. Very few AI ad tools support Portuguese properly.", C.green],
                  ["🇩🇪", "German", "$150B+", "Germany, Austria, Switzerland", "Germany is Europe's largest e-commerce market. High purchasing power. German speakers expect native-quality text — bad translations kill trust.", C.red],
                  ["🇳🇱", "Dutch", "$35B+", "Netherlands, Belgium, Suriname", "Highest e-commerce spend per capita in the EU. Small market but extremely high-value users. Almost zero competition in Dutch ad tools.", C.accent],
                ] as const).map(([flag, lang, market, regions, why, color]) => (
                  <div key={lang} className="hover-lift" style={{ display: "flex", alignItems: "stretch", borderRadius: 12, overflow: "hidden", border: `1px solid ${C.border}` }}>
                    <div style={{ width: 52, background: `${color}15`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flexShrink: 0, borderRight: `1px solid ${C.border}` }}>
                      <span style={{ fontSize: 22 }}>{flag}</span>
                    </div>
                    <div style={{ flex: 1, padding: "12px 16px", background: C.card }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
                        <span style={{ fontSize: 14, fontWeight: 700 }}>{lang}</span>
                        <span style={{ fontSize: 11, fontFamily: C.mono, color, fontWeight: 700 }}>{market}</span>
                        <span style={{ fontSize: 10, color: C.dim, fontFamily: C.mono }}>{regions}</span>
                      </div>
                      <p style={{ fontSize: 12, color: C.muted, margin: 0, lineHeight: 1.5 }}>{why}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ background: C.deep, border: `1px solid ${C.border}`, borderRadius: 12, padding: 14, fontSize: 12 }}>
                <p style={{ fontWeight: 700, margin: "0 0 6px", fontSize: 13 }}>The competitive advantage</p>
                <p style={{ color: C.muted, lineHeight: 1.6, margin: 0 }}>
                  With 5 languages we cover <strong style={{ color: C.gold }}>~$6.1 trillion</strong> in combined e-commerce markets and <strong style={{ color: C.gold }}>2.5+ billion speakers</strong>. Our architecture makes translation a near-zero-cost upsell (text is separate from images). A competitor adding one language needs to rebuild their rendering pipeline. We already support five — and adding more is a database entry, not a code change.
                </p>
              </div>
            </div>
          </div></FadeIn>

          <p style={{ fontSize: 12, fontFamily: C.mono, color: C.muted, marginTop: 4 }}>
            stack: Next.js 16 · React 19 · TypeScript strict · Supabase · PostgreSQL · Stripe · Cloudflare R2 · Upstash Redis · Inngest · Railway · Fabric.js · Satori · Puppeteer · Tailwind CSS v4 · 5 languages
          </p>
        </div>
      </section>

      {/* ═══ BOTTOM NAV ═══ */}
      <footer style={{ padding: "40px 5% 32px", borderTop: `1px solid ${C.border}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <a href="/portfolio" style={{ fontSize: 13, color: C.muted, textDecoration: "none" }}>← Back to Portfolio</a>
        <a href="/portfolio/pipeline" style={{ fontSize: 13, color: C.teal, textDecoration: "none", fontWeight: 500 }}>Next: L7AI Content Pipeline →</a>
      </footer>
    </div>
  );
}

/* ═══ TABLE STYLES ═══ */
const C_borderHover = "rgba(124,92,255,0.3)";
const th: React.CSSProperties = { padding: "10px 16px", borderBottom: `1px solid rgba(255,255,255,0.06)`, fontSize: 12, fontWeight: 600, fontFamily: '"JetBrains Mono", Consolas, monospace' };
const td: React.CSSProperties = { padding: "10px 16px", borderBottom: `1px solid rgba(255,255,255,0.06)`, fontSize: 13 };

/* ═══ COMPONENTS ═══ */

function AngleTag({ icon, label, color, text }: { icon: string; label: string; color: string; text: string }) {
  return (
    <div style={{ background: `${color}08`, border: `1px solid ${color}25`, borderRadius: 10, padding: 12 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 6 }}>
        <span style={{ fontSize: 12 }}>{icon}</span>
        <span style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color }}>{label}</span>
      </div>
      <p style={{ fontSize: 11.5, color: "#c4cee0", lineHeight: 1.6, margin: 0 }}>{text}</p>
    </div>
  );
}

function AdminCard({ icon, title, color, span, items }: { icon: string; title: string; color: string; span: number; items: string[] }) {
  return (
    <div className="hover-lift glow-border" style={{
      gridColumn: `span ${span}`,
      background: "rgba(15,23,42,0.5)",
      border: `1px solid rgba(255,255,255,0.06)`,
      borderRadius: 16,
      padding: 18,
      borderTop: `3px solid ${color}`,
    }}>
      <p style={{ fontSize: 15, fontWeight: 600, margin: "0 0 8px" }}>
        <span style={{ marginRight: 8 }}>{icon}</span>{title}
      </p>
      <ul style={{ margin: 0, paddingLeft: 20, fontSize: 12, color: "#94a3b8", lineHeight: 1.7 }}>
        {items.map((it, i) => <li key={i}>{it}</li>)}
      </ul>
    </div>
  );
}

function PipeCard({ icon, title, badge, color, children }: { icon: string; title: string; badge: string; color: string; children: React.ReactNode }) {
  return (
    <div className="hover-lift glow-border" style={{ background: "rgba(15,23,42,0.5)", border: `1px solid rgba(255,255,255,0.06)`, borderRadius: 14, padding: 16, borderLeft: `3px solid ${color}` }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 8 }}>
        <p style={{ fontSize: 14, fontWeight: 600, margin: 0 }}><span style={{ marginRight: 6 }}>{icon}</span>{title}</p>
        <span style={{ fontSize: 10, fontFamily: '"JetBrains Mono", Consolas, monospace', color: badge.startsWith("$") ? "#00d1b2" : "#94a3b8", background: badge.startsWith("$") ? "rgba(0,209,178,0.12)" : "rgba(255,255,255,0.06)", padding: "2px 8px", borderRadius: 4 }}>{badge}</span>
      </div>
      <p style={{ fontSize: 12, color: "#94a3b8", margin: 0, lineHeight: 1.6 }}>{children}</p>
    </div>
  );
}

function QuoteBlock({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ borderLeft: `3px solid #7c5cff`, paddingLeft: 16, margin: "20px 0", fontStyle: "italic", fontSize: 14, color: "#94a3b8", lineHeight: 1.7 }}>
      {children}
    </div>
  );
}

function Tag({ c, children }: { c: string; children: React.ReactNode }) {
  return <span style={{ fontSize: 11, fontFamily: '"JetBrains Mono", Consolas, monospace', fontWeight: 600, color: c, background: `${c}20`, padding: "1px 6px", borderRadius: 3 }}>{children}</span>;
}
