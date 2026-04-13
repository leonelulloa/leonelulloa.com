import type { Metadata } from "next";
import PrintButton from "./PrintButton";

export const metadata: Metadata = {
  title: "Leonel Ulloa — Resume | Product Engineer",
  description:
    "Product Engineer with hands-on experience in AI systems, automation, and full-stack development. Two complex systems built from zero.",
  robots: { index: false, follow: false },
};

/* ─────────────────────────────────────────────
   Leonel Ulloa — Recruiter-Friendly CV v2

   Design: clean, scannable, outcome-focused.
   Print: Ctrl+P → Save as PDF
   ───────────────────────────────────────────── */

export default function ResumePage() {
  return (
    <>
      {/* Action buttons */}
      <div
        className="no-print"
        style={{
          position: "fixed",
          top: 16,
          right: 16,
          zIndex: 100,
          display: "flex",
          gap: 8,
        }}
      >
        <a
          href="/portfolio"
          style={{
            background: "rgba(124,92,255,0.15)",
            color: "#7c5cff",
            border: "1px solid rgba(124,92,255,0.3)",
            padding: "8px 16px",
            borderRadius: 8,
            fontSize: 13,
            fontWeight: 500,
            cursor: "pointer",
            textDecoration: "none",
          }}
        >
          ← Portfolio
        </a>
        <PrintButton />
      </div>

      <div
        className="resume"
        style={{
          maxWidth: 780,
          margin: "0 auto",
          padding: "40px 32px",
        }}
      >
        {/* ═══ HEADER ═══ */}
        <header style={{ marginBottom: 28 }}>
          <h1
            style={{
              fontSize: 26,
              fontWeight: 700,
              margin: 0,
              letterSpacing: "-0.02em",
            }}
          >
            Leonel Ulloa
          </h1>
          <p
            className="accent-text"
            style={{
              fontSize: 15,
              fontWeight: 500,
              margin: "4px 0 10px",
              color: "#7c5cff",
            }}
          >
            Product Engineer | AI Systems &amp; Automation
          </p>
          <div
            className="muted-text"
            style={{
              fontSize: 12.5,
              color: "#a9b7cf",
              display: "flex",
              flexWrap: "wrap",
              gap: "4px 16px",
            }}
          >
            <span>Runcorn, UK</span>
            <span>leonel090810@gmail.com</span>
            <span>leonelulloa.com</span>
            <span>github.com/leonelulloa</span>
            <span>linkedin.com/in/leonel-ulloa-ai</span>
          </div>
          <p style={{ fontSize: 11.5, color: "#8899b4", margin: "8px 0 0" }}>
            Open to: Full Stack Engineer · Product Engineer · AI/Automation Engineer · Founding Engineer · Solutions Engineer
          </p>
          <p style={{ fontSize: 11, color: "#5a6a82", margin: "4px 0 0" }}>
            Based in UK · Remote / Hybrid · English &amp; Spanish
          </p>
        </header>

        <Divider />

        {/* ═══ SUMMARY ═══ */}
        <Section title="Summary">
          <p style={{ fontSize: 13.5, lineHeight: 1.7, margin: "0 0 10px" }}>
            Product and systems builder with hands-on experience designing and
            shipping production software across SaaS, automation pipelines,
            business workflows, and internal control systems. Strong in
            TypeScript, Next.js, React, Supabase/PostgreSQL, workflow
            automation (n8n), video rendering (ffmpeg), large language model
            (LLM) integration, API development, and cost-aware product
            architecture. I use AI tools (Claude Code, ChatGPT) within
            professional development workflows (VS Code, Git, CI/CD) to build
            production-grade, reliable systems — not no-code prototypes. I
            work best on cross-functional problems where product, operations,
            growth, and technical execution all matter at once.
          </p>
          <p style={{ fontSize: 13.5, lineHeight: 1.7, margin: 0 }}>
            I am a problem solver by nature — when I encounter a challenge, I
            study it until I find a solution that is not just functional but
            improves reliability, reduces cost, and opens new business
            opportunities. I build systems with production-grade patterns:
            kill switches, circuit breakers, graceful degradation, and
            measurement frameworks — because knowing a system works is as
            important as building it. I think in complete solutions: not the
            fastest fix, but the one that prevents future problems and creates
            long-term value.
          </p>
        </Section>

        <Divider />

        {/* ═══ SELECTED EXPERIENCE ═══ */}
        <Section title="Selected Experience">
          {/* PhotoAI Advantage */}
          <ExperienceCard
            role="Founder / Product Engineer"
            project="PhotoAI Advantage 2.0"
            period="2025 – Present"
            description="AI-powered ad creation SaaS (pre-launch)"
            bullets={[
              "Built a multi-language SaaS for AI-assisted ad creation using Next.js, React, TypeScript, Supabase, Stripe, Cloudflare R2, Redis, and Inngest",
              "Designed and implemented a large product architecture with 215 PostgreSQL tables, 193 API routes, 139 RPC functions, 107 triggers, and 420+ RLS policies",
              "Built a 70+ page admin control platform with RBAC, TOTP 2FA, CSRF protection, audit trails, feature flags, promotions, and operational controls",
              "Reduced generation cost by separating text rendering from AI image generation, enabling multiple ad variants, resizing, and translation with minimal incremental cost",
              "Implemented multi-provider language model orchestration across Gemini, OpenAI, and DeepSeek with fallback logic, reliability safeguards, concurrency limits, and cost guardrails",
            ]}
            tech="Next.js 16, React 19, TypeScript, Supabase, PostgreSQL, Stripe, Cloudflare R2, Upstash Redis, Inngest, Fabric.js, Satori, Puppeteer, Tailwind CSS"
          />

          {/* L7AI Pipeline */}
          <ExperienceCard
            role="Founder / Automation Engineer"
            project="L7AI Content Intelligence"
            period="2025 – Present"
            description="Production automation & orchestration system (live, running daily)"
            bullets={[
              "Built and operate 27 production n8n workflows that automate the full content lifecycle: research, scoring, script generation, voice synthesis, video rendering, and publishing across 10 social channels in English and Spanish",
              "Engineered a short-form video pipeline that produces fully branded videos in 90 seconds at $0.046 per video — replacing 8 hours/week of manual editing with 40 minutes of script review, producing 86 videos/month across two languages",
              "Built a custom ffmpeg video renderer (12x faster than browser-based Remotion rendering) with word-level subtitle synchronization, B-roll layering, branding overlays, and progress bar — deployed as a Docker containerized API",
              "Implemented production-grade reliability patterns: kill switches (database toggle to halt pipelines instantly), circuit breakers (auto-pause after 5 errors in 5 minutes), rate limiting on paid API calls, graceful degradation (B-roll fallback chain: Pexels → Pixabay → FLUX AI still), and error-only Telegram alerting to prevent alert fatigue",
              "Solved infrastructure-level problems including Hetzner IPv4 blocks by building a Cloudflare Worker proxy for ElevenLabs and enabling Docker IPv6 networking, and diagnosed Traefik multi-network routing failures causing 504 timeouts",
              "Designed a measurement framework tracking render time, cost per video, success rate, and fallback triggers — all logged to Supabase with real cost validation against Cloudflare R2 file sizes",
              "Deployed and maintain self-hosted infrastructure (Hetzner, Docker, Coolify, Traefik) at $43/month with 47 database tables, 14,900+ records, and automated health monitoring via Telegram bot",
            ]}
            tech="n8n, ffmpeg, Docker, Supabase, PostgreSQL, Cloudflare R2, Cloudflare Workers, ElevenLabs, Remotion, Traefik, Postiz, Claude API, OpenAI, Stability AI, FLUX"
          />

          {/* Website */}
          <ExperienceCard
            role="Founder / Full-Stack Builder"
            project="leonelulloa.com"
            period="2025 – Present"
            description="Bilingual personal brand website (live)"
            bullets={[
              "Built and deployed a bilingual personal website with 72 AI prompts, 3 ebooks, email-gated downloads, newsletter capture, and analytics",
              "Implemented EN/ES routing, searchable prompt library, and lead-capture flow on self-hosted infrastructure",
            ]}
            tech="Next.js, React, TypeScript, Tailwind CSS, Supabase, Docker, Coolify"
          />
        </Section>

        <Divider />

        {/* ═══ TECHNICAL SKILLS ═══ */}
        <Section title="Technical Skills">
          <div
            data-grid="resume-caps"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "10px 28px",
              fontSize: 13,
            }}
          >
            <SkillGroup
              label="Product & Systems"
              text="Product architecture, business workflow analysis, admin platforms, internal tools, feature flags, structured workflow design, system reliability, cost-aware system design"
            />
            <SkillGroup
              label="Full-Stack"
              text="TypeScript, JavaScript, Python (scripting), Next.js, React, Node.js, Tailwind CSS, REST APIs, API integrations, Fabric.js, Satori, Puppeteer"
            />
            <SkillGroup
              label="Database & Backend"
              text="PostgreSQL, Supabase, RPC functions, Row-Level Security, triggers, schema design, auth flows, rate limiting"
            />
            <SkillGroup
              label="Automation & AI"
              text="n8n, Zapier, Make, ffmpeg (video rendering pipelines), large language model (LLM) integration (Claude, GPT, Gemini, DeepSeek), AI-powered workflow automation, prompt engineering, structured outputs, TTS with word-level timestamps, image generation, video production pipelines"
            />
            <SkillGroup
              label="Infrastructure & Reliability"
              text="Docker, Coolify, Traefik, Hetzner, Cloudflare R2, Cloudflare Workers, Redis, GitHub Actions, CI/CD, kill switches, circuit breakers, rate limiting, graceful degradation, error-only alerting, system monitoring, production debugging"
            />
            <SkillGroup
              label="Business & Growth"
              text="Digital marketing strategy, content strategy, multilingual systems, automation for growth operations, cost/margin analysis"
            />
          </div>
        </Section>

        <Divider />

        {/* ═══ EDUCATION ═══ */}
        <Section title="Education">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <div>
              <h3 style={{ fontSize: 14, fontWeight: 600, margin: 0 }}>
                Systems Engineering Technician
              </h3>
              <p className="muted-text" style={{ fontSize: 12.5, color: "#a9b7cf", margin: "2px 0 0" }}>
                University Gerardo Barrios — Computer Engineering
              </p>
            </div>
            <span className="muted-text" style={{ fontSize: 12, color: "#a9b7cf", whiteSpace: "nowrap" }}>
              2009 – 2012
            </span>
          </div>
        </Section>

        <Divider />

        {/* ═══ CERTIFICATIONS ═══ */}
        <Section title="Certifications">
          <div
            data-grid="resume-certs"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "6px 24px",
              fontSize: 13,
            }}
          >
            <CertItem issuer="Microsoft" name="Azure Fundamentals: Cloud Concepts" />
            <CertItem issuer="Microsoft" name="Azure Fundamentals: Architecture & Services" />
            <CertItem issuer="Microsoft" name="Azure Fundamentals: Management & Governance" />
            <CertItem issuer="Google / Coursera" name="Digital Marketing" />
            <CertItem issuer="Google / Coursera" name="E-commerce" />
            <CertItem issuer="Cloud Academy" name="Python & SQL" />
            <CertItem issuer="Cloud Academy" name="Data Engineering" />
          </div>
        </Section>

        <Divider />

        {/* ═══ LANGUAGES ═══ */}
        <Section title="Languages">
          <p style={{ fontSize: 13, margin: 0 }}>
            <strong>Spanish</strong> — Native &nbsp;|&nbsp;{" "}
            <strong>English</strong> — Professional working proficiency
          </p>
        </Section>

        <Divider />

        {/* ═══ FOOTER ═══ */}
        <footer
          className="muted-text"
          style={{
            fontSize: 12,
            color: "#a9b7cf",
            textAlign: "center",
            paddingTop: 16,
          }}
        >
          <p style={{ margin: "0 0 4px" }}>
            Full portfolio with architecture deep-dives: leonelulloa.com/portfolio
          </p>
          <p style={{ margin: 0 }}>
            Interview-ready: live system walkthrough, architecture review, private code access, and references on request.
          </p>
        </footer>
      </div>
    </>
  );
}

