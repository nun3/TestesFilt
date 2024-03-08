const cucumber = require('cypress-cucumber-preprocessor').default 
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'uqjmju',
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    specPattern: "cypress/e2e/**/*.feature",
    baseUrl: "https://erp-homologacao.viasoft.com.br/pt/",
  },
});
