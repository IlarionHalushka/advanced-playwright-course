import { test, expect } from "@playwright/test";

let page;

test.beforeAll(async ({ browser }) => {
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto(
    "https://ilarionhalushka.github.io/jekyll-ecommerce-demo/contact/"
  );
});

test("contact page has a header", async ({}) => {
  await expect(
    page.getByRole("heading", { name: "Get in touch" })
  ).toBeVisible();
});

test("contact page has a form title", async ({}) => {
  await expect(
    page.getByRole("heading", { name: "Send us a message" })
  ).toBeVisible();
});

test("contact page has a map", async ({}) => {
  await expect(page.locator("#map")).toBeVisible();
});

test("submit contact form navigates to success page", async ({}) => {
  await page.getByPlaceholder("Enter your name...").fill("IlarionIlarion");
  await page.getByPlaceholder("Enter your email...").fill("Halushka@gmail.com");
  await page.getByPlaceholder("Enter your message...").fill("I have a problem");
  await page.getByRole("button", { name: "Send Message" }).click();

  await expect(page.url()).toContain("contact-success");
});
