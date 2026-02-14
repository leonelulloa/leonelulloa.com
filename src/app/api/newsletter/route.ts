import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, lang, topics } = body;

    // Basic validation
    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    if (!Array.isArray(topics) || topics.length === 0) {
      return NextResponse.json(
        { error: "Select at least one topic" },
        { status: 400 }
      );
    }

    const validTopics = ["marketing", "business", "ai", "all"];
    const filteredTopics = topics.filter((t: string) =>
      validTopics.includes(t)
    );

    const validLangs = ["en", "es"];
    const safeLang = validLangs.includes(lang) ? lang : "en";

    const { error } = await supabase.from("newsletter_signups").upsert(
      {
        email: email.toLowerCase().trim(),
        lang: safeLang,
        topics: filteredTopics,
        source: "homepage",
      },
      { onConflict: "email" }
    );

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: "Failed to subscribe" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
