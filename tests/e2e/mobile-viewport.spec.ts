import { test, expect } from "@playwright/test";

test.describe("Mobile Viewport - Download Modal", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/en");
    await page.evaluate(() => localStorage.removeItem("lead_captured"));
  });

  test("modal is fully visible and usable", async ({ page }) => {
    await page.click('[data-testid="download-ai-business-starter"]');

    const overlay = page.locator(".download-gate-overlay");
    await expect(overlay).toBeVisible();

    const card = page.locator(".download-gate-card");
    await expect(card).toBeVisible();

    const box = await card.boundingBox();
    expect(box).not.toBeNull();

    const viewport = page.viewportSize();
    expect(box!.x).toBeGreaterThanOrEqual(0);
    expect(box!.y).toBeGreaterThanOrEqual(0);
    expect(box!.x + box!.width).toBeLessThanOrEqual(viewport!.width);
    expect(box!.y + box!.height).toBeLessThanOrEqual(viewport!.height);
  });

  test("form fields work and submit completes", async ({ page }) => {
    await page.click('[data-testid="download-ai-business-starter"]');

    await page.fill('[data-testid="lead-name"]', "Mobile User");
    await page.fill('[data-testid="lead-email"]', "mobile@test.com");

    // Intercept window.open to capture URL (PDFs don't fire page lifecycle events)
    await page.evaluate(() => {
      (window as any).__openedUrl = "";
      const orig = window.open;
      window.open = function (url?: any, ...args: any[]) {
        (window as any).__openedUrl = url || "";
        return orig.call(window, url, ...args);
      };
    });

    await page.click('[data-testid="lead-submit"]');
    await page.waitForResponse("**/api/ebook-download");

    const openedUrl = await page.evaluate(() => (window as any).__openedUrl);
    expect(openedUrl).toContain(".pdf");
  });

  test("no horizontal overflow on ebooks grid", async ({ page }) => {
    const viewport = page.viewportSize();
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    expect(bodyWidth).toBeLessThanOrEqual(viewport!.width);
  });
});
