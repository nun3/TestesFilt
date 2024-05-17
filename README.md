# Testes End-to-End com Cypress e Cucumber

[![Cypress](https://img.shields.io/badge/Cypress-Testing-informational)](https://www.cypress.io/)
[![Cucumber](https://img.shields.io/badge/Cucumber-BDD-green)](https://cucumber.io/)
[![Node.js](https://img.shields.io/badge/Node.js-Environment-critical)](https://nodejs.org/)
[![VS Code](https://img.shields.io/badge/VS%20Code-Editor-blue)](https://code.visualstudio.com/)

Este projeto utiliza Cypress para testes end-to-end integrados com Cucumber para BDD (Behavior Driven Development). 

## Site de Teste
Utilizamos [este site de teste](https://app.filterp.com.br/) para nossos exemplos práticos.

## Vídeo de Referência
Confira o vídeo de referência para configuração detalhada [aqui](https://www.youtube.com/watch?v=Dc0zyn2n6RQ).

## Configuração Inicial
A configuração padrão de URL está definida em `cypress.config.js`:

```javascript
const cucumber = require('cypress-cucumber-preprocessor').default;
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'uqjmju',
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
    },
    specPattern: "cypress/e2e/**/*.feature",
    baseUrl: "https://app.filterp.com.br/" // Configurar URL base aqui
  },
});

