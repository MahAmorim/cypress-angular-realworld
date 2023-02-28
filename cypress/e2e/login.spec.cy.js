describe("Conduit Login", () => {
  it("Login sucesso", () => {
    cy.login('testecypress@testecypress.com', 'testecypress')
    cy.contains("Settings").should('be.visible').click()
    cy.url().should('contain', '/settings')
  });
  it("Dados inválidos", () => {
    cy.login('usuario@inexistente.com', 'senhaerrada')
    cy.get('.error-messages > li').should('contain', 'email or password is invalid')
  });
});