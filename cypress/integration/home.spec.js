/// <reference types="cypress" />

describe('Test Home', () => {
  it("Visits the app root url", () => {
    cy.visit('http://localhost:3000');
  });

  it("pressing to change language", () => {
    cy.get("#language").click();
  });

  it("have value input search", () => {
    cy.get('.search')
      .type('charmander')
  })

  it("Testing Request Pokemon By Id", () => {
    // Listen to GET to pokemon/:id
    cy.intercept('GET', '**/cards/*').as('goTo')

    cy.get('#getById').click()
    // wait for GET cards/1
    cy.wait(500)
    cy.wait('@goTo').its('response.statusCode').should('be.oneOf', [200, 304])
  })
})
