"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import type { Lang, Category } from "@/data/prompts";
import { getBook, getBookPrompts, CATEGORY_LABELS } from "@/data/prompts";
import PromptCard from "./PromptCard";
import SnapshotForm from "./SnapshotForm";
import GettingStartedBlock from "./GettingStartedBlock";
import { track } from "@/lib/track";

const UNLOCK_KEY = "prompts_unlocked";

interface Props {
  lang: Lang;
  bookId: string;
  promptId?: string;
}

export default function PromptLibraryClient({ lang, bookId, promptId }: Props) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const source = searchParams.get("src") ?? "web";
  const snapshotRef = useRef<HTMLDivElement>(null);

  const book = getBook(bookId);
  const prompts = getBookPrompts(bookId);

  const [unlocked, setUnlocked] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<Category | "all">("all");
  const [snapshot, setSnapshot] = useState<Record<string, string>>({});
  const [lastPromptId, setLastPromptId] = useState<string | null>(null);

  const labels = {
    en: {
      searchPlaceholder: "Search prompts...",
      unlockTitle: "Unlock the prompts",
      unlockBody: "Enter your email to access the copy-ready prompts from the ebook.",
      unlockButton: "Unlock",
      fromPdf: "Welcome from the ebook!",
    },
    es: {
      searchPlaceholder: "Buscar prompts...",
      unlockTitle: "Desbloquear prompts",
      unlockBody: "Ingresa tu email para acceder a los prompts listos para copiar.",
      unlockButton: "Desbloquear",
      fromPdf: "\u00a1Bienvenido desde el ebook!",
    },
  };
  const l = labels[lang];

  useEffect(() => {
    if (localStorage.getItem(UNLOCK_KEY) === "true") {
      setUnlocked(true);
    }
    const saved = localStorage.getItem(`last_prompt:${bookId}:${lang}`);
    if (saved && !promptId) setLastPromptId(saved);
  }, [bookId, lang, promptId]);

  async function handleUnlock(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) return;

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/unlock-prompts", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email, source, lang }),
      });

      if (res.ok) {
        localStorage.setItem(UNLOCK_KEY, "true");
        if (promptId) {
          router.replace(`/prompts/${lang}/${bookId}/${promptId}${source !== "web" ? `?src=${source}` : ""}`);
          return;
        }
        setUnlocked(true);
      } else {
        setError(lang === "es" ? "Algo salió mal. Intenta de nuevo." : "Something went wrong. Try again.");
      }
    } catch {
      setError(lang === "es" ? "Algo salió mal. Intenta de nuevo." : "Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  }

  const availableCategories = book
    ? (["all", ...book.categories] as (Category | "all")[])
    : (["all"] as (Category | "all")[]);

  const filtered = useMemo(() => {
    return prompts.filter((p) => {
      if (category !== "all" && p.category !== category) return false;
      if (search.trim()) {
        const q = search.toLowerCase();
        const loc = p[lang];
        return (
          loc.title.toLowerCase().includes(q) ||
          loc.prompt.toLowerCase().includes(q) ||
          loc.capability.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [search, category, lang, prompts]);

  if (!book) {
    return <div className="prompts-page"><p>Book not found.</p></div>;
  }

  // Gate screen
  if (!unlocked) {
    return (
      <div className="prompt-gate">
        <div className="prompt-gate-card">
          <h1>{l.unlockTitle}</h1>
          <p className="prompt-gate-book-title">{book[lang].title}</p>
          <p>{l.unlockBody}</p>
          {source === "pdf" && (
            <p className="prompt-gate-from-pdf">{l.fromPdf}</p>
          )}
          <form onSubmit={handleUnlock} className="prompt-gate-form">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@example.com"
              required
            />
            <button type="submit" disabled={loading}>
              {loading ? "..." : l.unlockButton}
            </button>
          </form>
          {error && <p className="prompt-gate-error">{error}</p>}
        </div>
      </div>
    );
  }

  // Library
  return (
    <div className="prompt-library">
      <nav className="prompt-breadcrumb">
        <span>{lang === "es" ? "Prompts" : "Prompts"}</span>
        <span className="prompt-breadcrumb-sep">/</span>
        <span>{book[lang].title}</span>
      </nav>

      {lastPromptId && (
        <a
          href={`#prompt-${lastPromptId}`}
          className="continue-chip"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById(`prompt-${lastPromptId}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
          }}
        >
          {lang === "es" ? `Continuar: P-${lastPromptId}` : `Continue: P-${lastPromptId}`}
        </a>
      )}

      <h1 className="prompt-library-title">{book[lang].title}</h1>
      <p className="prompt-library-desc">{book[lang].description}</p>

      {book.ebookUrl && (
        <a
          href={book.ebookUrl[lang]}
          target="_blank"
          rel="noopener noreferrer"
          className="ebook-download-cta"
          onClick={() => track("ebook_download", { book: bookId, lang, source: "library" })}
        >
          {lang === "es" ? "Descargar ebook (PDF)" : "Download the ebook (PDF)"}
        </a>
      )}

      <GettingStartedBlock
        lang={lang}
        book={book}
        onScrollToSnapshot={() =>
          snapshotRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      />

      <input
        type="text"
        className="prompt-search"
        placeholder={l.searchPlaceholder}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="prompt-categories">
        {availableCategories.map((cat) => (
          <button
            key={cat}
            className={`prompt-cat-btn ${category === cat ? "prompt-cat-btn--active" : ""}`}
            onClick={() => setCategory(cat)}
          >
            {CATEGORY_LABELS[lang][cat]}
          </button>
        ))}
      </div>

      <div ref={snapshotRef}>
        <SnapshotForm
          lang={lang}
          book={book}
          snapshot={snapshot}
          onChange={setSnapshot}
        />
      </div>

      <div className="prompt-grid">
        {filtered.map((p) => (
          <div key={p.id} id={`prompt-${p.id}`}>
          <PromptCard
            prompt={p}
            lang={lang}
            snapshot={snapshot}
            source={source}
            bookId={bookId}
          />
          </div>
        ))}
      </div>
    </div>
  );
}
