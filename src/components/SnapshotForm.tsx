"use client";

import { useState, useEffect, useRef } from "react";
import type { Lang, Book } from "@/data/prompts";

const MAX_FIELD_LENGTH = 120;

function sanitize(value: string): string {
  return value
    .replace(/[\x00-\x1f\x7f]/g, "")
    .replace(/\s+/g, " ")
    .slice(0, MAX_FIELD_LENGTH);
}

function storageKey(bookId: string, lang: Lang): string {
  return `snapshot:${bookId}:${lang}`;
}

interface SnapshotFormProps {
  lang: Lang;
  book: Book;
  snapshot: Record<string, string>;
  onChange: (snapshot: Record<string, string>) => void;
}

export default function SnapshotForm({
  lang,
  book,
  snapshot,
  onChange,
}: SnapshotFormProps) {
  const [open, setOpen] = useState(false);
  const [saved, setSaved] = useState(false);
  const saveTimer = useRef<ReturnType<typeof setTimeout>>(null);
  const key = storageKey(book.id, lang);

  useEffect(() => {
    const data = localStorage.getItem(key);
    if (data) {
      try {
        onChange(JSON.parse(data));
      } catch {}
    }
  }, [key]);

  function handleChange(field: string, value: string) {
    const clean = sanitize(value);
    const next = { ...snapshot, [field]: clean };
    onChange(next);
    localStorage.setItem(key, JSON.stringify(next));

    setSaved(true);
    if (saveTimer.current) clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => setSaved(false), 1500);
  }

  function handleReset() {
    localStorage.removeItem(key);
    onChange({});
    setSaved(false);
  }

  const hasData = Object.values(snapshot).some((v) => v.trim());

  return (
    <div className="snapshot-form">
      <button className="snapshot-toggle" onClick={() => setOpen(!open)}>
        <span>
          {lang === "es" ? "Resumen de tu Negocio" : "Your Business Snapshot"}
          {saved && (
            <span className="snapshot-saved">
              {lang === "es" ? " Guardado" : " Saved"}
            </span>
          )}
        </span>
        <span className="snapshot-arrow">{open ? "\u25B2" : "\u25BC"}</span>
      </button>

      {open && (
        <div className="snapshot-fields">
          <p className="snapshot-desc">
            {lang === "es"
              ? "Completa tus datos para personalizar todos los prompts."
              : "Fill in your details to personalize all prompts."}
          </p>
          {book.snapshotFields.map((field) => (
            <label key={field.key} className="snapshot-label">
              <span>{field[lang]}</span>
              <input
                type="text"
                value={snapshot[field.key] || ""}
                onChange={(e) => handleChange(field.key, e.target.value)}
                placeholder={field.placeholder[lang]}
                maxLength={MAX_FIELD_LENGTH}
              />
            </label>
          ))}
          {hasData && (
            <button className="snapshot-reset" onClick={handleReset}>
              {lang === "es" ? "Borrar datos" : "Reset"}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
