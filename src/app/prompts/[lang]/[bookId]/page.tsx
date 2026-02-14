import { Suspense } from "react";
import type { Metadata } from "next";
import { LANGS, BOOKS, getBook } from "@/data/prompts";
import type { Lang } from "@/data/prompts";
import PromptLibraryClient from "@/components/PromptLibraryClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; bookId: string }>;
}): Promise<Metadata> {
  const { lang, bookId } = await params;
  const safeLang: Lang = lang === "es" ? "es" : "en";
  const book = getBook(bookId);
  const title = book ? `${book[safeLang].title} | Leonel Ulloa` : "Prompts | Leonel Ulloa";
  const description = book ? book[safeLang].description : "";
  return { title, description, robots: "noindex, nofollow" };
}

export function generateStaticParams() {
  const params: { lang: string; bookId: string }[] = [];
  for (const lang of LANGS) {
    for (const book of BOOKS) {
      params.push({ lang, bookId: book.id });
    }
  }
  return params;
}

export default async function BookLibraryPage({
  params,
}: {
  params: Promise<{ lang: string; bookId: string }>;
}) {
  const { lang, bookId } = await params;
  const safeLang: Lang = lang === "es" ? "es" : "en";

  return (
    <main className="prompts-page">
      <Suspense>
        <PromptLibraryClient lang={safeLang} bookId={bookId} />
      </Suspense>
    </main>
  );
}
