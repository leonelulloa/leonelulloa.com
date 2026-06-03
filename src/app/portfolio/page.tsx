import type { Metadata } from "next";
import { FadeIn, GlowCard, Particles, GlobalStyles } from "./Effects";
import TechMarquee from "./TechMarquee";

export const metadata: Metadata = {
  title: "Leonel Ulloa — Systems Portfolio",
  description:
    "Two production systems built from zero. AI-powered SaaS + automated content pipeline. See the full architecture.",
  robots: { index: false, follow: false },
};

const C = {
  bg: "#050810",
  card: "rgba(12,18,32,0.6)",
  deep: "rgba(8,12,24,0.8)",
  text: "#eaf2ff",
  muted: "#8899b4",
  dim: "#5a6a82",
  border: "rgba(255,255,255,0.06)",
  accent: "#7c5cff",
  teal: "#00d1b2",
  blue: "#3b82f6",
  green: "#22c55e",
  gold: "#fbbf24",
  orange: "#f97316",
  pink: "#ec4899",
  red: "#ef4444",
  mono: '"SF Mono", "Fira Code", "JetBrains Mono", monospace',
  sans: 'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
};

export default function PortfolioHub() {
  return (
    <div style={{ fontFamily: C.sans, color: C.text, background: C.bg, minHeight: "100vh" }}>
      <GlobalStyles />

      {/* ═══════════════════════════════════════════
          HERO — Who I am + What I bring
          ═══════════════════════════════════════════ */}
      <section
        className="grain"
        style={{
          position: "relative",
          padding: "48px 5% 40px",
          background: `
            radial-gradient(900px 500px at 20% 0%, rgba(124,92,255,0.14), transparent 60%),
            radial-gradient(600px 400px at 85% 100%, rgba(0,209,178,0.08), transparent 60%),
            ${C.bg}
          `,
        }}
      >
        <Particles count={25} />

        {/* Top bar */}
        <FadeIn delay={50}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 40, position: "relative", zIndex: 2 }}>
            <div data-flex="hero-links" style={{ display: "flex", gap: 8 }}>
              {(["Resume", "LinkedIn", "GitHub", "Email"] as const).map((label) => {
                const hrefs = { Resume: "/resume", LinkedIn: "https://linkedin.com/in/leonel-ulloa-ai", GitHub: "https://github.com/leonelulloa", Email: "mailto:leonel090810@gmail.com" };
                return (
                  <a key={label} href={hrefs[label]} target={hrefs[label].startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="hover-lift" style={{
                    padding: "6px 14px", borderRadius: 8,
                    background: "rgba(255,255,255,0.04)", border: `1px solid ${C.border}`,
                    color: C.muted, fontSize: 12, fontFamily: C.mono, textDecoration: "none",
                  }}>{label}</a>
                );
              })}
            </div>
            <span style={{ fontSize: 11, fontFamily: C.mono, color: C.dim }}>Runcorn, UK</span>
          </div>
        </FadeIn>

        {/* Name + Story */}
        <div style={{ maxWidth: 1300, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <FadeIn delay={100}>
            <h1 style={{
              fontSize: "clamp(44px, 6vw, 68px)",
              fontWeight: 800,
              margin: "0 0 8px",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}>
              <span className="shimmer-text">Leonel Ulloa</span>
            </h1>
            <p style={{ fontSize: 18, color: C.accent, fontWeight: 500, margin: "0 0 8px" }}>
              Product Engineer · AI Systems &amp; Automation
            </p>
            <p style={{ fontSize: 13, fontFamily: C.mono, color: C.muted, margin: "0 0 6px" }}>
              Open to: Full Stack Engineer · Product Engineer · AI/Automation Engineer · Founding Engineer · Solutions Engineer
            </p>
            <p style={{ fontSize: 12, fontFamily: C.mono, color: C.dim, margin: "0 0 24px" }}>
              Based in UK · Remote / Hybrid · English &amp; Spanish
            </p>
          </FadeIn>

          <FadeIn delay={200}>
            <div data-grid="hero-layout" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, marginBottom: 32 }}>
              {/* Left: My pitch */}
              <div>
                <p style={{ fontSize: 16, color: C.text, lineHeight: 1.8, margin: "0 0 16px" }}>
                  I design and build <strong>complete production systems</strong> — from database schemas and API architecture to automation pipelines and deployment. I use AI tools (Claude Code, ChatGPT) within professional development workflows to build at production quality, not no-code prototypes.
                </p>
                <p style={{ fontSize: 15, color: C.muted, lineHeight: 1.8, margin: "0 0 20px" }}>
                  My differentiator: I understand <strong style={{ color: C.accent }}>market demand</strong>, <strong style={{ color: C.gold }}>development cost</strong>, and <strong style={{ color: C.pink }}>user behavior</strong> simultaneously. Every architecture decision I make creates compounding business advantages — not just solves the immediate technical problem.
                </p>
                <div style={{
                  background: C.card, border: `1px solid ${C.border}`, borderRadius: 12,
                  padding: "14px 18px", borderLeft: `3px solid ${C.accent}`,
                }}>
                  <p style={{ fontSize: 13, color: C.muted, lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>
                    <strong style={{ color: C.text, fontStyle: "normal" }}>Example:</strong> When I built the ad generation system, I designed text rendering separate from AI images. That one technical choice unlocks translation as an upsell (near-zero cost), any format size (zero cost), and 6 ad variants from 2 AI generations. One decision → three revenue streams.
                  </p>
                </div>
              </div>

              {/* Right: What I built — summary numbers */}
              <div>
                <p style={{ fontSize: 13, color: C.muted, lineHeight: 1.6, margin: "0 0 14px", borderLeft: `2px solid ${C.accent}`, paddingLeft: 12 }}>
                  I build production systems end-to-end: database design, APIs, security, automation pipelines, admin tooling, and deployment.
                </p>
                <p style={{ fontSize: 12, fontFamily: C.mono, color: C.dim, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 14 }}>
                  what I built solo from zero
                </p>
                <div data-grid="hero-stats" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 16 }}>
                  {([
                    ["260+", "DB Tables", C.accent],
                    ["308+", "API Routes", C.teal],
                    ["420+", "RLS Policies", C.green],
                    ["26", "Workflows", C.blue],
                    ["24", "Containers", C.orange],
                    ["10", "Channels", C.pink],
                  ] as const).map(([val, label, color]) => (
                    <div key={label} style={{
                      background: `${color}08`, border: `1px solid ${color}15`,
                      borderRadius: 10, padding: "10px 12px", textAlign: "center",
                    }}>
                      <p style={{ fontSize: 22, fontWeight: 800, fontFamily: C.mono, color, margin: 0, lineHeight: 1 }}>{val}</p>
                      <p style={{ fontSize: 9, fontFamily: C.mono, color: C.dim, margin: "3px 0 0", textTransform: "uppercase", letterSpacing: "0.06em" }}>{label}</p>
                    </div>
                  ))}
                </div>
                <div data-grid="infra-boxes" style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <div style={{
                    background: C.card, border: `1px solid ${C.border}`, borderRadius: 12,
                    padding: "10px 14px",
                  }}>
                    <p style={{ fontSize: 10, fontFamily: C.mono, color: C.teal, margin: "0 0 4px", textTransform: "uppercase", letterSpacing: "0.1em" }}>L7AI pipeline + website</p>
                    <p style={{ fontSize: 12, color: C.muted, lineHeight: 1.5, margin: 0 }}>
                      <strong style={{ color: C.gold }}>$43/mo</strong> — 2 Hetzner servers, 24 Docker containers, n8n, Remotion, Postiz, Browserless, PostgreSQL, Redis, Coolify, Traefik
                    </p>
                  </div>
                  <div style={{
                    background: C.card, border: `1px solid ${C.border}`, borderRadius: 12,
                    padding: "10px 14px",
                  }}>
                    <p style={{ fontSize: 10, fontFamily: C.mono, color: C.accent, margin: "0 0 4px", textTransform: "uppercase", letterSpacing: "0.1em" }}>PhotoAI Advantage</p>
                    <p style={{ fontSize: 12, color: C.muted, lineHeight: 1.5, margin: 0 }}>
                      <strong style={{ color: C.gold }}>$0 in dev</strong> — Vercel, Supabase, Cloudflare R2, Upstash Redis, Inngest, Railway (all free tiers). Scales to prod at ~$75/mo for 10K users.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Tech stack */}
        </div>
      </section>

      {/* ═══ TECH MARQUEE ═══ */}
      <TechMarquee />

      {/* ═══════════════════════════════════════════
          TWO SYSTEMS — The proof
          ═══════════════════════════════════════════ */}
      <section style={{ padding: "64px 5%", maxWidth: 1400, margin: "0 auto" }}>
        <FadeIn>
          <p style={{ fontSize: 12, fontFamily: C.mono, color: C.dim, textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: 10 }}>
            production systems
          </p>
          <h2 style={{ fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 700, margin: "0 0 12px", letterSpacing: "-0.02em" }}>
            Two systems. Both built from zero. <span style={{ color: C.muted }}>Click to explore.</span>
          </h2>
          <p style={{ fontSize: 14, color: C.muted, margin: "0 0 36px", maxWidth: 700 }}>
            Each deep-dive shows the full architecture — admin panels, security layers, AI pipelines, database schemas, technology choices with cost math at scale.
          </p>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          {/* PhotoAI */}
          <FadeIn delay={100}>
            <GlowCard href="/portfolio/photoai" color="124,92,255" className="hover-scale" style={{
              background: C.card, borderRadius: 24, border: `1px solid ${C.border}`, padding: 0, overflow: "hidden", display: "block",
            }}>
              <div style={{ height: 3, background: `linear-gradient(90deg, ${C.accent}, ${C.teal})`, backgroundSize: "200% 100%", animation: "gradient-shift 4s ease infinite" }} />
              <div style={{ padding: "28px 32px 24px" }}>
                <div data-flex="system-header" style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: `${C.accent}15`, border: `1px solid ${C.accent}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>📱</div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: 20, fontWeight: 700, margin: 0 }}>PhotoAI Advantage 2.0</h3>
                    <p style={{ fontSize: 12, fontFamily: C.mono, color: C.accent, margin: 0 }}>AI-Powered Ad Creation SaaS</p>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4 }}>
                    <span style={{ fontSize: 10, fontFamily: C.mono, background: `${C.gold}20`, color: C.gold, padding: "3px 10px", borderRadius: 20 }}>pre-launch</span>
                    <span style={{ fontSize: 10, fontFamily: C.mono, color: C.dim }}>2025–Present · Solo build</span>
                  </div>
                </div>

                <p style={{ fontSize: 14, color: C.muted, lineHeight: 1.7, margin: "0 0 16px" }}>
                  Small businesses need Meta/Instagram ads but can&#39;t afford agencies ($2,000-5,000 per campaign). PhotoAI generates <strong style={{ color: C.text }}>6 professional ad variants from 1 product photo in 60 seconds</strong> — no prompt needed, everything comes from smart forms. Our cost: ~$0.15 per generation. Agencies charge $200-500 per concept.
                </p>

                <p style={{ fontSize: 13, color: C.dim, lineHeight: 1.7, margin: "0 0 20px" }}>
                  The admin panel was <strong style={{ color: C.muted }}>built before the app</strong> — 70+ pages, 12-layer security, promotion engine with approval workflows, seasonal themes per country, A/B testing, error monitoring, and financial dashboards. One person can operate the entire multi-market platform without engineering tickets.
                </p>

                <div data-grid="system-stats" style={{ display: "flex", gap: 16, marginBottom: 16 }}>
                  {([["215", "tables"], ["193", "routes"], ["70+", "admin pages"], ["420+", "RLS"], ["5", "langs"]] as const).map(([v, l]) => (
                    <div key={l} style={{ textAlign: "center" }}>
                      <p style={{ fontSize: 18, fontWeight: 800, fontFamily: C.mono, margin: 0, color: C.accent }}>{v}</p>
                      <p style={{ fontSize: 9, fontFamily: C.mono, color: C.dim, margin: "2px 0 0", textTransform: "uppercase" }}>{l}</p>
                    </div>
                  ))}
                </div>

                <div data-flex="feature-tags" style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 16 }}>
                  {["Admin Panel", "12-Layer Security", "AI Ad Generation", "Spatial Intelligence", "Neuromarketing", "Multi-Provider AI", "Fabric.js Editor", "Stripe + Credits"].map(t => (
                    <span key={t} style={{ fontSize: 10, fontFamily: C.mono, background: `${C.accent}08`, border: `1px solid ${C.accent}15`, color: "#b0b8cc", padding: "3px 8px", borderRadius: 6 }}>{t}</span>
                  ))}
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: 8, color: C.accent, fontSize: 14, fontWeight: 600 }}>
                  <span>Explore the full architecture</span>
                  <span style={{ fontSize: 20 }}>→</span>
                </div>
              </div>
            </GlowCard>
          </FadeIn>

          {/* L7AI */}
          <FadeIn delay={200}>
            <GlowCard href="/portfolio/pipeline" color="0,209,178" className="hover-scale" style={{
              background: C.card, borderRadius: 24, border: `1px solid ${C.border}`, padding: 0, overflow: "hidden", display: "block",
            }}>
              <div style={{ height: 3, background: `linear-gradient(90deg, ${C.teal}, ${C.green})`, backgroundSize: "200% 100%", animation: "gradient-shift 4s ease infinite" }} />
              <div style={{ padding: "28px 32px 24px" }}>
                <div data-flex="system-header" style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: `${C.teal}15`, border: `1px solid ${C.teal}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>🔄</div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: 20, fontWeight: 700, margin: 0 }}>L7AI Content Intelligence</h3>
                    <p style={{ fontSize: 12, fontFamily: C.mono, color: C.teal, margin: 0 }}>Production Automation &amp; Orchestration System</p>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4 }}>
                    <span style={{ fontSize: 10, fontFamily: C.mono, background: `${C.muted}20`, color: C.muted, padding: "3px 10px", borderRadius: 20 }}>built &amp; operated</span>
                    <span style={{ fontSize: 10, fontFamily: C.mono, color: C.dim }}>2025–2026 · Solo build</span>
                  </div>
                </div>

                <p style={{ fontSize: 14, color: C.muted, lineHeight: 1.7, margin: "0 0 16px" }}>
                  Building a personal brand as a solo developer means no time for manual content creation. So I built a system that does it: <strong style={{ color: C.text }}>scans 60 topics across 7 data sources weekly</strong>, scores opportunities with a multi-signal AI algorithm, and produces finished content — carousels, videos with AI voice and music, captions — ready to publish.
                </p>

                <p style={{ fontSize: 13, color: C.dim, lineHeight: 1.7, margin: "0 0 20px" }}>
                  The system publishes across <strong style={{ color: C.muted }}>10 social channels in English and Spanish</strong> — Instagram, LinkedIn, Facebook, Threads, YouTube. It includes a custom Remotion video renderer with a 7-stage audio mastering pipeline that brought levels from -58 LUFS (inaudible) to broadcast standard. Scripts require my approval; after that, everything is automated end-to-end.
                </p>

                <div data-grid="system-stats" style={{ display: "flex", gap: 16, marginBottom: 16 }}>
                  {([["26", "workflows"], ["47", "tables"], ["14.9K+", "records"], ["10", "channels"], ["$43", "infra/mo"]] as const).map(([v, l]) => (
                    <div key={l} style={{ textAlign: "center" }}>
                      <p style={{ fontSize: 18, fontWeight: 800, fontFamily: C.mono, margin: 0, color: C.teal }}>{v}</p>
                      <p style={{ fontSize: 9, fontFamily: C.mono, color: C.dim, margin: "2px 0 0", textTransform: "uppercase" }}>{l}</p>
                    </div>
                  ))}
                </div>

                <div data-flex="feature-tags" style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 16 }}>
                  {["5-Layer Pipeline", "Topic Scoring AI", "Remotion Video", "7-Stage Audio", "AI Characters", "n8n", "Self-Hosted", "Postiz Publishing"].map(t => (
                    <span key={t} style={{ fontSize: 10, fontFamily: C.mono, background: `${C.teal}08`, border: `1px solid ${C.teal}15`, color: "#b0b8cc", padding: "3px 8px", borderRadius: 6 }}>{t}</span>
                  ))}
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: 8, color: C.teal, fontSize: 14, fontWeight: 600 }}>
                  <span>Explore the full architecture</span>
                  <span style={{ fontSize: 20 }}>→</span>
                </div>
              </div>
            </GlowCard>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          HOW I THINK — The differentiator
          ═══════════════════════════════════════════ */}
      <section style={{
        padding: "64px 5%",
        background: `linear-gradient(180deg, transparent, rgba(124,92,255,0.03) 30%, rgba(124,92,255,0.03) 70%, transparent)`,
        maxWidth: 1400, margin: "0 auto",
      }}>
        <FadeIn>
          <p style={{ fontSize: 12, fontFamily: C.mono, color: C.dim, textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: 10 }}>
            why this matters
          </p>
          <h2 style={{ fontSize: "clamp(24px, 3vw, 34px)", fontWeight: 700, margin: "0 0 12px", letterSpacing: "-0.02em" }}>
            Every feature I build has three reasons.
          </h2>
          <p style={{ fontSize: 14, color: C.muted, margin: "0 0 36px", maxWidth: 700 }}>
            Most developers build features to solve a technical problem. I build features that solve a technical problem, create a business advantage, AND improve user retention — simultaneously.
          </p>
        </FadeIn>

        <div data-grid="three-angles" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20 }}>
          {([
            ["⚙️", "Development", C.teal, "Build it now or pay 10× later. The seasonal theme system was built before launch because retrofitting CSS across 70+ pages later costs weeks. Error monitoring is custom-built ($0/mo) because it integrates with our deploy pipeline — Sentry can't do that and costs $26/mo at scale."],
            ["📊", "Business", C.gold, "Revenue, cost, governance. Separating text from AI images creates translation as an upsell, multi-format at zero cost, and 6 variants from 2 generations. The admin panel's promotion engine has approval workflows so no one can accidentally give 90% off to everyone."],
            ["🎯", "Marketing", C.pink, "Retention, trust, conversion. A visual platform must feel premium — seasonal themes aren't decoration, they're trust signals. User management tracks usage vs subscription limits so I can make personalized offers at the right moment. Every feature extends user lifetime."],
          ] as const).map(([icon, title, color, desc]) => (
            <FadeIn key={title} delay={title === "Development" ? 100 : title === "Business" ? 200 : 300}>
              <div className="hover-lift" style={{
                background: C.card, border: `1px solid ${C.border}`, borderRadius: 20,
                padding: 28, borderTop: `2px solid ${color}`, backdropFilter: "blur(8px)",
                height: "100%",
              }}>
                <span style={{ fontSize: 28, display: "block", marginBottom: 12 }}>{icon}</span>
                <h3 style={{ fontSize: 16, fontWeight: 700, margin: "0 0 10px", color }}>{title}</h3>
                <p style={{ fontSize: 13, color: C.muted, lineHeight: 1.7, margin: 0 }}>{desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CTA
          ═══════════════════════════════════════════ */}
      <footer style={{ padding: "60px 5% 48px", textAlign: "center" }}>
        <FadeIn>
          <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, margin: "0 0 10px" }}>
            Interview-ready <span style={{ color: C.accent }}>materials available.</span>
          </h2>
          <p style={{ fontSize: 14, color: C.muted, margin: "0 0 24px" }}>
            Live system walkthrough, architecture review, private code access on request, and references.
          </p>
          <div data-flex="footer-links" style={{ display: "flex", justifyContent: "center", gap: 12 }}>
            {([
              ["✉️ Email Me", "mailto:leonel090810@gmail.com", C.accent],
              ["📄 Resume", "/resume", C.teal],
              ["💼 LinkedIn", "https://linkedin.com/in/leonel-ulloa-ai", C.blue],
              ["💻 GitHub", "https://github.com/leonelulloa", C.dim],
            ] as const).map(([label, href, color]) => (
              <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="hover-lift" style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                padding: "10px 20px", borderRadius: 12,
                background: `${color}15`, border: `1px solid ${color}30`,
                color: C.text, fontSize: 13, fontWeight: 500, textDecoration: "none",
              }}>
                {label}
              </a>
            ))}
          </div>
          <p style={{ fontSize: 11, fontFamily: C.mono, color: C.dim, marginTop: 32 }}>
            leonelulloa.com · Runcorn, UK · Remote / Hybrid · English &amp; Spanish
          </p>
        </FadeIn>
      </footer>
    </div>
  );
}
