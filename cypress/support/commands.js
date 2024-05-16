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

Cypress.Commands.add('SetMenuPrincipal', (menuPrincipal) => {
  // Aguardar 3 segundos para garantir que o menu esteja carregado
  cy.wait(3000);
  
  // Localizar e clicar no item do menu principal especificado
  cy.contains('.menus-sidenav a', menuPrincipal)
      .should('exist') // Verificar se o item do menu existe
      .click(); // Clicar no item do menu
});

// Comando personalizado para selecionar um item no menu
Cypress.Commands.add('SetMenu', (menu) => {
  // Aguardar 3 segundos para garantir que o menu esteja carregado
  cy.wait(3000);
  
  // Localizar e clicar no item de menu especificado
  cy.contains('.item', menu)
      .should('exist') // Verificar se o item do menu existe
      .click(); // Clicar no item do menu
});

// Comando personalizado para selecionar um sub-menu
Cypress.Commands.add('SetSubMenu', (subMenu) => {
  // Localizar e clicar no sub-menu especificado
  cy.contains('.ng-star-inserted a', subMenu)
      .should('exist') // Verificar se o sub-menu existe
      .click(); // Clicar no sub-menu
  
  // Aguardar 5 segundos para a página carregar
  cy.wait(7000);
  
  // Verificar se a URL mudou, indicando que a página foi carregada
  cy.url().should('not.eq', Cypress.config().baseUrl);
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
  