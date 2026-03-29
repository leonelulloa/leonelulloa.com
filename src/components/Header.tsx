"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { COPY } from "@/config/copy";

export default function Header({ lang }: { lang: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const c = COPY[lang];
  const otherLang = lang === "en" ? "es" : "en";
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  function switchLang() {
    const newPath = pathname.replace(`/${lang}`, `/${otherLang}`);
    document.cookie = `lang=${otherLang};path=/;max-age=${60 * 60 * 24 * 365};samesite=lax`;
    router.push(newPath);
  }

  return (
    <header className="top-bar">
      <div className="brand">
        <Image
          src="/images/leonel.png"
          alt="Leonel Ulloa"
          width={38}
          height={38}
          className="mark-img"
          priority
        />
        <div className="brand-text">
          <b>Leonel Ulloa</b>
          <span>{c.bRole}</span>
        </div>
      </div>

      {/* Desktop nav */}
      <nav className="nav nav-desktop">
        <Link href={`/${lang}#start`}>{c.nStart}</Link>
        <Link href={`/${lang}#social`}>{c.nContent}</Link>
        <Link href={`/${lang}#ebooks`}>{c.nEbooks}</Link>
        <Link href={`/${lang}#work`}>{c.nWork}</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href={`/${lang}#newsletter`}>{c.nNews}</Link>
        <button className="lang-btn" onClick={switchLang}>
          {otherLang.toUpperCase()}
        </button>
      </nav>

      {/* Mobile hamburger button */}
      <button
        className="hamburger-btn"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
      >
        <span className={`hamburger-icon ${menuOpen ? "open" : ""}`}>
          <span />
          <span />
          <span />
        </span>
      </button>

      {/* Mobile overlay menu */}
      {menuOpen && (
        <div className="mobile-nav-overlay" onClick={() => setMenuOpen(false)}>
          <nav
            className="mobile-nav"
            onClick={(e) => e.stopPropagation()}
          >
            <Link href={`/${lang}#start`} onClick={() => setMenuOpen(false)}>{c.nStart}</Link>
            <Link href={`/${lang}#social`} onClick={() => setMenuOpen(false)}>{c.nContent}</Link>
            <Link href={`/${lang}#ebooks`} onClick={() => setMenuOpen(false)}>{c.nEbooks}</Link>
            <Link href={`/${lang}#work`} onClick={() => setMenuOpen(false)}>{c.nWork}</Link>
            <Link href="/portfolio" onClick={() => setMenuOpen(false)}>Portfolio</Link>
            <Link href={`/${lang}#newsletter`} onClick={() => setMenuOpen(false)}>{c.nNews}</Link>
            <button className="lang-btn" onClick={() => { switchLang(); setMenuOpen(false); }}>
              {otherLang.toUpperCase()}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
