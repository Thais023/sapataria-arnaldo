describe('Testes da navbar',()=>{

    beforeEach (() =>{
         cy.visit('/index.html');
    });

    it('Deve ter a classe .navbar',()=>{
       
        cy.get('nav').should('have.class','navbar');


    });
    it('Deve ter um atributo href válido para cada página',()=>{

        cy.get('[data-test=home]').should('have.attr','href','./index.html');
        cy.get('[data-test=sobre-nos]').should('have.attr','href','./sobre-nos.html');
        cy.get('[data-test=catalago]').should('have.attr','href','./catalogo.html');
        cy.get('[data-test=contatos]').should('have.attr','href','./Contatos.html');

        

    })
});