import { test, expect, Page } from "@playwright/test";

let page: Page;

test.beforeEach(async ({ browser }) => {
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto("https://ilarionhalushka.github.io/jekyll-ecommerce-demo/");
});

test("top navigation should navigate to Our Story", async ({}) => {
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Our Story" })
    .click();

  await expect(page.getByRole("heading", { name: "Our story" })).toBeVisible();
});

test("top navigation should navigate to Contact", async ({}) => {
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Contact" })
    .click();

  await expect(
    page.getByRole("heading", { name: "Get in touch" })
  ).toBeVisible();
});

test("top navigation should navigate to Products", async ({}) => {
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Our Story" })
    .click();
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Products" })
    .click();

  await page.getByRole("heading", { name: "Find your spirit animal" }).click();
  await expect(page.getByText("The animal friendly clothing")).toBeVisible();
});

test("top navigation should navigate to Products when clicking on logo", async ({}) => {
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Contact" })
    .click();
  await page.getByRole("link", { name: "Fur", exact: true }).click();

  await expect(
    page.getByRole("heading", { name: "Find your spirit animal" })
  ).toBeVisible();
  await expect(page.getByText("The animal friendly clothing")).toBeVisible();
});
