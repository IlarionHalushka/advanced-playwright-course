import { Page } from '@playwright/test';

class BillingDetailsComponent {
  #fullNameInput = this.page.getByLabel('Full name');
  #emailInput = this.page.getByLabel('Email');
  #streetAddressInput = this.page.getByLabel('Street address');
  #zipCodeInput = this.page.getByLabel('Postal/ZIP code');
  #apartmentInput = this.page.getByLabel('Apt/Suite');
  #cityInput = this.page.getByLabel('City');
  #submitButton = this.page.getByRole('button', { name: 'Continue to payment' });

  constructor(private page: Page) {
    this.page = page;
  }

  async fillOutForm(data: {
    name: string;
    email: string;
    streetAddress: string;
    zipCode: string;
    apartment: string;
    city: string;
  }) {
    const { name, email, streetAddress, zipCode, apartment, city } = data;

    await this.#fillOutFullName(name);
    await this.#fillOutEmail(email);
    await this.#fillOutStreetAddress(streetAddress);

    await this.#waitForGetAddressRequest();

    await this.#fillOutZipCode(zipCode);
    await this.#fillOutApartment(apartment);
    await this.#fillOutCity(city);
  }

  async submit() {
    await this.#submitButton.click();
  }

  async #fillOutFullName(name: string) {
    await this.#fullNameInput.click();
    await this.#fullNameInput.fill(name);
  }

  async #fillOutEmail(email: string) {
    await this.#emailInput.click();
    await this.#emailInput.fill(email);
  }

  async #fillOutStreetAddress(street: string) {
    await this.page.locator('.snipcart-textbox').first().click();
    await this.#streetAddressInput.fill(street);
    await this.page.getByText(`${street} Street`).first().click();
  }

  async #fillOutZipCode(zipCode: string) {
    await this.#zipCodeInput.click();
    await this.#zipCodeInput.fill(zipCode);
  }

  async #fillOutApartment(apartment: string) {
    await this.#apartmentInput.click();
    await this.#apartmentInput.fill(apartment);
  }

  async #fillOutCity(city: string) {
    await this.#cityInput.click();
    await this.#cityInput.fill(city);
  }

  async #waitForGetAddressRequest() {
    await this.page.waitForResponse(
      (response) =>
        response.url().includes('api/localization/addresses') &&
        response.status() === 200 &&
        response.request().method() === 'GET'
    );
  }
}

export { BillingDetailsComponent };
