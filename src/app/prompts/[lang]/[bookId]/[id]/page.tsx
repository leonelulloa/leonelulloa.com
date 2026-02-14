import { Suspense } from "react";
import type { Metadata } from "next";
import { LANGS, BOOKS, getBook, getBookPrompts } from "@/data/prompts";
import type { Lang } from "@/data/prompts";
import PromptLibraryClient from "@/components/PromptLibraryClient";

export function generateStaticParams() {
  const params: { lang: string; bookId: string; id: string }[] = [];
  for (const lang of LANGS) {
    for (const book of BOOKS) {
      for (const p of getBookPrompts(book.id)) {
        params.push({ lang, bookId: book.id, id: p.id });
      }
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; bookId: string; id: string }>;
}): Promise<Metadata> {
  const { lang, bookId, id } = await params;
  const safeLang: Lang = lang === "es" ? "es" : "en";
  const book = getBook(bookId);
  const prompt = getBookPrompts(bookId).find((p) => p.id === id);

  if (!prompt) return { title: "Prompt not found" };

  const title = `P-${id}: ${prompt[safeLang].title} | Leonel Ulloa`;
  const description = prompt[safeLang].capability.slice(0, 160);
  const bookTitle = book ? book[safeLang].title : "";

  return {
    title,
    description,
    robots: "noindex, nofollow",
    openGraph: {
      title,
      description,
      type: "article",
      siteName: "Leonel Ulloa",
      locale: safeLang === "es" ? "es_LA" : "en_US",
      tags: [bookTitle, prompt.category, "AI", "prompts"],
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

export default async function SinglePromptPage({
  params,
}: {
  params: Promise<{ lang: string; bookId: string; id: string }>;
}) {
  const { lang, bookId, id } = await params;
  const safeLang: Lang = lang === "es" ? "es" : "en";

  return (
    <main className="prompts-page">
      <Suspense>
        <PromptLibraryClient lang={safeLang} bookId={bookId} promptId={id} />
      </Suspense>
    </main>
  );
}
