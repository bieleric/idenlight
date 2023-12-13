// https://on.cypress.io/api

describe('Base Routing Test', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains("Los geht's").click();

    cy.get('*[class^="navigation-button"]').click();

    cy.get('*[class^="navigation-button"]').click();
  })
})
