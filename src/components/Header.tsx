"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { COPY } from "@/config/copy";

export default function Header({ lang }: { lang: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const c = COPY[lang];
  const otherLang = lang === "en" ? "es" : "en";

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
      <nav className="nav">
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
    </header>
  );
}
