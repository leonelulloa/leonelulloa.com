import type { Metadata } from "next";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const isEs = lang === "es";

  return {
    title: isEs
      ? "Leonel Ulloa — IA • Marketing • Negocios"
      : "Leonel Ulloa — AI • Marketing • Business",
    description: isEs
      ? "IA + marketing que se convierte en leads, ventas y sistemas. Videos cortos, visual limpio, pasos simples."
      : "AI + marketing that turns into leads, sales and systems. Short videos, clean visuals, simple steps.",
    metadataBase: new URL("https://leonelulloa.com"),
    alternates: {
      canonical: `/${lang}`,
      languages: {
        en: "/en",
        es: "/es",
      },
    },
    openGraph: {
      title: isEs
        ? "Leonel Ulloa — IA • Marketing • Negocios"
        : "Leonel Ulloa — AI • Marketing • Business",
      description: isEs
        ? "IA + marketing que se convierte en leads, ventas y sistemas."
        : "AI + marketing that turns into leads, sales and systems.",
      url: `https://leonelulloa.com/${lang}`,
      siteName: "Leonel Ulloa",
      locale: isEs ? "es_ES" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: isEs
        ? "Leonel Ulloa — IA • Marketing • Negocios"
        : "Leonel Ulloa — AI • Marketing • Business",
      description: isEs
        ? "IA + marketing que se convierte en leads, ventas y sistemas."
        : "AI + marketing that turns into leads, sales and systems.",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <html lang={lang}>
      <body>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: 18 }}>
          {children}
        </div>
      </body>
    </html>
  );
}
