import { test, expect, Page } from '@playwright/test';
import { ContactUsPage } from '../../pages/ContactUsPage';

let page: Page;
let contactUsPage: ContactUsPage;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  contactUsPage = new ContactUsPage(page);
  await contactUsPage.open();
});

test('contact page has a form title', async () => {
  await expect(contactUsPage.form.title).toBeVisible();
});

test('contact page has a map', async () => {
  await expect(contactUsPage.form.map).toBeVisible();
});

test('submit contact form navigates to success page', async () => {
  await contactUsPage.form.fillOutForm({
    name: 'IlarionIlarion',
    email: 'halushka@gmail.com',
    message: 'I have a problem',
  });

  await contactUsPage.form.submit();

  expect(page.url()).toContain('contact-success');
});
