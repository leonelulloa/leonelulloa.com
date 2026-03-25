"use client";

import { useEffect, useRef, useState } from "react";

/* ═══ Scroll-triggered fade-in ═══ */
export function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ═══ Animated counter ═══ */
export function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) { setStarted(true); obs.disconnect(); } },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 1200;
    const start = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setDisplay(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [started, value]);

  return <span ref={ref}>{display.toLocaleString()}{suffix}</span>;
}

/* ═══ Hover glow card ═══ */
export function GlowCard({
  children,
  color = "rgba(124,92,255,0.3)",
  style = {},
}: {
  children: React.ReactNode;
  color?: string;
  style?: React.CSSProperties;
}) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        ...style,
        transition: "transform 0.2s ease, box-shadow 0.3s ease, border-color 0.3s ease",
        transform: hover ? "translateY(-2px)" : "translateY(0)",
        boxShadow: hover ? `0 8px 32px ${color}` : "none",
        borderColor: hover ? color : style.borderColor || "rgba(255,255,255,0.06)",
        cursor: "default",
      }}
    >
      {children}
    </div>
  );
}

/* ═══ Pipeline node with pulse ═══ */
export function PulseNode({
  icon,
  label,
  sub,
  color,
  active = false,
}: {
  icon: string;
  label: string;
  sub: string;
  color: string;
  active?: boolean;
}) {
  const [clicked, setClicked] = useState(false);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1, cursor: "pointer" }}
      onClick={() => setClicked(!clicked)}
    >
      <div style={{
        width: 56, height: 56, borderRadius: "50%",
        background: `${color}20`,
        border: `2px solid ${color}`,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 24, marginBottom: 8,
        boxShadow: clicked ? `0 0 24px ${color}80, 0 0 48px ${color}40` : `0 0 12px ${color}20`,
        transition: "box-shadow 0.3s ease, transform 0.2s ease",
        transform: clicked ? "scale(1.15)" : "scale(1)",
        animation: active ? `pulse-ring 2s ease-in-out infinite` : undefined,
      }}>
        {icon}
      </div>
      <p style={{ fontSize: 12, fontWeight: 600, margin: 0, textAlign: "center", color: clicked ? color : "#e2e8f0", transition: "color 0.2s" }}>{label}</p>
      <p style={{ fontSize: 10, color: "#94a3b8", margin: "2px 0 0", textAlign: "center" }}>{sub}</p>
    </div>
  );
}

/* ═══ Global CSS animations injected once ═══ */
export function GlobalStyles() {
  return (
    <style>{`
      @keyframes pulse-ring {
        0%, 100% { box-shadow: 0 0 12px rgba(124,92,255,0.2); }
        50% { box-shadow: 0 0 24px rgba(124,92,255,0.5), 0 0 48px rgba(124,92,255,0.2); }
      }
      @keyframes gradient-shift {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-6px); }
      }
      .hover-lift { transition: transform 0.2s ease, box-shadow 0.3s ease; }
      .hover-lift:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(0,0,0,0.3); }
      .glow-border { transition: border-color 0.3s ease, box-shadow 0.3s ease; }
      .glow-border:hover { border-color: rgba(124,92,255,0.4); box-shadow: 0 0 20px rgba(124,92,255,0.15); }
      .pipeline-line {
        background: linear-gradient(90deg, #7c5cff, #00d1b2, #22c55e, #fbbf24);
        background-size: 200% 100%;
        animation: gradient-shift 4s ease infinite;
      }
      * { scrollbar-width: thin; scrollbar-color: rgba(124,92,255,0.3) transparent; }
      ::-webkit-scrollbar { width: 6px; height: 6px; }
      ::-webkit-scrollbar-thumb { background: rgba(124,92,255,0.3); border-radius: 3px; }
      ::-webkit-scrollbar-track { background: transparent; }
    `}</style>
  );
}
