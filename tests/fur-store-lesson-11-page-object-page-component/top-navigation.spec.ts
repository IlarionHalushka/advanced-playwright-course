import { test, expect, Page } from '@playwright/test';
import { TopNavigationComponent } from '../../components/TopNavigationComponent';
import { OurStoryPage } from '../../pages/OurStoryPage';
import { ProductsListPage } from '../../pages/ProductsListPage';
import { ContactUsPage } from '../../pages/ContactUsPage';

let page: Page;
let topNavigation: TopNavigationComponent;
let ourStory: OurStoryPage;
let productsList: ProductsListPage;
let contactUs: ContactUsPage;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  topNavigation = new TopNavigationComponent(page);
  ourStory = new OurStoryPage(page);
  productsList = new ProductsListPage(page);
  contactUs = new ContactUsPage(page);
});

test.beforeEach(async () => {
  await page.goto('');
});

test('top navigation should navigate to Our Story', async () => {
  await topNavigation.navigateTo('Our Story');

  await expect(ourStory.heading).toBeVisible();
});

test('top navigation should navigate to Contact', async () => {
  await topNavigation.navigateTo('Contact');

  await expect(contactUs.heading).toBeVisible();
});

test('top navigation should navigate to Products', async () => {
  await topNavigation.navigateTo('Our Story');
  await topNavigation.navigateTo('Products');

  await expect(productsList.heading).toBeVisible();
  await expect(productsList.subHeading).toBeVisible();
});

test('top navigation should navigate to Products when clicking on logo', async () => {
  await topNavigation.navigateTo('Contact');
  await topNavigation.clickOnLogo();

  await expect(productsList.heading).toBeVisible();
  await expect(productsList.subHeading).toBeVisible();
});
