import { NextResponse } from "next/server";

/*
 * Telegram Bot Webhook — Interactive Status Commands
 *
 * Handles incoming messages from Telegram and responds to commands.
 * Commands:
 *   /status  — Check all services and return current health
 *   /help    — List available commands
 *
 * SECURITY:
 * - Validates webhook via secret token
 * - Only responds to authorized chat ID
 * - Read-only — cannot modify any service
 * - No sensitive data in responses
 */

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const AUTHORIZED_CHAT_ID = process.env.TELEGRAM_CHAT_ID;
const WEBHOOK_SECRET = process.env.TELEGRAM_WEBHOOK_SECRET || process.env.CRON_SECRET;

// Same service list as health monitor — internal URLs stay server-side
const SERVICES = [
  { name: "Website", url: "https://leonelulloa.com" },
  { name: "n8n", url: process.env.N8N_HEALTH_URL || "https://n8n.leonelulloa.com" },
  { name: "Postiz", url: process.env.POSTIZ_HEALTH_URL || "https://postiz.leonelulloa.com" },
  { name: "Database", url: `https://${process.env.NEXT_PUBLIC_SUPABASE_URL || "cfcifejvrztahhwhuocu.supabase.co"}/auth/v1/health` },
];

async function checkService(service: typeof SERVICES[0]) {
  const start = performance.now();
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    const res = await fetch(service.url, {
      method: "GET",
      signal: controller.signal,
      headers: { "User-Agent": "L7AI-TelegramBot/1.0" },
    });
    clearTimeout(timeout);
    const ms = Math.round(performance.now() - start);
    const up = res.ok || res.status === 401 || res.status === 403;
    return { name: service.name, up, ms };
  } catch {
    return { name: service.name, up: false, ms: Math.round(performance.now() - start) };
  }
}

async function sendTelegram(chatId: string, text: string) {
  if (!BOT_TOKEN) return;
  await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      parse_mode: "HTML",
      disable_web_page_preview: true,
    }),
  });
}

async function handleStatusCommand(chatId: string) {
  const results = await Promise.all(SERVICES.map(checkService));
  const allUp = results.every((r) => r.up);
  const now = new Date().toLocaleString("en-GB", { timeZone: "Europe/London" });

  const lines = [
    allUp ? "🟢 <b>All Systems Operational</b>" : "🔴 <b>Issues Detected</b>",
    "",
    ...results.map((r) =>
      r.up
        ? `✅ ${r.name} — <code>${r.ms}ms</code>`
        : `❌ ${r.name} — <b>DOWN</b> <code>${r.ms}ms</code>`
    ),
    "",
    `⏰ ${now}`,
    `📊 <a href="https://leonelulloa.com/status">Full Status Page</a>`,
  ];

  await sendTelegram(chatId, lines.join("\n"));
}

async function handleHelpCommand(chatId: string) {
  const message = [
    "🤖 <b>L7AI System Monitor</b>",
    "",
    "Available commands:",
    "",
    "/status — Check all services now",
    "/help — Show this message",
    "",
    "I also send automatic alerts when services go down.",
    "",
    `📊 <a href="https://leonelulloa.com/status">Web Status Page</a>`,
  ].join("\n");

  await sendTelegram(chatId, message);
}

export async function POST(req: Request) {
  // Validate webhook secret
  const secretHeader = req.headers.get("x-telegram-bot-api-secret-token");
  if (WEBHOOK_SECRET && secretHeader !== WEBHOOK_SECRET) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  try {
    const body = await req.json();
    const message = body?.message;

    if (!message?.text || !message?.chat?.id) {
      return NextResponse.json({ ok: true });
    }

    const chatId = String(message.chat.id);
    const text = message.text.trim().toLowerCase();

    // Only respond to authorized chat
    if (AUTHORIZED_CHAT_ID && chatId !== AUTHORIZED_CHAT_ID) {
      return NextResponse.json({ ok: true });
    }

    // Route commands
    if (text === "/status" || text === "status") {
      await handleStatusCommand(chatId);
    } else if (text === "/help" || text === "help") {
      await handleHelpCommand(chatId);
    } else if (text.includes("status") || text.includes("health") || text.includes("check")) {
      // Fuzzy match — user typing "how's the status?" or "health check" etc.
      await handleStatusCommand(chatId);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[Telegram Webhook] Error:", err);
    return NextResponse.json({ ok: true }); // Always return 200 to Telegram
  }
}
