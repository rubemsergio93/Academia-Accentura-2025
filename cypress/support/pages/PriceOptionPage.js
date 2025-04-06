class PriceOptionPage {
  selectOption() {
    // Garante que a seção de planos de preço esteja visível
    cy.get('section#pricePlans', { timeout: 10000 }).should('be.visible');

    // Força a seleção do botão de rádio "Silver"
    cy.get('input[name="Select Option"][value="Silver"]').check({ force: true });

    // Vai para a próxima aba
    cy.get('#nextsendquote').click();
  }
}

export default PriceOptionPage;