import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const event = String(body.event ?? "").slice(0, 32);
    const prompt_id = String(body.prompt_id ?? "").slice(0, 10);
    const lang = String(body.lang ?? "en").slice(0, 5);
    const source = String(body.source ?? "web").slice(0, 20);
    const book = String(body.book ?? "").slice(0, 50);

    if (!event || !prompt_id) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }

    await supabase.from("prompt_events").insert({
      event,
      prompt_id,
      lang,
      source,
      book,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
