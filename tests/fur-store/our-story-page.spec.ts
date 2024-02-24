import { test, expect, Page } from "@playwright/test";

let page: Page;

test.beforeAll(async ({ browser }) => {
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto(
    "https://ilarionhalushka.github.io/jekyll-ecommerce-demo/about/"
  );
});

test("our story page has a heading", async ({}) => {
  await expect(page.getByRole("heading", { name: "Our story" })).toBeVisible();
});

test("our story page has avatars and employee names", async ({}) => {
  await expect(
    page.locator("li").filter({ hasText: "Ava Sandler" })
  ).toBeVisible();
  await expect(
    page.locator("li").filter({ hasText: "Ava Sandler" }).locator("div").first()
  ).toBeVisible();
  await expect(page.getByText("Ava Sandler")).toBeVisible();

  await expect(
    page.locator("li").filter({ hasText: "Steph Poco" })
  ).toBeVisible();
  await expect(
    page.locator("li").filter({ hasText: "Steph Poco" }).locator("div").first()
  ).toBeVisible();
  await expect(page.getByText("Steph Poco")).toBeVisible();
});

test("our story page has motivation paragraphs", async ({}) => {
  await expect(page.getByRole("heading", { name: "Passion" })).toBeVisible();
  await expect(page.getByText("What more could you want from")).toBeVisible();

  await expect(page.getByRole("heading", { name: "Animal" })).toBeVisible();
  await expect(page.getByText("It's easy to forget that we'")).toBeVisible();

  await expect(page.getByRole("heading", { name: "Style" })).toBeVisible();
  await expect(page.getByText("We like to keep things plain")).toBeVisible();
});
