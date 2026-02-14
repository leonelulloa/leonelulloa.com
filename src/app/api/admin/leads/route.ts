import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase-server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const secret = searchParams.get("secret");

  // Simple secret-based auth — set ADMIN_SECRET in env
  if (!process.env.ADMIN_SECRET || secret !== process.env.ADMIN_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const format = searchParams.get("format") || "json";

  const { data, error } = await supabaseServer
    .from("newsletter_signups")
    .select("email, name, lang, source, topics, books, sources, first_seen, last_seen")
    .order("last_seen", { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  if (format === "csv") {
    const headers = ["email", "name", "lang", "source", "topics", "books", "sources", "first_seen", "last_seen"];
    const csvRows = [headers.join(",")];

    for (const row of data || []) {
      const values = headers.map((h) => {
        const val = row[h as keyof typeof row];
        if (val === null || val === undefined) return "";
        if (typeof val === "object") return `"${JSON.stringify(val).replace(/"/g, '""')}"`;
        return `"${String(val).replace(/"/g, '""')}"`;
      });
      csvRows.push(values.join(","));
    }

    return new Response(csvRows.join("\n"), {
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="leads-${new Date().toISOString().slice(0, 10)}.csv"`,
      },
    });
  }

  return NextResponse.json({ count: data?.length || 0, leads: data });
}
