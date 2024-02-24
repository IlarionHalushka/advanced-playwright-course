import { test, expect, Page } from "@playwright/test";

let page: Page;

test.beforeAll(async ({ browser }) => {
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto("https://ilarionhalushka.github.io/jekyll-ecommerce-demo/");
});

test("create an order should display success page with order details", async ({}) => {
  // add to cart
  await page.getByRole("link", { name: "Bumble the Elephant" }).click();
  await page.getByRole("button", { name: "Add to cart" }).click();

  // change cart options
  await page.getByLabel("Size").selectOption("Small");
  await page.getByLabel("Color").selectOption("Green");
  await page.getByLabel("Increment quantity").click();
  await page.getByLabel("Increment quantity").click();

  // click checkout
  await page.getByRole("button", { name: "Checkout" }).click();

  // fill out payment details form
  await page.getByLabel("Full name").click();
  await page.getByLabel("Full name").fill("Ilarion");
  await page.getByLabel("Email").click();
  await page.getByLabel("Email").fill("hilarion@gmail.com");
  await page.locator(".snipcart-textbox").first().click();
  await page.getByLabel("Street address").fill("Washington");
  await page.getByText("Washington Street").first().click();

  // Proper fix - wait for backend request to finish
  await page.waitForResponse(
    (response) =>
      response.url().includes("api/localization/addresses") &&
      response.status() === 200 &&
      response.request().method() === "GET"
  );

  await page.getByLabel("Apt/Suite").click();
  await page.getByLabel("Apt/Suite").fill("123");
  await page.getByLabel("City").click();
  await page.getByLabel("City").fill("Washington");

  // submit payment details form
  await page.getByRole("button", { name: "Continue to payment" }).click();

  // fill card details
  await page.frameLocator("iframe").getByPlaceholder("Card number").click();
  await page
    .frameLocator("iframe")
    .getByPlaceholder("Card number")
    .fill("4242 4242 4242 4242");
  await page.frameLocator("iframe").getByPlaceholder("MM/YY").click();
  await page.frameLocator("iframe").getByPlaceholder("MM/YY").fill("12/30");
  await page.frameLocator("iframe").getByPlaceholder("CVV").click();
  await page.frameLocator("iframe").getByPlaceholder("CVV").fill("123");

  // place order
  await page.getByRole("button", { name: "Place order" }).click();

  // success screen - aseert order details
  await expect(
    page.getByRole("heading", { name: "Thank you for your order" })
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Cart summary" })
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Billing", exact: true })
  ).toBeVisible();
  await expect(page.getByRole("heading", { name: "Payment" })).toBeVisible();
  await expect(page.getByText("Total", { exact: true })).toBeVisible();
  await expect(page.getByText("Subtotal")).toBeVisible();
  await expect(page.getByText("$").nth(2)).toBeVisible();
  await expect(page.getByText("$").nth(1)).toBeVisible();
});
