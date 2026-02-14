import { COPY } from "@/config/copy";

export default function Footer({ lang }: { lang: string }) {
  const c = COPY[lang];

  return (
    <footer className="footer">
      <div>&copy; {new Date().getFullYear()} leonelulloa.com</div>
      <div>{c.footHint}</div>
    </footer>
  );
}
