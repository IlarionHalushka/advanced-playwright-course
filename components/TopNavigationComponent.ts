import { Page } from '@playwright/test';

class TopNavigationComponent {
  #logo = this.page.getByRole('link', { name: 'Fur', exact: true });

  constructor(private page: Page) {
    this.page = page;
  }

  async navigateTo(link: 'Our Story' | 'Contact' | 'Products') {
    await this.page.getByRole('navigation').getByRole('link', { name: link }).click();
  }

  async clickOnLogo() {
    await this.#logo.click();
  }
}

export { TopNavigationComponent };
