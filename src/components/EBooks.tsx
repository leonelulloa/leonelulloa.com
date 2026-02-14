"use client";

import { useState, useEffect } from "react";
import { COPY } from "@/config/copy";
import { track } from "@/lib/track";
import DownloadLeadModal from "./DownloadLeadModal";

const LEAD_KEY = "lead_captured";

interface EBookData {
  bookId: string;
  tagKey: string;
  tagColor: string;
  titleKey: string;
  subKey: string;
  /** Per-lang download URL. Null = coming soon (links to newsletter). */
  downloadUrl?: { en: string; es: string };
}

const EBOOKS: EBookData[] = [
  {
    bookId: "ai-business-starter",
    tagKey: "e1tag",
    tagColor: "purple",
    titleKey: "e1",
    subKey: "e1s",
    downloadUrl: {
      en: "/ebooks/ai-business-starter/en.pdf",
      es: "/ebooks/ai-business-starter/es.pdf",
    },
  },
  {
    bookId: "ai-marketing-pro",
    tagKey: "e2tag",
    tagColor: "green",
    titleKey: "e2",
    subKey: "e2s",
    downloadUrl: {
      en: "/ebooks/ai-marketing-pro/en.pdf",
      es: "/ebooks/ai-marketing-pro/es.pdf",
    },
  },
  {
    bookId: "ai-automation-starter",
    tagKey: "e3tag",
    tagColor: "orange",
    titleKey: "e3",
    subKey: "e3s",
    downloadUrl: {
      en: "/ebooks/ai-automation-starter/en.pdf",
      es: "/ebooks/ai-automation-starter/es.pdf",
    },
  },
  {
    bookId: "ai-sales-offers-starter",
    tagKey: "e4tag",
    tagColor: "red",
    titleKey: "e4",
    subKey: "e4s",
    downloadUrl: {
      en: "/ebooks/ai-sales-offers-starter/en.pdf",
      es: "/ebooks/ai-sales-offers-starter/es.pdf",
    },
  },
];

const COMING_SOON: Record<string, string> = {
  en: "Coming soon",
  es: "Pr\u00f3ximamente",
};

export default function EBooks({ lang }: { lang: string }) {
  const c = COPY[lang];
  const safeLang = lang === "es" ? "es" : "en";

  const [leadCaptured, setLeadCaptured] = useState(false);
  const [activeModal, setActiveModal] = useState<{ bookId: string; pdfUrl: string } | null>(null);

  useEffect(() => {
    setLeadCaptured(localStorage.getItem(LEAD_KEY) === "true");
  }, []);

  function handleDownload(bookId: string, url: string) {
    if (leadCaptured) {
      track("ebook_download", { book: bookId, lang: safeLang, source: "homepage" });
      window.open(url, "_blank");
    } else {
      setActiveModal({ bookId, pdfUrl: url });
    }
  }

  return (
    <>
      <div className="ebooks-grid">
        {EBOOKS.map((book, i) => {
          const url = book.downloadUrl?.[safeLang];
          const available = !!url;

          return (
            <div className="ebook" key={i}>
              <div className={`ebook-tag ${book.tagColor}`}>
                {c[book.tagKey]}
              </div>
              <b>{c[book.titleKey]}</b>
              <p className="card-desc">{c[book.subKey]}</p>
              {available ? (
                <button
                  className="btn primary"
                  style={{ width: "100%", textAlign: "center" }}
                  onClick={() => handleDownload(book.bookId, url!)}
                  data-testid={`download-${book.bookId}`}
                >
                  {c.eBtn}
                </button>
              ) : (
                <span
                  className="btn ghost"
                  style={{ width: "100%", textAlign: "center", opacity: 0.5, cursor: "default" }}
                >
                  {COMING_SOON[safeLang]}
                </span>
              )}
            </div>
          );
        })}
      </div>

      {activeModal && (
        <DownloadLeadModal
          lang={safeLang}
          bookId={activeModal.bookId}
          pdfUrl={activeModal.pdfUrl}
          onClose={() => {
            setActiveModal(null);
            setLeadCaptured(localStorage.getItem(LEAD_KEY) === "true");
          }}
        />
      )}
    </>
  );
}
