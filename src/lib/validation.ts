/**
 * Sanitize a string field: trim, remove control characters,
 * collapse multiple spaces into one.
 */
export function sanitizeField(raw: unknown): string {
  if (typeof raw !== "string") return "";
  return raw
    .replace(/[\n\r\t]/g, " ")
    .replace(/\s{2,}/g, " ")
    .trim();
}

interface ValidationResult {
  valid: boolean;
  name: string;
  email: string;
  error?: string;
}

/**
 * Validate a lead capture submission (name + email).
 * Returns sanitized values if valid, or an error code if not.
 */
export function validateLead(
  rawName: unknown,
  rawEmail: unknown
): ValidationResult {
  const name = sanitizeField(rawName);
  const email =
    typeof rawEmail === "string"
      ? rawEmail.toLowerCase().trim().slice(0, 254)
      : "";

  if (name.length < 2) {
    return { valid: false, name, email, error: "name_too_short" };
  }
  if (name.length > 80) {
    return { valid: false, name: name.slice(0, 80), email, error: "name_too_long" };
  }

  if (!email || email.length < 5 || !email.includes("@")) {
    return { valid: false, name, email, error: "email_invalid" };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { valid: false, name, email, error: "email_invalid" };
  }

  return { valid: true, name: name.slice(0, 80), email };
}
