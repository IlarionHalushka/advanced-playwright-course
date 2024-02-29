import { test } from '@playwright/test';
import { CartComponent } from '../../components/CartComponent';
import { PaymentPage } from '../../pages/PaymentPage';

let cart: CartComponent;
let paymentPage: PaymentPage;

test.beforeAll(async ({ browser }) => {
  const page = await browser.newPage();
  await page.goto('');
  cart = new CartComponent(page);
  paymentPage = new PaymentPage(page);
});

test('create an order should display success page with order details', async () => {
  await cart.addToCart('Bumble the Elephant');
  await cart.incrementQuantity();
  await cart.checkout();

  await paymentPage.billingDetails.fillOutForm({
    name: 'IlarionIlarion',
    email: 'hilarion@gmail.com',
    streetAddress: 'Washington',
    zipCode: '51200',
    apartment: '123',
    city: 'Washington',
  });
  await paymentPage.billingDetails.submit();

  await paymentPage.paymentDetails.fillCardDetails({
    cardNumber: '4242424242424242',
    month: 12,
    year: new Date().getFullYear() + 1,
    cvv: '123',
  });
  await paymentPage.paymentDetails.placeOrder();

  await paymentPage.successfulPayment.assertSuccessScreen();
});
