"use client";

import { useEffect, useRef, useState } from "react";

/*
 * PipelineVisual — Premium glassmorphism pipeline diagram
 * Inspired by modern tech roadmap designs with neon glow effects
 */

const STEPS = [
  { icon: "📡", label: "Collect", sub: "7 Data Sources", detail: "YouTube · Blogs · News · Forums · Reddit · Comments", num: "12K+", color: "#3b82f6" },
  { icon: "🧠", label: "Score", sub: "AI Algorithm", detail: "10+ signals → GOLD / SILVER / WATCH", num: "158", color: "#7c5cff" },
  { icon: "📋", label: "Plan", sub: "Calendar + Briefs", detail: "56 entries/week · bilingual · scheduled", num: "525", color: "#00d1b2" },
  { icon: "✅", label: "Approve", sub: "Human Review", detail: "Brand voice quality gate · 2 min", num: "1 click", color: "#eab308" },
  { icon: "🎬", label: "Produce", sub: "Media Engine", detail: "Carousels · Video · Voice · Music · Thumbnails", num: "459", color: "#f97316" },
  { icon: "📢", label: "Publish", sub: "10 Channels", detail: "IG · LinkedIn · FB · Threads · YouTube × 2 langs", num: "EN+ES", color: "#22c55e" },
];

const TECH_CATEGORIES = [
  {
    title: "Orchestration",
    color: "#00d1b2",
    items: [
      { name: "n8n", detail: "26 workflows" },
      { name: "Coolify", detail: "Deploy manager" },
      { name: "Traefik", detail: "Reverse proxy" },
      { name: "Docker", detail: "24 containers" },
    ],
  },
  {
    title: "AI Services",
    color: "#7c5cff",
    items: [
      { name: "Claude API", detail: "Strategy & scripts" },
      { name: "OpenAI", detail: "TTS + Whisper" },
      { name: "ElevenLabs", detail: "Voice cloning" },
      { name: "Stability AI", detail: "Music generation" },
      { name: "FLUX / fal.ai", detail: "Image generation" },
      { name: "Kling", detail: "Video generation" },
    ],
  },
  {
    title: "Media Production",
    color: "#f97316",
    items: [
      { name: "Remotion", detail: "6 compositions" },
      { name: "FFmpeg", detail: "Audio mastering" },
      { name: "Browserless", detail: "HTML rendering" },
      { name: "Satori", detail: "JSX → PNG" },
      { name: "Pexels", detail: "B-roll library" },
    ],
  },
  {
    title: "Data & Storage",
    color: "#3b82f6",
    items: [
      { name: "Supabase", detail: "47 tables · PostgreSQL" },
      { name: "Cloudflare R2", detail: "Media storage" },
      { name: "Redis", detail: "Caching + queues" },
      { name: "Google Drive", detail: "Asset backup" },
    ],
  },
  {
    title: "Publishing",
    color: "#22c55e",
    items: [
      { name: "Postiz", detail: "10 channels" },
      { name: "Instagram", detail: "EN + ES" },
      { name: "LinkedIn", detail: "EN + ES" },
      { name: "YouTube", detail: "EN + ES" },
      { name: "Facebook", detail: "EN + ES" },
      { name: "Threads", detail: "EN + ES" },
    ],
  },
];

