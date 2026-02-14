import { redirect } from "next/navigation";
import type { Metadata } from "next";
import { LANGS, BOOKS } from "@/data/prompts";
import type { Lang } from "@/data/prompts";

export const metadata: Metadata = { robots: "noindex, nofollow" };

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export default async function PromptsLangPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const safeLang: Lang = lang === "es" ? "es" : "en";
  redirect(`/prompts/${safeLang}/${BOOKS[0].id}`);
}
