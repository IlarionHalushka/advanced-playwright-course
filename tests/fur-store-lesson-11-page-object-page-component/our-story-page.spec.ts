import { test, expect } from '@playwright/test';
import { OurStoryPage } from '../../pages/OurStoryPage';

let ourStoryPage: OurStoryPage;

test.beforeAll(async ({ browser }) => {
  const page = await browser.newPage();
  ourStoryPage = new OurStoryPage(page);
  await ourStoryPage.open();
});

test('our story page has avatars and employee names', async () => {
  await expect(ourStoryPage.content.getAvatar('Ava Sandler')).toBeVisible();
  await expect(ourStoryPage.content.getEmployeeName('Ava Sandler')).toBeVisible();

  await expect(ourStoryPage.content.getAvatar('Steph Poco')).toBeVisible();
  await expect(ourStoryPage.content.getEmployeeName('Steph Poco')).toBeVisible();
});

test('our story page has motivation paragraphs', async () => {
  await expect(ourStoryPage.content.getMotivationParagraph('Passion')).toBeVisible();
  await expect(
    ourStoryPage.content.getMotivationText('What more could you want from')
  ).toBeVisible();

  await expect(ourStoryPage.content.getMotivationParagraph('Animal')).toBeVisible();
  await expect(
    ourStoryPage.content.getMotivationText("It's easy to forget that we'")
  ).toBeVisible();

  await expect(ourStoryPage.content.getMotivationParagraph('Style')).toBeVisible();
  await expect(
    ourStoryPage.content.getMotivationText('We like to keep things plain')
  ).toBeVisible();
});
