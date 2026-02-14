"use client";

import { useState } from "react";
import { COPY } from "@/config/copy";
import { track } from "@/lib/track";

const LEAD_KEY = "lead_captured";

interface Props {
  lang: string;
  bookId: string;
  pdfUrl: string;
  onClose: () => void;
}

export default function DownloadLeadModal({ lang, bookId, pdfUrl, onClose }: Props) {
  const c = COPY[lang] || COPY.en;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; server?: string }>({});

  function validate(): boolean {
    const errs: typeof errors = {};
    const trimmed = name.trim().replace(/[\n\r\t]/g, " ").replace(/\s{2,}/g, " ");
    if (trimmed.length < 2) errs.name = c.dlGateNameErr;
    if (!email.includes("@") || email.trim().length < 5) errs.email = c.dlGateEmailErr;
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setErrors({});

    try {
      const res = await fetch("/api/ebook-download", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          book: bookId,
          lang,
          source: "ebook-download",
        }),
      });

      if (res.ok) {
        localStorage.setItem(LEAD_KEY, "true");
        track("ebook_download", { book: bookId, lang, source: "homepage" });
        window.open(pdfUrl, "_blank");
        onClose();
      } else {
        setErrors({ server: c.dlGateServerErr });
      }
    } catch {
      setErrors({ server: c.dlGateServerErr });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="download-gate-overlay" onClick={onClose}>
      <div className="prompt-gate-card download-gate-card" onClick={(e) => e.stopPropagation()}>
        <h1>{c.dlGateTitle}</h1>
        <p>{c.dlGateBody}</p>
        <form onSubmit={handleSubmit} className="prompt-gate-form" noValidate>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={c.dlGateName}
            autoComplete="given-name"
            data-testid="lead-name"
          />
          {errors.name && <p className="prompt-gate-error">{errors.name}</p>}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={c.dlGateEmail}
            autoComplete="email"
            data-testid="lead-email"
          />
          {errors.email && <p className="prompt-gate-error">{errors.email}</p>}
          <button type="submit" disabled={loading} data-testid="lead-submit">
            {loading ? "..." : c.dlGateBtn}
          </button>
        </form>
        {errors.server && <p className="prompt-gate-error">{errors.server}</p>}
      </div>
    </div>
  );
}
