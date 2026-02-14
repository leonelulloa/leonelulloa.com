"use client";

import { useState } from "react";
import type { Prompt, Lang } from "@/data/prompts";
import { fillVariables } from "@/lib/prompt-fill";
import { track } from "@/lib/track";

interface PromptCardProps {
  prompt: Prompt;
  lang: Lang;
  snapshot: Record<string, string>;
  source?: string;
  bookId: string;
}

export default function PromptCard({
  prompt,
  lang,
  snapshot,
  source,
  bookId,
}: PromptCardProps) {
  const [toast, setToast] = useState("");
  const [expanded, setExpanded] = useState(false);

  function saveLastPrompt() {
    try { localStorage.setItem(`last_prompt:${bookId}:${lang}`, prompt.id); } catch {}
  }

  const locale = prompt[lang];
  const filled = fillVariables(locale.prompt, snapshot);
  const hasSnapshot = Object.values(snapshot).some((v) => v.trim());

  const labels = {
    en: {
      copyPersonalized: "Copy personalized",
      copyTemplate: "Copy template",
      share: "Share",
      copied: "Copied!",
      linkCopied: "Link copied!",
      capability: "What AI can do here",
      example: "Example",
      action: "Your action",
    },
    es: {
      copyPersonalized: "Copiar personalizado",
      copyTemplate: "Copiar plantilla",
      share: "Compartir",
      copied: "\u00a1Copiado!",
      linkCopied: "\u00a1Link copiado!",
      capability: "Qu\u00e9 puede hacer la IA aqu\u00ed",
      example: "Ejemplo",
      action: "Tu acci\u00f3n",
    },
  };
  const l = labels[lang];

  function showToast(msg: string) {
    setToast(msg);
    setTimeout(() => setToast(""), 2000);
  }

  async function handleCopy(personalized: boolean) {
    const text = personalized ? filled : locale.prompt;
    await navigator.clipboard.writeText(text);
    showToast(l.copied);
    saveLastPrompt();
    track("copy", { prompt_id: prompt.id, lang, source: source ?? "web", book: bookId });
  }

  async function handleShare() {
    const url = `${window.location.origin}/prompts/${lang}/${bookId}/${prompt.id}`;
    await navigator.clipboard.writeText(url);
    showToast(l.linkCopied);
    track("share", { prompt_id: prompt.id, lang, source: source ?? "web", book: bookId });
  }

  return (
    <div className={`prompt-card ${expanded ? "prompt-card--expanded" : ""}`}>
      <div className="prompt-card-header" onClick={() => { setExpanded(!expanded); if (!expanded) saveLastPrompt(); }}>
        <div className="prompt-card-meta">
          <span className="prompt-id">P-{prompt.id}</span>
          <span className="prompt-cat">{prompt.category}</span>
        </div>
        <h3 className="prompt-card-title">{locale.title}</h3>
      </div>

      {!expanded && (
        <p className="prompt-capability-preview">{locale.capability.slice(0, 100)}...</p>
      )}

      {expanded && (
        <>
          <div className="prompt-section">
            <span className="prompt-section-label">{l.capability}</span>
            <p className="prompt-capability">{locale.capability}</p>
          </div>

          <div className="prompt-section">
            <span className="prompt-section-label">{l.example}</span>
            <pre className="prompt-example">{locale.example}</pre>
          </div>

          <pre className="prompt-text">{filled}</pre>

          <div className="prompt-action-box">
            <span className="prompt-section-label">{l.action}</span>
            <p className="prompt-action-text">{locale.action}</p>
          </div>
        </>
      )}

      <div className="prompt-actions">
        {hasSnapshot && (
          <button className="btn-copy" onClick={() => handleCopy(true)}>
            {l.copyPersonalized}
          </button>
        )}
        <button
          className={hasSnapshot ? "btn-copy-alt" : "btn-copy"}
          onClick={() => handleCopy(false)}
        >
          {l.copyTemplate}
        </button>
        <button className="btn-share" onClick={handleShare}>
          {l.share}
        </button>
      </div>

      {toast && <div className="prompt-toast">{toast}</div>}
    </div>
  );
}
