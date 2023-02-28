describe("Conduit Comentarios", () => {
    it("Novo Post", () => {
        cy.login('testecypress@testecypress.com', 'testecypress')
        cy.contains('Global Feed').click()
        cy.get('.preview-link').first().click()
        cy.get('.form-control').type('Sensacional!')
        cy.get('.card-footer > .btn').click()
        cy.contains('Sensacional!')
        cy.wait(1000)
    });
});