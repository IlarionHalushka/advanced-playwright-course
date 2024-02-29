import { Page } from '@playwright/test';

class ContactUsFormComponent {
  title = this.page.getByRole('heading', { name: 'Send us a message' });
  map = this.page.locator('#map');
  #emailInput = this.page.getByPlaceholder('Enter your email...');
  #nameInput = this.page.getByPlaceholder('Enter your name...');
  #messageInput = this.page.getByPlaceholder('Enter your message...');
  #submitButton = this.page.getByRole('button', { name: 'Send Message' });

  constructor(private page: Page) {
    this.page = page;
  }

  async fillOutForm(data: { name: string; email: string; message: string }) {
    const { name, email, message } = data;

    await this.#fillName(name);
    await this.#fillEmail(email);
    await this.#fillMessage(message);
  }

  async submit() {
    await this.#submitButton.click();
  }

  async #fillName(name: string) {
    await this.#nameInput.fill(name);
  }

  async #fillEmail(email: string) {
    await this.#emailInput.fill(email);
  }

  async #fillMessage(message: string) {
    await this.#messageInput.fill(message);
  }
}

export { ContactUsFormComponent };
