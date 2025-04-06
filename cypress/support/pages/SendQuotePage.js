class SendQuotePage {
  fillQuoteData() {
    cy.get('#email').type('joao@example.com');
    cy.get('#phone').type('11999999999');
    cy.get('#username').type('joaosilva');
    cy.get('#password').type('Senha123');
    cy.get('#confirmpassword').type('Senha123');
    cy.get('#sendemail').click();
  }
}
export default SendQuotePage;