export function PipelineFlowDiagram() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <style>{`
        @keyframes glow-pulse {
          0%, 100% { filter: drop-shadow(0 0 8px var(--glow-color)); }
          50% { filter: drop-shadow(0 0 20px var(--glow-color)) drop-shadow(0 0 40px var(--glow-color)); }
        }
        @keyframes line-draw {
          0% { width: 0; }
          100% { width: 100%; }
        }
        @keyframes node-enter {
          0% { opacity: 0; transform: scale(0.5) translateY(20px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes arrow-flow {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        .pipeline-node {
          animation: node-enter 0.6s cubic-bezier(0.16,1,0.3,1) forwards;
          opacity: 0;
        }
        .pipeline-arrow {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          background-size: 200% 100%;
          animation: arrow-flow 2s linear infinite;
        }
        .glass-card {
          background: rgba(255,255,255,0.03);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
        }
        .glow-ring {
          animation: glow-pulse 3s ease-in-out infinite;
        }
      `}</style>

      {/* Title */}
      <div style={{ textAlign: "center", marginBottom: 32 }}>
        <p style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", color: "#00d1b2", margin: "0 0 8px" }}>
          System Overview
        </p>
        <h3 style={{ fontSize: 22, fontWeight: 800, margin: 0, letterSpacing: "-0.02em" }}>
          From Raw Data to <span style={{ background: "linear-gradient(90deg, #3b82f6, #7c5cff, #00d1b2, #eab308, #f97316, #22c55e)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundSize: "200% auto", animation: "arrow-flow 4s linear infinite" }}>Published Content</span>
        </h3>
      </div>

      {/* Pipeline nodes */}
      <div style={{ position: "relative", padding: "0 10px" }}>
        {/* Animated connecting line */}
        <div style={{
          position: "absolute", top: 48, left: 60, right: 60, height: 2, zIndex: 0,
          overflow: "hidden", borderRadius: 1,
        }}>
          <div className="pipeline-arrow" style={{ width: "100%", height: "100%", background: "linear-gradient(90deg, #3b82f6, #7c5cff, #00d1b2, #eab308, #f97316, #22c55e, #3b82f6)", backgroundSize: "200% 100%" }} />
        </div>

        {/* Arrow heads between nodes */}
        <div style={{ display: "flex", justifyContent: "space-between", position: "relative", zIndex: 1 }}>
          {STEPS.map((step, i) => (
            <div
              key={step.label}
              className={visible ? "pipeline-node" : ""}
              style={{
                display: "flex", flexDirection: "column", alignItems: "center",
                flex: 1, maxWidth: 160,
                animationDelay: visible ? `${i * 150}ms` : "0ms",
                position: "relative",
              }}
            >
              {/* Glow ring */}
              <div
                className="glow-ring"
                style={{
                  // @ts-expect-error CSS custom property
                  "--glow-color": `${step.color}60`,
                  width: 72, height: 72, borderRadius: "50%",
                  background: `radial-gradient(circle, ${step.color}20 0%, ${step.color}08 50%, transparent 70%)`,
                  border: `2px solid ${step.color}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 30, marginBottom: 12,
                  position: "relative",
                  boxShadow: `0 0 20px ${step.color}30, inset 0 0 20px ${step.color}15`,
                }}
              >
                {step.icon}
                {/* Step number */}
                <div style={{
                  position: "absolute", top: -4, right: -4,
                  width: 20, height: 20, borderRadius: "50%",
                  background: step.color, color: "#fff",
                  fontSize: 10, fontWeight: 800,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: `0 0 10px ${step.color}80`,
                }}>
                  {i + 1}
                </div>
              </div>

              {/* Label */}
              <p style={{ fontSize: 15, fontWeight: 700, margin: "0 0 2px", color: step.color }}>{step.label}</p>
              <p style={{ fontSize: 11, fontWeight: 500, margin: "0 0 8px", color: "rgba(234,242,255,0.7)" }}>{step.sub}</p>

              {/* Glass card with details */}
              <div className="glass-card" style={{ padding: "8px 12px", textAlign: "center", width: "100%" }}>
                <p style={{ fontSize: 16, fontWeight: 800, fontFamily: "ui-monospace, monospace", color: step.color, margin: "0 0 4px" }}>{step.num}</p>
                <p style={{ fontSize: 9, color: "rgba(148,163,184,0.8)", margin: 0, lineHeight: 1.4 }}>{step.detail}</p>
              </div>

              {/* Arrow to next node */}
              {i < STEPS.length - 1 && (
                <div style={{
                  position: "absolute", right: -16, top: 34,
                  fontSize: 14, color: `${STEPS[i + 1].color}80`,
                  zIndex: 2,
                }}>
                  ›
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom stats bar */}
      <div style={{
        display: "flex", justifyContent: "center", gap: 16, marginTop: 32, flexWrap: "wrap",
      }}>
        {([
          ["⏱️", "Weekly Cycle", "Fresh data every 7 days", "#3b82f6"],
          ["🤖", "26 Workflows", "Fully orchestrated via n8n", "#7c5cff"],
          ["👤", "1 Approval", "Human-in-the-loop by choice", "#eab308"],
          ["🌐", "20 Outputs", "10 channels × 2 languages", "#22c55e"],
        ] as const).map(([icon, title, sub, color]) => (
          <div key={title} className="glass-card" style={{
            padding: "10px 16px", display: "flex", alignItems: "center", gap: 10,
            borderLeft: `2px solid ${color}`,
          }}>
            <span style={{ fontSize: 20 }}>{icon}</span>
            <div>
              <p style={{ fontSize: 12, fontWeight: 700, margin: 0, color }}>{title}</p>
              <p style={{ fontSize: 10, color: "rgba(148,163,184,0.7)", margin: "1px 0 0" }}>{sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function TechEcosystem() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <style>{`
        .tech-category {
          animation: node-enter 0.5s cubic-bezier(0.16,1,0.3,1) forwards;
          opacity: 0;
        }
        .tech-item {
          transition: transform 0.2s ease, box-shadow 0.3s ease;
        }
        .tech-item:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        }
      `}</style>

      {/* Title */}
      <div style={{ textAlign: "center", marginBottom: 28 }}>
        <p style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", color: "#7c5cff", margin: "0 0 8px" }}>
          Technology Ecosystem
        </p>
        <h3 style={{ fontSize: 22, fontWeight: 800, margin: 0, letterSpacing: "-0.02em" }}>
          What Powers the Pipeline
        </h3>
      </div>

      {/* Category grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 14 }}>
        {TECH_CATEGORIES.map((cat, ci) => (
          <div
            key={cat.title}
            className={visible ? "tech-category glass-card" : "glass-card"}
            style={{
              padding: 16,
              borderTop: `2px solid ${cat.color}`,
              animationDelay: visible ? `${ci * 100}ms` : "0ms",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Glow corner */}
            <div style={{
              position: "absolute", top: -30, right: -30, width: 80, height: 80,
              background: `radial-gradient(circle, ${cat.color}15, transparent 70%)`,
              borderRadius: "50%", pointerEvents: "none",
            }} />

            <p style={{
              fontSize: 11, fontWeight: 700, textTransform: "uppercase",
              letterSpacing: "0.08em", color: cat.color,
              margin: "0 0 12px",
            }}>
              {cat.title}
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {cat.items.map((item) => (
                <div
                  key={item.name}
                  className="tech-item"
                  style={{
                    display: "flex", justifyContent: "space-between", alignItems: "baseline",
                    padding: "5px 8px", borderRadius: 8,
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.04)",
                    cursor: "default",
                  }}
                >
                  <span style={{ fontSize: 12, fontWeight: 600, color: "rgba(234,242,255,0.9)" }}>{item.name}</span>
                  <span style={{ fontSize: 9, color: "rgba(148,163,184,0.6)", whiteSpace: "nowrap" }}>{item.detail}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
