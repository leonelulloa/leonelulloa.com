import { NextRequest, NextResponse } from "next/server";

const SUPPORTED_LANGS = ["en", "es"];
const DEFAULT_LANG = "en";
const COOKIE_NAME = "lang";

function getPreferredLang(req: NextRequest): string {
  // Check cookie first
  const cookie = req.cookies.get(COOKIE_NAME)?.value;
  if (cookie && SUPPORTED_LANGS.includes(cookie)) return cookie;

  // Check Accept-Language header
  const accept = req.headers.get("accept-language") || "";
  for (const part of accept.split(",")) {
    const code = part.trim().split(";")[0].split("-")[0].toLowerCase();
    if (SUPPORTED_LANGS.includes(code)) return code;
  }

  return DEFAULT_LANG;
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Skip static files, api routes, _next, and self-routed paths
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/prompts") ||
    pathname.startsWith("/p/") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Check if pathname already has a lang prefix
  const segments = pathname.split("/").filter(Boolean);
  const firstSegment = segments[0];

  if (firstSegment && SUPPORTED_LANGS.includes(firstSegment)) {
    // Valid lang prefix — set cookie and continue
    const res = NextResponse.next();
    res.cookies.set(COOKIE_NAME, firstSegment, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });
    return res;
  }

  // No lang prefix — redirect to preferred language
  const lang = getPreferredLang(req);
  const url = req.nextUrl.clone();
  url.pathname = `/${lang}${pathname}`;

  const res = NextResponse.redirect(url);
  res.cookies.set(COOKIE_NAME, lang, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });
  return res;
}

export const config = {
  matcher: ["/((?!_next|api|favicon\\.ico|.*\\..*).*)"],
};
