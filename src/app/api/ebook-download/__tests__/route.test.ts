import { describe, it, expect, vi, beforeEach } from "vitest";

// Mock Supabase — now the route does select + insert/update instead of simple upsert
const mockMaybeSingle = vi.fn().mockResolvedValue({ data: null });
const mockSelect = vi.fn().mockReturnValue({ eq: vi.fn().mockReturnValue({ maybeSingle: mockMaybeSingle }) });
const mockInsertSignup = vi.fn().mockResolvedValue({ error: null });
const mockUpdateSignup = vi.fn().mockReturnValue({ eq: vi.fn().mockResolvedValue({ error: null }) });
const mockInsertEvent = vi.fn().mockReturnValue({ then: (cb: () => void) => cb() });

vi.mock("@/lib/supabase-server", () => ({
  supabaseServer: {
    from: (table: string) => {
      if (table === "newsletter_signups") {
        return {
          select: mockSelect,
          insert: mockInsertSignup,
          update: mockUpdateSignup,
        };
      }
      if (table === "prompt_events") return { insert: mockInsertEvent };
      return {};
    },
  },
}));

// Mock email (fire-and-forget, should not affect route behavior)
vi.mock("@/lib/email", () => ({
  sendEbookEmail: vi.fn().mockResolvedValue(undefined),
}));

import { POST } from "../route";

function makeRequest(body: Record<string, unknown>): Request {
  return new Request("http://localhost/api/ebook-download", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body),
  });
}

describe("POST /api/ebook-download", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    // Default: no existing lead
    mockMaybeSingle.mockResolvedValue({ data: null });
  });

  it("returns 200 and { ok: true } for valid payload", async () => {
    const res = await POST(makeRequest({
      name: "Leonel",
      email: "leonel@example.com",
      book: "ai-business-starter",
      lang: "en",
      source: "ebook-download",
    }));

    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json).toEqual({ ok: true });
  });

  it("inserts new lead with books and sources arrays", async () => {
    await POST(makeRequest({
      name: "Leonel",
      email: "LEONEL@Example.com",
      book: "ai-business-starter",
      lang: "es",
      source: "ebook-download",
    }));

    expect(mockInsertSignup).toHaveBeenCalledWith(
      expect.objectContaining({
        email: "leonel@example.com",
        name: "Leonel",
        books: ["ai-business-starter"],
        sources: ["ebook-download"],
        lang: "es",
      })
    );
  });

  it("updates existing lead and merges books array", async () => {
    mockMaybeSingle.mockResolvedValue({
      data: { books: ["ai-business-starter"], sources: ["homepage"] },
    });

    await POST(makeRequest({
      name: "Leonel",
      email: "leonel@example.com",
      book: "ai-marketing-pro",
      lang: "en",
      source: "ebook-download",
    }));

    expect(mockUpdateSignup).toHaveBeenCalledWith(
      expect.objectContaining({
        name: "Leonel",
        books: expect.arrayContaining(["ai-business-starter", "ai-marketing-pro"]),
        sources: expect.arrayContaining(["homepage", "ebook-download"]),
      })
    );
  });

  it("inserts ebook_download event to prompt_events", async () => {
    await POST(makeRequest({
      name: "Leonel",
      email: "leonel@example.com",
      book: "ai-marketing-pro",
      lang: "en",
      source: "ebook-download",
    }));

    expect(mockInsertEvent).toHaveBeenCalledWith({
      event: "ebook_download",
      prompt_id: "",
      lang: "en",
      source: "ebook-download",
      book: "ai-marketing-pro",
    });
  });

  it("returns 400 when name is missing", async () => {
    const res = await POST(makeRequest({
      email: "leonel@example.com",
      book: "ai-business-starter",
      lang: "en",
    }));

    expect(res.status).toBe(400);
    const json = await res.json();
    expect(json.ok).toBe(false);
    expect(json.error).toBe("name_too_short");
  });

  it("returns 400 when name is too short", async () => {
    const res = await POST(makeRequest({
      name: "L",
      email: "leonel@example.com",
    }));

    expect(res.status).toBe(400);
  });

  it("returns 400 when email is invalid", async () => {
    const res = await POST(makeRequest({
      name: "Leonel",
      email: "not-an-email",
    }));

    expect(res.status).toBe(400);
    const json = await res.json();
    expect(json.error).toBe("email_invalid");
  });

  it("returns 400 when email is missing", async () => {
    const res = await POST(makeRequest({
      name: "Leonel",
    }));

    expect(res.status).toBe(400);
  });

  it("caps book field at 50 chars", async () => {
    const longBook = "x".repeat(100);
    await POST(makeRequest({
      name: "Leonel",
      email: "leonel@example.com",
      book: longBook,
      lang: "en",
    }));

    const insertArg = mockInsertEvent.mock.calls[0][0];
    expect(insertArg.book.length).toBeLessThanOrEqual(50);
  });

  it("strips control chars from name before storing", async () => {
    await POST(makeRequest({
      name: "John\nDoe\r\t",
      email: "safe@example.com",
    }));

    const insertArg = mockInsertSignup.mock.calls[0][0];
    expect(insertArg.name).not.toContain("\n");
    expect(insertArg.name).not.toContain("\r");
    expect(insertArg.name).toBe("John Doe");
  });
});
