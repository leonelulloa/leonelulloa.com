"use client";

import { useEffect, useRef, useState, useCallback } from "react";

/* ═══ Scroll-triggered fade-in with direction ═══ */
export function FadeIn({
  children,
  delay = 0,
  direction = "up",
  distance = 30,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const transforms: Record<string, string> = {
    up: `translateY(${distance}px)`,
    down: `translateY(-${distance}px)`,
    left: `translateX(${distance}px)`,
    right: `translateX(-${distance}px)`,
    none: "none",
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translate(0)" : transforms[direction],
        transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}

/* ═══ Staggered children animation ═══ */
export function Stagger({
  children,
  staggerMs = 80,
  className = "",
}: {
  children: React.ReactNode;
  staggerMs?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {Array.isArray(children)
        ? children.map((child, i) => (
            <div
              key={i}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.5s ease ${i * staggerMs}ms, transform 0.5s ease ${i * staggerMs}ms`,
              }}
            >
              {child}
            </div>
          ))
        : children}
    </div>
  );
}

/* ═══ Animated counter ═══ */
export function Counter({
  value,
  suffix = "",
  prefix = "",
  duration = 1400,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          obs.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const start = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setDisplay(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [started, value, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

/* ═══ Mouse-tracking glow card ═══ */
export function GlowCard({
  children,
  color = "124,92,255",
  className = "",
  style = {},
  href,
}: {
  children: React.ReactNode;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  href?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [glow, setGlow] = useState({ x: 50, y: 50, active: false });

  const handleMove = useCallback((e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setGlow({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
      active: true,
    });
  }, []);

  const Tag = href ? "a" : "div";

  return (
    <Tag
      // @ts-expect-error — polymorphic tag
      ref={ref}
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={() => setGlow((g) => ({ ...g, active: false }))}
      className={className}
      style={{
        ...style,
        position: "relative",
        overflow: "hidden",
        transition: "transform 0.3s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s ease",
        cursor: href ? "pointer" : "default",
        textDecoration: "none",
        color: "inherit",
      }}
    >
      {/* Glow effect */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: glow.active ? 1 : 0,
          background: `radial-gradient(600px circle at ${glow.x}% ${glow.y}%, rgba(${color},0.12), transparent 40%)`,
          transition: "opacity 0.3s ease",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      {/* Content */}
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </Tag>
  );
}

/* ═══ Floating particles background ═══ */
export function Particles({ count = 30 }: { count?: number }) {
  const [particles] = useState(() =>
    Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 10,
      opacity: Math.random() * 0.3 + 0.05,
    }))
  );

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            position: "absolute",
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            background: `rgba(124,92,255,${p.opacity})`,
            animation: `particle-float ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

/* ═══ Typing text effect ═══ */
export function TypeWriter({
  text,
  speed = 40,
  delay = 0,
  className = "",
}: {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
}) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          obs.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const timer = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, i + 1));
        i++;
        if (i >= text.length) clearInterval(interval);
      }, speed);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timer);
  }, [started, text, speed, delay]);

  return (
    <span ref={ref} className={className}>
      {displayed}
      {started && displayed.length < text.length && (
        <span
          style={{
            display: "inline-block",
            width: 2,
            height: "1em",
            background: "#7c5cff",
            marginLeft: 2,
            animation: "blink 0.8s step-end infinite",
            verticalAlign: "text-bottom",
          }}
        />
      )}
    </span>
  );
}

/* ═══ Global animation styles ═══ */
export function GlobalStyles() {
  return (
    <style>{`
      @keyframes particle-float {
        0%, 100% { transform: translate(0, 0) scale(1); opacity: var(--p-opacity, 0.15); }
        25% { transform: translate(10px, -20px) scale(1.2); }
        50% { transform: translate(-5px, -40px) scale(0.8); opacity: calc(var(--p-opacity, 0.15) * 1.5); }
        75% { transform: translate(15px, -20px) scale(1.1); }
      }
      @keyframes gradient-shift {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      @keyframes pulse-glow {
        0%, 100% { box-shadow: 0 0 20px rgba(124,92,255,0.15); }
        50% { box-shadow: 0 0 40px rgba(124,92,255,0.3), 0 0 80px rgba(124,92,255,0.1); }
      }
      @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
      }
      @keyframes shimmer {
        0% { background-position: -200% 0; }
        100% { background-position: 200% 0; }
      }
      @keyframes border-rotate {
        0% { --angle: 0deg; }
        100% { --angle: 360deg; }
      }
      .shimmer-text {
        background: linear-gradient(90deg, #eaf2ff 0%, #7c5cff 25%, #00d1b2 50%, #7c5cff 75%, #eaf2ff 100%);
        background-size: 200% auto;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: shimmer 4s linear infinite;
      }
      .hover-scale { transition: transform 0.3s cubic-bezier(0.16,1,0.3,1); }
      .hover-scale:hover { transform: scale(1.02); }
      .hover-lift { transition: transform 0.3s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s ease; }
      .hover-lift:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(0,0,0,0.3); }
      .gradient-border {
        position: relative;
        border: 1px solid transparent;
        background-clip: padding-box;
      }
      .gradient-border::before {
        content: '';
        position: absolute;
        inset: -1px;
        border-radius: inherit;
        background: linear-gradient(135deg, rgba(124,92,255,0.3), rgba(0,209,178,0.3), rgba(124,92,255,0.3));
        background-size: 200% 200%;
        animation: gradient-shift 6s ease infinite;
        z-index: -1;
        mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        mask-composite: exclude;
        -webkit-mask-composite: xor;
        padding: 1px;
      }
      .grain {
        position: relative;
      }
      .grain::after {
        content: '';
        position: absolute;
        inset: 0;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
        pointer-events: none;
        z-index: 1;
        opacity: 0.4;
      }
      * { scrollbar-width: thin; scrollbar-color: rgba(124,92,255,0.3) transparent; }
      ::-webkit-scrollbar { width: 6px; }
      ::-webkit-scrollbar-thumb { background: rgba(124,92,255,0.3); border-radius: 3px; }
      ::-webkit-scrollbar-track { background: transparent; }
      html { scroll-behavior: smooth; }
    `}</style>
  );
}
