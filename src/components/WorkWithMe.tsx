import { COPY } from "@/config/copy";

export default function WorkWithMe({ lang }: { lang: string }) {
  const c = COPY[lang];

  return (
    <div className="cta-row" style={{ marginTop: 12 }}>
      <a
        href="https://calendar.app.google/iq8k7dP75dqrEg6i9"
        target="_blank"
        rel="noopener noreferrer"
        className="btn secondary"
        aria-label={c.w1}
      >
        {c.w1}
      </a>
      <a
        href="mailto:l715studioteam@gmail.com"
        className="btn ghost"
      >
        {c.w2}
      </a>
    </div>
  );
}