/* ═══ COMPONENTS ═══ */

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="section" style={{ margin: "20px 0" }}>
      <h2
        className="accent-text"
        style={{
          fontSize: 13,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          color: "#7c5cff",
          margin: "0 0 12px",
        }}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

function Divider() {
  return (
    <hr
      className="divider"
      style={{
        border: "none",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        margin: "4px 0",
      }}
    />
  );
}

function ExperienceCard({
  role,
  project,
  period,
  description,
  bullets,
  tech,
}: {
  role: string;
  project: string;
  period?: string;
  description: string;
  bullets: string[];
  tech: string;
}) {
  return (
    <div style={{ marginBottom: 24 }}>
      {/* Role + period line */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
        <p
          className="muted-text"
          style={{
            fontSize: 12,
            color: "#a9b7cf",
            margin: "0 0 2px",
            fontWeight: 500,
            textTransform: "uppercase",
            letterSpacing: "0.04em",
          }}
        >
          {role}
        </p>
        {period && (
          <span className="muted-text" style={{ fontSize: 12, color: "#a9b7cf", whiteSpace: "nowrap" }}>
            {period}
          </span>
        )}
      </div>
      {/* Project name + description */}
      <h3 style={{ fontSize: 15, fontWeight: 600, margin: "0 0 2px" }}>
        {project}
      </h3>
      <p
        className="muted-text"
        style={{
          fontSize: 12.5,
          color: "#a9b7cf",
          margin: "0 0 8px",
          fontStyle: "italic",
        }}
      >
        {description}
      </p>
      {/* Bullets */}
      <ul
        style={{
          margin: "0 0 8px",
          paddingLeft: 18,
          fontSize: 13,
          lineHeight: 1.6,
        }}
      >
        {bullets.map((b, i) => (
          <li key={i} style={{ marginBottom: 3 }}>
            {b}
          </li>
        ))}
      </ul>
      {/* Tech line */}
      <p
        className="muted-text"
        style={{ fontSize: 12, color: "#a9b7cf", margin: 0 }}
      >
        <strong style={{ color: "#eaf2ff" }}>Tech:</strong> {tech}
      </p>
    </div>
  );
}

function SkillGroup({ label, text }: { label: string; text: string }) {
  return (
    <div style={{ marginBottom: 4 }}>
      <strong style={{ fontSize: 13 }}>{label}</strong>
      <p
        className="muted-text"
        style={{
          fontSize: 12.5,
          color: "#a9b7cf",
          margin: "2px 0 0",
          lineHeight: 1.5,
        }}
      >
        {text}
      </p>
    </div>
  );
}

function CertItem({ issuer, name }: { issuer: string; name: string }) {
  return (
    <div style={{ display: "flex", gap: 8, alignItems: "baseline" }}>
      <span
        className="tag"
        style={{
          fontSize: 10,
          fontWeight: 600,
          background: "rgba(124,92,255,0.15)",
          color: "#7c5cff",
          padding: "2px 6px",
          borderRadius: 4,
          whiteSpace: "nowrap",
        }}
      >
        {issuer}
      </span>
      <span style={{ fontSize: 12.5 }}>{name}</span>
    </div>
  );
}
