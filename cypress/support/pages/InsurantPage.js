class InsurantPage {
  fillInsurantData(user) {
    cy.get('#firstname').type(user.firstname);
    cy.get('#lastname').type(user.lastname);
    cy.get('#birthdate').type(user.birthdate);
    cy.get(`input[name="Gender"][value="${user.gender}"]`).check({ force: true });
    cy.get('#streetaddress').type(user.address);
    cy.get('#country').select(user.country);
    cy.get('#zipcode').type(user.zipcode);
    cy.get('#city').type(user.city);
    cy.get('#occupation').select(user.occupation);
    cy.get(`input[name="Hobbies"][value="${user.hobby}"]`).check({ force: true });
    cy.get('#nextenterproductdata').click();
  }
}

export default InsurantPage;