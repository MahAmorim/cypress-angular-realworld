describe("Conduit Tags", () => {
    after(() => {
        cy.wait(1000)
        cy.get('.container > app-article-meta > .article-meta > :nth-child(3) > .btn-outline-danger').click()
    })
    
    it("Novo Post", () => {
        const title = 'Cypress E2E - TESTES DIO'
        cy.login('testecypress@testecypress.com', 'testecypress')
        cy.contains('New Article').click()
        cy.location('pathname').should('equal', '/editor')
        cy.get('[formcontrolname=title]').type(title)
        cy.get('[formcontrolname=description]').type('Ponta a Ponta')
        cy.get('[formcontrolname=body]').type('Agilidade, Qualidade')
        cy.contains('Publish Article').click()
        cy.get('h1').contains(title)
        cy.wait(1000)
    });

    it("Adicionar Tag", () => {
        cy.login('testecypress@testecypress.com', 'testecypress')
        cy.get(':nth-child(4) > .nav-link').click()
        cy.location('pathname').should('contains', '/profile')
        cy.get('.article-preview').get('h1').first().click()
        cy.contains('Edit Article').click()
        cy.get('[placeholder="Enter tags"]').type('dungeons {enter}')
        cy.get('[placeholder="Enter tags"]').type('dragons {enter}')
        cy.contains('Publish Article').click()
        cy.get('.tag-list').contains('dragons')
        cy.wait(1000)
    });
});