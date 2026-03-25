"use client";

import { useEffect, useState } from "react";

interface ServiceCheck { name: string; healthy: boolean; ms: number }
interface ContainerInfo { name: string; role: string }
interface ServerInfo {
  label: string; role: string; specs: string; cost: string;
  containers: ContainerInfo[]; services: ServiceCheck[];
}
interface InfraData {
  timestamp: string; overall: string; totalContainers: number;
  totalCost: string; servers: ServerInfo[];
}

const C = {
  green: "#22c55e", teal: "#00d1b2", orange: "#f97316", red: "#ef4444",
  accent: "#7c5cff", muted: "#94a3b8", text: "#eaf2ff",
  border: "rgba(255,255,255,0.06)", mono: "ui-monospace, 'Cascadia Code', monospace",
};

export default function InfraDashboard() {
  const [data, setData] = useState<InfraData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/infrastructure")
      .then((r) => r.json())
      .then((d) => { setData(d); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: 40 }}>
        <div style={{ display: "inline-block", width: 24, height: 24, border: `2px solid ${C.teal}30`, borderTopColor: C.teal, borderRadius: "50%", animation: "spin 0.8s linear infinite" }} />
        <p style={{ fontSize: 12, color: C.muted, marginTop: 8 }}>Connecting to live servers...</p>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  if (!data) {
    return (
      <div style={{ textAlign: "center", padding: 40 }}>
        <p style={{ fontSize: 14, color: C.orange }}>Dashboard temporarily unavailable</p>
      </div>
    );
  }

  const serverColors = [C.teal, C.green];

  return (
    <div>
      <style>{`
        @keyframes pulse-green { 0%,100%{box-shadow:0 0 4px rgba(34,197,94,0.3)} 50%{box-shadow:0 0 12px rgba(34,197,94,0.6)} }
        .container-row { transition: background 0.2s; }
        .container-row:hover { background: rgba(255,255,255,0.03); }
      `}</style>

      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
            <div style={{
              width: 10, height: 10, borderRadius: "50%",
              background: data.overall === "all_healthy" ? C.green : C.orange,
              animation: data.overall === "all_healthy" ? "pulse-green 2s ease-in-out infinite" : undefined,
            }} />
            <span style={{ fontSize: 14, fontWeight: 700, color: data.overall === "all_healthy" ? C.green : C.orange }}>
              {data.overall === "all_healthy" ? "All Systems Operational" : "Issues Detected"}
            </span>
          </div>
          <p style={{ fontSize: 11, color: C.muted, margin: 0 }}>
            {data.totalContainers} containers · 2 servers · {data.totalCost}
          </p>
        </div>
        <div style={{ fontSize: 10, color: C.muted, fontFamily: C.mono }}>
          LIVE · {new Date(data.timestamp).toLocaleTimeString("en-GB")}
        </div>
      </div>

      {/* Server cards */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        {data.servers.map((server, si) => {
          const color = serverColors[si];
          const allUp = server.services.every((s) => s.healthy);
          return (
            <div key={server.label} style={{
              background: "rgba(255,255,255,0.02)", backdropFilter: "blur(12px)",
              border: `1px solid ${C.border}`, borderRadius: 16, padding: 20,
              borderTop: `2px solid ${color}`,
            }}>
              {/* Header */}
              <div style={{ marginBottom: 14 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <h4 style={{ fontSize: 16, fontWeight: 700, margin: 0 }}>Server {si + 1} — {server.label}</h4>
                  <span style={{ fontSize: 10, fontFamily: C.mono, color, background: `${color}15`, padding: "2px 8px", borderRadius: 4 }}>
                    {allUp ? "● ONLINE" : "● ISSUE"}
                  </span>
                </div>
                <p style={{ fontSize: 11, color: C.muted, margin: "2px 0 0" }}>{server.role}</p>
                <p style={{ fontSize: 10, fontFamily: C.mono, color: `${C.muted}80`, margin: "4px 0 0" }}>{server.specs} · {server.cost}</p>
              </div>

              {/* Live service checks */}
              {server.services.length > 0 && (
                <div style={{ marginBottom: 14, padding: "8px 10px", background: `${color}08`, borderRadius: 10, border: `1px solid ${color}15` }}>
                  <p style={{ fontSize: 9, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color, margin: "0 0 6px" }}>Live Service Checks</p>
                  {server.services.map((svc) => (
                    <div key={svc.name} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "3px 0" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                        <div style={{ width: 6, height: 6, borderRadius: "50%", background: svc.healthy ? C.green : C.red, boxShadow: svc.healthy ? `0 0 6px ${C.green}50` : undefined }} />
                        <span style={{ fontSize: 11, fontWeight: 500 }}>{svc.name}</span>
                      </div>
                      <span style={{ fontSize: 10, fontFamily: C.mono, color: svc.ms < 500 ? C.green : C.orange }}>{svc.ms}ms</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Container list */}
              <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 10 }}>
                <p style={{ fontSize: 9, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color, margin: "0 0 6px" }}>
                  {server.containers.length} Docker Containers
                </p>
                {server.containers.map((c) => (
                  <div key={c.name} className="container-row" style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "4px 6px", borderRadius: 4,
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <div style={{ width: 5, height: 5, borderRadius: "50%", background: C.green, boxShadow: `0 0 4px ${C.green}40` }} />
                      <span style={{ fontSize: 12, fontWeight: 500 }}>{c.name}</span>
                    </div>
                    <span style={{ fontSize: 9, color: `${C.muted}70` }}>{c.role}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Verify it yourself */}
      <div style={{
        marginTop: 20, padding: "16px 20px",
        background: "rgba(255,255,255,0.02)", backdropFilter: "blur(12px)",
        border: `1px solid ${C.border}`, borderRadius: 12,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
          <span style={{ fontSize: 16 }}>🔍</span>
          <p style={{ fontSize: 13, fontWeight: 700, margin: 0 }}>Verify It Yourself</p>
          <span style={{ fontSize: 10, color: C.muted, marginLeft: 4 }}>— these are real, public endpoints</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
          <VerifyLink
            label="Live Health API"
            url="/api/health"
            description="Raw JSON — response times change on every request"
            color={C.green}
          />
          <VerifyLink
            label="System Status Page"
            url="/status"
            description="Health checks + incident response protocol"
            color={C.teal}
          />
          <VerifyLink
            label="Infrastructure API"
            url="/api/infrastructure"
            description="Server specs + live service checks"
            color={C.accent}
          />
        </div>
        <p style={{ fontSize: 9, color: `${C.muted}50`, textAlign: "center", marginTop: 10, margin: "10px 0 0" }}>
          Open any link above in a new tab. Refresh multiple times — the response times change because they&apos;re real network requests, not hardcoded data.
        </p>
      </div>
    </div>
  );
}

function VerifyLink({ label, url, description, color }: { label: string; url: string; description: string; color: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "block", padding: "10px 12px", borderRadius: 10,
        background: `${color}08`, border: `1px solid ${color}20`,
        textDecoration: "none", color: "inherit",
        transition: "border-color 0.2s, background 0.2s",
      }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${color}50`; e.currentTarget.style.background = `${color}12`; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = `${color}20`; e.currentTarget.style.background = `${color}08`; }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
        <div style={{ width: 5, height: 5, borderRadius: "50%", background: color, boxShadow: `0 0 6px ${color}50` }} />
        <span style={{ fontSize: 12, fontWeight: 600, color }}>{label}</span>
        <span style={{ fontSize: 10, color: `${C.muted}60`, marginLeft: "auto" }}>↗</span>
      </div>
      <p style={{ fontSize: 10, color: C.muted, margin: 0, lineHeight: 1.4 }}>{description}</p>
    </a>
  );
}
