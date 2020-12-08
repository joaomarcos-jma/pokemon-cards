/// <reference types="cypress" />

describe('Test Pokemon', () => {
  it("Visits the pokemon by id", () => {
    cy.visit('http://localhost:3000/pokemon/dp6-90');
  });

  it("pressing to go back", () => {
    cy.get("#goBack").click();
  });
})
