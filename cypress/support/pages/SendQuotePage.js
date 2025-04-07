class SendQuotePage {
  fillQuoteData(user) {
    cy.get('#email').type(Cypress.env('user_email'));
    cy.get('#phone').type(user.phone);
    cy.get('#username').type(user.username);
    cy.get('#password').type(Cypress.env('user_password'));
    cy.get('#confirmpassword').type(Cypress.env('user_password'));
    cy.get('#sendemail').click();
  }
}

export default SendQuotePage;