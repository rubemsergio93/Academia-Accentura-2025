class ProductPage {
  fillProductData() {
    cy.get('#startdate').type('04/10/2026');
    cy.get('#insurancesum').select('3.000.000,00');
    cy.get('#meritrating').select('Bonus 1');
    cy.get('#damageinsurance').select('Full Coverage');

    //Checkbox via label
    cy.contains('label', 'Euro Protection')
      .find('input[type="checkbox"]')
      .check({ force: true });

    cy.get('#courtesycar').select('Yes');
    cy.get('#nextselectpriceoption').click();
  }
}

export default ProductPage;