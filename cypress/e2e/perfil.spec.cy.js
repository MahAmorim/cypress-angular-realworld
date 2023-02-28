describe("Conduit Profile", () => {
  it("Editar usuario", () => {
    cy.login('testecypress@testecypress.com', 'testecypress')
    cy.get(':nth-child(4) > .nav-link').click()
    cy.contains('Edit Profile Settings').should('be.visible').click()
    cy.get('[formcontrolname=image]').clear()
    cy.get('[formcontrolname=image]').type('https://thispersonnotexist.com/image')
    cy.get('[formcontrolname=password]').type('testecypress')
    cy.contains('Update Settings').click()
  });
});