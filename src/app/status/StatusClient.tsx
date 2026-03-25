"use client";

import { useEffect, useState } from "react";

interface ServiceStatus {
  name: string;
  status: "operational" | "degraded" | "down";
  responseMs: number;
  category: string;
}

interface HealthData {
  timestamp: string;
  overall: "operational" | "degraded" | "down";
  services: ServiceStatus[];
  uptimeNote: string;
}

const C = {
  green: "#22c55e",
  orange: "#f97316",
  red: "#ef4444",
  muted: "#94a3b8",
  text: "#eaf2ff",
  panel: "#0c1220",
  border: "rgba(255,255,255,0.06)",
  accent: "#7c5cff",
  teal: "#00d1b2",
  mono: "ui-monospace, 'Cascadia Code', monospace",
};

function statusColor(s: string) {
  if (s === "operational") return C.green;
  if (s === "degraded") return C.orange;
  return C.red;
}

function statusLabel(s: string) {
  if (s === "operational") return "Operational";
  if (s === "degraded") return "Degraded";
  return "Down";
}

export default function StatusClient() {
  const [data, setData] = useState<HealthData | null>(null);
  const [loading, setLoading] = useState(true);
  const [lastRefresh, setLastRefresh] = useState<Date | null>(null);

  const fetchHealth = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/health");
      const json = await res.json();
      setData(json);
      setLastRefresh(new Date());
    } catch {
      setData(null);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchHealth();
    const interval = setInterval(fetchHealth, 30000); // refresh every 30s
    return () => clearInterval(interval);
  }, []);

  const overallColor = data ? statusColor(data.overall) : C.muted;

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "60px 24px" }}>
      {/* Header */}
      <div style={{ marginBottom: 40 }}>
        <a href="/portfolio" style={{ fontSize: 12, color: C.muted, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 16 }}>
          ← Back to Portfolio
        </a>
        <h1 style={{ fontSize: 28, fontWeight: 700, margin: "0 0 8px", letterSpacing: "-0.02em" }}>
          System Status
        </h1>
        <p style={{ fontSize: 14, color: C.muted, margin: "0 0 20px" }}>
          L7AI Content Intelligence Pipeline — live infrastructure monitoring
        </p>

        {/* Overall status */}
        <div style={{
          display: "flex", alignItems: "center", gap: 12,
          padding: "16px 20px", borderRadius: 12,
          background: `${overallColor}10`,
          border: `1px solid ${overallColor}30`,
        }}>
          <div style={{
            width: 12, height: 12, borderRadius: "50%",
            background: overallColor,
            boxShadow: `0 0 12px ${overallColor}60`,
            animation: data?.overall === "operational" ? "pulse-dot 2s ease-in-out infinite" : undefined,
          }} />
          <span style={{ fontSize: 16, fontWeight: 600, color: overallColor }}>
            {loading ? "Checking..." : data ? `All Systems ${statusLabel(data.overall)}` : "Unable to check"}
          </span>
          {lastRefresh && (
            <span style={{ fontSize: 11, color: C.muted, marginLeft: "auto", fontFamily: C.mono }}>
              Last checked: {lastRefresh.toLocaleTimeString()}
            </span>
          )}
        </div>
      </div>

      {/* Services */}
      {data && (
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {data.services.map((service) => (
            <div
              key={service.name}
              style={{
                display: "flex", alignItems: "center", gap: 12,
                padding: "14px 18px", borderRadius: 10,
                background: C.panel,
                border: `1px solid ${C.border}`,
                transition: "border-color 0.2s",
              }}
            >
              {/* Status dot */}
              <div style={{
                width: 8, height: 8, borderRadius: "50%",
                background: statusColor(service.status),
                boxShadow: `0 0 8px ${statusColor(service.status)}50`,
                flexShrink: 0,
              }} />

              {/* Name + category */}
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: 14, fontWeight: 600, margin: 0 }}>{service.name}</p>
                <p style={{ fontSize: 11, color: C.muted, margin: "2px 0 0" }}>{service.category}</p>
              </div>

              {/* Response time */}
              <span style={{
                fontSize: 12, fontFamily: C.mono,
                color: service.responseMs < 500 ? C.green : service.responseMs < 2000 ? C.orange : C.red,
              }}>
                {service.responseMs}ms
              </span>

              {/* Status badge */}
              <span style={{
                fontSize: 11, fontWeight: 600,
                padding: "3px 10px", borderRadius: 6,
                background: `${statusColor(service.status)}15`,
                color: statusColor(service.status),
                border: `1px solid ${statusColor(service.status)}25`,
              }}>
                {statusLabel(service.status)}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Refresh button */}
      <div style={{ marginTop: 24, textAlign: "center" }}>
        <button
          onClick={fetchHealth}
          disabled={loading}
          style={{
            background: "rgba(255,255,255,0.06)",
            color: C.text,
            border: `1px solid ${C.border}`,
            padding: "8px 20px",
            borderRadius: 8,
            fontSize: 13,
            cursor: loading ? "wait" : "pointer",
            opacity: loading ? 0.5 : 1,
            transition: "opacity 0.2s",
          }}
        >
          {loading ? "Checking..." : "Refresh"}
        </button>
      </div>

      {/* Monitoring Architecture */}
      <div style={{ marginTop: 48, borderTop: `1px solid ${C.border}`, paddingTop: 32 }}>
        <h2 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 8px" }}>
          3-Layer Monitoring Architecture
        </h2>
        <p style={{ fontSize: 13, color: C.muted, margin: "0 0 20px" }}>
          No single point of failure in alerting. Each layer monitors the layer above it.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {/* Layer 1 */}
          <div style={{ background: C.panel, border: `1px solid ${C.border}`, borderRadius: 12, padding: 16, borderLeft: `3px solid ${C.teal}` }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
              <span style={{ fontSize: 11, fontFamily: C.mono, color: C.teal, fontWeight: 700 }}>LAYER 1</span>
              <p style={{ fontSize: 14, fontWeight: 600, margin: 0 }}>n8n Health Monitor</p>
              <span style={{ fontSize: 10, background: `${C.teal}15`, color: C.teal, padding: "2px 8px", borderRadius: 4, marginLeft: "auto" }}>Every 5 min</span>
            </div>
            <p style={{ fontSize: 12, color: C.muted, lineHeight: 1.6, margin: 0 }}>
              n8n workflow calls <code style={{ fontSize: 11, background: "rgba(255,255,255,0.06)", padding: "1px 4px", borderRadius: 3 }}>/api/health/monitor</code> every 5 minutes.
              If any service is down → immediate Telegram alert with severity level and response times.
            </p>
          </div>

          {/* Layer 2 */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: 12, color: C.muted }}>↓ But what if n8n is down? ↓</span>
          </div>

          <div style={{ background: C.panel, border: `1px solid ${C.border}`, borderRadius: 12, padding: 16, borderLeft: `3px solid ${C.orange}` }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
              <span style={{ fontSize: 11, fontFamily: C.mono, color: C.orange, fontWeight: 700 }}>LAYER 2</span>
              <p style={{ fontSize: 14, fontWeight: 600, margin: 0 }}>Coolify Container Health</p>
              <span style={{ fontSize: 10, background: `${C.orange}15`, color: C.orange, padding: "2px 8px", borderRadius: 4, marginLeft: "auto" }}>Always on</span>
            </div>
            <p style={{ fontSize: 12, color: C.muted, lineHeight: 1.6, margin: 0 }}>
              Coolify monitors all Docker containers on both servers. If n8n&apos;s container crashes → Coolify auto-restarts it and logs the event.
              Container health checks ensure crashed services recover without manual intervention.
            </p>
          </div>

          {/* Layer 3 */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: 12, color: C.muted }}>↓ But what if the whole server is down? ↓</span>
          </div>

          <div style={{ background: C.panel, border: `1px solid ${C.border}`, borderRadius: 12, padding: 16, borderLeft: `3px solid ${C.red}` }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
              <span style={{ fontSize: 11, fontFamily: C.mono, color: C.red, fontWeight: 700 }}>LAYER 3</span>
              <p style={{ fontSize: 14, fontWeight: 600, margin: 0 }}>External Uptime Monitor</p>
              <span style={{ fontSize: 10, background: `${C.red}15`, color: C.red, padding: "2px 8px", borderRadius: 4, marginLeft: "auto" }}>External</span>
            </div>
            <p style={{ fontSize: 12, color: C.muted, lineHeight: 1.6, margin: 0 }}>
              External service (UptimeRobot) pings <code style={{ fontSize: 11, background: "rgba(255,255,255,0.06)", padding: "1px 4px", borderRadius: 3 }}>leonelulloa.com/api/health</code> from outside.
              If the entire server is unreachable → email + push notification. This catches scenarios where everything on the server has failed.
            </p>
          </div>
        </div>

        {/* Telegram bot command */}
        <div style={{ marginTop: 20, background: `${C.accent}08`, border: `1px solid ${C.accent}20`, borderRadius: 12, padding: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
            <span style={{ fontSize: 18 }}>🤖</span>
            <p style={{ fontSize: 14, fontWeight: 600, margin: 0 }}>Telegram Bot — Interactive Commands</p>
          </div>
          <p style={{ fontSize: 12, color: C.muted, lineHeight: 1.7, margin: "0 0 10px" }}>
            Two-way communication: the bot alerts me when something breaks, and I can ask it for status anytime from my phone.
          </p>
          <div style={{ display: "flex", gap: 8 }}>
            <code style={{ fontSize: 11, background: "rgba(124,92,255,0.15)", color: C.accent, padding: "4px 10px", borderRadius: 6, fontFamily: C.mono }}>/status</code>
            <span style={{ fontSize: 12, color: C.muted }}>→ Check all services now, get response times</span>
          </div>
          <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
            <code style={{ fontSize: 11, background: "rgba(124,92,255,0.15)", color: C.accent, padding: "4px 10px", borderRadius: 6, fontFamily: C.mono }}>/help</code>
            <span style={{ fontSize: 12, color: C.muted }}>→ List available commands</span>
          </div>
          <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
            <code style={{ fontSize: 11, background: "rgba(124,92,255,0.15)", color: C.accent, padding: "4px 10px", borderRadius: 6, fontFamily: C.mono }}>status</code>
            <span style={{ fontSize: 12, color: C.muted }}>→ Also works without the slash — fuzzy matching</span>
          </div>
        </div>
      </div>

      {/* Incident Response Protocol */}
      <div style={{ marginTop: 32, borderTop: `1px solid ${C.border}`, paddingTop: 32 }}>
        <h2 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 16px" }}>
          Incident Response Protocol
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <ProtocolStep
            number="01"
            title="Detection"
            color={C.red}
            items={[
              "Telegram Bot alerts on workflow failures",
              "n8n execution logs show failed runs with error context",
              "This health check page (auto-refreshes every 30s)",
              "Coolify dashboard shows container health",
            ]}
          />
          <ProtocolStep
            number="02"
            title="Diagnosis"
            color={C.orange}
            items={[
              "SSH into affected server",
              "docker ps — check container states",
              "docker logs <container> — read error output",
              "Check Coolify dashboard for resource usage",
              "Review n8n execution history for failure chain",
            ]}
          />
          <ProtocolStep
            number="03"
            title="Resolution"
            color={C.teal}
            items={[
              "Restart failed container via Coolify or Docker CLI",
              "Fix configuration and redeploy via Coolify",
              "Scale resources if capacity issue",
              "Rollback to previous version if code regression",
              "Manual workflow re-run in n8n for data recovery",
            ]}
          />
          <ProtocolStep
            number="04"
            title="Prevention"
            color={C.green}
            items={[
              "Document root cause in incident log",
              "Add monitoring for the failure pattern",
              "Update n8n workflow with better error handling",
              "Add retry logic or fallback where missing",
              "Update this protocol if new pattern discovered",
            ]}
          />
        </div>
      </div>

      {/* Real incident story */}
      <div style={{ marginTop: 32, background: `${C.accent}08`, border: `1px solid ${C.accent}20`, borderRadius: 14, padding: 20 }}>
        <p style={{ fontSize: 13, fontWeight: 600, color: C.accent, margin: "0 0 8px" }}>🔧 Real Incident: Hetzner IPv4 CDN Blocking</p>
        <p style={{ fontSize: 13, color: C.muted, lineHeight: 1.7, margin: 0 }}>
          Hetzner servers were blocked by CDN providers that require IPv4. Instead of migrating infrastructure,
          I built <strong style={{ color: C.text }}>Cloudflare Worker proxies</strong> to route requests through Cloudflare&#39;s network,
          and configured <strong style={{ color: C.text }}>Docker IPv6 bridges</strong> for container-to-container communication.
          Total fix time: 4 hours. Cost: $0/month (Cloudflare Workers free tier). Result: all services restored with better
          resilience than before — traffic now routes through Cloudflare&#39;s global network instead of direct server connections.
        </p>
      </div>

      {/* Footer note */}
      <div style={{ marginTop: 32, textAlign: "center" }}>
        <p style={{ fontSize: 12, color: `${C.muted}80`, margin: 0 }}>
          All checks are read-only. No sensitive data (IPs, keys, credentials) is exposed through this page.
        </p>
      </div>

      <style>{`
        @keyframes pulse-dot {
          0%, 100% { box-shadow: 0 0 8px rgba(34,197,94,0.4); }
          50% { box-shadow: 0 0 16px rgba(34,197,94,0.7), 0 0 32px rgba(34,197,94,0.3); }
        }
      `}</style>
    </div>
  );
}

function ProtocolStep({ number, title, color, items }: {
  number: string; title: string; color: string; items: string[];
}) {
  return (
    <div style={{
      background: C.panel, border: `1px solid ${C.border}`,
      borderRadius: 12, padding: 16, borderTop: `3px solid ${color}`,
    }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 10 }}>
        <span style={{ fontSize: 11, fontFamily: C.mono, color, fontWeight: 700 }}>{number}</span>
        <p style={{ fontSize: 14, fontWeight: 600, margin: 0 }}>{title}</p>
      </div>
      <ul style={{ margin: 0, paddingLeft: 16, fontSize: 12, color: C.muted, lineHeight: 1.7 }}>
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}
