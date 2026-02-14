export const metadata = {
  title: "Prompt Library | Leonel Ulloa",
  description: "Copy-ready AI prompts for business, marketing, and automation.",
  metadataBase: new URL("https://leonelulloa.com"),
};

export default function PromptsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
