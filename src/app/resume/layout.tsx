export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
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
        <style>{`
          @media (max-width: 768px) {
            .resume { padding: 20px 16px !important; }
            [data-grid="resume-caps"] { grid-template-columns: 1fr !important; }
            [data-grid="resume-certs"] { grid-template-columns: 1fr !important; }
            h1 { font-size: 24px !important; }
          }
          @media print {
            body { background: white !important; color: #111 !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
            .resume { box-shadow: none !important; border: none !important; max-width: 100% !important; padding: 20px !important; }
            .no-print { display: none !important; }
            a { color: #111 !important; text-decoration: underline !important; }
            .section { break-inside: avoid; }
            .accent-text { color: #333 !important; }
            .muted-text { color: #555 !important; }
            .tag { background: #eee !important; color: #333 !important; }
            .divider { border-color: #ddd !important; }
          }
        `}</style>
        {children}
      </body>
    </html>
  );
}
