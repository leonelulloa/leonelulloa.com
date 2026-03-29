import type { Metadata } from "next";
import { FadeIn, Stagger, Counter, GlowCard, Particles, GlobalStyles } from "../Effects";
import { PipelineFlowDiagram, TechEcosystem } from "./PipelineVisual";
import InfraDashboard from "./InfraDashboard";

export const metadata: Metadata = {
  title: "L7AI Content Intelligence Pipeline — Leonel Ulloa Portfolio",
  description: "Fully automated bilingual content pipeline. 26 workflows, 47 tables, 10 social channels. From research to published content.",
};

/* ═══ Colors ═══ */
const C = {
  bg: "#070a0f",
  panel: "#0c1220",
  text: "#eaf2ff",
  muted: "#94a3b8",
  accent: "#7c5cff",
  teal: "#00d1b2",
  green: "#22c55e",
  blue: "#3b82f6",
  orange: "#f97316",
  gold: "#eab308",
  pink: "#ec4899",
  red: "#ef4444",
  border: "rgba(255,255,255,0.06)",
  mono: "ui-monospace, 'Cascadia Code', 'Fira Code', monospace",
  sans: 'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
};

export default function PipelinePage() {
  return (
    <div style={{ fontFamily: C.sans, color: C.text, background: C.bg, minHeight: "100vh" }}>
      <GlobalStyles />

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section style={{ position: "relative", padding: "80px 5% 60px", overflow: "hidden" }}>
        <Particles count={20} />
        {/* Hero background image — blurred and faded */}
        <div style={{
          position: "absolute", top: -100, right: -100, width: 500, height: 500,
          backgroundImage: "url(/images/l7ai-hero.jpg)",
          backgroundSize: "cover", backgroundPosition: "center",
          opacity: 0.08, filter: "blur(40px)",
          borderRadius: "50%", pointerEvents: "none",
        }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 1200, margin: "0 auto" }}>
          <a href="/portfolio" style={{ fontSize: 12, color: C.muted, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 24 }}>
            ← Back to Portfolio
          </a>

          <FadeIn>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
              {/* L7AI icon from generated image */}
              <div style={{
                width: 56, height: 56, borderRadius: 14, overflow: "hidden",
                border: "2px solid rgba(0,209,178,0.3)",
                boxShadow: "0 0 20px rgba(0,209,178,0.15)",
                flexShrink: 0,
              }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/l7ai-icon.jpg" alt="L7AI" width={56} height={56} style={{ width: 56, height: 56, objectFit: "cover", objectPosition: "center" }} />
              </div>
              <div>
                <h1 style={{ fontSize: 36, fontWeight: 800, margin: 0, letterSpacing: "-0.02em" }}>
                  L7AI Content Intelligence Pipeline
                </h1>
                <p style={{ fontSize: 14, color: C.teal, margin: "4px 0 0", fontWeight: 500 }}>Automated Bilingual Content System · Live · Running Daily</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: C.muted, maxWidth: 800, margin: "0 0 32px" }}>
              A fully automated research-to-publishing pipeline that scans <strong style={{ color: C.text }}>60 topics</strong> across 7 data sources weekly,
              scores opportunities with a multi-signal AI algorithm, produces finished content (carousels, videos, captions, thumbnails),
              and publishes across <strong style={{ color: C.text }}>10 social media channels</strong> in English and Spanish.
              From a single topic signal to a finished, published post — no manual steps except script approval.
            </p>
          </FadeIn>

          {/* Stats bar */}
          <FadeIn delay={200}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              {([
                ["26", "Active Workflows", C.teal],
                ["47", "Database Tables", C.accent],
                ["14.9K+", "Records", C.blue],
                ["10", "Social Channels", C.green],
                ["60", "Topics Tracked", C.orange],
                ["$43/mo", "Infrastructure", C.gold],
              ] as const).map(([val, label, color]) => (
                <div key={label} style={{
                  background: `${color}10`,
                  border: `1px solid ${color}25`,
                  borderRadius: 10,
                  padding: "10px 18px",
                  textAlign: "center",
                }}>
                  <p style={{ fontSize: 20, fontWeight: 700, color, margin: 0, fontFamily: C.mono }}>{val}</p>
                  <p style={{ fontSize: 10, color: C.muted, margin: "2px 0 0", textTransform: "uppercase", letterSpacing: "0.06em" }}>{label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          VISUAL PIPELINE OVERVIEW — Premium glassmorphism
      ══════════════════════════════════════════ */}
      <section style={{ padding: "56px 5% 64px", borderTop: `1px solid ${C.border}`, background: "linear-gradient(180deg, rgba(0,209,178,0.04) 0%, rgba(124,92,255,0.02) 50%, transparent 100%)", position: "relative", overflow: "hidden" }}>
        {/* Background glow orbs */}
        <div style={{ position: "absolute", top: -100, left: "10%", width: 300, height: 300, background: "radial-gradient(circle, rgba(59,130,246,0.08), transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -100, right: "10%", width: 300, height: 300, background: "radial-gradient(circle, rgba(34,197,94,0.08), transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <PipelineFlowDiagram />
        </div>
      </section>

      {/* ══════════════════════════════════════════
          THE PROBLEM & SOLUTION
      ══════════════════════════════════════════ */}
      <section style={{ padding: "60px 5%", borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <FadeIn>
            <SectionHeader icon="💡" title="Why I Built This" color={C.gold} />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginTop: 24 }}>
              <div style={{ background: `${C.red}08`, border: `1px solid ${C.red}20`, borderRadius: 16, padding: 24 }}>
                <p style={{ fontSize: 14, fontWeight: 600, color: C.red, margin: "0 0 12px" }}>⚡ The Problem</p>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: C.muted, margin: 0 }}>
                  As a solo developer building two systems, I had <strong style={{ color: C.text }}>zero time for content creation</strong>. But today&#39;s world demands online presence — LinkedIn, Instagram, YouTube, all need consistent, quality content. Doing it manually across multiple platforms in two languages was impossible. Every hour spent on content was an hour not spent building.
                </p>
              </div>
              <div style={{ background: `${C.green}08`, border: `1px solid ${C.green}20`, borderRadius: 16, padding: 24 }}>
                <p style={{ fontSize: 14, fontWeight: 600, color: C.green, margin: "0 0 12px" }}>✅ The Solution</p>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: C.muted, margin: 0 }}>
                  Automate everything from research to publishing. The system scans for trending topics, scores opportunities, generates content briefs, produces carousels + videos + captions, and publishes to 10 channels — <strong style={{ color: C.text }}>all I do is approve the scripts</strong>. One approval click, and the rest is fully automated end-to-end.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <QuoteBlock color={C.teal}>
              I CAN build fully autonomous publishing. I CHOOSE to approve scripts because my brand carries my name.
              After approval, everything is automated. This is a product maturity decision, not a technical limitation.
            </QuoteBlock>
          </FadeIn>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          5-LAYER PIPELINE ARCHITECTURE
      ══════════════════════════════════════════ */}
      <section style={{ padding: "60px 5%", borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <FadeIn>
            <SectionHeader icon="🏗️" title="5-Layer Pipeline Architecture" color={C.accent} />
            <p style={{ fontSize: 14, color: C.muted, maxWidth: 700, margin: "8px 0 32px" }}>
              Each layer operates independently with its own workflows, data models, and error handling.
              If one layer fails, the others continue. Data flows down; each layer enriches the previous output.
            </p>
          </FadeIn>

          {/* Pipeline visual */}
          <Stagger staggerMs={120}>
            {/* Layer 1: Collection */}
            <PipelineLayer
              number="01"
              title="Data Collection"
              subtitle="7 scheduled workflows · runs weekly"
              color={C.blue}
              icon="📡"
              description="Automated scanners continuously gather raw data from multiple sources across the internet."
              workflows={[
                { name: "YouTube Scanner", detail: "Scans channels for trending videos, extracts metadata, view counts, engagement rates" },
                { name: "Blog Supply Scanner", detail: "Crawls industry blogs, filters spam domains (39% pollution removed via blocklist)" },
                { name: "AI News Monitor", detail: "Tracks AI/tech news sources for breaking stories and emerging trends" },
                { name: "Question Demand Collector", detail: "Scrapes forums and Q&A sites for what people are actually asking" },
                { name: "Community Signal Scanner", detail: "Monitors Reddit, X, LinkedIn for engagement spikes and viral patterns" },
                { name: "YouTube Comment Analyzer", detail: "Extracts comments for sentiment analysis and content gap detection" },
              ]}
              stats={["1,087 YouTube videos", "1,449 blog articles", "1,816 news articles", "3,937 community signals", "4,738 YouTube comments", "440 forum questions"]}
            />

            {/* Layer 2: Intelligence */}
            <PipelineLayer
              number="02"
              title="Intelligence & Scoring"
              subtitle="3 workflows · multi-signal AI algorithm"
              color={C.accent}
              icon="🧠"
              description="Raw data becomes actionable opportunities. A multi-signal scoring algorithm evaluates every topic across 10+ dimensions to find what's worth creating content about."
              workflows={[
                { name: "Topic Scorer", detail: "10+ signals: demand volume, supply scarcity, outlier detection, momentum, buzz factor, convergence" },
                { name: "Tier Classifier", detail: "Confidence-weighted classification: GOLD (create now), SILVER (watch), WATCH (monitor)" },
                { name: "Trend Analyzer", detail: "Cross-references multiple data sources to detect emerging trends before they peak" },
              ]}
              stats={["158 tracked topics (30 EN + 30 ES + extras)", "525 calendar entries generated", "101 content briefs produced"]}
              decisionBox={{
                title: "Why demand-supply gap, not just search volume?",
                text: "Search volume tells you what people want. Supply tells you what already exists. The gap between them is where opportunity lives. A topic with 100K searches and 500 articles is saturated. A topic with 10K searches and 5 articles is gold. This scoring approach surfaces topics that competitors miss."
              }}
            />

            {/* Layer 3: Strategy */}
            <PipelineLayer
              number="03"
              title="Content Strategy"
              subtitle="Interactive · human-in-the-loop"
              color={C.teal}
              icon="📋"
              description="AI generates complete content calendars and briefs. I review and approve scripts — this is where human judgment matters most."
              workflows={[
                { name: "Calendar Generator", detail: "28 video + 28 post entries per week, bilingual, balanced across topics and formats" },
                { name: "Brief Writer", detail: "Full briefs with hooks, angles, talking points, visual direction, and platform-specific notes" },
                { name: "Script Generator", detail: "Claude API writes scripts matched to brand voice DNA — tone, vocabulary, sentence structure" },
              ]}
              stats={["525 content calendar entries", "101 content briefs", "Brand voice DNA matching"]}
              decisionBox={{
                title: "Why keep script approval manual?",
                text: "My brand carries my name. Authenticity matters more than velocity. I know this means fewer posts than a fully autonomous system — and I'm okay with that. The approval step takes 2 minutes per script. The alternative is publishing something I wouldn't say, which damages trust permanently. This is a product maturity decision."
              }}
            />

            {/* Layer 4A: Personal Brand Content Production */}
            <PipelineLayer
              number="04"
              title="Personal Brand Content Production"
              subtitle="Carousels · captions · short-form reels"
              color={C.orange}
              icon="📸"
              description="The original production layer — turning approved briefs into finished social media content. Carousels with CSS/HTML text rendering, platform-optimized captions, and short-form video reels ready for Instagram, LinkedIn, Facebook, and Threads."
              workflows={[
                { name: "Carousel Renderer", detail: "Custom Remotion compositions → text on image with CSS/HTML → R2 storage. This method was later brought to PhotoAI Advantage." },
                { name: "Caption Generator", detail: "Platform-specific captions with hashtag strategies, CTAs, and bilingual variants" },
                { name: "Short-Form Reel Renderer", detail: "60-second reels via pure FFmpeg pipeline — bypasses Remotion for speed (~60s render time)" },
                { name: "Thumbnail Creator", detail: "FLUX 1.1 Pro AI generation + custom text overlay for each platform" },
              ]}
              stats={["459 media assets produced", "452 media library items catalogued", "Bilingual EN/ES output"]}
              decisionBox={{
                title: "The discovery that changed everything",
                text: "While building carousel rendering, I discovered that CSS/HTML text-on-image produces better results than burning text into AI images. This method went back to PhotoAI Advantage and became the core of its ad generation engine. But there was a bigger discovery: if I can render a 60-second reel from a script, I can render a 23-minute video. That realization created Layer 04B."
              }}
            />

            {/* Discovery bridge */}
            <div style={{ margin: "0 0 32px", paddingLeft: 72 }}>
              <div style={{ background: `linear-gradient(135deg, ${C.orange}10, ${C.pink}10)`, border: `1px solid ${C.pink}25`, borderRadius: 16, padding: 20, position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 4, background: `linear-gradient(to bottom, ${C.orange}, ${C.pink})` }} />
                <p style={{ fontSize: 13, fontWeight: 600, color: C.pink, margin: "0 0 6px" }}>💡 From short-form to long-form — a new capability emerged</p>
                <p style={{ fontSize: 13, color: C.muted, lineHeight: 1.7, margin: 0 }}>
                  The personal brand pipeline solved my immediate problem: publish content without spending hours on it. But while building the short-form reel renderer, I realised the same components — voice synthesis, music generation, scene composition, subtitle rendering — could produce full YouTube episodes.
                  A 60-second reel and a 23-minute video use the same pipeline, just scaled. This wasn&#39;t planned. I spotted the opportunity while solving a different problem. That&#39;s how I think: <strong style={{ color: C.text }}>every solution I build reveals the next opportunity</strong>.
                </p>
              </div>
            </div>

            {/* Layer 4B: YouTube Video Production */}
            <PipelineLayer
              number="04B"
              title="YouTube Video Production Engine"
              subtitle="Full episodes · script to publish · custom renderer"
              color={C.pink}
              icon="🎬"
              description="A complete video production pipeline that takes an approved script and produces a finished YouTube episode — with AI voices, generated music, B-roll, scene transitions, subtitles, and broadcast-standard audio mastering. No manual editing needed."
              workflows={[
                { name: "Scene Breakdown", detail: "Script → individual scenes with visual direction, mood, pacing notes" },
                { name: "Voice Synthesis", detail: "OpenAI TTS per scene + ElevenLabs voice cloning (via Cloudflare Worker proxy). Multi-voice character support." },
                { name: "Music Generator", detail: "Stability AI Stable Audio 2.5 → mood-matched to content tone, per-scene or full-episode" },
                { name: "B-Roll Matcher", detail: "Searches self-growing media library + Pexels/Pixabay for scene-appropriate footage" },
                { name: "Video Composer", detail: "Custom Remotion renderer: 6 compositions, 31 visual element types, parallelized rendering (73min → 36min)" },
                { name: "Audio Mastering", detail: "7-stage: narration → voice processing → music bed → sidechain ducking → two-pass loudnorm → dual export. From -58 LUFS to broadcast -15.3 LUFS" },
                { name: "Thumbnail Generator", detail: "FLUX 1.1 Pro + custom overlay. Designed for YouTube click-through optimization." },
              ]}
              stats={["690 episode clips produced", "70 episode scenes rendered", "6 AI characters with wardrobes", "First full 23-min episode: 16 scenes, 589MB", "Selective re-rendering: update 1 scene without re-rendering all"]}
              decisionBox={{
                title: "The self-growing media library",
                text: "Every production adds to the media library. B-roll footage, scene packs, character renders, and audio clips accumulate. By month 5, the system has enough library assets that new productions cost ~70% less in AI generation. Building now makes future content cheaper. This is compounding infrastructure, not just a pipeline."
              }}
            />

            {/* Layer 5: Publishing */}
            <PipelineLayer
              number="05"
              title="Publishing & Distribution"
              subtitle="Self-hosted Postiz · 10 channels"
              color={C.green}
              icon="📢"
              description="Finished content is scheduled and published across all platforms simultaneously. One approval → 10 channels × 2 languages = 20 potential publishing events."
              workflows={[
                { name: "Postiz Scheduler", detail: "Self-hosted Postiz v2.18.0 → API-driven scheduling and publishing" },
                { name: "Platform Optimizer", detail: "Format adaptation per platform: aspect ratios, character limits, hashtag strategies" },
                { name: "Google Drive Sync", detail: "All produced assets backed up to organized Drive library for manual access" },
                { name: "Telegram Alerts", detail: "Telegram Bot API → real-time notifications for approvals, errors, completions" },
              ]}
              stats={["10 social channels connected", "5 platforms: Instagram, LinkedIn, Facebook, Threads, YouTube", "2 languages: English + Spanish"]}
            />
          </Stagger>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CUSTOM VIDEO PRODUCTION ENGINE
      ══════════════════════════════════════════ */}
      <section style={{ padding: "60px 5%", borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <FadeIn>
            <SectionHeader icon="🎥" title="Custom Video Production Engine" color={C.pink} />
            <p style={{ fontSize: 14, color: C.muted, maxWidth: 700, margin: "8px 0 24px" }}>
              Not a template tool — a complete production pipeline from script to finished video.
              Custom Remotion renderer with 20+ API endpoints, 6 video compositions, and 31 visual element types.
            </p>
          </FadeIn>

          <FadeIn delay={100}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
              <FeatureCard icon="🎙️" title="AI Voice Synthesis" color={C.orange}
                items={["OpenAI TTS (per-scene granularity)", "ElevenLabs voice cloning", "Whisper word-level timestamps", "Multi-voice character support"]} />
              <FeatureCard icon="🎵" title="7-Stage Audio Mastering" color={C.pink}
                items={["Narration extraction", "Voice processing & EQ", "Music bed generation (Stability AI)", "Sidechain ducking", "Two-pass loudnorm (-58 → -15.3 LUFS)", "Dual export (podcast + video)"]} />
              <FeatureCard icon="🎬" title="Video Composition" color={C.accent}
                items={["6 Remotion compositions", "31 visual element types", "Parallelized: 73min → 36min", "Selective re-rendering (update 1 slide)", "B-roll from self-growing library", "Subtitle rendering with timing"]} />
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div style={{ marginTop: 24, background: `${C.pink}08`, border: `1px solid ${C.pink}20`, borderRadius: 16, padding: 24 }}>
              <p style={{ fontSize: 14, fontWeight: 600, color: C.pink, margin: "0 0 8px" }}>🎬 First Full Production</p>
              <p style={{ fontSize: 14, color: C.muted, lineHeight: 1.7, margin: 0 }}>
                First complete 23-minute episode produced end-to-end: 16 scenes, 589MB. Script → voice → music → B-roll → composition → mastering → thumbnail → ready to publish.
                Short-form videos (reels/shorts) render in ~60 seconds via pure FFmpeg pipeline — bypassing Remotion for speed.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          INFRASTRUCTURE
      ══════════════════════════════════════════ */}
      <section style={{ padding: "60px 5%", borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <FadeIn>
            <SectionHeader icon="🖥️" title="Infrastructure — $43/month Total" color={C.teal} />
            <p style={{ fontSize: 14, color: C.muted, maxWidth: 700, margin: "8px 0 24px" }}>
              Two Hetzner servers running Docker containers. Self-hosted everything — no vendor lock-in, full control, fraction of the cost of cloud equivalents.
              <strong style={{ color: C.teal }}> This data is live from the actual servers.</strong>
            </p>
          </FadeIn>

          {/* LIVE INFRASTRUCTURE DASHBOARD */}
          <FadeIn delay={100}>
            <InfraDashboard />
          </FadeIn>

          <FadeIn delay={200}>
            <div style={{ marginTop: 24, background: C.panel, border: `1px solid ${C.border}`, borderRadius: 16, padding: 24 }}>
              <p style={{ fontSize: 14, fontWeight: 600, margin: "0 0 12px" }}>Why self-hosted instead of cloud services?</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
                <div>
                  <p style={{ fontSize: 13, fontWeight: 600, color: C.teal, margin: "0 0 4px" }}>💰 Cost</p>
                  <p style={{ fontSize: 12, color: C.muted, lineHeight: 1.6, margin: 0 }}>n8n cloud: $50/mo. Self-hosted: $0. Postiz cloud: limited. Self-hosted: unlimited channels. Total cloud equivalent: $200+/mo vs our $43/mo.</p>
                </div>
                <div>
                  <p style={{ fontSize: 13, fontWeight: 600, color: C.teal, margin: "0 0 4px" }}>🔧 Control</p>
                  <p style={{ fontSize: 12, color: C.muted, lineHeight: 1.6, margin: 0 }}>Custom Docker configurations, direct server access for debugging, no API rate limits, full database access. When something breaks at 2am, I SSH in and fix it — no support tickets.</p>
                </div>
                <div>
                  <p style={{ fontSize: 13, fontWeight: 600, color: C.teal, margin: "0 0 4px" }}>🔒 Data Ownership</p>
                  <p style={{ fontSize: 12, color: C.muted, lineHeight: 1.6, margin: 0 }}>All data stays on our servers. Content strategies, AI prompts, brand voice DNA, audience insights — nothing leaves our infrastructure. Full GDPR compliance by default.</p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Live status link */}
          <FadeIn delay={300}>
            <a href="/status" style={{
              display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
              marginTop: 20, padding: "14px 24px", borderRadius: 12,
              background: `${C.green}10`, border: `1px solid ${C.green}25`,
              textDecoration: "none", color: C.green, fontSize: 14, fontWeight: 600,
              transition: "background 0.2s, border-color 0.2s",
            }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: C.green, boxShadow: `0 0 8px ${C.green}60` }} />
              View Live System Status & Incident Response Protocol →
            </a>
          </FadeIn>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TECHNOLOGY ECOSYSTEM — Premium visual
      ══════════════════════════════════════════ */}
      <section style={{ padding: "60px 5%", borderTop: `1px solid ${C.border}`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -80, left: "50%", width: 400, height: 400, background: "radial-gradient(circle, rgba(124,92,255,0.06), transparent 70%)", borderRadius: "50%", transform: "translateX(-50%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <TechEcosystem />
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CROSS-SYSTEM VALUE
      ══════════════════════════════════════════ */}
      <section style={{ padding: "60px 5%", borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <FadeIn>
            <SectionHeader icon="🔗" title="How This System Improved PhotoAI Advantage" color={C.gold} />
            <p style={{ fontSize: 14, color: C.muted, maxWidth: 700, margin: "8px 0 24px" }}>
              Building one system always improves the other. Here&#39;s what crossed over:
            </p>
          </FadeIn>

          <FadeIn delay={100}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
              <div className="hover-lift" style={{ background: C.panel, border: `1px solid ${C.border}`, borderRadius: 16, padding: 20 }}>
                <p style={{ fontSize: 28, margin: "0 0 8px" }}>🎨</p>
                <p style={{ fontSize: 14, fontWeight: 600, margin: "0 0 8px" }}>Text-on-Image Method</p>
                <p style={{ fontSize: 13, color: C.muted, lineHeight: 1.6, margin: 0 }}>
                  While building carousel rendering for this pipeline, I discovered that CSS/HTML text rendering produces better results than burning text into AI images.
                  I brought this method to PhotoAI Advantage — it became the core of the ad generation engine. One discovery → two products improved.
                </p>
              </div>
              <div className="hover-lift" style={{ background: C.panel, border: `1px solid ${C.border}`, borderRadius: 16, padding: 20 }}>
                <p style={{ fontSize: 28, margin: "0 0 8px" }}>📚</p>
                <p style={{ fontSize: 14, fontWeight: 600, margin: "0 0 8px" }}>Media Library Concept</p>
                <p style={{ fontSize: 13, color: C.muted, lineHeight: 1.6, margin: 0 }}>
                  The self-growing media library pattern (assets accumulate, costs drop over time) is being designed into PhotoAI&#39;s template system.
                  User-generated designs feed back into the template pool. Same compounding infrastructure principle, different application.
                </p>
              </div>
              <div className="hover-lift" style={{ background: C.panel, border: `1px solid ${C.border}`, borderRadius: 16, padding: 20 }}>
                <p style={{ fontSize: 28, margin: "0 0 8px" }}>🔄</p>
                <p style={{ fontSize: 14, fontWeight: 600, margin: "0 0 8px" }}>Multi-Provider Resilience</p>
                <p style={{ fontSize: 13, color: C.muted, lineHeight: 1.6, margin: 0 }}>
                  Running 7+ AI providers in this pipeline taught me that providers fail randomly. That experience directly shaped PhotoAI&#39;s triple fallback chain (Gemini → OpenAI → static).
                  Production resilience isn&#39;t theoretical — I learned it by operating this system daily.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PROOF — SCREENSHOTS & LIVE DATA
      ══════════════════════════════════════════ */}
      <section style={{ padding: "60px 5%", borderTop: `1px solid ${C.border}` }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 style={{ fontSize: 28, fontWeight: 700, margin: "0 0 8px" }}>Proof — Live System Screenshots</h2>
            <p style={{ fontSize: 14, color: C.muted, margin: 0 }}>Real screenshots from production dashboards. URL bars visible. Timestamps verifiable.</p>
          </div>

          {/* n8n Workflows */}
          <div style={{ marginBottom: 40 }}>
            <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 16, color: C.teal }}>n8n Automation Platform</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
              <div>
                <p style={{ fontSize: 11, color: C.muted, margin: "0 0 6px" }}>27 workflows — 0% failure rate — 60.58s avg run time</p>
                <img src="/images/proof/n8n-workflows-list.png" alt="n8n workflow list showing 27 active workflows" style={{ width: "100%", borderRadius: 10, border: `1px solid ${C.border}` }} loading="lazy" />
              </div>
              <div>
                <p style={{ fontSize: 11, color: C.muted, margin: "0 0 6px" }}>Execution log — all green, running every 5 minutes</p>
                <img src="/images/proof/n8n-executions-log.png" alt="n8n execution log showing successful runs" style={{ width: "100%", borderRadius: 10, border: `1px solid ${C.border}` }} loading="lazy" />
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
              <div>
                <p style={{ fontSize: 11, color: C.muted, margin: "0 0 6px" }}>WF10 — Production Pipeline (12 nodes)</p>
                <img src="/images/proof/n8n-wf10-production-pipeline.png" alt="WF10 Production Pipeline workflow" style={{ width: "100%", borderRadius: 10, border: `1px solid ${C.border}` }} loading="lazy" />
              </div>
              <div>
                <p style={{ fontSize: 11, color: C.muted, margin: "0 0 6px" }}>WF-ShortVideo — Reel Production</p>
                <img src="/images/proof/n8n-wf-shortvideo.png" alt="Short video production workflow" style={{ width: "100%", borderRadius: 10, border: `1px solid ${C.border}` }} loading="lazy" />
              </div>
              <div>
                <p style={{ fontSize: 11, color: C.muted, margin: "0 0 6px" }}>WF7 — YouTube Comments Collector</p>
                <img src="/images/proof/n8n-wf7-youtube-comments.png" alt="YouTube comments collector workflow" style={{ width: "100%", borderRadius: 10, border: `1px solid ${C.border}` }} loading="lazy" />
              </div>
              <div>
                <p style={{ fontSize: 11, color: C.muted, margin: "0 0 6px" }}>WF-VOICE-GEN — Voice Generation</p>
                <img src="/images/proof/n8n-wf-voice-gen.png" alt="Voice generation workflow" style={{ width: "100%", borderRadius: 10, border: `1px solid ${C.border}` }} loading="lazy" />
              </div>
              <div>
                <p style={{ fontSize: 11, color: C.muted, margin: "0 0 6px" }}>WF-VIDEO-COMPOSE — Video Compositor</p>
                <img src="/images/proof/n8n-wf-video-compose.png" alt="Video compositor workflow" style={{ width: "100%", borderRadius: 10, border: `1px solid ${C.border}` }} loading="lazy" />
              </div>
              <div>
                <p style={{ fontSize: 11, color: C.muted, margin: "0 0 6px" }}>WF-MEDIA-INGEST — Media Library</p>
                <img src="/images/proof/n8n-wf-media-ingest.png" alt="Media library ingestion workflow" style={{ width: "100%", borderRadius: 10, border: `1px solid ${C.border}` }} loading="lazy" />
              </div>
            </div>
          </div>

          {/* Infrastructure */}
          <div style={{ marginBottom: 40 }}>
            <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 16, color: C.gold }}>Infrastructure</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
              <div>
                <p style={{ fontSize: 11, color: C.muted, margin: "0 0 6px" }}>Cloudflare R2 — content-media bucket (25.58 GB)</p>
                <img src="/images/proof/cloudflare-r2-overview.png" alt="Cloudflare R2 storage bucket" style={{ width: "100%", borderRadius: 10, border: `1px solid ${C.border}` }} loading="lazy" />
              </div>
              <div>
                <p style={{ fontSize: 11, color: C.muted, margin: "0 0 6px" }}>R2 Storage Metrics — steady growth</p>
                <img src="/images/proof/cloudflare-r2-metrics.png" alt="R2 storage metrics graph" style={{ width: "100%", borderRadius: 10, border: `1px solid ${C.border}` }} loading="lazy" />
              </div>
              <div>
                <p style={{ fontSize: 11, color: C.muted, margin: "0 0 6px" }}>Hetzner — 2 production servers (EU)</p>
                <img src="/images/proof/hetzner-dashboard.png" alt="Hetzner server dashboard" style={{ width: "100%", borderRadius: 10, border: `1px solid ${C.border}` }} loading="lazy" />
              </div>
            </div>
          </div>

          {/* Verify CTA */}
          <div style={{ textAlign: "center", padding: "24px", background: `${C.teal}10`, borderRadius: 14, border: `1px solid ${C.teal}30` }}>
            <p style={{ fontSize: 14, fontWeight: 600, margin: "0 0 8px" }}>Verify It Yourself</p>
            <p style={{ fontSize: 12, color: C.muted, margin: "0 0 12px" }}>These endpoints are public — open them in your browser. Response times change on every refresh.</p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="https://leonelulloa.com/api/health" target="_blank" rel="noopener noreferrer" style={{ padding: "8px 16px", background: `${C.teal}20`, color: C.teal, borderRadius: 8, fontSize: 12, fontFamily: C.mono, textDecoration: "none", border: `1px solid ${C.teal}40` }}>/api/health</a>
              <a href="https://leonelulloa.com/api/infrastructure" target="_blank" rel="noopener noreferrer" style={{ padding: "8px 16px", background: `${C.teal}20`, color: C.teal, borderRadius: 8, fontSize: 12, fontFamily: C.mono, textDecoration: "none", border: `1px solid ${C.teal}40` }}>/api/infrastructure</a>
              <a href="https://leonelulloa.com/status" target="_blank" rel="noopener noreferrer" style={{ padding: "8px 16px", background: `${C.teal}20`, color: C.teal, borderRadius: 8, fontSize: 12, fontFamily: C.mono, textDecoration: "none", border: `1px solid ${C.teal}40` }}>/status</a>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ══════════════════════════════════════════
          FOOTER / CTA
      ══════════════════════════════════════════ */}
      <footer style={{ padding: "48px 5%", borderTop: `1px solid ${C.border}`, textAlign: "center" }}>
        <FadeIn>
          <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 8px" }}>
            This system runs <span style={{ color: C.teal }}>every day</span> — automatically
          </h2>
          <p style={{ fontSize: 14, color: C.muted, margin: "0 0 24px" }}>
            Live demos, n8n workflow walkthroughs, and Supabase data available on request.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            <a href="mailto:leonel090810@gmail.com" style={{ background: C.teal, color: "#fff", padding: "10px 24px", borderRadius: 10, fontSize: 14, fontWeight: 600, textDecoration: "none" }}>
              ✉️ Email Me
            </a>
            <a href="/portfolio" style={{ background: "rgba(255,255,255,0.06)", color: C.text, padding: "10px 24px", borderRadius: 10, fontSize: 14, fontWeight: 500, textDecoration: "none", border: `1px solid ${C.border}` }}>
              ← Back to Portfolio
            </a>
            <a href="/portfolio/photoai" style={{ background: "rgba(255,255,255,0.06)", color: C.text, padding: "10px 24px", borderRadius: 10, fontSize: 14, fontWeight: 500, textDecoration: "none", border: `1px solid ${C.border}` }}>
              See PhotoAI Advantage →
            </a>
          </div>
        </FadeIn>
      </footer>

      {/* Stack line */}
      <div style={{ padding: "16px 5%", textAlign: "center", borderTop: `1px solid ${C.border}` }}>
        <p style={{ fontSize: 11, fontFamily: C.mono, color: `${C.muted}80`, margin: 0 }}>
          n8n · Remotion · FFmpeg · Supabase · Cloudflare R2 · Docker · Traefik · Coolify · Postiz · Claude API · OpenAI · ElevenLabs · Stability AI · FLUX · Kling · Pexels · Hetzner
        </p>
      </div>
    </div>
  );
}

