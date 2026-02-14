import { describe, it, expect } from "vitest";
import { sanitizeField, validateLead } from "../validation";

describe("sanitizeField", () => {
  it("trims whitespace", () => {
    expect(sanitizeField("  hello  ")).toBe("hello");
  });

  it("removes control characters (\\n, \\r, \\t)", () => {
    expect(sanitizeField("hello\nworld\r\t!")).toBe("hello world !");
  });

  it("collapses multiple spaces", () => {
    expect(sanitizeField("hello    world")).toBe("hello world");
  });

  it("returns empty string for non-string input", () => {
    expect(sanitizeField(null)).toBe("");
    expect(sanitizeField(undefined)).toBe("");
    expect(sanitizeField(123)).toBe("");
    expect(sanitizeField({})).toBe("");
  });

  it("handles empty string", () => {
    expect(sanitizeField("")).toBe("");
  });

  it("handles string of only whitespace and control chars", () => {
    expect(sanitizeField("  \n\r\t  ")).toBe("");
  });
});

describe("validateLead", () => {
  it("accepts valid name and email", () => {
    const result = validateLead("John", "john@example.com");
    expect(result.valid).toBe(true);
    expect(result.name).toBe("John");
    expect(result.email).toBe("john@example.com");
    expect(result.error).toBeUndefined();
  });

  it("lowercases email", () => {
    const result = validateLead("Jane", "JANE@Example.COM");
    expect(result.email).toBe("jane@example.com");
  });

  it("rejects name shorter than 2 chars", () => {
    const result = validateLead("A", "a@b.com");
    expect(result.valid).toBe(false);
    expect(result.error).toBe("name_too_short");
  });

  it("rejects empty name", () => {
    const result = validateLead("", "a@b.com");
    expect(result.valid).toBe(false);
    expect(result.error).toBe("name_too_short");
  });

  it("rejects name that is only whitespace", () => {
    const result = validateLead("   ", "a@b.com");
    expect(result.valid).toBe(false);
    expect(result.error).toBe("name_too_short");
  });

  it("truncates name longer than 80 chars and flags error", () => {
    const longName = "A".repeat(81);
    const result = validateLead(longName, "a@b.com");
    expect(result.valid).toBe(false);
    expect(result.error).toBe("name_too_long");
    expect(result.name).toHaveLength(80);
  });

  it("accepts name of exactly 80 chars", () => {
    const name80 = "A".repeat(80);
    const result = validateLead(name80, "a@b.com");
    expect(result.valid).toBe(true);
    expect(result.name).toHaveLength(80);
  });

  it("accepts name of exactly 2 chars", () => {
    const result = validateLead("AB", "a@b.com");
    expect(result.valid).toBe(true);
  });

  it("rejects email without @", () => {
    const result = validateLead("John", "notanemail");
    expect(result.valid).toBe(false);
    expect(result.error).toBe("email_invalid");
  });

  it("rejects email without domain dot", () => {
    const result = validateLead("John", "a@b");
    expect(result.valid).toBe(false);
    expect(result.error).toBe("email_invalid");
  });

  it("rejects empty email", () => {
    const result = validateLead("John", "");
    expect(result.valid).toBe(false);
    expect(result.error).toBe("email_invalid");
  });

  it("rejects non-string email", () => {
    const result = validateLead("John", 12345);
    expect(result.valid).toBe(false);
    expect(result.error).toBe("email_invalid");
  });

  it("caps email at 254 characters", () => {
    const longEmail = "a".repeat(245) + "@test.com";
    const result = validateLead("John", longEmail);
    expect(result.email.length).toBeLessThanOrEqual(254);
  });

  it("sanitizes control chars from name", () => {
    const result = validateLead("John\nDoe\r\t", "john@test.com");
    expect(result.valid).toBe(true);
    expect(result.name).toBe("John Doe");
  });

  it("rejects name that becomes too short after sanitization", () => {
    const result = validateLead("\n\r\tA", "a@b.com");
    expect(result.valid).toBe(false);
    expect(result.error).toBe("name_too_short");
  });
});
