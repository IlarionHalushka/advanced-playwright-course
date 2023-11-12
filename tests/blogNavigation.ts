import { test, expect } from "@playwright/test";

test("blog navigation", async ({ page }) => {
  await page.goto("https://ilarionhalushka.github.io/");
  await page.getByLabel("search...").click();
  await page.getByLabel("search...").fill("SEARCH_INPUT");
  await page.getByRole("button", { name: "About me" }).click();
  await page
    .getByRole("button", { name: "<- Back to the list of articles" })
    .click();
  await page.getByRole("button", { name: "Home" }).click();
  await page.getByRole("link", { name: "HR Interview Questions" }).click();
  await page.getByRole("button", { name: "About me" }).click();
  await page.getByLabel("search...").click();
  await page.getByLabel("search...").fill("SOME TEXT HERE");
});
