import { test, expect } from "@playwright/test";

test("create an order", async ({ page }) => {
  await page.goto(
    "https://ilarionhalushka.github.io/jekyll-ecommerce-demo/URL-SAVE_Msffsdhjffsdbfbsdhgfhjsdgfjhghjsdgfhjsghjsdgfjhgdshjgfhjsdgfhjghjdshfjsdffdshjfghjsdgfhjsdhfjgshjdgfhjsdgfhjsdghjfgsdhjfgsjdhgfhjdsgf"
  );
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Products" }).click();
  await page.getByRole("link", { name: "Gavin the Tiger" }).click();
  await page.getByRole("button", { name: "Add to cart" }).click();
  await page.getByRole("button", { name: "Checkout" }).click();
  await page.getByLabel("Full name").click();
  await page.getByLabel("Full name").fill("ilarion");
  await page.getByLabel("Email").click();
  await page.getByLabel("Email").fill("sfhjdf@dfsdf.fdsf");
  // it will fail here :'( I don't know why
  await page.locator(".snipcart-textbox").first().click();
  // we want to fix this locator ^^

  await page.getByLabel("Street address").fill("freed");
  await page.getByText("freed", { exact: true }).click();
  await page.getByLabel("Street address").click();
  await page.getByText("Freedom Trail").click();
  await page.getByLabel("Apt/Suite").click();
  await page.getByLabel("Apt/Suite").fill("123");
  await page.getByLabel("City").click();
  await page.getByLabel("City").fill("Bostonn");
  await page.getByLabel("Country").click();
  await page.getByText("Canada").click();
  await page.getByLabel("Province/State").click();
  await page.getByText("British Columbia").click();
  await page.getByLabel("Postal/ZIP code").click();
  await page.getByLabel("Postal/ZIP code").fill("50123");
  await page.getByRole("button", { name: "Continue to payment" }).click();
  await page.frameLocator("iframe").getByPlaceholder("Card number").click();
  await page
    .frameLocator("iframe")
    .getByPlaceholder("Card number")
    .fill("4242 4242 4242 42422");
  await page.frameLocator("iframe").getByPlaceholder("MM/YY").click();
  await page.frameLocator("iframe").getByPlaceholder("MM/YY").fill("12/25");
  await page.frameLocator("iframe").getByPlaceholder("CVV").click();
  await page.frameLocator("iframe").getByPlaceholder("CVV").fill("123");
  await page.getByRole("button", { name: "Place order" }).click();
  await page.getByRole("heading", { name: "Thank you for your order" }).click();
  await page
    .getByRole("button", {
      name: "Continue shopping",
    })
    .click();

  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Products" })
    .click();

  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Our Story" })
    .click();
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Contact" })
    .click();
  await page.getByRole("link", { name: "shopping_cart" }).click();
  await page.getByRole("button", { name: "Back to store" }).click();
  await page.getByRole("link", { name: "shopping_cart" }).click();
  await page.getByRole("button", { name: "Remove item" }).click();
  await page.getByRole("link", { name: "shopping_cart" }).click();
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Products" })
    .click();
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Products" })
    .click();
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Contact" })
    .click();
  await page.getByPlaceholder("Enter your name...").click();
  await page.getByPlaceholder("Enter your name...").fill("Ilarion");
  await page.getByPlaceholder("Enter your email...").click();
  await page.getByPlaceholder("Enter your email...").fill("dfdsf@fdsf.dsfds");
  await page.getByPlaceholder("Enter your message...").click();
  await page.getByPlaceholder("Enter your message...").fill("MSG");
  await page.getByRole("button", { name: "Send Message" }).click();
});
