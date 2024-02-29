import { Page, expect } from '@playwright/test';
import { OurStoryComponent } from '../components/OurStoryComponent';

class OurStoryPage {
  content = new OurStoryComponent(this.page);
  heading = this.page.getByRole('heading', { name: 'Our story' });

  constructor(private page: Page) {
    this.page = page;
  }

  async open() {
    await this.page.goto('about/');
    await expect(this.heading).toBeVisible();
  }
}

export { OurStoryPage };
