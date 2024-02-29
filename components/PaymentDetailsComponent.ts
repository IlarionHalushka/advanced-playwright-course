import { expect, Page } from '@playwright/test';

class PaymentDetailsComponent {
  #cardNumberInput = this.page.frameLocator('iframe').getByPlaceholder('Card number');
  #cardExpirationDateInput = this.page.frameLocator('iframe').getByPlaceholder('MM/YY');
  #cvvInput = this.page.frameLocator('iframe').getByPlaceholder('CVV');

  constructor(private page: Page) {
    this.page = page;
  }

  async fillCardDetails(data: { cardNumber: string; month: number; year: number; cvv: string }) {
    const { cardNumber, month, year, cvv } = data;
    await this.#fillOutCardNumber(cardNumber);
    await this.#fillOutCardExpirationDate({ month, year });
    await this.#fillOutCVV(cvv);
  }

  async placeOrder() {
    await this.page.getByRole('button', { name: 'Place order' }).click();
  }

  async #fillOutCardNumber(cardNumber: string) {
    await this.#cardNumberInput.click();
    await this.#cardNumberInput.fill(cardNumber);
  }

  async #fillOutCardExpirationDate({ month, year }: { month: number; year: number }) {
    const mmYY = `${month}/${year}`;
    await this.#cardExpirationDateInput.click();
    await this.#cardExpirationDateInput.fill(mmYY);
  }

  async #fillOutCVV(cvv: string) {
    await this.#cvvInput.click();
    await this.#cvvInput.fill(cvv);
  }
}

export { PaymentDetailsComponent };
