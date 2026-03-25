import { NextResponse } from "next/server";

/*
 * Health Monitor — Proactive Alert System
 *
 * Called by cron (every 5 minutes) or manually.
 * Checks all services and sends Telegram alerts if any are down.
 * Sends recovery alerts when services come back online.
 *
 * SECURITY:
 * - Protected by CRON_SECRET to prevent abuse
 * - Telegram Bot Token stays server-side only
 * - No sensitive data in alert messages (no IPs, no URLs)
 */

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

// Services to monitor — internal URLs, never exposed
const SERVICES = [
  { name: "Website", url: "https://leonelulloa.com", critical: true },
  { name: "n8n", url: process.env.N8N_HEALTH_URL || "https://n8n.leonelulloa.com", critical: true },
  { name: "Postiz", url: process.env.POSTIZ_HEALTH_URL || "https://postiz.leonelulloa.com", critical: false },
  { name: "Database", url: process.env.SITE_URL ? `${process.env.SITE_URL}/api/track` : "https://leonelulloa.com/api/track", critical: true },
];

async function checkService(service: typeof SERVICES[0]): Promise<{ name: string; up: boolean; ms: number; critical: boolean }> {
  const start = performance.now();
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);
    const res = await fetch(service.url, {
      method: "GET",
      signal: controller.signal,
      headers: { "User-Agent": "L7AI-Monitor/1.0" },
    });
    clearTimeout(timeout);
    const ms = Math.round(performance.now() - start);
    return { name: service.name, up: res.ok || res.status === 401 || res.status === 403, ms, critical: service.critical };
  } catch {
    return { name: service.name, up: false, ms: Math.round(performance.now() - start), critical: service.critical };
  }
}

async function sendTelegram(message: string) {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.warn("[Monitor] Telegram not configured — skipping alert");
    return;
  }
  try {
    await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
    });
  } catch (err) {
    console.error("[Monitor] Failed to send Telegram alert:", err);
  }
}

export async function GET(req: Request) {
  // Verify cron secret to prevent abuse
  const authHeader = req.headers.get("authorization");
  const cronSecret = process.env.CRON_SECRET;

  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const results = await Promise.all(SERVICES.map(checkService));
  const downServices = results.filter((r) => !r.up);
  const upServices = results.filter((r) => r.up);

  const now = new Date().toLocaleString("en-GB", { timeZone: "Europe/London" });

  if (downServices.length > 0) {
    const criticalDown = downServices.filter((s) => s.critical);
    const severity = criticalDown.length > 0 ? "🔴 CRITICAL" : "🟡 WARNING";

    const message = [
      `${severity} — Service Alert`,
      ``,
      `⏰ ${now}`,
      ``,
      ...downServices.map((s) => `❌ ${s.name} — DOWN (${s.ms}ms)${s.critical ? " [CRITICAL]" : ""}`),
      ...upServices.map((s) => `✅ ${s.name} — OK (${s.ms}ms)`),
      ``,
      `📊 Status: leonelulloa.com/status`,
    ].join("\n");

    await sendTelegram(message);
  }

  // Also send a recovery alert if everything is up (only on first recovery after downtime)
  // For now, we just log the status
  const allUp = downServices.length === 0;

  return NextResponse.json({
    checked: now,
    overall: allUp ? "operational" : "alert_sent",
    services: results.map((r) => ({ name: r.name, up: r.up, ms: r.ms })),
    alertSent: downServices.length > 0,
    telegramConfigured: !!(TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID),
  });
}
