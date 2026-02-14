export function track(event: string, payload: Record<string, string>) {
  const body = JSON.stringify({ event, ...payload });
  const blob = new Blob([body], { type: "application/json" });

  if (typeof navigator !== "undefined" && navigator.sendBeacon) {
    navigator.sendBeacon("/api/track", blob);
    return;
  }

  fetch("/api/track", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body,
    keepalive: true,
  }).catch(() => {});
}
