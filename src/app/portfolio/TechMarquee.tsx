"use client";

/*
 * TechMarquee — Infinite scrolling banner with real technology logos
 * Uses official SVG logos, loops seamlessly with CSS animation
 * No JavaScript animation — pure CSS for performance
 */

const TECHS: { name: string; logo: string; invert?: boolean; emoji?: string }[] = [
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", invert: true },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Supabase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Stripe", logo: "https://cdn.simpleicons.org/stripe/635BFF" },
  { name: "Cloudflare", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloudflare/cloudflare-original.svg" },
  { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "n8n", logo: "https://cdn.simpleicons.org/n8n/EA4B71" },
  { name: "FFmpeg", logo: "https://cdn.simpleicons.org/ffmpeg/5CB85C" },
  { name: "Fabric.js", logo: "", emoji: "🎨" },
  { name: "Satori", logo: "", emoji: "✨" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", invert: true },
  { name: "Claude API", logo: "https://cdn.simpleicons.org/anthropic/D4A574" },
  { name: "OpenAI", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/openai.svg", invert: true },
  { name: "Gemini", logo: "https://cdn.simpleicons.org/googlegemini/8E75B2" },
  { name: "Vercel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg", invert: true },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
];

export default function TechMarquee() {
  // Duplicate the list for seamless loop
  const items = [...TECHS, ...TECHS];

  return (
    <div style={{
      width: "100%",
      overflow: "hidden",
      background: "linear-gradient(180deg, rgba(12,18,32,0.8) 0%, rgba(7,10,15,1) 100%)",
      borderTop: "1px solid rgba(255,255,255,0.06)",
      borderBottom: "1px solid rgba(255,255,255,0.06)",
      padding: "20px 0",
      position: "relative",
    }}>
      {/* Fade edges */}
      <div style={{
        position: "absolute", left: 0, top: 0, bottom: 0, width: 80,
        background: "linear-gradient(to right, #070a0f, transparent)",
        zIndex: 2, pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", right: 0, top: 0, bottom: 0, width: 80,
        background: "linear-gradient(to left, #070a0f, transparent)",
        zIndex: 2, pointerEvents: "none",
      }} />

      {/* Label */}
      <p style={{
        textAlign: "center",
        fontSize: 10,
        fontWeight: 600,
        textTransform: "uppercase",
        letterSpacing: "0.15em",
        color: "rgba(148,163,184,0.5)",
        margin: "0 0 14px",
      }}>
        built with
      </p>

      {/* Scrolling track */}
      <div style={{
        display: "flex",
        width: "max-content",
        animation: "marquee-scroll 40s linear infinite",
      }}>
        {items.map((tech, i) => (
          <div
            key={`${tech.name}-${i}`}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "0 28px",
              flexShrink: 0,
            }}
          >
            {tech.logo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={tech.logo}
                alt={tech.name}
                width={28}
                height={28}
                style={{
                  width: 28,
                  height: 28,
                  objectFit: "contain",
                  filter: tech.invert ? "invert(1)" : "none",
                  opacity: 0.85,
                }}
                loading="lazy"
              />
            ) : (
              <span style={{ fontSize: 24, lineHeight: 1 }}>{tech.emoji}</span>
            )}
            <span style={{
              fontSize: 14,
              fontWeight: 500,
              color: "rgba(234,242,255,0.7)",
              whiteSpace: "nowrap",
            }}>
              {tech.name}
            </span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
