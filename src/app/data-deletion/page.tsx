"use client";

import { useState } from "react";

export default function DataDeletionPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  }

  return (
    <>
      <head>
        <title>Data Deletion — L7AI Solutions Ltd</title>
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <main
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "48px 24px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          color: "#e0e0e0",
          backgroundColor: "#0a0a0a",
          minHeight: "100vh",
          lineHeight: 1.7,
        }}
      >
        <h1 style={{ fontSize: 28, marginBottom: 8, color: "#fff" }}>
          Data Deletion Request
        </h1>
        <p style={{ color: "#888", marginBottom: 32 }}>
          Last updated: 15 February 2026
        </p>

        <section style={{ marginBottom: 32 }}>
          <p>
            In accordance with GDPR and Meta&apos;s data deletion requirements,
            you can request the deletion of all personal data associated with
            your account. This page satisfies Meta&apos;s{" "}
            <strong>&quot;User Data Deletion&quot;</strong> callback requirement.
          </p>
        </section>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 20, color: "#fff", marginBottom: 12 }}>
            What Data Will Be Deleted
          </h2>
          <ul
            style={{
              paddingLeft: 20,
              marginTop: 8,
            }}
          >
            <li>
              <strong>Social media access tokens</strong> — All OAuth tokens for
              connected platforms (Facebook, Instagram, LinkedIn, X, YouTube,
              TikTok, Threads)
            </li>
            <li>
              <strong>Scheduled and published posts</strong> — All post content,
              images, and scheduling metadata
            </li>
            <li>
              <strong>Newsletter subscriptions</strong> — Email address and
              subscription preferences
            </li>
            <li>
              <strong>Profile information</strong> — Name, profile ID, and any
              other data received via OAuth
            </li>
          </ul>
        </section>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 20, color: "#fff", marginBottom: 12 }}>
            Processing Time
          </h2>
          <p>
            All data will be permanently deleted within{" "}
            <strong>30 days</strong> of a verified request. You will receive a
            confirmation email once the deletion is complete.
          </p>
        </section>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 20, color: "#fff", marginBottom: 12 }}>
            Submit a Deletion Request
          </h2>

          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <label
                htmlFor="email"
                style={{ display: "block", marginBottom: 8, color: "#ccc" }}
              >
                Email address associated with your account:
              </label>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  style={{
                    flex: 1,
                    minWidth: 240,
                    padding: "10px 14px",
                    borderRadius: 8,
                    border: "1px solid #333",
                    backgroundColor: "#111",
                    color: "#fff",
                    fontSize: 16,
                    outline: "none",
                  }}
                />
                <button
                  type="submit"
                  style={{
                    padding: "10px 24px",
                    borderRadius: 8,
                    border: "none",
                    backgroundColor: "#dc2626",
                    color: "#fff",
                    fontSize: 16,
                    cursor: "pointer",
                    fontWeight: 600,
                  }}
                >
                  Request Deletion
                </button>
              </div>
            </form>
          ) : (
            <div
              style={{
                padding: 24,
                borderRadius: 12,
                backgroundColor: "#14532d",
                border: "1px solid #22c55e",
              }}
            >
              <p
                style={{ fontSize: 18, fontWeight: 600, color: "#22c55e", marginBottom: 12 }}
              >
                Deletion request received
              </p>
              <p>
                We have logged your request for <strong>{email}</strong>. To
                verify your identity and complete the deletion process, please
                also send an email to:
              </p>
              <p style={{ margin: "12px 0" }}>
                <a
                  href={`mailto:leonel@l7aisolutions.com?subject=Data%20Deletion%20Request&body=Please%20delete%20all%20data%20associated%20with%20${encodeURIComponent(email)}`}
                  style={{
                    color: "#60a5fa",
                    textDecoration: "underline",
                    fontSize: 18,
                    fontWeight: 600,
                  }}
                >
                  leonel@l7aisolutions.com
                </a>
              </p>
              <p style={{ color: "#a3e635", fontSize: 14 }}>
                This identity verification step is required to protect your data
                from unauthorised deletion requests. Your data will be deleted
                within 30 days of verification.
              </p>
            </div>
          )}
        </section>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 20, color: "#fff", marginBottom: 12 }}>
            Alternative Method
          </h2>
          <p>
            You can also request data deletion by emailing{" "}
            <a
              href="mailto:leonel@l7aisolutions.com?subject=Data%20Deletion%20Request"
              style={{ color: "#60a5fa", textDecoration: "underline" }}
            >
              leonel@l7aisolutions.com
            </a>{" "}
            directly with the subject line &quot;Data Deletion Request&quot; and
            the email address associated with your account.
          </p>
        </section>

        <p style={{ marginTop: 48, color: "#666", fontSize: 14 }}>
          L7AI Solutions Ltd &middot;{" "}
          <a
            href="mailto:leonel@l7aisolutions.com"
            style={{ color: "#60a5fa", textDecoration: "underline" }}
          >
            leonel@l7aisolutions.com
          </a>{" "}
          &middot;{" "}
          <a
            href="/privacy"
            style={{ color: "#60a5fa", textDecoration: "underline" }}
          >
            Privacy Policy
          </a>
        </p>
      </main>
    </>
  );
}
