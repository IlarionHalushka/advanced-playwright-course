import { expect, Page } from '@playwright/test';

class CartComponent {
  #addToCartButton = this.page.getByRole('button', { name: 'Add to cart' });
  #incrementQuantityButton = this.page.getByLabel('Increment quantity');
  #checkoutButton = this.page.getByRole('button', { name: 'Checkout' });

  constructor(private page: Page) {
    this.page = page;
  }

  async addToCart(productName: string) {
    await this.page.getByRole('link', { name: productName }).click();
    await this.#addToCartButton.click();
  }

  async incrementQuantity() {
    await this.#incrementQuantityButton.click();
  }

  async checkout() {
    await this.#checkoutButton.click();
  }
}

export { CartComponent };
