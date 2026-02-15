import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — L7AI Solutions Ltd",
  robots: "noindex, nofollow",
};

export default function TermsPage() {
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
        Terms of Service
      </h1>
      <p style={{ color: "#888", marginBottom: 32 }}>
        Last updated: 15 February 2026
      </p>

      <Section title="1. Service Description">
        <p>
          <strong>L7AI Solutions Ltd</strong> (&quot;we&quot;, &quot;us&quot;,
          &quot;our&quot;) provides a social media management platform accessible
          at leonelulloa.com (the &quot;Service&quot;). The Service allows users
          to connect their social media accounts and schedule, manage, and
          publish content across multiple platforms including Facebook, Instagram,
          LinkedIn, X, YouTube, TikTok, and Threads.
        </p>
      </Section>

      <Section title="2. Acceptance of Terms">
        <p>
          By accessing or using the Service, you agree to be bound by these
          Terms of Service. If you do not agree, you must not use the Service.
        </p>
      </Section>

      <Section title="3. User Responsibilities">
        <p>You agree to:</p>
        <ul style={ulStyle}>
          <li>
            Provide accurate information when connecting social media accounts
          </li>
          <li>
            Maintain the security of your account credentials and connected
            platform tokens
          </li>
          <li>
            Comply with the terms of service of all third-party platforms you
            connect
          </li>
          <li>
            Be solely responsible for the content you schedule and publish
            through the Service
          </li>
          <li>Not use the Service for any unlawful purpose</li>
        </ul>
      </Section>

      <Section title="4. Acceptable Use">
        <p>You must not use the Service to:</p>
        <ul style={ulStyle}>
          <li>
            Publish spam, misleading content, or content that violates
            third-party platform policies
          </li>
          <li>Harass, abuse, or harm others</li>
          <li>Distribute malware or engage in phishing</li>
          <li>
            Violate any applicable law or regulation, including data protection
            laws
          </li>
          <li>
            Attempt to gain unauthorised access to the Service or its
            infrastructure
          </li>
          <li>
            Interfere with or disrupt the Service or the servers and networks
            connected to it
          </li>
        </ul>
      </Section>

      <Section title="5. Intellectual Property">
        <p>
          <strong>Your content:</strong> You retain full ownership of all content
          you create, upload, or publish through the Service. By using the
          Service, you grant us a limited licence to store and transmit your
          content solely for the purpose of providing the Service.
        </p>
        <p style={{ marginTop: 12 }}>
          <strong>Our content:</strong> The Service, its design, features, and
          documentation are the intellectual property of L7AI Solutions Ltd. You
          may not copy, modify, or redistribute any part of the Service without
          prior written permission.
        </p>
      </Section>

      <Section title="6. Third-Party Platforms">
        <p>
          The Service integrates with third-party social media platforms. We are
          not responsible for:
        </p>
        <ul style={ulStyle}>
          <li>
            Changes to third-party APIs that may affect Service functionality
          </li>
          <li>
            Content moderation decisions made by third-party platforms
          </li>
          <li>
            Suspension or termination of your accounts on third-party platforms
          </li>
          <li>
            Downtime or outages of third-party platforms that prevent publishing
          </li>
        </ul>
        <p style={{ marginTop: 12 }}>
          Your use of connected platforms is subject to their respective terms of
          service and privacy policies.
        </p>
      </Section>

      <Section title="7. Service Availability">
        <p>
          We strive to maintain high availability but do not guarantee
          uninterrupted access. The Service may be temporarily unavailable due
          to maintenance, updates, or circumstances beyond our control. We will
          make reasonable efforts to notify users of planned downtime in advance.
        </p>
      </Section>

      <Section title="8. Limitation of Liability">
        <p>
          To the maximum extent permitted by law, L7AI Solutions Ltd shall not be
          liable for:
        </p>
        <ul style={ulStyle}>
          <li>
            Any indirect, incidental, special, or consequential damages arising
            from your use of the Service
          </li>
          <li>
            Loss of data, revenue, or business opportunities related to the
            Service
          </li>
          <li>
            Failure to publish content due to third-party platform issues or API
            changes
          </li>
          <li>
            Actions taken by third-party platforms regarding your content or
            accounts
          </li>
        </ul>
        <p style={{ marginTop: 12 }}>
          Our total liability shall not exceed the amount you have paid for the
          Service in the 12 months preceding the claim.
        </p>
      </Section>

      <Section title="9. Termination">
        <p>
          You may stop using the Service and request deletion of your data at any
          time by contacting us at{" "}
          <a href="mailto:leonel@l7aisolutions.com" style={linkStyle}>
            leonel@l7aisolutions.com
          </a>
          .
        </p>
        <p style={{ marginTop: 12 }}>
          We reserve the right to suspend or terminate your access if you violate
          these Terms, with or without notice. Upon termination, we will delete
          your data within 30 days unless legally required to retain it.
        </p>
      </Section>

      <Section title="10. Changes to These Terms">
        <p>
          We may update these Terms from time to time. Material changes will be
          communicated via email or a notice on the website. Continued use of the
          Service after changes constitutes acceptance of the updated Terms.
        </p>
      </Section>

      <Section title="11. Governing Law">
        <p>
          These Terms are governed by and construed in accordance with the laws
          of <strong>England and Wales</strong>. Any disputes arising from these
          Terms shall be subject to the exclusive jurisdiction of the courts of
          England and Wales.
        </p>
      </Section>

      <Section title="12. Contact">
        <p>
          For questions about these Terms, contact:{" "}
          <a href="mailto:leonel@l7aisolutions.com" style={linkStyle}>
            leonel@l7aisolutions.com
          </a>
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
