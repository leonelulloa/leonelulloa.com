import type { Metadata } from "next";
import StatusClient from "./StatusClient";

export const metadata: Metadata = {
  title: "System Status — L7AI Content Intelligence Pipeline",
  description: "Live infrastructure status for the L7AI Content Intelligence Pipeline.",
  robots: { index: false, follow: false },
};

export default function StatusPage() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "#070a0f",
      color: "#eaf2ff",
      fontFamily: 'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
    }}>
      <StatusClient />
    </div>
  );
}
