"use client";

import type { Lang, Book } from "@/data/prompts";

interface Props {
  lang: Lang;
  book: Book;
  onScrollToSnapshot: () => void;
}

const COPY = {
  en: {
    title: "Start Here",
    steps: [
      { num: "1", label: "Fill your Business Snapshot", desc: "below to personalize every prompt" },
      { num: "2", label: "Copy a personalized prompt", desc: "and paste it in ChatGPT, Claude, or any LLM" },
      { num: "3", label: "Take the action", desc: "each prompt tells you exactly what to do next" },
    ],
    pathTitle: "Recommended order",
    day: "Day",
  },
  es: {
    title: "Empieza aqu\u00ed",
    steps: [
      { num: "1", label: "Llena tu Resumen de Negocio", desc: "abajo para personalizar cada prompt" },
      { num: "2", label: "Copia un prompt personalizado", desc: "y p\u00e9galo en ChatGPT, Claude o cualquier LLM" },
      { num: "3", label: "Toma la acci\u00f3n", desc: "cada prompt te dice exactamente qu\u00e9 hacer" },
    ],
    pathTitle: "Orden recomendado",
    day: "D\u00eda",
  },
};

export default function GettingStartedBlock({ lang, book, onScrollToSnapshot }: Props) {
  const l = COPY[lang];

  return (
    <div className="getting-started">
      <h2 className="getting-started-title">{l.title}</h2>

      <div className="getting-started-steps">
        {l.steps.map((step, i) => (
          <button
            key={i}
            className="getting-started-step"
            onClick={i === 0 ? onScrollToSnapshot : undefined}
            type="button"
          >
            <span className="getting-started-num">{step.num}</span>
            <div>
              <span className="getting-started-label">{step.label}</span>
              <span className="getting-started-desc">{step.desc}</span>
            </div>
          </button>
        ))}
      </div>

      {book.recommendedPath && book.recommendedPath.length > 0 && (
        <div className="recommended-path">
          <span className="recommended-path-title">{l.pathTitle}</span>
          <div className="recommended-path-chips">
            {book.recommendedPath.map((dp) => (
              <span key={dp.day} className="path-chip">
                <strong>{l.day} {dp.day}</strong>
                <span>{dp.promptIds.map((id) => `P-${id}`).join(", ")}</span>
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
