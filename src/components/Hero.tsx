"use client";

import Image from "next/image";
import { COPY } from "@/config/copy";

export default function Hero({ lang }: { lang: string }) {
  const c = COPY[lang];

  return (
    <section className="hero" id="start">
      <div className="hero-grid">
        <div className="hero-left">
          <div className="kicker">{c.kicker}</div>
          <h1>{c.title}</h1>
          <p className="hero-sub">{c.subtitle}</p>

          <div className="cta-row">
            <a href={`/${lang}#ebooks`} className="btn primary">
              {c.cta1}
            </a>
            <a href={`/${lang}#work`} className="btn secondary">
              {c.cta2}
            </a>
            <a href={`/${lang}#newsletter`} className="btn ghost">
              {c.cta3}
            </a>
          </div>

          <div className="tiles">
            <div className="tile">
              <div className="badge badge-ai" aria-hidden="true">
                <Image src="/images/icons/ai.svg" alt="" width={36} height={36} />
              </div>
              <div>
                <b>{c.t1}</b>
                <span>{c.t1s}</span>
              </div>
            </div>
            <div className="tile">
              <div className="badge badge-mk" aria-hidden="true">
                <Image src="/images/icons/marketing.svg" alt="" width={36} height={36} />
              </div>
              <div>
                <b>{c.t2}</b>
                <span>{c.t2s}</span>
              </div>
            </div>
            <div className="tile">
              <div className="badge badge-biz" aria-hidden="true">
                <Image src="/images/icons/business.svg" alt="" width={36} height={36} />
              </div>
              <div>
                <b>{c.t3}</b>
                <span>{c.t3s}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="video-shell">
            <video
              className="hero-video"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/images/leonel.png"
            >
              <source src="/images/Hero.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
