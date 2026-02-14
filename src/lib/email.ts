import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "");

const BOOK_NAMES: Record<string, Record<string, string>> = {
  "ai-business-starter": {
    en: "AI for Business — 7 Days",
    es: "IA para Negocios — 7 Días",
  },
  "ai-marketing-pro": {
    en: "Marketing That Converts",
    es: "Marketing que Convierte",
  },
  "ai-automation-starter": {
    en: "Automate Your Workflow",
    es: "Automatiza tu Trabajo",
  },
  "ai-sales-offers-starter": {
    en: "Sales & Offers Starter",
    es: "Ventas y Ofertas Starter",
  },
};

const BASE_URL = process.env.SITE_URL || "https://leonelulloa.com";

interface EbookEmailParams {
  to: string;
  name: string;
  bookId: string;
  lang: string;
}

export async function sendEbookEmail({ to, name, bookId, lang }: EbookEmailParams) {
  if (!process.env.RESEND_API_KEY) return;

  const safeLang = lang === "es" ? "es" : "en";
  const bookName = BOOK_NAMES[bookId]?.[safeLang] || bookId;
  const pdfUrl = `${BASE_URL}/ebooks/${bookId}/${safeLang}.pdf`;
  const libraryUrl = `${BASE_URL}/prompts/${safeLang}/${bookId}`;

  const isEs = safeLang === "es";

  const subject = isEs
    ? `${name}, tu ebook está listo`
    : `${name}, your ebook is ready`;

  const html = `
<!DOCTYPE html>
<html lang="${safeLang}">
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#070a0f;color:#eaf2ff;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <div style="max-width:520px;margin:0 auto;padding:40px 24px;">
    <h1 style="font-size:22px;font-weight:900;margin:0 0 8px;">
      ${isEs ? `¡Hola ${name}!` : `Hey ${name}!`}
    </h1>
    <p style="color:#a9b7cf;font-size:15px;line-height:1.6;margin:0 0 24px;">
      ${isEs
        ? `Tu ebook <strong>${bookName}</strong> está listo para descargar.`
        : `Your ebook <strong>${bookName}</strong> is ready to download.`}
    </p>

    <a href="${pdfUrl}" style="display:inline-block;padding:14px 28px;background:#7c5cff;color:#fff;text-decoration:none;border-radius:12px;font-weight:800;font-size:15px;">
      ${isEs ? "Descargar PDF" : "Download PDF"}
    </a>

    <hr style="border:none;border-top:1px solid rgba(255,255,255,0.1);margin:32px 0;">

    <p style="color:#a9b7cf;font-size:14px;line-height:1.6;margin:0 0 16px;">
      ${isEs
        ? "Cada ebook incluye prompts listos para copiar. Accede a tu biblioteca:"
        : "Each ebook includes copy-ready prompts. Access your library:"}
    </p>

    <a href="${libraryUrl}" style="display:inline-block;padding:12px 24px;background:rgba(255,255,255,0.06);color:#eaf2ff;text-decoration:none;border-radius:12px;font-weight:700;font-size:14px;border:1px solid rgba(255,255,255,0.1);">
      ${isEs ? "Abrir Biblioteca de Prompts" : "Open Prompt Library"}
    </a>

    <p style="color:#a9b7cf;font-size:14px;line-height:1.6;margin:24px 0 0;">
      ${isEs
        ? `También disponible en ${safeLang === "es" ? "inglés" : "español"}:`
        : `Also available in ${safeLang === "en" ? "Spanish" : "English"}:`}
      <a href="${BASE_URL}/ebooks/${bookId}/${safeLang === "es" ? "en" : "es"}.pdf" style="color:#7c5cff;text-decoration:underline;">
        ${isEs ? "Descargar EN" : "Download ES"}
      </a>
    </p>

    <hr style="border:none;border-top:1px solid rgba(255,255,255,0.1);margin:32px 0;">

    <p style="color:#666;font-size:12px;margin:0;">
      Leonel Ulloa · AI · Marketing · Business<br>
      <a href="${BASE_URL}" style="color:#7c5cff;">leonelulloa.com</a>
    </p>
  </div>
</body>
</html>`.trim();

  await resend.emails.send({
    from: process.env.EMAIL_FROM || "Leonel Ulloa <noreply@leonelulloa.com>",
    to,
    subject,
    html,
  });
}
