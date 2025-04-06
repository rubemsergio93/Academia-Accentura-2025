class InsurantPage {
  fillInsurantData() {
    cy.get('#firstname').type('Pedro');
    cy.get('#lastname').type('Silva');
    cy.get('#birthdate').type('05/25/1980');
    
    // Força o clique no radio button "Male"
    cy.get('input[name="Gender"][value="Male"]').check({ force: true });

    cy.get('#streetaddress').type('Rua Exemplo, 123');
    cy.get('#country').select('Brazil');
    cy.get('#zipcode').type('12345678');
    cy.get('#city').type('São Paulo');
    cy.get('#occupation').select('Employee');

    // Força o clique no checkbox "Speeding"
    cy.get('input[name="Hobbies"][value="Speeding"]').check({ force: true });

    cy.get('#nextenterproductdata').click();
  }
}
export default InsurantPage;