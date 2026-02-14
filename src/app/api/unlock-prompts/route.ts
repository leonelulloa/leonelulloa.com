import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const { email, source, lang } = await req.json();

    const cleanEmail = typeof email === "string" ? email.toLowerCase().trim().slice(0, 254) : "";
    const cleanSource = String(source ?? "prompts").slice(0, 32);
    const cleanLang = String(lang ?? "en").slice(0, 5);

    if (!cleanEmail || !cleanEmail.includes("@")) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }

    await supabase.from("newsletter_signups").upsert(
      {
        email: cleanEmail,
        source: cleanSource,
        lang: cleanLang,
      },
      { onConflict: "email" },
    );

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
