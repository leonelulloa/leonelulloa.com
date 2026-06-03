/*
 * InfraDashboard — Production Snapshot (static)
 *
 * Originally a live dashboard polling /api/infrastructure against two Hetzner
 * servers. The servers were decommissioned (cost reduction); this now renders a
 * historical snapshot of the system as it ran in production. Same visual design,
 * no network calls — an honest case-study artifact, not a live feed.
 */

interface ContainerInfo { name: string; role: string }
interface ServerInfo {
  label: string; role: string; specs: string; cost: string;
  containers: ContainerInfo[];
}

const C = {
  green: "#22c55e", teal: "#00d1b2", orange: "#f97316", red: "#ef4444",
  accent: "#7c5cff", muted: "#94a3b8", text: "#eaf2ff",
  border: "rgba(255,255,255,0.06)", mono: "ui-monospace, 'Cascadia Code', monospace",
};

// Snapshot of the system at peak production (before decommission).
const SERVERS: ServerInfo[] = [
  {
    label: "Production",
    role: "Website · n8n · Remotion · Media Engine",
    specs: "12 vCPU · 24 GB RAM · 75 GB SSD",
    cost: "~$28/mo",
    containers: [
      { name: "leonelulloa.com", role: "Next.js website" },
      { name: "n8n", role: "27 automation workflows" },
      { name: "Remotion Renderer", role: "Video + carousel production" },
      { name: "Browserless Chrome", role: "HTML rendering + screenshots" },
      { name: "PostgreSQL", role: "n8n database" },
      { name: "Redis", role: "Caching + queues" },
      { name: "Coolify", role: "Deployment manager" },
      { name: "Traefik", role: "Reverse proxy + SSL" },
    ],
  },
  {
    label: "Publishing",
    role: "Postiz · Temporal · Social Distribution",
    specs: "4 vCPU · 8 GB RAM · 150 GB SSD",
    cost: "~$15/mo",
    containers: [
      { name: "Postiz", role: "10-channel social publisher" },
      { name: "Temporal", role: "Workflow orchestration (standby)" },
      { name: "PostgreSQL", role: "Postiz + Temporal database" },
      { name: "Redis", role: "Session + queue management" },
      { name: "Elasticsearch", role: "Content search + indexing" },
      { name: "Coolify", role: "Deployment manager" },
      { name: "Traefik", role: "Reverse proxy + SSL" },
    ],
  },
];

const TOTAL_CONTAINERS = SERVERS.reduce((sum, s) => sum + s.containers.length, 0);
const TOTAL_COST = "$43/mo";

export default function InfraDashboard() {
  const serverColors = [C.teal, C.green];

  return (
    <div>
      <style>{`
        .container-row { transition: background 0.2s; }
        .container-row:hover { background: rgba(255,255,255,0.03); }
      `}</style>

      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: C.muted }} />
            <span style={{ fontSize: 14, fontWeight: 700, color: C.muted }}>
              Production Snapshot
            </span>
          </div>
          <p style={{ fontSize: 11, color: C.muted, margin: 0 }}>
            {TOTAL_CONTAINERS} containers · 2 servers · {TOTAL_COST}
          </p>
        </div>
        <div style={{ fontSize: 10, color: C.muted, fontFamily: C.mono }}>
          AS OPERATED
        </div>
      </div>

      {/* Server cards */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        {SERVERS.map((server, si) => {
          const color = serverColors[si];
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
                    {server.containers.length} CONTAINERS
                  </span>
                </div>
                <p style={{ fontSize: 11, color: C.muted, margin: "2px 0 0" }}>{server.role}</p>
                <p style={{ fontSize: 10, fontFamily: C.mono, color: `${C.muted}80`, margin: "4px 0 0" }}>{server.specs} · {server.cost}</p>
              </div>

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
                      <div style={{ width: 5, height: 5, borderRadius: "50%", background: color, boxShadow: `0 0 4px ${color}40` }} />
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

      {/* Snapshot note */}
      <div style={{
        marginTop: 20, padding: "14px 18px",
        background: "rgba(255,255,255,0.02)", backdropFilter: "blur(12px)",
        border: `1px solid ${C.border}`, borderRadius: 12,
      }}>
        <p style={{ fontSize: 12, color: C.muted, margin: 0, lineHeight: 1.6 }}>
          <span style={{ marginRight: 6 }}>🗄️</span>
          Snapshot of the self-hosted stack as it ran in production — two Hetzner
          servers, {TOTAL_CONTAINERS} Docker containers, {TOTAL_COST} all-in. The
          automation pipeline has since been retired; the website you&apos;re
          reading now runs on Vercel.
        </p>
      </div>
    </div>
  );
}