/* ═══ COMPONENTS ═══ */

function SectionHeader({ icon, title, color }: { icon: string; title: string; color: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <span style={{ width: 44, height: 44, borderRadius: "50%", background: `${color}15`, border: `2px solid ${color}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>{icon}</span>
      <h2 style={{ fontSize: 24, fontWeight: 700, margin: 0 }}>{title}</h2>
    </div>
  );
}

function PipelineLayer({
  number, title, subtitle, color, icon, description, workflows, stats, decisionBox,
}: {
  number: string; title: string; subtitle: string; color: string; icon: string;
  description: string; workflows: { name: string; detail: string }[];
  stats: string[]; decisionBox?: { title: string; text: string };
}) {
  return (
    <div style={{ marginBottom: 32, position: "relative" }}>
      {/* Connection line */}
      <div style={{ position: "absolute", left: 28, top: 56, bottom: 0, width: 2, background: `linear-gradient(to bottom, ${color}40, transparent)`, zIndex: 0 }} />

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
          <div style={{ width: 56, height: 56, borderRadius: 14, background: `${color}15`, border: `2px solid ${color}40`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, flexShrink: 0 }}>
            {icon}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
              <span style={{ fontSize: 11, fontFamily: "ui-monospace, monospace", color, fontWeight: 700 }}>LAYER {number}</span>
              <h3 style={{ fontSize: 18, fontWeight: 700, margin: 0 }}>{title}</h3>
            </div>
            <p style={{ fontSize: 12, color: C.muted, margin: "2px 0 0", fontFamily: "ui-monospace, monospace" }}>{subtitle}</p>
          </div>
        </div>

        <p style={{ fontSize: 14, color: C.muted, lineHeight: 1.7, margin: "0 0 16px", paddingLeft: 72 }}>{description}</p>

        <div style={{ paddingLeft: 72, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {/* Workflows */}
          <div style={{ background: C.panel, border: `1px solid ${C.border}`, borderRadius: 14, padding: 16 }}>
            <p style={{ fontSize: 11, fontWeight: 600, color, textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 10px" }}>Workflows</p>
            {workflows.map(w => (
              <div key={w.name} style={{ marginBottom: 8 }}>
                <p style={{ fontSize: 13, fontWeight: 600, margin: 0 }}>{w.name}</p>
                <p style={{ fontSize: 12, color: C.muted, margin: "2px 0 0", lineHeight: 1.5 }}>{w.detail}</p>
              </div>
            ))}
          </div>

          {/* Stats + Decision */}
          <div>
            <div style={{ background: `${color}08`, border: `1px solid ${color}20`, borderRadius: 14, padding: 16, marginBottom: decisionBox ? 12 : 0 }}>
              <p style={{ fontSize: 11, fontWeight: 600, color, textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 8px" }}>Live Data</p>
              {stats.map(s => (
                <p key={s} style={{ fontSize: 13, color: C.muted, margin: "4px 0", display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ width: 4, height: 4, borderRadius: "50%", background: color, flexShrink: 0 }} />{s}
                </p>
              ))}
            </div>

            {decisionBox && (
              <div style={{ background: `${C.gold}08`, border: `1px solid ${C.gold}20`, borderRadius: 14, padding: 16 }}>
                <p style={{ fontSize: 12, fontWeight: 600, color: C.gold, margin: "0 0 6px" }}>💡 {decisionBox.title}</p>
                <p style={{ fontSize: 12, color: C.muted, lineHeight: 1.6, margin: 0 }}>{decisionBox.text}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, color, items }: { icon: string; title: string; color: string; items: string[] }) {
  return (
    <div className="hover-lift" style={{ background: C.panel, border: `1px solid ${C.border}`, borderRadius: 16, padding: 20, borderTop: `3px solid ${color}` }}>
      <p style={{ fontSize: 24, margin: "0 0 8px" }}>{icon}</p>
      <p style={{ fontSize: 14, fontWeight: 600, margin: "0 0 10px" }}>{title}</p>
      <ul style={{ margin: 0, paddingLeft: 16, fontSize: 12, color: C.muted, lineHeight: 1.7 }}>
        {items.map(item => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}

function TechCard({ category, items, color }: { category: string; items: string[]; color: string }) {
  return (
    <div style={{ background: C.panel, border: `1px solid ${C.border}`, borderRadius: 14, padding: 16, borderTop: `3px solid ${color}` }}>
      <p style={{ fontSize: 12, fontWeight: 600, color, textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 8px" }}>{category}</p>
      {items.map(item => (
        <p key={item} style={{ fontSize: 13, color: C.muted, margin: "4px 0" }}>{item}</p>
      ))}
    </div>
  );
}

function QuoteBlock({ children, color = C.teal }: { children: React.ReactNode; color?: string }) {
  return (
    <div style={{ borderLeft: `3px solid ${color}`, padding: "16px 20px", margin: "24px 0", background: `${color}05`, borderRadius: "0 12px 12px 0" }}>
      <p style={{ fontSize: 14, lineHeight: 1.7, margin: 0, fontStyle: "italic", color: C.muted }}>
        {children}
      </p>
    </div>
  );
}

function Tag({ children, c }: { children: React.ReactNode; c: string }) {
  return (
    <span style={{ fontSize: 11, fontFamily: "ui-monospace, monospace", background: `${c}15`, color: c, padding: "3px 8px", borderRadius: 6, border: `1px solid ${c}25` }}>
      {children}
    </span>
  );
}
