import VehiclePage from '../pages/VehiclePage';
import InsurantPage from '../pages/InsurantPage';
import ProductPage from '../pages/ProductPage';
import PriceOptionPage from '../pages/PriceOptionPage';
import SendQuotePage from '../pages/SendQuotePage';

const vehiclePage = new VehiclePage();
const insurantPage = new InsurantPage();
const productPage = new ProductPage();
const priceOptionPage = new PriceOptionPage();
const sendQuotePage = new SendQuotePage();

Cypress.Commands.add('enterVehicleData', () => {
  vehiclePage.fillVehicleData();
});

Cypress.Commands.add('enterInsurantData', () => {
  insurantPage.fillInsurantData();
});

Cypress.Commands.add('enterProductData', () => {
  productPage.fillProductData();
});

Cypress.Commands.add('selectPriceOption', () => {
  priceOptionPage.selectOption();
});

Cypress.Commands.add('sendQuote', () => {
  sendQuotePage.fillQuoteData();
});
