import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { LANGS, BOOKS } from "@/data/prompts";
import type { Lang } from "@/data/prompts";
import { supabase } from "@/lib/supabase";

function detectLang(headersList: Headers): Lang {
  const al = headersList.get("accept-language") || "";
  if (al.toLowerCase().includes("es")) return "es";
  return "en";
}

export default async function ShortPromptRedirect({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<Record<string, string | undefined>>;
}) {
  const { id } = await params;
  const sp = await searchParams;
  const headersList = await headers();

  const lang =
    sp.lang && LANGS.includes(sp.lang as Lang)
      ? (sp.lang as Lang)
      : detectLang(headersList);

  const bookId = sp.book ?? BOOKS[0].id;
  const source = sp.src ?? "web";

  // Fire-and-forget: track PDF/short-link views
  supabase
    .from("prompt_events")
    .insert({
      event: "prompt_view",
      prompt_id: String(id).slice(0, 10),
      lang,
      source: source.slice(0, 20),
      book: bookId.slice(0, 50),
    })
    .then(() => {});

  const src = sp.src ? `?src=${encodeURIComponent(sp.src)}` : "";
  redirect(`/prompts/${lang}/${bookId}/${id}${src}`);
}
