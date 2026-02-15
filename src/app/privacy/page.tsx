import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — L7AI Solutions Ltd",
  robots: "noindex, nofollow",
};

export default function PrivacyPage() {
  return (
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
        Privacy Policy
      </h1>
      <p style={{ color: "#888", marginBottom: 32 }}>
        Last updated: 15 February 2026
      </p>

      <Section title="1. Who We Are">
        <p>
          <strong>L7AI Solutions Ltd</strong> operates the social media
          management platform at leonelulloa.com. For questions about this
          policy, contact us at{" "}
          <a href="mailto:leonel@l7aisolutions.com" style={linkStyle}>
            leonel@l7aisolutions.com
          </a>
          .
        </p>
      </Section>

      <Section title="2. Data We Collect">
        <p>We collect the following categories of data:</p>
        <ul style={ulStyle}>
          <li>
            <strong>OAuth tokens &amp; profile information</strong> — When you
            connect a social media account (Facebook, Instagram, LinkedIn, X,
            YouTube, TikTok, or Threads), we receive an access token and basic
            profile details (name, profile ID, profile picture URL) via the
            platform&apos;s OAuth flow.
          </li>
          <li>
            <strong>Email address</strong> — Collected when you sign up for our
            newsletter or unlock the prompt library.
          </li>
          <li>
            <strong>Scheduled post content</strong> — Text, images, and
            scheduling metadata you provide when creating posts.
          </li>
          <li>
            <strong>Usage analytics</strong> — Anonymised events such as prompt
            views, copies, and ebook downloads (no personal identifiers
            attached).
          </li>
        </ul>
      </Section>

      <Section title="3. How We Use Your Data">
        <ul style={ulStyle}>
          <li>
            <strong>Social media publishing</strong> — Access tokens are used
            solely to schedule and publish content on your behalf to the
            platforms you have connected.
          </li>
          <li>
            <strong>Newsletter</strong> — Email addresses are used to send
            occasional updates about AI, marketing, and business topics.
          </li>
          <li>
            <strong>Service improvement</strong> — Aggregated analytics help us
            understand which features are most useful.
          </li>
        </ul>
        <p style={{ marginTop: 12 }}>
          <strong>We never sell, rent, or share your personal data</strong> with
          third parties for their marketing purposes.
        </p>
      </Section>

      <Section title="4. Data Storage &amp; Security">
        <p>
          All data is stored on <strong>Hetzner Cloud</strong> servers located in
          the <strong>European Union</strong>. All connections are encrypted via
          HTTPS/TLS. Access tokens are stored securely and are only used to
          perform the actions you authorise.
        </p>
      </Section>

      <Section title="5. Cookies">
        <p>
          We use a single functional cookie (<code>lang</code>) to remember your
          language preference (English or Spanish). We do not use advertising or
          tracking cookies.
        </p>
      </Section>

      <Section title="6. Third-Party Platforms">
        <p>
          When you connect social media accounts, your data is also subject to
          the privacy policies of those platforms (Meta, LinkedIn, X Corp,
          Google, TikTok). We only request the minimum permissions necessary to
          schedule and publish content.
        </p>
      </Section>

      <Section title="7. Your Rights (GDPR)">
        <p>If you are in the EU/EEA, you have the right to:</p>
        <ul style={ulStyle}>
          <li>Access the personal data we hold about you</li>
          <li>Rectify inaccurate data</li>
          <li>Request erasure of your data</li>
          <li>Restrict or object to processing</li>
          <li>Data portability</li>
          <li>Withdraw consent at any time</li>
        </ul>
        <p style={{ marginTop: 12 }}>
          To exercise any of these rights, email{" "}
          <a href="mailto:leonel@l7aisolutions.com" style={linkStyle}>
            leonel@l7aisolutions.com
          </a>
          .
        </p>
      </Section>

      <Section title="8. Data Deletion">
        <p>
          You can request deletion of all your data at any time. Visit our{" "}
          <a href="/data-deletion" style={linkStyle}>
            Data Deletion page
          </a>{" "}
          to submit a request. All data will be permanently deleted within{" "}
          <strong>30 days</strong> of a verified request.
        </p>
      </Section>

      <Section title="9. Data Retention">
        <p>
          We retain your data only for as long as necessary to provide the
          service. If you disconnect a social media account, the associated
          access token is deleted immediately. Newsletter subscriptions remain
          active until you unsubscribe or request deletion.
        </p>
      </Section>

      <Section title="10. Changes to This Policy">
        <p>
          We may update this policy from time to time. Material changes will be
          communicated via email or a notice on the website. Continued use of
          the service after changes constitutes acceptance.
        </p>
      </Section>

      <Section title="11. Governing Law">
        <p>
          This privacy policy is governed by the laws of{" "}
          <strong>England and Wales</strong>.
        </p>
      </Section>

      <p style={{ marginTop: 48, color: "#666", fontSize: 14 }}>
        L7AI Solutions Ltd &middot;{" "}
        <a href="mailto:leonel@l7aisolutions.com" style={linkStyle}>
          leonel@l7aisolutions.com
        </a>
      </p>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section style={{ marginBottom: 32 }}>
      <h2 style={{ fontSize: 20, color: "#fff", marginBottom: 12 }}>
        {title}
      </h2>
      {children}
    </section>
  );
}

const linkStyle: React.CSSProperties = {
  color: "#60a5fa",
  textDecoration: "underline",
};

const ulStyle: React.CSSProperties = {
  paddingLeft: 20,
  marginTop: 8,
};
