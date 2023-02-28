describe("Conduit Logout", () => {
  it("logout sucesso", () => {
    cy.login('testecypress@testecypress.com', 'testecypress')
    cy.contains("Settings").should('be.visible').click()
    cy.url().should('include', '/settings')
    cy.get('.btn-outline-danger').click()
    });
});