import { Page } from '@playwright/test';

class OurStoryComponent {
  constructor(private page: Page) {
    this.page = page;
  }

  getAvatar(name: string) {
    return this.page.locator('li').filter({ hasText: name }).locator('div').first();
  }

  getEmployeeName(name: string) {
    return this.page.getByText(name);
  }

  getMotivationParagraph(heading: string) {
    return this.page.getByRole('heading', { name: heading });
  }

  getMotivationText(text: string) {
    return this.page.getByText(text);
  }
}

export { OurStoryComponent };
