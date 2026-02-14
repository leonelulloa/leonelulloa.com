"use client";

import { useState } from "react";
import { COPY } from "@/config/copy";

interface TopicOption {
  key: string;
  labelKey: string;
  descKey: string;
}

const TOPICS: TopicOption[] = [
  { key: "marketing", labelKey: "ckMt", descKey: "ckMs" },
  { key: "business", labelKey: "ckBt", descKey: "ckBs" },
  { key: "ai", labelKey: "ckAt", descKey: "ckAs" },
  { key: "all", labelKey: "ckAllt", descKey: "ckAlls" },
];

export default function Newsletter({ lang }: { lang: string }) {
  const c = COPY[lang];
  const [email, setEmail] = useState("");
  const [topics, setTopics] = useState<string[]>(["all"]);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function toggleTopic(key: string) {
    setTopics((prev) =>
      prev.includes(key) ? prev.filter((t) => t !== key) : [...prev, key]
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || topics.length === 0) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, lang, topics }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <input
          type="email"
          placeholder={c.emailPh}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="btn primary"
          disabled={status === "loading"}
        >
          {status === "loading" ? "..." : c.subBtn}
        </button>
      </div>

      <div className="checks">
        {TOPICS.map((topic) => (
          <label className="check-label" key={topic.key}>
            <input
              type="checkbox"
              checked={topics.includes(topic.key)}
              onChange={() => toggleTopic(topic.key)}
            />
            <div>
              <b>{c[topic.labelKey]}</b>
              <span>{c[topic.descKey]}</span>
            </div>
          </label>
        ))}
      </div>

      {status === "success" && (
        <p className="form-message success">{c.subSuccess}</p>
      )}
      {status === "error" && (
        <p className="form-message error">{c.subError}</p>
      )}
    </form>
  );
}
