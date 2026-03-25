import { NextResponse } from "next/server";

/*
 * Public Health Check API
 *
 * SECURITY: This endpoint is read-only and exposes ZERO sensitive data.
 * - No IPs, no URLs, no keys, no error details
 * - Only returns: service name, status (up/down), response time
 * - All checks run server-side — internal URLs never reach the client
 * - Rate limited by design (5s cache)
 */

interface ServiceStatus {
  name: string;
  status: "operational" | "degraded" | "down";
  responseMs: number;
  category: string;
}

interface HealthResponse {
  timestamp: string;
  overall: "operational" | "degraded" | "down";
  services: ServiceStatus[];
  uptimeNote: string;
}

// Internal URLs — NEVER exposed to client
const CHECKS = [
  { name: "Website", url: "https://leonelulloa.com", category: "Frontend" },
  { name: "n8n Orchestrator", url: process.env.N8N_HEALTH_URL || "https://n8n.leonelulloa.com", category: "Automation" },
  { name: "Postiz Publisher", url: process.env.POSTIZ_HEALTH_URL || "https://postiz.leonelulloa.com", category: "Publishing" },
  { name: "Content Database", url: process.env.SUPABASE_HEALTH_URL || `https://${process.env.NEXT_PUBLIC_SUPABASE_URL || "cfcifejvrztahhwhuocu.supabase.co"}/auth/v1/health`, category: "Database" },
];

async function checkService(check: typeof CHECKS[0]): Promise<ServiceStatus> {
  const start = performance.now();
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);

    const res = await fetch(check.url, {
      method: "GET",
      signal: controller.signal,
      headers: { "User-Agent": "L7AI-HealthCheck/1.0" },
    });

    clearTimeout(timeout);
    const responseMs = Math.round(performance.now() - start);

    return {
      name: check.name,
      status: res.ok || res.status === 401 || res.status === 403 ? "operational" : "degraded",
      responseMs,
      category: check.category,
    };
  } catch (err) {
    const isTimeout = err instanceof DOMException && err.name === "AbortError";
    return {
      name: check.name,
      status: isTimeout ? "degraded" : "down",
      responseMs: Math.round(performance.now() - start),
      category: check.category,
    };
  }
}

export async function GET() {
  const results = await Promise.all(CHECKS.map(checkService));

  const downCount = results.filter((r) => r.status === "down").length;
  const degradedCount = results.filter((r) => r.status === "degraded").length;

  const overall: HealthResponse["overall"] =
    downCount > 0 ? "down" : degradedCount > 0 ? "degraded" : "operational";

  const response: HealthResponse = {
    timestamp: new Date().toISOString(),
    overall,
    services: results,
    uptimeNote: "Checks run on-demand. Services are monitored 24/7 via Telegram alerts and n8n execution logs.",
  };

  return NextResponse.json(response, {
    headers: {
      "Cache-Control": "public, s-maxage=5, stale-while-revalidate=30",
      "Access-Control-Allow-Origin": "https://leonelulloa.com",
    },
  });
}
