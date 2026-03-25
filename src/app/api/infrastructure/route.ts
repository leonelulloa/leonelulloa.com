import { NextResponse } from "next/server";

/*
 * Infrastructure Dashboard API — Live + Static Server Data
 *
 * SECURITY:
 * - Read-only, NO IPs, NO credentials exposed
 * - Service checks via HTTP (same as health endpoint)
 * - Static specs are hardcoded (don't change)
 * - Live uptime/status from service health checks
 */

interface ServiceCheck {
  name: string;
  url: string;
  server: number;
}

const SERVICES: ServiceCheck[] = [
  { name: "leonelulloa.com", url: "https://leonelulloa.com", server: 1 },
  { name: "n8n Orchestrator", url: "https://n8n.leonelulloa.com", server: 1 },
  { name: "Postiz Publisher", url: "https://postiz.leonelulloa.com", server: 2 },
];

async function checkService(svc: ServiceCheck) {
  const start = performance.now();
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 6000);
    const res = await fetch(svc.url, { method: "GET", signal: controller.signal, headers: { "User-Agent": "L7AI-Infra/1.0" } });
    clearTimeout(timeout);
    return { name: svc.name, healthy: res.ok || res.status === 401 || res.status === 403 || res.status === 405, ms: Math.round(performance.now() - start), server: svc.server };
  } catch {
    return { name: svc.name, healthy: false, ms: Math.round(performance.now() - start), server: svc.server };
  }
}

export async function GET() {
  const checks = await Promise.all(SERVICES.map(checkService));
  const allHealthy = checks.every((c) => c.healthy);

  // Static server specs — these don't change without manual intervention
  const servers = [
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
      services: checks.filter((c) => c.server === 1),
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
      services: checks.filter((c) => c.server === 2),
    },
  ];

  const totalContainers = servers.reduce((sum, s) => sum + s.containers.length, 0);

  return NextResponse.json(
    {
      timestamp: new Date().toISOString(),
      overall: allHealthy ? "all_healthy" : "issues_detected",
      totalContainers,
      totalCost: "$43/mo",
      servers,
    },
    {
      headers: {
        "Cache-Control": "public, s-maxage=15, stale-while-revalidate=60",
      },
    }
  );
}
