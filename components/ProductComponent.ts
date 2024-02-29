import { Page } from '@playwright/test';

class ProductComponent {
  constructor(private page: Page) {
    this.page = page;
  }

  getTitle = (title: string) => {
    return this.page.getByRole('link', { name: title });
  };

  getPrice = (title: string) => {
    return this.page.locator('li').filter({ hasText: title }).getByRole('paragraph').nth(1);
  };

  getImage = (n: number) => {
    return this.page.locator('li:nth-child(' + n + ') > .styles');
  };
}

export { ProductComponent };
