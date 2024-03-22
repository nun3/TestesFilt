// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import '@testing-library/cypress/add-commands'
const VariavelTemp = require('../Scripts/Commons/ValidaID')

Cypress.Commands.add('clickMenu', (menu) => {
    cy.get('.itens-menu-principal').contains(menu).trigger('mouseover');
    cy.wait(500); 
    cy.get('.background-sidenav > .menus-sidenav > ul').contains(menu).trigger('mouseover').click();
    cy.wait(1000);   
  });
  
  Cypress.Commands.add('clickSubMenu', (submenu) => {
    cy.get('li').contains(submenu).click();
    cy.wait(500); 
  });
  
  Cypress.Commands.add('ValidaId', (table, MapId, ColunaId) => {
    table.hashes().forEach(row => {
      cy.get(MapId)
        .should('be.visible')
        .then($element => {
          let CONTEXTO_ID = $element.text();
          if (row[ColunaId] === 'Generator') {
            row[ColunaId] = CONTEXTO_ID;
          }
          expect(CONTEXTO_ID).to.equal(row[ColunaId]);
          cy.wrap(CONTEXTO_ID).as('CONTEXTO_ID'); // Salva o valor em uma variável de alias
        });
    });
  });

  Cypress.Commands.add('ValidaFields', (table, Mapfield, Coluna) => {
    table.hashes().forEach(row => {
      cy.get(Mapfield)
      .should('be.visible')
      .should('have.value', row[Coluna]);
    });
  });
  