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
      {/* Print button */}
      <div
        className="no-print"
        style={{
          position: "fixed",
          top: 16,
          right: 16,
          zIndex: 100,
        }}
      >
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
        </header>

        <Divider />

        {/* ═══ SUMMARY ═══ */}
        <Section title="Summary">
          <p style={{ fontSize: 13.5, lineHeight: 1.7, margin: "0 0 10px" }}>
            Product and systems builder with hands-on experience designing and
            shipping complex software across SaaS, automation, content
            pipelines, and internal control systems. Strong in TypeScript,
            Next.js, React, Supabase/PostgreSQL, workflow automation, AI
            integrations, and cost-aware product architecture. I use AI tools
            (Claude Code, ChatGPT) within professional development workflows
            (VS Code, Git, CI/CD) to build production-grade systems — not
            no-code prototypes. I work best on cross-functional problems where
            product, operations, growth, and technical execution all matter at
            once.
          </p>
          <p style={{ fontSize: 13.5, lineHeight: 1.7, margin: 0 }}>
            I am a problem solver by nature — when I encounter a challenge, I
            study it until I find a solution that is not just functional but
            improves security, reduces cost, and opens new business
            opportunities. I think in complete solutions: not the fastest fix,
            but the one that prevents future problems and creates long-term
            value. I am in constant learning across technology, marketing, and
            business — because the best architecture decisions come from
            understanding all three simultaneously.
          </p>
        </Section>

        <Divider />

        {/* ═══ SELECTED EXPERIENCE ═══ */}
        <Section title="Selected Experience">
          {/* PhotoAI Advantage */}
          <ExperienceCard
            role="Founder / Product Engineer"
            project="PhotoAI Advantage 2.0"
            description="AI-powered ad creation SaaS (pre-launch)"
            bullets={[
              "Built a multi-language SaaS for AI-assisted ad creation using Next.js, React, TypeScript, Supabase, Stripe, Cloudflare R2, Redis, and Inngest",
              "Designed and implemented a large product architecture with 215 PostgreSQL tables, 193 API routes, 139 RPC functions, 107 triggers, and 420+ RLS policies",
              "Built a 70+ page admin control platform with RBAC, TOTP 2FA, CSRF protection, audit trails, feature flags, promotions, and operational controls",
              "Reduced generation cost by separating text rendering from AI image generation, enabling multiple ad variants, resizing, and translation with minimal incremental cost",
              "Implemented multi-provider AI orchestration across Gemini, OpenAI, and DeepSeek with fallback logic, concurrency limits, and cost guardrails",
            ]}
            tech="Next.js 16, React 19, TypeScript, Supabase, PostgreSQL, Stripe, Cloudflare R2, Upstash Redis, Inngest, Fabric.js, Satori, Puppeteer, Tailwind CSS"
          />

          {/* L7AI Pipeline */}
          <ExperienceCard
            role="Founder / Systems Builder"
            project="L7AI Content Intelligence Pipeline"
            description="Automated bilingual content system (live)"
            bullets={[
              "Built an automated research-to-publishing pipeline that scans 60 topics across multiple sources, scores opportunities, generates content, and publishes across 10 social channels in English and Spanish",
              "Designed a system with 26 active n8n workflows, 47 database tables, and 14,900+ records",
              "Automated content production across scripting, voice, music, captions, rendering, and publishing using n8n, Remotion, Supabase, R2, Postiz, and AI providers",
              "Built a 7-stage audio mastering pipeline and reusable media workflow that reduces production cost and turnaround time over time",
              "Ran the system on self-hosted infrastructure using Hetzner, Docker, Coolify, and Traefik at approximately $43/month",
            ]}
            tech="n8n, Remotion, Supabase, Cloudflare R2, Docker, Traefik, Postiz, OpenAI, Claude API, Stability AI, FLUX, Kling"
          />

          {/* Website */}
          <ExperienceCard
            role="Founder / Full-Stack Builder"
            project="leonelulloa.com"
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
              text="Product architecture, admin platforms, internal tools, feature flags, workflow design, cost-aware system design"
            />
            <SkillGroup
              label="Full-Stack"
              text="TypeScript, Next.js, React, Tailwind CSS, REST APIs, Fabric.js, Satori, Puppeteer"
            />
            <SkillGroup
              label="Database & Backend"
              text="PostgreSQL, Supabase, RPC functions, Row-Level Security, triggers, schema design, auth flows, rate limiting"
            />
            <SkillGroup
              label="Automation & AI"
              text="n8n, LLM integrations (Claude, GPT, Gemini, DeepSeek), AI content workflows, TTS, image generation, video workflows"
            />
            <SkillGroup
              label="Infrastructure"
              text="Docker, Coolify, Traefik, Hetzner, Cloudflare R2, Redis, GitHub Actions, CI/CD"
            />
            <SkillGroup
              label="Business & Growth"
              text="Digital marketing strategy, content strategy, multilingual systems, automation for growth operations, cost/margin analysis"
            />
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
            Portfolio with live proof: leonelulloa.com/portfolio
          </p>
          <p style={{ margin: 0 }}>
            Live demos, system walkthroughs, private repository access, and references available on request.
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
  description,
  bullets,
  tech,
}: {
  role: string;
  project: string;
  description: string;
  bullets: string[];
  tech: string;
}) {
  return (
    <div style={{ marginBottom: 24 }}>
      {/* Role line */}
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
