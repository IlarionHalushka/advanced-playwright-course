import { Page } from '@playwright/test';
import { ProductComponent } from '../components/ProductComponent';

class ProductsListPage {
  product = new ProductComponent(this.page);
  heading = this.page.getByRole('heading', { name: 'Find your spirit animal' });
  subHeading = this.page.getByText('The animal friendly clothing');

  constructor(private page: Page) {
    this.page = page;
  }

  async open() {
    await this.page.goto('');
  }
}

export { ProductsListPage };
