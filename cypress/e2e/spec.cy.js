// cypress/e2e/spec.cy.js
describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('Welcome to your Nuxt Application').should('be.visible')
  })
})
