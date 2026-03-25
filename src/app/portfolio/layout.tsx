export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
          background: "#070a0f",
          color: "#eaf2ff",
          minHeight: "100vh",
        }}
      >
        {children}
      </body>
    </html>
  );
}
