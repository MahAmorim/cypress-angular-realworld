describe("Conduit Post", () => {
  beforeEach(() =>{
    cy.login('testecypress@testecypress.com', 'testecypress')
  })
  
  after(() => {
    cy.wait(1000)
    cy.get('.container > app-article-meta > .article-meta > :nth-child(3) > .btn-outline-danger').click()
  })

  it("Novo Post", () => {
    const title = 'Cypress E2E - TESTES DIO'
    cy.contains('New Article').click()
    cy.location('pathname').should('equal', '/editor')
    cy.get('[formcontrolname=title]').type(title)
    cy.get('[formcontrolname=description]').type('Ponta a Ponta')
    cy.get('[formcontrolname=body]').type('Agilidade, Qualidade')
    cy.contains('Publish Article').click()
    cy.get('h1').contains(title)
    cy.wait(1000)
  });

  it("Editar Post", () => {
    const body = 'Lorem ipsum'
    cy.get(':nth-child(4) > .nav-link').click()
    cy.location('pathname').should('contains', '/profile')
    cy.get('.article-preview').get('h1').first().click()
    cy.contains('Edit Article').click()

    cy.get('[formcontrolname=body]').clear()
    cy.get('[formcontrolname=body]').type(body)
    cy.contains('Publish Article').click()
    cy.contains(body)
  });
});