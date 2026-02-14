import { test, expect } from "@playwright/test";

test.describe("Download Lead Capture Gate", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/en");
    await page.evaluate(() => localStorage.removeItem("lead_captured"));
  });

  test("shows modal when clicking download and no lead captured", async ({ page }) => {
    await page.goto("/en");
    await page.click('[data-testid="download-ai-business-starter"]');

    await expect(page.locator(".download-gate-overlay")).toBeVisible();
    await expect(page.locator('[data-testid="lead-name"]')).toBeVisible();
    await expect(page.locator('[data-testid="lead-email"]')).toBeVisible();
  });

  test("shows validation errors for empty submission", async ({ page }) => {
    await page.goto("/en");
    await page.click('[data-testid="download-ai-business-starter"]');

    await page.click('[data-testid="lead-submit"]');

    await expect(page.locator(".prompt-gate-error").first()).toBeVisible();
  });

  test("shows validation error for short name", async ({ page }) => {
    await page.goto("/en");
    await page.click('[data-testid="download-ai-business-starter"]');

    await page.fill('[data-testid="lead-name"]', "A");
    await page.fill('[data-testid="lead-email"]', "test@example.com");
    await page.click('[data-testid="lead-submit"]');

    await expect(page.locator(".prompt-gate-error").first()).toContainText("2");
  });

  test("shows validation error for invalid email", async ({ page }) => {
    await page.goto("/en");
    await page.click('[data-testid="download-ai-business-starter"]');

    await page.fill('[data-testid="lead-name"]', "John");
    await page.fill('[data-testid="lead-email"]', "notanemail");
    await page.click('[data-testid="lead-submit"]');

    await expect(page.locator(".prompt-gate-error").first()).toBeVisible();
  });

  test("successful submission sets localStorage and opens PDF", async ({ page }) => {
    await page.goto("/en");
    await page.click('[data-testid="download-ai-business-starter"]');

    await page.fill('[data-testid="lead-name"]', "John Doe");
    await page.fill('[data-testid="lead-email"]', "john@example.com");

    // Intercept window.open to capture the URL (PDFs don't fire page events)
    await page.evaluate(() => {
      (window as any).__openedUrl = "";
      const orig = window.open;
      window.open = function (url?: any, ...args: any[]) {
        (window as any).__openedUrl = url || "";
        return orig.call(window, url, ...args);
      };
    });

    await page.click('[data-testid="lead-submit"]');

    // Wait for the API call to complete and window.open to fire
    await page.waitForResponse("**/api/ebook-download");

    const openedUrl = await page.evaluate(() => (window as any).__openedUrl);
    expect(openedUrl).toContain("/ebooks/ai-business-starter/en.pdf");

    await expect(page.locator(".download-gate-overlay")).not.toBeVisible();

    const captured = await page.evaluate(() => localStorage.getItem("lead_captured"));
    expect(captured).toBe("true");
  });

  test("no re-prompt after first successful capture", async ({ page }) => {
    await page.goto("/en");
    await page.evaluate(() => localStorage.setItem("lead_captured", "true"));
    await page.reload();

    // Intercept window.open
    await page.evaluate(() => {
      (window as any).__openedUrl = "";
      const orig = window.open;
      window.open = function (url?: any, ...args: any[]) {
        (window as any).__openedUrl = url || "";
        return orig.call(window, url, ...args);
      };
    });

    await page.click('[data-testid="download-ai-business-starter"]');

    await expect(page.locator(".download-gate-overlay")).not.toBeVisible();

    // Small delay for window.open to fire
    await page.waitForTimeout(500);
    const openedUrl = await page.evaluate(() => (window as any).__openedUrl);
    expect(openedUrl).toContain("/ebooks/ai-business-starter/en.pdf");
  });

  test("modal dismisses on backdrop click", async ({ page }) => {
    await page.goto("/en");
    await page.click('[data-testid="download-ai-business-starter"]');

    await expect(page.locator(".download-gate-overlay")).toBeVisible();

    await page.locator(".download-gate-overlay").click({ position: { x: 10, y: 10 } });

    await expect(page.locator(".download-gate-overlay")).not.toBeVisible();
  });
});

test.describe("Download Gate - Attribution", () => {
  test("POST includes correct book, source, and lang", async ({ page }) => {
    await page.goto("/en");
    await page.evaluate(() => localStorage.removeItem("lead_captured"));

    const requestPromise = page.waitForRequest("**/api/ebook-download");

    await page.click('[data-testid="download-ai-marketing-pro"]');
    await page.fill('[data-testid="lead-name"]', "Test User");
    await page.fill('[data-testid="lead-email"]', "test@example.com");
    await page.click('[data-testid="lead-submit"]');

    const request = await requestPromise;
    const body = request.postDataJSON();

    expect(body.book).toBe("ai-marketing-pro");
    expect(body.source).toBe("ebook-download");
    expect(body.lang).toBe("en");
    expect(body.name).toBe("Test User");
    expect(body.email).toBe("test@example.com");
  });

  test("Spanish page sends lang=es", async ({ page }) => {
    await page.goto("/es");
    await page.evaluate(() => localStorage.removeItem("lead_captured"));

    const requestPromise = page.waitForRequest("**/api/ebook-download");

    await page.click('[data-testid="download-ai-business-starter"]');
    await page.fill('[data-testid="lead-name"]', "Usuario");
    await page.fill('[data-testid="lead-email"]', "usuario@ejemplo.com");
    await page.click('[data-testid="lead-submit"]');

    const request = await requestPromise;
    const body = request.postDataJSON();
    expect(body.lang).toBe("es");
  });
});
