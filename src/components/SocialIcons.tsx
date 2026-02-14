import type { ReactElement } from "react";
import type { SocialPlatform } from "@/config/social";

const icons: Record<SocialPlatform, ReactElement> = {
  youtube: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.8 4.7 12 4.7 12 4.7s-5.8 0-7.5.4A3 3 0 0 0 2.4 7.2 31.5 31.5 0 0 0 2 12a31.5 31.5 0 0 0 .4 4.8 3 3 0 0 0 2.1 2.1c1.7.4 7.5.4 7.5.4s5.8 0 7.5-.4a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 22 12a31.5 31.5 0 0 0-.4-4.8ZM10 15.5v-7l6 3.5-6 3.5Z" />
    </svg>
  ),
  tiktok: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M16.5 3c.7 2.5 2.6 4.5 5.2 5.1v3.2c-1.9 0-3.7-.6-5.2-1.6V16c0 3.6-2.9 6.5-6.5 6.5S3.5 19.6 3.5 16 6.4 9.5 10 9.5c.4 0 .8 0 1.2.1v3.4c-.4-.2-.8-.3-1.2-.3-1.8 0-3.3 1.5-3.3 3.3S8.2 19.3 10 19.3s3.3-1.5 3.3-3.3V3h3.2Z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5ZM.22 23.5h4.56V7.98H.22V23.5ZM8.2 7.98h4.37v2.12h.06c.61-1.16 2.1-2.38 4.32-2.38 4.62 0 5.47 3.04 5.47 6.99v8.79h-4.56v-7.8c0-1.86-.03-4.26-2.6-4.26-2.6 0-3 2.03-3 4.13v7.93H8.2V7.98Z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm9 2h-9A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm6.2-.9a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z" />
    </svg>
  ),
  x: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.9 2H22l-6.8 7.8L23 22h-6.2l-4.9-6.3L6.4 22H2l7.4-8.5L1 2h6.3l4.4 5.6L18.9 2Zm-1.1 18h1.7L7.2 4H5.4l12.4 16Z" />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.2-1.5 1.6-1.5H16.7V5c-.3 0-1.4-.1-2.7-.1-2.6 0-4.4 1.6-4.4 4.6V11H7v3h2.6v8h3.9Z" />
    </svg>
  ),
  threads: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2Zm1.4 6.2c1.8.2 3.1 1.2 3.1 3 0 1.9-1.3 3.1-3.2 3.2l1.5 2.9h-2.1l-1.4-2.8h-1.3v2.8H8V8h5.4Zm-3.4 1.6v3.1h2.9c1 0 1.6-.6 1.6-1.5 0-.9-.6-1.6-1.6-1.6H10Z" />
    </svg>
  ),
};

export function SocialIcon({ platform }: { platform: SocialPlatform }) {
  return icons[platform] || null;
}
