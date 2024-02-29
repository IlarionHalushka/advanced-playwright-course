import { expect, Page } from '@playwright/test';

class SuccessfulPaymentComponent {
  #thankYouHeading = this.page.getByRole('heading', { name: 'Thank you for your order' });
  #cartSUmmaryHeading = this.page.getByRole('heading', { name: 'Cart summary' });
  #billingHeading = this.page.getByRole('heading', { name: 'Billing', exact: true }).first();
  #paymentHeading = this.page.getByRole('heading', { name: 'Payment' });
  #total = this.page.getByText('Total', { exact: true });
  #subTotal = this.page.getByText('Subtotal');
  #totalPrice = this.page.getByText('$').nth(2);
  #subTotalPrice = this.page.getByText('$').nth(1);

  constructor(private page: Page) {
    this.page = page;
  }

  async assertSuccessScreen() {
    await expect.soft(this.#thankYouHeading).toBeVisible();
    await expect.soft(this.#cartSUmmaryHeading).toBeVisible();
    await expect.soft(this.#billingHeading).toBeVisible();
    await expect.soft(this.#paymentHeading).toBeVisible();
    await expect.soft(this.#total).toBeVisible();
    await expect.soft(this.#subTotal).toBeVisible();
    await expect.soft(this.#totalPrice).toBeVisible();
    await expect.soft(this.#subTotalPrice).toBeVisible();
  }
}

export { SuccessfulPaymentComponent };
