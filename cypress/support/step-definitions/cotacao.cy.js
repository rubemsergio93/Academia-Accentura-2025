import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("que o usuário acessa a aplicação de seguro de veículo", () => {
  cy.visit("https://sampleapp.tricentis.com/101/app.php");
});

When("o usuário preenche todas as abas obrigatórias", () => {
  cy.enterVehicleData();
  cy.enterInsurantData();
  cy.enterProductData();
});

And("seleciona uma opção em \"Select Price Option\"", () => {
  cy.selectPriceOption();
});

And("preenche os dados na aba \"Send Quote\" e clica em enviar", () => {
  cy.sendQuote();
});

Then("o sistema exibe uma mensagem \"Email sending success!\"", () => {
  cy.contains("Sending e-mail success!").should("be.visible");
});
