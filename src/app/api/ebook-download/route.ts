import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase-server";
import { validateLead, sanitizeField } from "@/lib/validation";
import { sendEbookEmail } from "@/lib/email";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, book, lang, source } = body;

    const result = validateLead(name, email);
    if (!result.valid) {
      return NextResponse.json(
        { ok: false, error: result.error },
        { status: 400 }
      );
    }

    const cleanBook = sanitizeField(book).slice(0, 50);
    const cleanLang = sanitizeField(lang).slice(0, 5) || "en";
    const cleanSource = sanitizeField(source).slice(0, 32) || "ebook-download";

    // Check if lead already exists
    const { data: existing } = await supabaseServer
      .from("newsletter_signups")
      .select("books, sources")
      .eq("email", result.email)
      .maybeSingle();

    const existingBooks: string[] = existing?.books ?? [];
    const existingSources: string[] = existing?.sources ?? [];

    // Merge arrays (deduplicate)
    const mergedBooks = [...new Set([...existingBooks, cleanBook])].filter(Boolean);
    const mergedSources = [...new Set([...existingSources, cleanSource])].filter(Boolean);

    if (existing) {
      // Update existing lead
      await supabaseServer
        .from("newsletter_signups")
        .update({
          name: result.name,
          books: mergedBooks,
          sources: mergedSources,
          last_seen: new Date().toISOString(),
          lang: cleanLang,
        })
        .eq("email", result.email);
    } else {
      // Insert new lead
      await supabaseServer.from("newsletter_signups").insert({
        email: result.email,
        name: result.name,
        books: mergedBooks,
        sources: mergedSources,
        first_seen: new Date().toISOString(),
        last_seen: new Date().toISOString(),
        lang: cleanLang,
        source: cleanSource,
      });
    }

    // Log analytics event (fire-and-forget)
    supabaseServer
      .from("prompt_events")
      .insert({
        event: "ebook_download",
        prompt_id: "",
        lang: cleanLang,
        source: cleanSource,
        book: cleanBook,
      })
      .then(() => {});

    // Send ebook email (fire-and-forget)
    sendEbookEmail({
      to: result.email,
      name: result.name,
      bookId: cleanBook,
      lang: cleanLang,
    }).catch(() => {});

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
