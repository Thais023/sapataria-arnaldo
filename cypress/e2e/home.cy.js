describe('Testes na Home', () => {
  it('Abre o diretório', () => {

    cy.visit('/')
  })

  it('Abre pagina index', () => {

    cy.visit('/index.html');
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('Título da página', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('/index.html');
    cy.get('.page-title').should('have.text', ' Sapataria do Arnaldo');
    cy.get('.page-subtitle').should('have.class', 'page-subtitle');
    cy.get('.page-subtitle').should('be.visible');
    /* ==== End Cypress Studio ==== */
  });
})