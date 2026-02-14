import { test, expect } from "@playwright/test";

test.describe("Short Link Redirect", () => {
  test("redirects /p/13 with params to correct prompts URL", async ({ page }) => {
    await page.goto(
      "/p/13?src=pdf&book=ai-sales-offers-starter&lang=en",
      { waitUntil: "domcontentloaded" }
    );

    expect(page.url()).toContain("/prompts/en/ai-sales-offers-starter/13");
    expect(page.url()).toContain("src=pdf");
  });

  test("defaults to first book when book param missing", async ({ page }) => {
    await page.goto("/p/01?src=pdf&lang=en", { waitUntil: "domcontentloaded" });
    expect(page.url()).toContain("/prompts/en/ai-business-starter/01");
  });
});
