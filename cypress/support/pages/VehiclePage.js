class VehiclePage {
  fillVehicleData() {
        cy.get('#make', { timeout: 1000 }).should('be.visible');
    cy.get('#make').select('Renault');
    cy.get('#model').select('Motorcycle');
    cy.get('#numberofseats').select('2');
    cy.get('#numberofseatsmotorcycle').select('2');
    cy.get('#cylindercapacity',).type('1000');
    cy.get('#engineperformance').type('120');
    cy.get('#dateofmanufacture').type('01/01/2000');
    cy.get('#fuel').select('Petrol');
    cy.get('#payload').type('500');
    cy.get('#totalweight').type('1000');
    cy.get('#listprice').type('10000');
    cy.get('#licenseplatenumber').type('ABC1234');
    cy.get('#annualmileage').type('15000');
    cy.get('#nextenterinsurantdata').click();
    cy.get('#enterinsurantdata', { timeout: 10000 }).should('be.visible');
  }
}

export default VehiclePage;