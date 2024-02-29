import { Page, expect } from '@playwright/test';
import { ContactUsFormComponent } from '../components/ContactUsFormComponent';

class ContactUsPage {
  form = new ContactUsFormComponent(this.page);
  heading = this.page.getByRole('heading', { name: 'Contact us' });

  constructor(private page: Page) {
    this.page = page;
  }

  async open() {
    await this.page.goto('contact/');
    await expect(this.heading).toBeVisible();
  }
}

export { ContactUsPage };
